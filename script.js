// Navigation Bar Section 

let homeSec = document.getElementById("home-sec")
let aboutSec = document.getElementById("about-sec")
let projectSec = document.getElementById("project-sec")
let contactSec = document.getElementById("contact-sec")

let homeIcon = document.getElementById("home-icon")
let aboutIcon = document.getElementById("about-icon")
let projectIcon = document.getElementById("project-icon")
let contactIcon = document.getElementById("contact-icon")
homeIcon.style.color = "#4DD0E1"

function homeBtn() {
    aboutSec.style.display = "none"
    projectSec.style.display = "none"
    contactSec.style.display = "none"
    homeSec.style.display = "block"

    // colors of icons 
    homeIcon.style.color = "#4DD0E1"
    aboutIcon.style.color = "#aaa"
    projectIcon.style.color = "#aaa"
    contactIcon.style.color = "#aaa"
}
function aboutBtn() {
    homeSec.style.display = "none"
    projectSec.style.display = "none"
    contactSec.style.display = "none"
    aboutSec.style.display = "block"

    // colors of icons 
    homeIcon.style.color = "#aaa"
    aboutIcon.style.color = "#4DD0E1"
    projectIcon.style.color = "#aaa"
    contactIcon.style.color = "#aaa"
}
function projectBtn() {
    homeSec.style.display = "none"
    aboutSec.style.display = "none"
    contactSec.style.display = "none"
    projectSec.style.display = "block"

    // colors of icons 
    homeIcon.style.color = "#aaa"
    aboutIcon.style.color = "#aaa"
    projectIcon.style.color = "#4DD0E1"
    contactIcon.style.color = "#aaa"
}
function contactBtn() {
    homeSec.style.display = "none"
    projectSec.style.display = "none"
    aboutSec.style.display = "none"
    contactSec.style.display = "block"

    // colors of icons 
    homeIcon.style.color = "#aaa"
    aboutIcon.style.color = "#aaa"
    projectIcon.style.color = "#aaa"
    contactIcon.style.color = "#4DD0E1"
}

// contact page 

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:saha65092@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}, ${email}`;

    window.location.href = mailtoLink;
}
