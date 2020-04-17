class Guest {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }

  bookRoomByDate() {
    // select a room for booking
    // select a date to book a room
  }

  findBookings() {
    // find any bookings past/present or upcoming
  }

  getTotalSpending() {
    // get total amount spent on rooms
  }

  filterAvailableRooms() {
    // filter list of available rooms by roomType property
  }
}

export default Guest;
