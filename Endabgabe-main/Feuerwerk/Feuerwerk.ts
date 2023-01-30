namespace Firework {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); /* canvas auf den gezeichnet werden kann*/ 
        

    }




/* funktion um den color picker aktiv zu machen    
let: colorWell;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false); 
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }

ab hier andere funktion*/ 
