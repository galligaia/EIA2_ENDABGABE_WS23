"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d"); /* canvas auf den gezeichnet werden kann*/
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
})(Firework || (Firework = {}));
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
//# sourceMappingURL=Feuerwerk.js.map