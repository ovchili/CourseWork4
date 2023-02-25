import { clearTimers } from "../../ts/helper";
import { startGameScreen } from "../screens/startGameScreen";

export const renderButton = (container: HTMLElement, text: string) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.classList.add("btn");
    container.appendChild(btn);

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
