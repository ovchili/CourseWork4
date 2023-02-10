import { renderRadioButton, renderLabel } from "../blocks/radio.js";
import { GameScreen } from "./GameScreen.js";
export const startGameScreen = (container) => {
    if (!(container instanceof HTMLElement)) {
        console.log("Передан неверный элемент");
        return;
    }
    container.textContent = "";
    const wrapper = document.createElement("div");
    wrapper.classList.add("start__wrapper");
    container.appendChild(wrapper);

    const form = document.createElement("form");
    form.classList.add("start__form");
    wrapper.appendChild(form);

    const header = document.createElement("h2");
    header.classList.add("start__header");
    header.textContent = "Выберите сложность";
    form.appendChild(header);

    const radioButtonBox = document.createElement("div");
    radioButtonBox.classList.add("start__box");
    form.appendChild(radioButtonBox);
    renderRadioButton(radioButtonBox, "difficult", "easy", ["start__input"]);
    renderLabel(radioButtonBox, "difficult_easy", "1", ["start__label"]);
    renderRadioButton(radioButtonBox, "difficult", "medium", ["start__input"]);
    renderLabel(radioButtonBox, "difficult_medium", "2", ["start__label"]);
    renderRadioButton(radioButtonBox, "difficult", "hard", ["start__input"]);
    renderLabel(radioButtonBox, "difficult_hard", "3", ["start__label"]);

    const btn = document.createElement("button");
    btn.textContent = "Старт";
    btn.classList.add("btn", "start__btn");
    form.appendChild(btn);

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const app = document.querySelector("#app");
        GameScreen(app);
    });
};
