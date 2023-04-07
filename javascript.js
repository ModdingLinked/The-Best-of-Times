window.addEventListener('resize', sizeChanged);
window.addEventListener('load', setBackgroundByTime);

function setBackgroundByTime() {
    const date = new Date();
    const hour = date.getHours();
    const headerTitle = document.getElementById('headerTitle');
    var updateColor = 0;

    // set the background image based on the current time
    if (hour >= 0 && hour < 7) {
        document.body.style.backgroundImage = "url('./img/background/img0.webp')";
    } else if (hour >= 7 && hour < 9) {
        document.body.style.backgroundImage = "url('./img/background/img7.webp')";
        updateColor = 1;
    } else if (hour >= 9 && hour < 12) {
        document.body.style.backgroundImage = "url('./img/background/img9.webp')";
        updateColor = 1;
    } else if (hour >= 12 && hour < 17) {
        document.body.style.backgroundImage = "url('./img/background/img12.webp')";
        updateColor = 1;
    } else if (hour >= 17 && hour < 20) {
        document.body.style.backgroundImage = "url('./img/background/img17.webp')";
        updateColor = 1;
    } else if (hour >= 20 && hour < 23) {
        document.body.style.backgroundImage = "url('./img/background/img20.webp')";
    } else {
        document.body.style.backgroundImage = "url('./img/background/img23.webp')";
    }
    const headerLinks = document.getElementById('headerLinks');

    if (updateColor) {
        headerTitle.style.color = "rgba(0, 0, 0, 0.75)";
        Array.from(headerLinks.children).forEach(child => {
            child.style.color = "rgba(0, 0, 0, 0.75)";
        });
    }
}

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") {
        window.open(document.getElementById("next").href, "_self")
    }
    else if (e.code === "ArrowLeft") {
        window.open(document.getElementById("previous").href, "_self")
    }

});

function sizeChanged() {
    if (document.documentElement.clientWidth > 760) {
        document.getElementById("sideButton").style.marginLeft = "";
        document.getElementById("sidenavLeft").style.width = "";
        document.getElementById("paypalMenu").style.display = "none";
    }
}

function toggleNav() {
    if (document.getElementById("sidenavLeft").style.width == 0) {
        document.getElementById('sideButton').classList.add('pressed');
        document.getElementById("sidenavLeft").style.width = "21.5em";
    }
    else {
        document.getElementById("sidenavLeft").style.width = "";
        document.getElementById('sideButton').classList.remove('pressed');
        document.getElementById("paypalMenu").style.display = "none";
    }
}

function titleGlow(enable) {
    if (enable) {
        document.getElementById("title").classList.add("glow");
        document.getElementById("backdrop").classList.add("blur");
    }
    else {
        document.getElementById("title").classList.remove("glow");
        document.getElementById("backdrop").classList.remove("blur");
    }
}

function toggleDonationMenu() {
    if (document.getElementById("paypalMenu").style.display == "none") {
        document.getElementById("paypalMenu").style.display = "block";
    }
    else {
        document.getElementById("paypalMenu").style.display = "none";
    }
}