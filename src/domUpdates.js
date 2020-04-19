import $ from "jquery";

let domUpdates = {

  displayUserName() {
    // guest and manager
  },

  displayTodaysDate() {
    // guest and manager
  },

  displayRoomsAvailableToday() {
    // manager
  },

  displayTotalRevenueToday() {
    // manager
  },

  displayPercentOccupiedToday() {
    // manager
  },

  displayGuestBookings() {
    // guest and manager
  },

  // displayGuestSpending() {
  //   let total = guest.calculateTotalSpending(roomData);
  //   $('.spending').test(total.toFixed(2))
  // },

  displayNoRoomsAvailable() {
    // guest and manager
    // In the event that no rooms are available for the date/roomType selected,
    // display a message fiercely apologizing to the user and asking them to adjust their room search
  }
}

export default domUpdates;
