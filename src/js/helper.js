export const clearTimers = (timers) => {
    timers.forEach((timer) => {
        clearTimeout(timer);
    });
};

export const generateCard = (values, suits) => {
    const cards = [];
    suits.forEach((suit) => {
        values.forEach((value) => {
            const card = `${value}${suit}`;
            cards.push(card);
        });
    });
    return cards;
};

export const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
};
export const gameCards = (cards, length) => {
    let gameCard = [];
    let i = 0;
    while (i < length) {
        const random = Math.floor(Math.random() * cards.length);
        const card = cards.splice(random, 1)[0];
        gameCard.push(card);
        i++;
    }

    gameCard = [...gameCard, ...gameCard];
    shuffle(gameCard);
    return gameCard;
};

export const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
};
