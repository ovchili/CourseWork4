import { clearTimers } from "../../ts/helper";
import { renderModal } from "./modal";

const compare = (str1: string, str2: string) => {
    return str1 === str2;
};

export const renderCard = (
    container: HTMLElement,
    card: string,
    id: string
) => {
    if (!(container instanceof HTMLElement)) {
        console.log("Передан неверный элемент");
        return;
    }
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("game__card", "card");
    container.appendChild(cardContainer);

    const cardInput = document.createElement("input");
    cardInput.classList.add("card__input");
    cardInput.type = "checkbox";
    cardInput.id = id;
    cardInput.value = `${card}`;
    cardInput.name = "card";
    cardInput.checked = true;
    const cardLabel = document.createElement("label");
    cardLabel.classList.add("card__label");
    cardLabel.htmlFor = id;
    const cardBack = document.createElement("div");
    cardBack.classList.add("card__back");
    const cardImage = document.createElement("img");
    cardImage.src = require("Images/backCard.png");
    cardBack.appendChild(cardImage);
    cardLabel.appendChild(cardBack);

    const cardFront = document.createElement("div");
    cardFront.classList.add("card__front");
    const cardImageFront = document.createElement("img");
    cardImageFront.src = require(`Images/${card}.svg`);
    cardFront.appendChild(cardImageFront);
    cardLabel.appendChild(cardFront);
    cardContainer.appendChild(cardInput);
    cardContainer.appendChild(cardLabel);

    cardInput.addEventListener("change", (e) => {
        const app = document.querySelector("#app") as HTMLElement;
        const count = window.application.game.cards.length;
        const user = window.application.user;
        const target = e.target as HTMLInputElement;
        target.disabled = true;

        if (user.count % 2 === 0) {
            user.count += 1;
            user.cards.push(target.value);
        } else {
            const result = compare(
                target.value,
                user.cards[user.cards.length - 1]
            );
            user.count += 1;
            if (!result) {
                renderModal(app, false);
                clearTimers(window.application.timers);
                window.application.timers = [];
            } else if (user.count === count) {
                renderModal(app, true);
                clearTimers(window.application.timers);
                window.application.timers = [];
            } else {
                user.cards.push(target.value);
            }
        }
    });
};
