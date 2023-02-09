"use strict";
var Fireworking;
(function (Fireworking) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let startTime = new Date().getTime();
    let startX = 50;
    let startY = 50;
    let startColor;
    let endColor;
    let currentColor;
    let particleSize;
    let spawnAmount;
    let arrayData;
    let particles = [];
    let time = random(500, 1500);
    let alpha = 1;
    let canvas;
    let ctx;
    function handleLoad(_event) {
        console.log("Start");
        let saveBtn = document.getElementById("saveBtn");
        saveBtn.addEventListener("click", saveFnctn);
        let deleteBtn = document.getElementById("deleteBtn");
        deleteBtn.addEventListener("click", deleteFnctn);
        canvas = document.getElementById("canvas");
        canvas.addEventListener("mousedown", function (e) {
            getMousePosition(canvas, e);
        });
    }
    function saveFnctn(_event) {
        console.log("hello");
        let target = _event.target;
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let params = new URL("https://ichhabkeineAHnung.com?" + query.toString()).searchParams;
        console.log(params.get("startColor"));
        console.log(params.get("endColor"));
        console.log(params.get("particleSize"));
        console.log(params.get("spawnAmount"));
        startColor = params.get("startColor");
        endColor = params.get("endColor");
        particleSize = params.get("particleSize");
        spawnAmount = params.get("spawnAmount");
        arrayData = ["color one: " + startColor, "color two: " + endColor, "Particle Size: " + particleSize, "Particle Amount: " + spawnAmount];
        let outputDiv = document.getElementById("output");
        for (let i = 0; i < arrayData.length; i++) {
            outputDiv.innerHTML += arrayData[i] + ", ";
        }
    }
    function deleteFnctn() {
        console.log("works");
    }
    function drawOnCanvas() {
        ctx = canvas.getContext("2d");
        alpha = 1;
        time = random(500, 1500);
        startTime = new Date().getTime();
        currentColor = startColor;
        drawFireworks();
    }
    function drawFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let particle = { x: startX, y: startY, xVel: random(-5, 5), yVel: random(-5, 5) };
        particles.push(particle);
        for (let p = 0; p < particles.length; p++) {
            particle = particles[p];
            ctx.fillStyle = currentColor;
            ctx.globalAlpha = alpha;
            ctx.fillRect(particle.x, particle.y, particleSize, particleSize);
            particle.x += particle.xVel;
            particle.y += particle.yVel;
        }
        if (new Date().getTime() - startTime > time) {
            if (new Date().getTime() - startTime > time + 100) {
                alpha -= 0.01;
                if (alpha < 0.5) {
                    currentColor = endColor;
                }
            }
            window.requestAnimationFrame(drawFireworks);
        }
        else {
            drawFireworks();
        }
    }
    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Coordinate x: " + x, "Coordinate y: " + y);
        startX = x;
        startY = y;
        drawOnCanvas();
    }
    /*function setupFireworks() {


        function drawFireworks() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let particle = { x: startX, y: startY, xVel: 5, yVel: 5 }
            particles.push(particle);
        }
        for (let p = 0; p < particles.length; p++) {
            particle = particles[p];
            ctx.fillStyle = colour;
            ctx.globalAlpha = alpha;
            ctx.fillRect(particle.x, particle.y, 5, 5);
            particle.x += particle.xVel;
            particle.y += particle.yVel;
        }
    } */
})(Fireworking || (Fireworking = {}));
//# sourceMappingURL=new.js.map