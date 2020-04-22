// imports //
import $ from "jquery";
import "./css/base.scss";
import Hotel from "./Hotel";
import Manager from "./Manager";
import Guest from "./Guest";
import domUpdates from "./domUpdates";
import "./images/background.png";

// global variables //
let guestData;
let roomData;
let bookingData;
let hotel;
let manager;
let guest;
let usernameID;
let today = new Date()
  .toISOString()
  .slice(0, 10)
  .split("-")
  .join("/");

let getGuests = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users"
)
  .then(response => response.json())
  .catch(error => console.error("user data error"));

let getRooms = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms"
)
  .then(response => response.json())
  .catch(error => console.error("room data error"));

let getBookings = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings"
)
  .then(response => response.json())
  .catch(error => console.error("booking data error"));

Promise.all([getGuests, getRooms, getBookings])
  .then(data => {
    guestData = data[0].users;
    roomData = data[1].rooms;
    bookingData = data[2].bookings;
  })
  .then(data => {
    hotel = new Hotel(new Date(), guestData, roomData, bookingData);
    hotel.getTodaysDate();
  })
  .catch(error => console.error("promise error"));

// event listeners //
// login
$("#login-form-submit").on("click", e => {
  e.preventDefault();
  let username = $("#username-field").val();
  let password = $("#password-field").val();
  let splitUsername = $("#username-field")
    .val()
    .split("r");
  usernameID = +splitUsername[1];
  if (usernameID > 50) {
    domUpdates.displayLoginError();
  } else if (username === "manager" && password === "overlook2020") {
    domUpdates.displayManagerDash();
    instantiateManager();
  } else if (username.includes("customer") && password === "overlook2020") {
    domUpdates.displayGuestDash();
    instantiateGuest();
  } else {
    domUpdates.displayLoginError();
  }
});

// logout
$(".logout-btn").on("click", e => {
  domUpdates.logout();
  location.reload();
});

// display new booking page
$(".new-booking-btn").on("click", e => {
  domUpdates.displayBookingPage();
});

// display available rooms by date
$(".date-submit").on("click", e => {
  let date = $("#select-date")
    .val()
    .split("-")
    .join("/");
  let availableRooms = hotel.getAvailableRoomsByDate(
    date,
    roomData,
    bookingData
  );
  if (availableRooms.length === 0) {
    domUpdates.displayNoRoomsMessage();
  } else {
    $(".available-rooms").html("");
    return availableRooms.map(room => {
      $(".available-rooms").append(
        `<li>Room Number: ${room.number}<br>
          Room Type: ${room.roomType}<br>
          Bed Size: ${room.bedSize}<br>
          Number of Beds: ${room.numBeds}<br>
          Cost Per Night: $${room.costPerNight}</li>`
      );
    });
  }
});

// display filtered rooms by type
$(".filter-submit").on("click", e => {
  let type = $("#room-filter").val();
  let filteredRooms = hotel.filterRoomsByType(type);
  if (filteredRooms.length === 0) {
    domUpdates.displayNoRoomsAvailable();
  } else {
    $(".available-rooms").html("");
    return filteredRooms.map(room => {
      $(".available-rooms").append(
        `<li>Room Number: ${room.number}<br>
          Room Type: ${room.roomType}<br>
          Bed Size: ${room.bedSize}<br>
          Number of Beds: ${room.numBeds}<br>
          Cost Per Night: $${room.costPerNight}</li>`
      );
    });
  }
});

// book a room
$(".book-room-submit").on("click", e => {
  let userID = $("#ID-input").val();
  let date = $("#date-input")
    .val()
    .split("-")
    .join("/");
  let roomNumber = $("#room-input").val();
  hotel.bookRoom(userID, date, roomNumber);
  domUpdates.displayConfirmationMessage();
});

// search guests by name
$("#search-btn").on("click", e => {
  let guestName = $("#site-search").val();
  let guestInfo = manager.searchGuest(
    guestName,
    guestData,
    bookingData,
    roomData
  );
  domUpdates.displaySearchedGuestInfo();
  $(".guest-spending").html(`Total Spending: $${guestInfo.spending}`);
  $(".guest-bookings").html("");
  return guestInfo.bookings
    .sort(function(a, b) {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    })
    .map(booking => {
      $(".guest-bookings").append(`<li>Booking ID: ${booking.id}<br>
      Date: ${booking.date}<br>
      Room Number: ${booking.roomNumber}</li>`);
    });
});

// delete booking
$(".delete-booking").on("click", e => {
  let id = $("#bookingID-input").val();
  hotel.deleteBooking(id);
  domUpdates.displayDeleteSuccessMsg();
});

// close searched guest info
$(".close-guest-info").on("click", e => {
  domUpdates.hideGuestInfo();
  domUpdates.hideDeleteSuccessMsg();
});

// back to main
$(".back-to-main").on("click", e => {
  if ($(".manager-name").text() === "Lauren") {
    domUpdates.displayManagerDashSections();
    domUpdates.hideBookingPage();
    domUpdates.hideConfirmationMessage();
  } else {
    domUpdates.displayGuestDashSections();
    domUpdates.hideBookingPage();
    domUpdates.hideConfirmationMessage();
  }
});

// functions //
const instantiateManager = () => {
  manager = new Manager(1, "Lauren");
  $(".manager-name").text(`${manager.name}`);
  $(".today-date").text(`${hotel.date}`);
  displayRoomsAvailableToday();
  displayPercentOccupiedToday();
  displayTodaysRevenue();
};

const instantiateGuest = () => {
  let currentGuest = guestData.find(guest => guest.id === usernameID);
  let currentBookings = bookingData.filter(
    booking => booking.userID === usernameID
  );
  guest = new Guest(currentGuest, currentBookings);
  $(".guest-name").text(`${guest.getFirstName()}`);
  $(".today-date").text(`${hotel.date}`);
  displayGuestBookings();
  displayGuestSpending();
};

const displayGuestBookings = () => {
  let myBookings = guest.findBookings();
  return myBookings
    .sort(function(a, b) {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    })
    .map(booking => {
      $(".my-bookings").append(
        `<li>Date: ${booking.date}, Room: ${booking.roomNumber}</li>`
      );
    });
};

const displayGuestSpending = () => {
  let total = guest.calculateTotalSpending(roomData);
  $(".spending").text(total.toFixed(2));
};

const displayRoomsAvailableToday = () => {
  let roomsAvailableToday = hotel.getAvailableRoomsByDate(
    today,
    roomData,
    bookingData
  );
  return roomsAvailableToday.map(room => {
    $(".rooms-available").append(
      `<li>Room Number: ${room.number}</br>
      Room Type: ${room.roomType}</br>
      Bed Size: ${room.bedSize}</br>
      Number of Beds: ${room.numBeds}</br>
      Cost Per Night: $${room.costPerNight}</li>`
    );
  });
};

const displayPercentOccupiedToday = () => {
  $(".rooms-occupied").text(
    manager.calculatePercentOccupiedToday(bookingData, roomData, today)
  );
};

const displayTodaysRevenue = () => {
  $(".revenue").append(
    manager.calculateTodaysRevenue(bookingData, roomData, today)
  );
};
