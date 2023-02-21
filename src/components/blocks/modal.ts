import { clearTimers, formatNumber } from "../../ts/helper";
import { startGameScreen } from "../screens/startGameScreen";
export const renderModal = (container: HTMLElement, win: boolean) => {
    if (!(container instanceof HTMLElement)) {
        console.log("Передан неверный элемент");
        return;
    }

    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal__wrapper");
    container.appendChild(modalWrapper);

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modalWrapper.appendChild(modal);

    const modalImg = document.createElement("img");
    modalImg.src = win ? require("Images/win.png") : require("Images/lose.png");
    modal.appendChild(modalImg);

    const head = document.createElement("h2");
    head.classList.add("modal__head");
    head.textContent = win ? "Вы выиграли!" : "Вы проиграли!";
    modal.appendChild(head);

    const timerText = document.createElement("p");
    timerText.textContent = "Затраченное время:";
    timerText.classList.add("modal__text");
    modal.appendChild(timerText);

    const min = `${formatNumber(
        Math.floor(window.application.game.time / 60)
    )}`;
    const sec = `${formatNumber(
        Math.floor(window.application.game.time % 60)
    )}`;
    const timer = document.createElement("span");
    timer.classList.add("modal__timer");
    timer.textContent = `${min}:${sec}`;
    modal.appendChild(timer);

    const btn = document.createElement("button");
    btn.textContent = "Играть снова";
    btn.classList.add("btn");
    modal.appendChild(btn);

    btn.addEventListener("click", () => {
        const timers = window.application.timers;
        clearTimers(timers);
        const game = window.application.game;
        game.time = 0;
        game.difficult = "";
        game.cards = [];
        const user = window.application.user;
        user.count = 0;
        user.cards = [];
        window.application.timers = [];
        const app = document.querySelector("#app") as HTMLElement;
        startGameScreen(app);
    });
};
