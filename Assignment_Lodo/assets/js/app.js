
function roll(){
    const firstRandomnym = Math.floor(Math.random() * 6 ) + 1 ;
const firstDiceimges = 'assets/images/Dice' +  firstRandomnym + '.png';

document.querySelectorAll('img')[0].setAttribute('src' ,firstDiceimges);


const secondRandomnym = Math.floor(Math.random() * 6 ) + 1 ;
const secondDiceimges = 'assets/images/Dice' +  secondRandomnym + '.png';

document.querySelectorAll('img')[1].setAttribute('src' ,secondDiceimges);
}
roll();