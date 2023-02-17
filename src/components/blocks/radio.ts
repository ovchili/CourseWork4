export const renderRadioButton = (
    container: HTMLElement,
    name: string,
    value: string,
    cls: string[]
) => {
    if (!(container instanceof HTMLElement)) {
        console.log("Передан неверный элемент");
        return;
    }
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    radio.id = `${name}_${value}`;
    if (cls) {
        cls.forEach((cl) => {
            radio.classList.add(cl);
        });
    }
    container.appendChild(radio);

    radio.addEventListener("change", (e) => {
        const target = e.target;
        window.application.game.difficult = (target as HTMLInputElement).value;
    });
};

export const renderLabel = (
    container: HTMLElement,
    idFor: string,
    text: string,
    cls: string[]
) => {
    if (!(container instanceof HTMLElement)) {
        console.log("Передан неверный элемент");
        return;
    }
    const label = document.createElement("label");
    label.htmlFor = idFor;
    label.textContent = text;
    if (cls) {
        cls.forEach((cl) => {
            label.classList.add(cl);
        });
    }
    container.appendChild(label);
};
