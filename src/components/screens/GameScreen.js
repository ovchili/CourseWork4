import {
    clearTimers,
    formatNumber,
    gameCards,
    generateCard,
} from "../../js/helper.js";
import { renderCard } from "../blocks/card.js";
import { startGameScreen } from "../screens/startGameScreen.js";
const VALUES = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const SUITS = ["C", "D", "H", "S"];

export const GameScreen = (container) => {
    container.textContent = "";
    window.application.cards = generateCard(VALUES, SUITS);
    window.application.game.cards = gameCards(
        window.application.cards,
        window.application.counts[window.application.game.difficult]
    );
    if (!(container instanceof HTMLElement)) {
        console.log("Передан неверный элемент");
        return;
    }
    const header = document.createElement("header");
    header.classList.add("game__header");
    container.appendChild(header);

    const timerBox = document.createElement("div");
    timerBox.classList.add("game__timer", "timer");
    header.appendChild(timerBox);

    const timerMinutes = document.createElement("p");
    timerMinutes.textContent = "00";
    timerMinutes.classList.add("timer__minutes");
    timerBox.appendChild(timerMinutes);
    const timerDivider = document.createElement("p");
    timerDivider.textContent = ":";
    timerDivider.classList.add("timer__divider");
    timerBox.appendChild(timerDivider);
    const timerSeconds = document.createElement("p");
    timerSeconds.textContent = "00";
    timerSeconds.classList.add("timer__seconds");
    timerBox.appendChild(timerSeconds);

    const btnBox = document.createElement("div");
    btnBox.classList.add("game__btn");
    header.appendChild(btnBox);

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "Начать заново";
    btnBox.appendChild(btn);

    const main = document.createElement("main");
    main.classList.add("game__main");
    container.appendChild(main);
    for (let i = 0; i < window.application.game.cards.length; i++) {
        const element = window.application.game.cards[i];
        renderCard(main, element, i);
    }

    const inputs = document.querySelectorAll(".card__input");
    setTimeout(() => {
        inputs.forEach((input) => {
            input.checked = false;
        });
        window.application.timers.push(
            setInterval(() => {
                window.application.game.timer += 1;
                const timerMin = document.querySelector(".timer__minutes");
                const timerSec = document.querySelector(".timer__seconds");
                timerMin.textContent = formatNumber(
                    Math.floor(window.application.game.timer / 60)
                );
                timerSec.textContent = formatNumber(
                    window.application.game.timer % 60
                );
            }, 1000)
        );
    }, 5000);

    btn.addEventListener("click", () => {
        const timers = window.application.timers;
        clearTimers(timers);
        const game = window.application.game;
        game.timer = 0;
        game.difficult = "";
        game.cards = [];
        const user = window.application.user;
        user.count = 0;
        user.cards = [];
        window.application.timers = [];
        const app = document.querySelector("#app");
        startGameScreen(app);
    });
};
