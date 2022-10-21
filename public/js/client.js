const addButton = document.getElementById("add-button");
const updateButton = document.getElementById("update-button");
const horizontalSlider = document.getElementById("horizontal-slider");
const verticalSlider = document.getElementById('vertical-slider');

const window1 = document.getElementById("window1");
const window2 = document.getElementById("window2");
const upperPanel = document.getElementById("upper-panel");

let x, y, currentWidth, currentHeight;

function horizontalResize(e) {
	let difference = e.clientX - x;
	window1.style.width = `${currentWidth + difference}px`;
}
horizontalSlider.addEventListener("mousedown", (e) => {
	x = e.clientX;
	currentWidth = window1.offsetWidth;
	window.addEventListener("mousemove", horizontalResize);
});


function verticalResize(e) {
	let difference = e.clientY - y;
	upperPanel.style.height = `${currentHeight + difference}px`;
}
verticalSlider.addEventListener('mousedown', (e) => {
	y = e.clientY;
	currentHeight = upperPanel.offsetHeight;
	window.addEventListener('mousemove', verticalResize);
})

window.addEventListener("mouseup", () => {
	window.removeEventListener("mousemove", horizontalResize);
	window.removeEventListener('mousemove', verticalResize);
});

// api calls
async function add() {
	const { data, error } = fetch("/add", { method: "post" });
	console.log(data);
}
async function update() {
	const { data, error } = fetch("/update", { method: "post" });
	console.log(data);
}
