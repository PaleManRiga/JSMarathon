const btn = document.getElementById('btn-kick');
const tacklebtn = document.getElementById('btn-tackle');
let characterDmg = 0;
let enemyDmg = 0;
const btns = document.querySelectorAll('button');


function renderProgressbarHP() {
    this.elProgressbar.style.width = (this.damageHP / this.defaultHP) * 100 + '%'
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function changeHP(count) {
    this.damageHP -= count;

    const log = this === enemy ? generateLog(this, character, -enemyDmg, enemy.damageHP, enemy.defaultHP) : generateLog(this, enemy, -characterDmg, character.damageHP, character.defaultHP);

    const $p = document.createElement('p');

    console.log(log);
    $p.innerText = log;

    const $logs = document.querySelector('#logs');

    $logs.insertBefore($p, $logs.children[0]);

    if (this.damageHP <= count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        btn.disabled = true;
        tacklebtn.disabled = true;
    }

    this.renderHP();
}
const character = {
    name: 'Pikachu',
    defaultHP: 200,
    damageHP: 200,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderProgressbarHP: renderProgressbarHP,
    renderHPLife: renderHPLife,
    renderHP: renderHP,
    changeHP: changeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 200,
    damageHP: 200,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderProgressbarHP: renderProgressbarHP,
    renderHPLife: renderHPLife,
    renderHP: renderHP,
    changeHP: changeHP,
}
const btnCountJolt = countClicks(6, btn);
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
    characterDmg = random(40, 20);
    enemyDmg = random(40, 20);
    character.changeHP(characterDmg);
    enemy.changeHP(enemyDmg);
})
tacklebtn.addEventListener('click', function () {
    console.log('Tackle');
    btnCountTackle();
    enemyDmg = 5;
    enemy.changeHP(enemyDmg);
})

function init() {
    console.log('Start Game!');
    character.renderHP;
    enemy.renderHP;

}
function random(max, min =0) {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min;
}

function generateLog(firstPerson, secondPerson, damageDone, hpLeft, hpDefault) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${damageDone}, [${hpLeft} / ${hpDefault}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${damageDone}, [${hpLeft} / ${hpDefault}]`
    ];

    return logs[random(logs.length) - 1];
}



init();