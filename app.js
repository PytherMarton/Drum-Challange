const boom = new Audio();
const clap = new Audio();
const hihat = new Audio();
const kick = new Audio();
const openhat = new Audio();
const ride = new Audio();
const snare = new Audio();
const tink = new Audio();
const tom = new Audio();

boom.src = "boom.wav";
clap.src = "clap.wav"
hihat.src = "hihat.wav"
kick.src = "kick.wav"
openhat.src = "openhat.wav"
ride.src = "ride.wav"
snare.src = "snare.wav"
tink.src = "tink.wav"
tom.src = "tom.wav"

a = document.querySelector("#boom");
s = document.querySelector("#clap");
d = document.querySelector("#hihat");
f = document.querySelector("#kick");
g = document.querySelector("#openhat");
h = document.querySelector("#ride");
j = document.querySelector("#snare");
k = document.querySelector("#tink");
l = document.querySelector("#tom");

function tryThis(drum) {
    drum.play();
}

document.addEventListener("keydown", (event) => {
    if (event.key == "a") {
        tryThis(boom);
        a.style.backgroundColor = "tomato";
        setTimeout(function(){ a.style.backgroundColor = "white"; }, 500);
        boom.currentTime = 0;
    } else if (event.key == "s") {
        tryThis(clap);
        s.style.backgroundColor = "tomato";
        setTimeout(function(){ s.style.backgroundColor = "white"; }, 500);
        clap.currentTime = 0;
    } else if (event.key == "d") {
        tryThis(hihat);
        d.style.backgroundColor = "tomato";
        setTimeout(function(){ d.style.backgroundColor = "white"; }, 500);
        hihat.currentTime = 0;
    } else if (event.key == "f") {
        tryThis(kick);
        f.style.backgroundColor = "tomato";
        setTimeout(function(){ f.style.backgroundColor = "white"; }, 500);
        kick.currentTime = 0;
    } else if (event.key == "g") {
        tryThis(openhat);
        g.style.backgroundColor = "tomato";
        setTimeout(function(){ g.style.backgroundColor = "white"; }, 500);
        openhat.currentTime = 0;
    } else if (event.key == "h") {
        tryThis(ride);
        h.style.backgroundColor = "tomato";
        setTimeout(function(){ h.style.backgroundColor = "white"; }, 500);
        ride.currentTime = 0;
    } else if (event.key == "j") {
        tryThis(snare);
        j.style.backgroundColor = "tomato";
        setTimeout(function(){ j.style.backgroundColor = "white"; }, 500);
        snare.currentTime = 0;
    } else if (event.key == "k") {
        tryThis(tink);
        k.style.backgroundColor = "tomato";
        setTimeout(function(){ k.style.backgroundColor = "white"; }, 500);
        tink.currentTime = 0;
    } else if (event.key == "l") {
        tryThis(tom);
        l.style.backgroundColor = "tomato";
        setTimeout(function(){ l.style.backgroundColor = "white"; }, 500);
        tom.currentTime = 0;
    } else {
        alert("Wrong character, please try again!");
        alert("Press: A, S, D, F, G, H, J, K, L.");
    }
})