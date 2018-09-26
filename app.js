
const diceContainer = document.querySelector('#dice-container');
const dieBtn = document.querySelector('#die-btn');
const rollBtn = document.querySelector('#roll-die-btn');
const sumBtn = document.querySelector('#sum-die-btn');

let dice = [];
class Die {
    constructor() {
        this.value;

        this.div = document.createElement('div');
        this.div.classList.add('die');
        diceContainer.appendChild(this.div);
        this.div.addEventListener('click', this.roll.bind(this));
        this.div.addEventListener('dblclick', (() => {
            dice = dice.filter((die) => die.value !== this.value);
            diceContainer.removeChild(this.div);
        }).bind(this));

        this.roll();
    }

    roll() {
        this.value = Math.ceil(Math.random() * 6);
        this.div.innerText = this.value;
    }
}


dieBtn.addEventListener('click', () => {
    const die = new Die();
    dice.push(die);
});

rollBtn.addEventListener('click', () => {
    dice.forEach(die => die.roll());
});

sumBtn.addEventListener('click', () => {
    const sum = dice.reduce((sum, { value }) => sum += value, 0);
    alert(sum);
});