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

  displayConfirmationMessage() {
    $(".confirmation").text(`Thank you for booking a room!`);
  },

  displayNoRoomsMessage() {
    $(".available-rooms").append(
      `<p>Sorry, there are no rooms of this type available on this day. Please search another type or day.</p>`
    );
  }
};

export default domUpdates;
