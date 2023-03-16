"use strict";

const sideBar = document.querySelector(".sidebar");
const sideBarBtn = document.querySelector(".sidebar-button");
sideBarBtn.onclick = () => {
    sideBar.classList.toggle("active");
}

//Activate Current Page
var activePage = () => {
    let sideBarNavLinks = document.querySelector(".nav-links");
    let link = sideBarNavLinks.getElementsByTagName("a");
    for (let i = 0; i < link.length; i++) {
        let files = link[i].href.split('/').pop();
        if (location.href.indexOf(files) > 0) {
            link[i].classList.add("active");
        }
    }
}
activePage();
//---------------------

// Show Profile Options
let profileDetails = document.querySelector(".profile-details");
let profileOptions = document.querySelector(".profile-options");
profileDetails.onclick = () => {
    profileOptions.classList.toggle("show");
}
//---------------------