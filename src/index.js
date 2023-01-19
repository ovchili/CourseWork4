import modalSelect from "./components/modalSelect.pug";

window.application = {
	difficult: "",
	timer: {
		minutes: 0,
		seconds: 0,
	},
	cards: [],
	userCards: [],
};
const app = document.querySelector("#app");
app.innerHTML = modalSelect;

const btnStart = document.querySelector(".btn__start");
