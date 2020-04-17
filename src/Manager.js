import Guest from "../src/Guest";

class Manager extends Guest {
  constructor(id, name, hotelInfo) {
    super(id, name);
    this.id = id;
    this.name = name;
    this.hotelInfo = hotelInfo;
  }

  viewBookingsByGuest() {
    // search a user by name to view bookings and total amount spent
  }

  deleteBooking() {
    // Delete any upcoming room bookings for a user
  }
}

export default Manager;
