const addButton = document.getElementById("add-button");
const updateButton = document.getElementById("update-button");

function add() {
	fetch("/add", { method: "post" });
}
function update() {
	fetch("/update", { method: "post" });
}
