const btn = document.getElementById('btn-kick');
const tacklebtn = document.getElementById('btn-tackle');

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
btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
})
tacklebtn.addEventListener('click', function () {
    console.log('Tackle');
    enemy.changeHP(5);
})

function init() {
    console.log('Start Game!');
    character.renderHP;
    enemy.renderHP;

}
function random(num) {
    return Math.ceil(Math.random() * num);
}
init();