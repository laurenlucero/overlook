class Hotel {
  constructor(date, guests, rooms, bookings) {
    this.date = date;
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  getTodaysDate() {
    let date = this.date.toISOString().slice(0, 10);
    this.date = date.split("-").join("/");
  }

  getCurrentUser(id) {
    let currentUser = this.guests.find(guest => guest.id === id);
    return currentUser;
  }

  filterRoomsByType(type) {
    let filteredRooms = this.rooms.filter(room => type === room.roomType);
    return filteredRooms;
  }

  getAvailableRoomsByDate(
    date = this.date,
    rooms = this.rooms,
    bookings = this.bookings
  ) {
    let bookedRoomNumbers = bookings
      .filter(booking => booking.date === date)
      .map(booking => booking.roomNumber);
    let roomsAvailable = rooms.filter(room => {
      if (!bookedRoomNumbers.includes(room.number)) {
        return room;
      }
    });
    return roomsAvailable;
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
      .catch(error => console.error("booking error"));
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
    }).catch(error => console.error("delete error"));
  }
}

export default Hotel;
