import Pokemon from "./pokemon.js";
import random from "./utils.js";

const btn = document.getElementById('btn-kick');
const tacklebtn = document.getElementById('btn-tackle');
let characterDmg = 0;
let enemyDmg = 0;
const btns = document.querySelectorAll('button');


const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selectors: 'character',
});
const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'enemy',
});

const btnCountJolt = countClicks(10, btn);
const btnCountTackle = countClicks(20, tacklebtn);

function countClicks(count = 6, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;
    return function () {
        count--;
        if (count === 0) {
            el.disabled = true;
        }
        el.innerText = `${innerText} (${count})`;
        return count;
    }
}
btn.addEventListener('click', function () {
    console.log('Kick');
    btnCountJolt();
    characterDmg = random(60, 20);
    enemyDmg = random(60, 20);
    player1.changeHP(characterDmg, function (count) {
        console.log(generateLog(player1, player2, count));
    });
    player2.changeHP(enemyDmg, function (count) {
        console.log(generateLog(player2, player1, count))
    });

    
})
tacklebtn.addEventListener('click', function () {
    console.log('Tackle');
    btnCountTackle();
    enemyDmg = 5;
    player2.changeHP(enemyDmg);
})

function init() {
    console.log('Start Game!');
}


function generateLog(player1, player2, count) {
    const {name, hp: {current, total }} = player1;
    const {name: enemyName} = player2;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. -${count}, [${current} / ${total}]`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. -${count}, [${current} / ${total}]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${current} / ${total}]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. -${count}, [${current} / ${total}]`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count}, [${current} / ${total}]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. -${count}, [${current} / ${total}]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. -${count}, [${current} / ${total}]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника -${count}, [${current} / ${total}]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. -${count}, [${current} / ${total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. -${count}, [${current} / ${total}]`
    ];

    return logs[random(logs.length) - 1];
}



init();