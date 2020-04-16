// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from "jquery";

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/base.scss";

import Hotel from './Hotel';
import Guest from './Guest';
import Manager from './Manager';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/orange.png";

console.log("This is the JavaScript entry file - your code begins here.");

// global variables


// event listenters


// fetch data

const getUsers = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users", requestUsers)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error('user error'));

const getRooms = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms", requestRooms)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error('room error'));

const getBookings = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", requestBookings)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error('booking error'));

  Promise.all([getUsers, getRooms, getBookings])
    .then(result => console.log(result))
    .catch(error => console.error("promise error"));

// post data

// delete data

// display

// Login
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", e => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "manager" && password === "overlook2020") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

// username: customer50 (where 50 is the ID of the user)
