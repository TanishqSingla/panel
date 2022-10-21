const addButton = document.getElementById("add-button");
const updateButton = document.getElementById("update-button");
const horizontalSlider = document.getElementById("horizontal-slider");

const window1 = document.getElementById("window1");
const window2 = document.getElementById("window2");
const window3 = document.getElementById("window3");

let x, currentWidth;

function horizontalResize(e) {
	let difference = e.clientX - x;
	window1.style.width = `${currentWidth + difference}px`;
}
horizontalSlider.addEventListener("mousedown", (e) => {
	x = e.clientX;
	currentWidth = window1.offsetWidth;
	window.addEventListener("mousemove", horizontalResize);
});

function verticalScroll(e) {
	y = e.clientY;
	currentHeight = window3.offsetHeight;
	window.addEventListener('mousemove', verticalResize);
}

window.addEventListener("mouseup", () => {
	window.removeEventListener("mousemove", horizontalResize);
	window.removeEventListener('mousemove', verticalScroll);
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
