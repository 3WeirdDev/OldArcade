const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl2", {
    premultipliedAlpha: true,
    antialias: false
});

canvas.oncontextmenu = function(e) {
    e.preventDefault();
};

function fullscreen() {
    if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    } else {
        canvas.mozRequestFullScreen();
    }
}

if (!gl) {
    var text = document.createElement("h1");
    document.body.appendChild(text);
    text.innerHTML = "Webgl Not Supported. Stopped Game";

    canvas.remove();
    canvas = null;
} else {
    window.onload = Start;
    window.onbeforeunload = CleanUp;
}

function Start() {
    Init();
}

function Init() { }

function Update() { }

function Draw() { }

function CleanUp() { }