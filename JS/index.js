window.onload = loaded;

const loaded = () => {
	console.log("loaded");
	const button = document.getElementById("button");
	button.addEventListener("click", clicked);
};
