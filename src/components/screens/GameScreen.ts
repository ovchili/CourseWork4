import { formatNumber, gameCards, generateCard } from "../../ts/helper";
import { renderButton } from "../blocks/button";
import { renderCard } from "../blocks/card";
const VALUES: string[] = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const SUITS: string[] = ["C", "D", "H", "S"];

export const GameScreen = (container: HTMLElement) => {
    container.textContent = "";
    window.application.cards = generateCard(VALUES, SUITS) as string[];
    window.application.game.cards = gameCards(
        window.application.cards,
        window.application.counts[`${window.application.game.difficult}`]
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

    renderButton(btnBox, "Начать заново");

    const main = document.createElement("main");
    main.classList.add("game__main");
    container.appendChild(main);
    for (let i = 0; i < window.application.game.cards.length; i++) {
        const element = window.application.game.cards[i];
        renderCard(main, element, `${i}`);
    }

    const inputs: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(".card__input");
    setTimeout(() => {
        inputs.forEach((input: HTMLInputElement) => {
            input.checked = false;
        });
        window.application.timers.push(
            setInterval(() => {
                window.application.game.time += 1;
                const timerMin = document.querySelector(
                    ".timer__minutes"
                ) as HTMLElement;
                const timerSec = document.querySelector(
                    ".timer__seconds"
                ) as HTMLElement;
                timerMin.textContent = `${formatNumber(
                    Math.floor(window.application.game.time / 60)
                )}`;
                timerSec.textContent = `${formatNumber(
                    Math.floor(window.application.game.time % 60)
                )}`;
            }, 1000)
        );
    }, 5000);
};
