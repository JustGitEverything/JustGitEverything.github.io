// Variables

let time = 60 * 60;
let room = "cockpit";

// Timer 

const timer = setInterval(() => {
    time -= 1;

    const m = "" + Math.floor(time / 60);
    const s = "" + time % 60;

    $(".timer").text("Zeit bis zum Aufprall: " + m + ":" + (s.length == 2 ? s : "0" + s) + "");

    if (time == 0) {
        setLost();

        clearInterval(time);
    }
}, 1000);

// End

function setLost() {
    alert("You Lost!");
}

function setWon() {
    alert("You won!");
}