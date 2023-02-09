"use strict";
var Firework_Fun;
(function (Firework_Fun) {
    let maximalParticles = 1000;
    let RocketAmount = 1;
    let addButton;
    let colorSlider;
    let secondColorSlider;
})(Firework_Fun || (Firework_Fun = {}));
class Firework {
    constructor(x, y, size, startColor, endColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.startColor = startColor;
        this.endColor = endColor;
    }
    render(ctx) {
        // code to render a single firework particle
    }
}
class FireworkParticles {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
    }
    spawn(x, y, size, startColor, endColor, amount) {
        for (let i = 0; i < amount; i++) {
            this.particles.push(new Firework(x, y, size, startColor, endColor));
        }
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const particle of this.particles) {
            particle.render(this.ctx);
        }
    }
}
const fireworkParticles = new FireworkParticles("canvas");
const startColorInput = document.getElementById("startColor");
const endColorInput = document.getElementById("endColor");
const particleSizeInput = document.getElementById("particleSize");
const spawnAmountInput = document.getElementById("spawnAmount");
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    localStorage.setItem("startColor", startColorInput.value);
    localStorage.setItem("endColor", endColorInput.value);
    localStorage.setItem("particleSize", particleSizeInput.value);
    localStorage.setItem("spawnAmount", spawnAmountInput.value);
});
const loadBtn = document.getElementById("loadBtn");
loadBtn.addEventListener("click", () => {
    startColorInput.value = localStorage.getItem("startColor") || "#ffffff";
    endColorInput.value = localStorage.getItem("endColor") || "#ffffff";
    particleSizeInput;
    class Particle {
        constructor(x, y, radius, color, velocityX, velocityY) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
        }
        update() {
            this.x += this.velocityX;
            this.y += this.velocityY;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }
    class RoundParticleSystem {
        constructor(canvasId, particleSize, spawnAmount, startColor, endColor) {
            this.canvas = document.getElementById(canvasId);
            this.ctx = this.canvas.getContext('2d');
            this.particleSize = particleSize;
            this.spawnAmount = spawnAmount;
            this.startColor = startColor;
            this.endColor = endColor;
            this.particles = [];
        }
        spawnParticles(x, y) {
            for (let i = 0; i < this.spawnAmount; i++) {
                let radius = Math.random() * this.particleSize;
                let color = this.getRandomColor();
                let velocityX = (Math.random() - 0.5) * 5;
                let velocityY = (Math.random() - 0.5) * 5;
                this.particles.push(new Particle(x, y, radius, color, velocityX, velocityY));
            }
        }
        update() {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
            }
        }
        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].draw(this.ctx);
            }
        }
        getRandomColor() {
            let startRgb = this.hexToRgb;
            import { Particle, CubeParticle, RoundParticle, ParticleSystem } from './particles';
            // Get the canvas element from the HTML document
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');
            // Get the input elements from the HTML form
            const startColorInput = document.getElementById('startColor');
            const endColorInput = document.getElementById('endColor');
            const particleSizeInput = document.getElementById('particleSize');
            const spawnAmountInput = document.getElementById('spawnAmount');
            const saveBtn = document.getElementById('saveBtn');
            const loadBtn = document.getElementById('loadBtn');
            // Create an array to store the particle systems
            let systems = [];
            // The update function is called on each animation frame
            function update() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                // Update and draw each particle system
                for (const system of systems) {
                    system.update();
                    system.draw(context);
                }
                requestAnimationFrame(update);
            }
            // The createParticleSystem function creates a new particle system
            function createParticleSystem(x, y, shape) {
                let system;
                let particle;
                let size = parseFloat(particleSizeInput.value);
                let amount = parseInt(spawnAmountInput.value);
                if (shape === 'cube') {
                    system = new particles_1.ParticleSystem(x, y, startColorInput.value, endColorInput.value);
                    for (let i = 0; i < amount; i++) {
                        particle = new particles_1.CubeParticle(size);
                        system.addParticle(particle);
                    }
                }
                else if (shape === 'round') {
                    system = new particles_1.ParticleSystem(x, y, startColorInput.value, endColorInput.value);
                    for (let i = 0; i < amount; i++) {
                        particle = new particles_1.RoundParticle(size);
                        system.addParticle(particle);
                    }
                }
                systems.push(system);
            }
            // The event listener for the canvas element listens for click events
            canvas.addEventListener('click', (event) => {
                let x = event.clientX - canvas.offsetLeft;
                let y = event.clientY - canvas.offsetTop;
                createParticleSystem(x, y, 'round');
            });
            // Start the animation loop
            update();
        }
    }
});
//# sourceMappingURL=main.js.map