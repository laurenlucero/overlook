// select a room for booking
// select a date to book a room

class Guest {
  constructor(guestData, bookingData) {
    this.id = guestData.id;
    this.name = guestData.name;
    this.bookings = bookingData;
    this.username = `customer${guestData.id}`
    this.password = 'overlook2020';
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }

  findBookings() {
    // find any bookings past/present or upcoming
    let guestBookings = this.bookings.filter(
      booking => booking.userID === this.id
    );
    return guestBookings;
  }

  calculateTotalSpending(roomData) {
    // get total amount spent on rooms
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

// TBT (To Be Tested) bookRoom method
  bookRoom() {
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
      .catch(error => console.error(error));
  }
}

export default Guest;
