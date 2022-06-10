window.onload = initialConfig;

const vertionEnglish = {
	language: "en",
	title: "Pomodoro technique",
	contentButtons: {
		start: "Start",
		stop: "Stop",
		pause: "Pause"
	},
	content: {
		descriptionWebsite: `This web page is for everyone people can used the Pomodoro technique. This technique is used for many people to improve their work and activities in their home.`,
		descriptionTechnique: `The Pomodoro technique is a time management method developed by Francesco Cirillo in the late 1980s. The
		technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated
		by short breaks. The technique was introduced to improve the productivity of team members who were
		frequently faced with interruptions.`,
		descriptionTargetWebpage: `The target of this web page is to help people to improve their activities, used different variable
		configuration declarate by own user. The web page is also used to show the result of the Pomodoro
		technique.`
	}
};

const vertionEspañol = {
	language: "es",
	title: "Técnica de Pomodoro",
	contentButtons: {
		start: "Iniciar",
		stop: "Detener",
		pause: "Pausar"
	},
	content: {
		descriptionWebsite: `Esta página web es para que todos los usuarios puedan usar la técnica de Pomodoro. Esta técnica es usada para que los usuarios puedan mejorar sus actividades en su casa.`,
		descriptionTechnique: `La técnica de Pomodoro es un método de tiempo de manejo desarrollado por Francesco Cirillo en los últimos 80s. La técnica usa un temporizador para dividir el trabajo en intervalos, tradicionalmente 25 minutos de longitud, separados por breves descansos. La técnica fue introducida para mejorar la productividad de los miembros de equipo que siempre se encontraban ante interrupciones.`,
		descriptionTargetWebpage: `El objetivo de esta página web es que los usuarios puedan mejorar sus actividades, usando diferentes configuraciones declaradas por el usuario. La página web también se usa para mostrar el resultado de la técnica de Pomodoro.`
	}
};

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

let languageSelecte, theme;

function initialConfig() {
	// initialition's variables
	languageSelecte = document.querySelector("HTML").attributes[0];
	theme = document.getElementById("select-theme");

	// select the theme used for the user
	selectTheme();

	// select the language used for the user
	if (/^es/.test(navigator.language.toLowerCase())) {
		document.getElementById("select-language").classList.remove("active");
	}
	// selectLanguage(); ready
}

function selectTheme(executed) {
	if (localStorage.getItem("theme") && executed) {
		if (localStorage.getItem("theme") === "dark" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			localStorage.setItem("theme", "light");
			theme.classList.remove("active");
		} else {
			localStorage.setItem("theme", "dark");
			theme.classList.add("active");
		}
	} else if (!localStorage.getItem("theme") && !executed) {
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? localStorage.setItem("theme", "dark")
			: localStorage.setItem("theme", "light");
		localStorage.getItem("theme") === "dark" ? theme.classList.add("active") : theme.classList.remove("active");
		console.log(localStorage.getItem("theme"));
	}
}

window.addEventListener("click", (event) => {
	switch (event.target.id) {
		case "select-language":
			selectLanguage();
			break;
		case "select-theme":
		case "select-theme-icon":
			selectTheme(true);
			break;
		case "start":
			startPomodoro();
			break;
		case "stop":
			stopPomodoro();
			break;
		case "pause":
			pausePomodoro();
			break;
		default:
			break;
	}
});

function selectLanguage() {
	const showLanguage = document.getElementById("select-language").classList;

	showLanguage.contains("active") ? (languageSelecte.value = "en") : (languageSelecte.value = "es");
	showLanguage.toggle("active");
	console.log(languageSelecte.value);
}

function selectDay(lang) {
	const today = new Date();
	console.log(today);
}

function selectMonth(lang) {
	const today = new Date();
	console.log(today);
}
