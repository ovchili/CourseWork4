export const clearTimers = (timers: Array<NodeJS.Timer>) => {
    timers.forEach((timer) => {
        clearTimeout(timer);
    });
};

export const generateCard = (values: string[], suits: string[]) => {
    const cards: Array<string> = [];
    suits.forEach((suit) => {
        values.forEach((value) => {
            const card = `${value}${suit}`;
            cards.push(card);
        });
    });
    return cards;
};

export const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`;
};
export const gameCards = (cards: string[], length: number) => {
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

export const shuffle = (array: Array<string>) => {
    array.sort(() => Math.random() - 0.5);
};