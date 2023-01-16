import "./sass/main.sass";

const app = document.querySelector("#app");

const formChoiceDifficult = document.createElement("form");
formChoiceDifficult.classList.add("choice");
const headerBox = document.createElement("header");
headerBox.classList.add("choice__header");
formChoiceDifficult.appendChild(headerBox);
const header = document.createElement("h2");
header.textContent = "Выбери сложность";
headerBox.appendChild(header);
const mainBox = document.createElement("main");
mainBox.classList.add("choice__select");
formChoiceDifficult.appendChild(mainBox);
for (let i = 1; i < 4; i++) {
	const formInput = document.createElement("input");
	formInput.type = "radio";
	formInput.value = i;
	formInput.id = `difficult_${i}`;
	formInput.name = "difficult";
	const formLabel = document.createElement("label");
	formLabel.textContent = i;
	formLabel.htmlFor = `difficult_${i}`;
	mainBox.appendChild(formInput);
	mainBox.appendChild(formLabel);
}
const footerBox = document.createElement("footer");
formChoiceDifficult.appendChild(footerBox);
const btnStart = document.createElement("button");
btnStart.textContent = "Старт";
btnStart.classList.add("btn", "btn__start");
footerBox.appendChild(btnStart);

app.appendChild(formChoiceDifficult);
