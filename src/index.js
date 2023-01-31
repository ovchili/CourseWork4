import modalSelect from "./components/modalSelect.pug";
import Game from "./components/GameScreen.pug";
import Card from "./components/Card.pug";

window.application = {
    VALUES: ["6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    SUITS: ["C", "D", "H", "S"],
    difficult: "",
    timer: {
        minutes: 0,
        seconds: 0,
    },
    cards: [],
    userCards: [],
};
const cardGenerator = (values, suits) => {
    const cards = [];
    suits.forEach((suit) => {
        values.forEach((value) => {
            cards.push(`${value}${suit}`);
        });
    });
    return cards;
};
window.addEventListener("DOMContentLoaded", () => {
    const cardsGenerator = cardGenerator(
        window.application.VALUES,
        window.application.SUITS
    );
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
        const GameScreen = Game();
        app.innerHTML = GameScreen;
        const main = document.querySelector(".game__main");
        cardsGenerator.forEach((card) => {
            main.innerHTML += Card({
                src: require(`@Images/${card}.svg`),
                alt: `${card}`,
                srcBack: require(`@Images/backCard.png`),
                altBack: "Back Card",
            });
        });
        const cards = document.querySelectorAll(".game__card");
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                card.classList.toggle("game__card_active");
            });
        });
    });
});
