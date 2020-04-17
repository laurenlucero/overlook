// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from "jquery";

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/base.scss";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/background.png";

// global variables
let users;
let rooms;
let bookings;

// event listenters

// fetch data

const getUsers = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users"
)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error("user error"));

const getRooms = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms"
)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error("room error"));

const getBookings = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings"
)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error("booking error"));

Promise.all([getUsers, getRooms, getBookings])
  .then(result => {
    users = result[0];
    rooms = result[1];
    bookings = result[2];
  })
  .catch(error => console.error("promise error"));

// post data

// delete data

// display

// Login

$("#login-form-submit").on("click", e => {
  e.preventDefault();
  let username = $("#username-field").val();
  let password = $("#password-field").val();

  if (username === "manager" && password === "overlook2020") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    $("#login-error-msg").css("opacity", 1);
  }
});
