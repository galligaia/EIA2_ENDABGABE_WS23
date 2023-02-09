"use strict";
class ParticleHeart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directionX = Math.random() * 10 - 5;
        this.directionY = Math.random() * 10 - 5;
        this.size = Math.random() * 20 + 10;
        this.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }
    update() {
        this.x += this.directionX;
        this.y += this.directionY;
        // Herzform berechnen
        const x = this.x / canvas.width;
        const y = this.y / canvas.height;
        this.directionX = x * Math.sin(50 * Math.PI * y) - y * Math.sin(50 * Math.PI * x);
        this.directionY = x * Math.sin(50 * Math.PI * x) + y * Math.sin(50 * Math.PI * y);
    }
    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fill();
    }
}
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push(new Particle(canvas.width / 2, canvas.height / 2));
}
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const particle of particles) {
        particle.update();
        particle.draw(context);
    }
    requestAnimationFrame(animate);
}
animate();
class CubeParticle extends ParticleHeart {
    update() {
        this.x += this.directionX;
        this.y += this.directionY;
        // Würfelform berechnen
        if (this.x < 0 || this.x > canvas.width) {
            this.directionX = -this.directionX;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.directionY = -this.directionY;
        }
    }
}
//# sourceMappingURL=partikel.js.map