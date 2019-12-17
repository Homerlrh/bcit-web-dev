const canvass = document.querySelector("#pad");
const drawing = canvass.getContext("2d");
const picker = document.querySelector("#color");
const rect = canvass.getBoundingClientRect();

drawing.lineWidth = 5;
let isDrawing = false;
let x = 0,
  y = 0;

canvass.addEventListener("mousedown", e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

window.addEventListener("mouseup", e => {
  if (isDrawing == true) {
    isDrawing = false;
  }
});

canvass.addEventListener("mousemove", e => {
  if (isDrawing == true) {
    draw(drawing, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  drawing.clearRect(0, 0, canvass.width, canvass.height);
});

draw = (drawing, x1, y1, x2, y2) => {
  drawing.beginPath();
  drawing.strokeStyle = picker.value;
  drawing.moveTo(x1, y1);
  drawing.lineTo(x2, y2);
  drawing.stroke();
  drawing.closePath();
};

const slider = document.querySelector("#range"),
  output = document.querySelector(".size");
output.innerHTML = slider.value;
slider.oninput = () => {
  output.innerHTML = slider.value;
  drawing.lineWidth = slider.value;
};
