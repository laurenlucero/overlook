import $ from "jquery";

let domUpdates = {
  displayLoginError() {
    $("#login-error-msg").css("opacity", 1);
  },

  displayManagerDash() {
    $("#login-holder").css("display", "none");
    $(".manager-dashboard").removeClass("hide");
  },

  displayGuestDash() {
    $("#login-holder").css("display", "none");
    $(".guest-dashboard").removeClass("hide");
  },

  logout() {
    $("#login-holder").css("display", "block");
    $(".guest-dashboard").addClass("hide");
    $(".manager-dashboard").addClass("hide");
  },

  displayBookingPage() {
    $(".booking-page").removeClass("hide");
    $(".dashboard-sections").addClass("hide");
  },

  displayNoRoomsAvailable() {
    // guest and manager
    // In the event that no rooms are available for the date/roomType selected,
    // display a message fiercely apologizing to the user and asking them to adjust their room search
  }
};

export default domUpdates;
