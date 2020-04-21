class Guest {
  constructor(guestData, bookingData) {
    this.id = guestData.id;
    this.name = guestData.name;
    this.bookings = bookingData;
    this.username = `customer${guestData.id}`;
    this.password = "overlook2020";
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }

  findBookings() {
    let guestBookings = this.bookings.filter(
      booking => booking.userID === this.id
    );
    return guestBookings;
  }

  calculateTotalSpending(roomData) {
    return this.bookings
      .map(booking => {
        let cost;
        roomData.forEach(room => {
          if (booking.roomNumber === room.number) {
            cost = room.costPerNight;
          }
        });
        return cost;
      })
      .reduce((total, cost) => {
        total += cost;
        return total;
      }, 0);
  }
}

export default Guest;
