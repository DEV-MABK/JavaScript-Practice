//========= DOM =================

// DOM HTML ko JavaScript ke through control karne ka system hai
// JavaScript se hum HTML read & change kar sakte hain

// Access through tag
let h1 = document.querySelector("h1");

// Access through id
let btn = document.getElementById("btn");

// Access through class
let p = document.getElementsByClassName("info")[0];

// Access through querySelector
let info = document.querySelector(".deep-info");

// Change text
h1.textContent = "ABUBAKAR";
btn.textContent = "CLICK ME";

// Change styling
h1.style.color = "red";
p.style.color = "green";
h1.style.fontSize = "3rem";
h1.style.fontWeight = "bold";

// Attributes
// element.setAttribute(name, value);
// element.getAttribute(name);
// element.removeAttribute(name);
