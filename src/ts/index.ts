import { startGameScreen } from "../components/screens/startGameScreen";
import "../sass/main.scss";
declare global {
    interface Window {
        application: {
            counts: { [key: string]: number };
            timers: Array<NodeJS.Timer>;
            cards: Array<string>;
            game: {
                difficult: string;
                time: number;
                cards: Array<string>;
            };
            user: {
                count: number;
                cards: Array<string>;
            };
        };
    }
}
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
        time: 0,
        cards: [],
    },
    user: {
        count: 0,
        cards: [],
    },
};

const app = document.querySelector("#app") as HTMLElement;

startGameScreen(app);
