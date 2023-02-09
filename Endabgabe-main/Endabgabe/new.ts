namespace Fireworking {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let startTime = new Date().getTime();
    let startX: number = 50;
    let startY: number = 50;
    let startColor: string;
    let endColor: string;
    let currentColor: string;
    let particleSize: string;
    let spawnAmount: string;
    let arrayData: string[];
    let particles: any[] = [];
    let time: number = random(500, 1500);
    let alpha: number = 1;
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("Start");
        let saveBtn: HTMLInputElement = document.getElementById("saveBtn") as HTMLInputElement;
        saveBtn.addEventListener("click", saveFnctn);
        let deleteBtn: HTMLInputElement = document.getElementById("deleteBtn") as HTMLInputElement;
        deleteBtn.addEventListener("click", deleteFnctn);
        canvas = document.getElementById("canvas") as HTMLCanvasElement;
        canvas.addEventListener("mousedown", function (e) {
            getMousePosition(canvas, e);
        });



    }


    function saveFnctn(_event: Event): void {
        console.log("hello");

        let target: HTMLElement = (<HTMLElement>_event.target);

        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let params: URLSearchParams = new URL("https://ichhabkeineAHnung.com?" + query.toString()).searchParams;

        console.log(params.get("startColor"));
        console.log(params.get("endColor"));
        console.log(params.get("particleSize"));
        console.log(params.get("spawnAmount"));


        startColor = params.get("startColor")!;
        endColor = params.get("endColor")!;
        particleSize = params.get("particleSize")!;
        spawnAmount = params.get("spawnAmount")!;

        arrayData = ["color one: " + startColor, "color two: " + endColor, "Particle Size: " + particleSize, "Particle Amount: " + spawnAmount];
        let outputDiv: HTMLDivElement = document.getElementById("output") as HTMLDivElement;
        for (let i: number = 0; i < arrayData.length; i++) {
            outputDiv.innerHTML += arrayData[i] + ", ";
        }

    }

    function deleteFnctn(): void {
        console.log("works")
    }

    function drawOnCanvas(): void {
        ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        alpha = 1;
        time = random(500, 1500);
        startTime = new Date().getTime();
        currentColor = startColor;
        drawFireworks();

    }

    function drawFireworks(): void {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let particle = { x: startX, y: startY, xVel: random(-5, 5), yVel: random(-5, 5) }
        particles.push(particle);
        for (let p = 0; p < particles.length; p++) {
            particle = particles[p];
            ctx.fillStyle = currentColor;
            ctx.globalAlpha = alpha;
            ctx.fillRect(particle.x, particle.y, <number>particleSize, <number>particleSize);
            particle.x += particle.xVel;
            particle.y += particle.yVel;
        }

        if (new Date().getTime() - startTime > time) {
            if (new Date().getTime() - startTime > time + 100) {
                alpha -= 0.01;
                if (alpha < 0.5) {
                    currentColor = endColor
                }
            }
            window.requestAnimationFrame(drawFireworks);
        } else {
            drawFireworks();
        }
    }

    function random(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getMousePosition(canvas: HTMLCanvasElement, event: any) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Coordinate x: " + x,
            "Coordinate y: " + y);
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
}


