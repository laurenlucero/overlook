// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import $ from "jquery";
import "./css/base.scss";
import Hotel from './Hotel';

// imported images
import "./images/background.png";

// global variables
let guestData;
let roomData;
let bookingData;
let hotel;

// event listenters

// fetch data

let getGuests = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users"
)
  .then(response => response.json())
  .catch(error => console.error("user data error"));

let getRooms = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms"
)
  .then(response => response.json())
  .catch(error => console.error("room data error"));

let getBookings = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings"
)
  .then(response => response.json())
  .catch(error => console.error("booking data error"));

Promise.all([getGuests, getRooms, getBookings])
  .then(data => {
    guestData = data[0];
    roomData = data[1];
    bookingData = data[2];
  })
  .then(data => {
      hotel = new Hotel(new Date(), guestData, roomData, bookingData)
  })
  .catch(error => console.error("promise error"));


// post data

// delete data


// Login
$("#login-form-submit").on("click", e => {
  e.preventDefault();
  let username = $("#username-field").val();
  let password = $("#password-field").val();

  if (username === "manager" || username.includes("customer") && password === "overlook2020") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    $("#login-error-msg").css("opacity", 1);
  }
});
