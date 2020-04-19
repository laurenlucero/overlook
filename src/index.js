// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import $ from "jquery";
import "./css/base.scss";
import Hotel from "./Hotel";
import Manager from "./Manager";
import Guest from "./Guest";
import domUpdates from "./domUpdates";

// imported images
import "./images/background.png";

// global variables
let guestData;
let roomData;
let bookingData;
let hotel;
let manager;
let guest;
let usernameID;

// event listenters

// fetch data

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
// post data
// delete data

// instantiateGuest()

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
    instantiateManager()
  } else if (username.includes("customer") && password === "overlook2020") {
    domUpdates.displayGuestDash();
    instantiateGuest()
  } else {
    domUpdates.displayLoginError();
  }
});

$(".logout").on("click", e => {
  domUpdates.logout();
  location.reload();
});

function instantiateManager() {
  manager = new Manager(1, "Lauren");
  $(".manager-name").text(`${manager.name}`)
  $(".today-date").text(`${hotel.date}`)
}

function instantiateGuest() {
  let currentGuest = guestData.find(guest => guest.id === usernameID);
  let currentBookings = bookingData.filter(booking => booking.userID === usernameID);
  guest = new Guest(currentGuest, currentBookings)
  $(".guest-name").text(`${guest.getFirstName()}`)
  $(".today-date").text(`${hotel.date}`)
}
