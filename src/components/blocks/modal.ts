import { formatNumber } from "../../ts/helper";
import { renderButton } from "./button";
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

    renderButton(modal, "Играть заново");
};
