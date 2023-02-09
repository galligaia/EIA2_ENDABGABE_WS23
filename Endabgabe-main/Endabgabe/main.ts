namespace Firework_Fun {

let maximalParticles: number = 1000; 
let RocketAmount: number =1; 
let addButton: HTMLButtonElement; 
let colorSlider: HTMLInputElement;
let secondColorSlider: HTMLInputElement;
}
class Firework {
    private x: number;
    private y: number;
    private size: number;
    private startColor: string;
    private endColor: string;
  
    constructor(x: number, y: number, size: number, startColor: string, endColor: string) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.startColor = startColor;
      this.endColor = endColor;
    }
  
    public render(ctx: CanvasRenderingContext2D) {
      // code to render a single firework particle
    }
  }
  
  class FireworkParticles {
    private particles: Firework[];
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
  
    constructor(canvasId: string) {
      this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
      this.particles = [];
    }
  
    public spawn(x: number, y: number, size: number, startColor: string, endColor: string, amount: number) {
      for (let i = 0; i < amount; i++) {
        this.particles.push(new Firework(x, y, size, startColor, endColor));
      }
    }
  
    public render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const particle of this.particles) {
        particle.render(this.ctx);
      }
    }
  }
  
  const fireworkParticles = new FireworkParticles("canvas");
  
  const startColorInput = document.getElementById("startColor") as HTMLInputElement;
  const endColorInput = document.getElementById("endColor") as HTMLInputElement;
  const particleSizeInput = document.getElementById("particleSize") as HTMLInputElement;
  const spawnAmountInput = document.getElementById("spawnAmount") as HTMLInputElement;
  
  const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;
  saveBtn.addEventListener("click", () => {
    localStorage.setItem("startColor", startColorInput.value);
    localStorage.setItem("endColor", endColorInput.value);
    localStorage.setItem("particleSize", particleSizeInput.value);
    localStorage.setItem("spawnAmount", spawnAmountInput.value);
  });
  
  const loadBtn = document.getElementById("loadBtn") as HTMLButtonElement;
  loadBtn.addEventListener("click", () => {
    startColorInput.value = localStorage.getItem("startColor") || "#ffffff";
    endColorInput.value = localStorage.getItem("endColor") || "#ffffff";
    particleSizeInput
    class Particle {
        x: number;
        y: number;
        radius: number;
        color: string;
        velocityX: number;
        velocityY: number;
    
        constructor(x: number, y: number, radius: number, color: string, velocityX: number, velocityY: number) {
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
    
        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }
    
    class RoundParticleSystem {
        particles: Particle[];
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        particleSize: number;
        spawnAmount: number;
        startColor: string;
        endColor: string;
    
        constructor(canvasId: string, particleSize: number, spawnAmount: number, startColor: string, endColor: string) {
            this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
            this.ctx = this.canvas.getContext('2d');
            this.particleSize = particleSize;
            this.spawnAmount = spawnAmount;
            this.startColor = startColor;
            this.endColor = endColor;
            this.particles = [];
        }
    
        spawnParticles(x: number, y: number) {
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
            let startRgb = this.hexToRgb

           
           
           
           
           
           
            import { Particle, CubeParticle, RoundParticle, ParticleSystem } from './particles';

// Get the canvas element from the HTML document
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const context = canvas.getContext('2d');

// Get the input elements from the HTML form
const startColorInput = <HTMLInputElement>document.getElementById('startColor');
const endColorInput = <HTMLInputElement>document.getElementById('endColor');
const particleSizeInput = <HTMLInputElement>document.getElementById('particleSize');
const spawnAmountInput = <HTMLInputElement>document.getElementById('spawnAmount');
const saveBtn = <HTMLButtonElement>document.getElementById('saveBtn');
const loadBtn = <HTMLButtonElement>document.getElementById('loadBtn');

// Create an array to store the particle systems
let systems: ParticleSystem[] = [];

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
function createParticleSystem(x: number, y: number, shape: string) {
  let system: ParticleSystem;
  let particle: Particle;
  let size = parseFloat(particleSizeInput.value);
  let amount = parseInt(spawnAmountInput.value);

  if (shape === 'cube') {
    system = new ParticleSystem(x, y, startColorInput.value, endColorInput.value);

    for (let i = 0; i < amount; i++) {
      particle = new CubeParticle(size);
      system.addParticle(particle);
    }
  } else if (shape === 'round') {
    system = new ParticleSystem(x, y, startColorInput.value, endColorInput.value);

    for (let i = 0; i < amount; i++) {
      particle = new RoundParticle(size);
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