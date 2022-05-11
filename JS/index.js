window.onload = initialConfig;

const dayWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo"
];

const month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"
];

let languageSelected, theme;

function initialConfig() {
	// initialition's variables
	languageSelected = document.querySelector("HTML").attributes[0];
	theme = document.getElementById("select-theme");

	const dateToday = new Date();
	console.log(dateToday);
	let today = dateToday.getDay();
	// console.log(today);
	// selectTheme();

	// select the theme used for the user
	selectTheme();

	// select the language used for the user
	if (/^es/.test(navigator.language.toLowerCase())) {
		document.getElementById("select-language").classList.remove("active");
	}
	// selectLanguage(); ready
}

function selectTheme() {
	if (localStorage.getItem("theme") === "dark") {
		localStorage.setItem("theme", "light");
		theme.classList.remove("active");
	} else {
		localStorage.setItem("theme", "dark");
		theme.classList.add("active");
	}
	console.log(theme);
	console.log(localStorage.getItem("theme"));
}

window.addEventListener("click", selectTheme);

function selectLanguage() {
	const showLanguage = document.getElementById("select-language").classList;

	showLanguage.contains("active") ? (languageSelected.value = "en") : (languageSelected.value = "es");
	showLanguage.toggle("active");
	console.log(languageSelected.value);
}

function selectDay(lang) {
	const today = new Date();
	console.log(today);
}

function selectMonth(lang) {
	const today = new Date();
	console.log(today);
}
