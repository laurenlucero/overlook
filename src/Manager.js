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

  calculatePercentOccupiedToday(bookingData, roomData, todaysDate) {
    let numberOfBookingsToday = bookingData.filter(
      booking => booking.date === todaysDate
    ).length;
    let percentageOfRoomsOccupiedToday =
      (numberOfBookingsToday / roomData.length) * 100;
    return Number(percentageOfRoomsOccupiedToday.toFixed(2));
  }

  searchGuest(guestName, guestData, bookingData, roomData) {
    let guest = guestData.find(guest => guestName === guest.name);
    let guestBookings = bookingData.filter(
      booking => booking.userID === guest.id
    );
    let amountSpent = guestBookings.reduce((total, booking) => {
      roomData.forEach(room => {
        if (booking.roomNumber === room.number) {
          total += room.costPerNight;
        }
      });
      return Number(total.toFixed(2));
    }, 0);
    let guestInfo = {
      bookings: guestBookings,
      spending: amountSpent
    };
    return guestInfo;
  }
}

export default Manager;
