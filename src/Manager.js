class Manager {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.username = "manager";
    this.password = "overlook2020";
  }

  calculateTodaysRevenue(bookingData, roomData, todaysDate) {
    let todaysBookings = bookingData.filter(
      booking => booking.date === todaysDate
    );
    let revenue = todaysBookings.reduce((revenue, bookedRoom) => {
      roomData.forEach(room => {
        if (room.number === bookedRoom.roomNumber) {
          revenue += room.costPerNight;
        }
      });
      return revenue;
    }, 0);
    return Number(revenue.toFixed(2));
  }

  searchGuest(guestName, guestData, bookingData, roomData) {
    let guest = guestData.find(guest => guestName == guest.name);
    let guestBookings = bookingData.filter(
      booking => booking.userID === guest.id
    );
    let amountSpent = guestBookings.reduce((total, booking) => {
      roomData.forEach(room => {
        if (booking.roomNumber == room.number) {
          total += room.costPerNight;
        }
      });
      return total;
    }, 0);
    let guestInfo = {
      bookings: guestBookings,
      spending: amountSpent
    };
    return guestInfo;
  }

  calculatePercentOccupiedToday(bookingData, roomData, todaysDate) {
    let numberOfBookingsToday = bookingData.filter(
      booking => booking.date === todaysDate
    ).length;
    let percentageOfRoomsOccupiedToday =
      (numberOfBookingsToday / roomData.length) * 100;
    return percentageOfRoomsOccupiedToday;
  }

  // TBT
  bookRoom(userID, date, roomNumber) {
    let bookingObject = {
      userID: Number(userID),
      date: date,
      roomNumber: Number(roomNumber)
    };
    let url =
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings";
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingObject)
    })
      .then(response => console.log(response.json()))
      .catch(err => console.log(err.message));
  }

  // TBT
  deleteBooking(id) {
    let deleteBookingObject = {
      id: Number(id)
    };
    let url =
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings";
    return fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteBookingObject)
    }).catch(error => console.log(err.message));
  }
}

export default Manager;
