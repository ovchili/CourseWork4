import modalSelect from "./components/modalSelect.pug";
import Game from "./components/GameScreen.pug";

window.application = {
    difficult: "",
    timer: {
        minutes: 0,
        seconds: 0,
    },
    cards: [],
    userCards: [],
};

window.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
    app.innerHTML = modalSelect();

    const btnStart = document.querySelector(".btn__start");
    const radios = document.querySelectorAll(".choice__input");
    radios.forEach((radio) => {
        radio.addEventListener("change", () => {
            window.application.difficult = radio.value;
        });
    });
    btnStart.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.application.difficult === "") {
            alert("Выберите сложность");
            return;
        }
        const GameScreen = Game({
            difficult: window.application.difficult,
        });
        app.innerHTML = GameScreen;
    });
});
