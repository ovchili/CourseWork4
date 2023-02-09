import { startGameScreen } from "../components/screens/startGameScreen.js";
import "../sass/main.scss";

window.application = {
    counts: {
        easy: 3,
        medium: 6,
        hard: 9,
    },
    timers: [],
    cards: [],
    game: {
        difficult: "",
        timer: 0,
        cards: [],
    },
    user: {
        count: 0,
        cards: [],
    },
};

const app = document.querySelector("#app");

startGameScreen(app);
