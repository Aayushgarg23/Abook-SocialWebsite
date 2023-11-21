let settingsmenu = document.querySelector('.settings-menu');
let darkntn = document.getElementById("dark-btn")


function settingsMenuToggle() {
    console.log("clicked");
    settingsmenu.classList.toggle("settings-menu-height");
}

darkntn.onclick = function () {
    darkntn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkntn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkntn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}

// CopyRight 2023 - AAYUSHTECH
