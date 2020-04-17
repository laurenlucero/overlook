class Guest {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }

  selectDate() {
    // select a date to book a room
  }

  checkAvailableRooms() {
    // show list of room details for rooms available on selected date
  }

  filterAvailableRooms() {
    // filter list of available rooms by roomType property
  }

  bookRoom() {
    // select a room for booking
  }
}

export default Guest;
