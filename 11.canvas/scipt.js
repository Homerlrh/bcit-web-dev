const canvass = document.querySelector("#pad");
const drawing = canvass.getContext("2d");
drawing.strokeStyle = "red";
drawing.linewidth = "5px";
let isDrawing = false;

canvass.addEventListener("mouseup", e => {
  if (isDrawing == true) {
    isDrawing = false;
  }
});

canvass.addEventListener("mousedown", e => {
  isDrawing = true;
});
canvass.addEventListener("mousemove", e => {
  if (isDrawing == true) {
    console.log(e.offsetX, e.offsetY);
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  drawing.clearRect(0, 0, canvass.width, canvass.height);
});

draw = event => {
  drawing.beginPath();
  drawing.moveTo(event.offsetX, event.offsetY);
  drawing.lineTo(100, 100);
  drawing.stroke();
};

//https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event
