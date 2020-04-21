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
    $(".manager-dashboard-sections").addClass("hide");
    $(".guest-dashboard-sections").addClass("hide");
  },

  hideBookingPage() {
    $(".booking-page").addClass("hide");
  },

  displayManagerDashSections() {
    $(".manager-dashboard-sections").removeClass("hide");
  },

  displayGuestDashSections() {
    $(".guest-dashboard-sections").removeClass("hide");
  },

  displayConfirmationMessage() {
    $(".confirmation").text(`Thank you for booking a room!`);
  },

  displayNoRoomsMessage() {
    $(".available-rooms").append(
      `<p>Sorry, there are no rooms of this type available on this day. Please search another type or day.</p>`
    );
  },

  displaySearchedGuestInfo() {
    $(".dashboard-sections").html("");
    $(".guest-info").removeClass("hide");
  },

  displayDeleteSuccessMsg() {
    $(".success").text(`You have deleted this booking.`)
  },

  hideMainButtons() {
    $(".new-booking-btn").addClass("hide");
    $(".logout-btn").addClass("hide");
  }
};

export default domUpdates;
