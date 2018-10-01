const diceContainer = document.querySelector( '#dice-container' );
const dieBtn = document.querySelector( '#die-btn' );
const rollBtn = document.querySelector( '#roll-die-btn' );
const sumBtn = document.querySelector( '#sum-die-btn' );

let dice = [];

class Die {
    constructor () {
        this.value;

        this.roll = this.roll.bind(this);

        this.div = document.createElement( 'div' );
        this.div.classList.add( 'die' );
        diceContainer.appendChild( this.div );
        this.div.addEventListener( 'click', this.roll );
        this.div.addEventListener( 'dblclick', ( () => {
            dice = dice.filter( ( die ) => die !== this );
            diceContainer.removeChild( this.div );
        } ) );

        this.roll();
    }

    roll () {
        this.div.classList.remove( `d${ this.value }` );
        this.value = Math.ceil( Math.random() * 6 );
        this.div.classList.add( `d${ this.value }` );
        this.div.innerText = this.value;
        this.div.innerHTML = '<span class="dot"></span>'.repeat(this.value);
    }
}

dieBtn.addEventListener( 'click', () => {
    const die = new Die();
    dice.push( die );
} );

rollBtn.addEventListener( 'click', () => dice.forEach( die => die.roll() ) );

sumBtn.addEventListener( 'click', () => {
    const sum = dice.reduce( ( sum, { value } ) => sum += value, 0 );
    alert( sum );
} );
