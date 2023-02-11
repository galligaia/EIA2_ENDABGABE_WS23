"use strict";
var Fireworking;
(function (Fireworking) {
    window.addEventListener("load", handleLoad);
    let startTime = new Date().getTime();
    let startX = 50;
    let startY = 50;
    let startColor;
    let endColor;
    let currentColor;
    let particleSize;
    let spawnAmount;
    let ParticleForm;
    let arrayData;
    let particles = [];
    let time = random(500, 1500);
    let fade = 0.55;
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
        /*let target: HTMLElement = (<HTMLElement>_event.target);*/
        let formData = new FormData(document.forms[0]);
        console.log("start", formData.get("startColor"));
        let query = new URLSearchParams(formData);
        let params = new URL("https://ichhabkeineAHnung.com?" + query.toString()).searchParams;
        console.log(params.get("startColor"));
        console.log(params.get("endColor"));
        console.log(params.get("particleSize"));
        console.log(params.get("spawnAmount"));
        console.log(params.get("ParticleForm"));
        startColor = params.get("startColor");
        endColor = params.get("endColor");
        particleSize = params.get("particleSize");
        spawnAmount = params.get("spawnAmount");
        ParticleForm = params.get("ParticleForm");
        arrayData = ["color one: " + startColor, "color two: " + endColor, "Particle Size: " + particleSize, "Particle Amount: " + spawnAmount, " Particle Form " + ParticleForm];
        let outputDiv = document.getElementById("output");
        for (let i = 0; i < arrayData.length; i++) {
            outputDiv.innerHTML += arrayData[i] + ", ";
        }
    }
    function deleteFnctn(_event) {
        console.log("works");
        /*delete arrayData [startColor, endColor, particleSize, spawnAmount, ParticleForm]; */
    }
    function drawFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let a = 0; a < Number(spawnAmount); a++) {
            let particle = { x: startX, y: startY, xVel: random(-5, 5), yVel: random(-5, 5) };
            particles.push(particle);
        }
        window.requestAnimationFrame(updateFirework);
    }
    function drawOnCanvas() {
        ctx = canvas.getContext("2d");
        fade = 1;
        time = random(500, 1500);
        startTime = new Date().getTime();
        currentColor = startColor;
        drawFireworks();
    }
    /*drawFireworks();
    updateFirework()



function drawFireworks(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p = 0; p < Number(spawnAmount) ; p++) {
        let particle = { x: startX, y: startY, xVel: random(-5, 5), yVel: random(-5, 5) }
        particles.push(particle);
      
        
    }
    

    
     
    
   
}*/
    function updateFirework() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p = 0; p < particles.length; p++) {
            let particle = particles[p];
            ctx.fillStyle = currentColor;
            ctx.globalAlpha = fade;
            ctx.fillRect(particle.x, particle.y, Number(particleSize), Number(particleSize));
            particle.x += particle.xVel;
            particle.y += particle.yVel;
        }
        fade -= 0.01;
        if (fade < 0.5) {
            currentColor = endColor;
        }
        if (new Date().getTime() - startTime > time) { //hier noch heart shape einfügen irgendwie 
            if (new Date().getTime() - startTime > time + 2000) {
            }
        }
        window.requestAnimationFrame(updateFirework);
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
            ctx.globalAlpha = fade;
            ctx.fillRect(particle.x, particle.y, 5, 5);
            particle.x += particle.xVel;
            particle.y += particle.yVel;
        }
    } */
})(Fireworking || (Fireworking = {}));
//# sourceMappingURL=script.js.map