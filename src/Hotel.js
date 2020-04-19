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
}

export default Hotel;
