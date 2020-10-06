class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors }) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;

        this.renderHP();
    }

    changeHP = (count, cb) => {
        this.hp.current -= count;

        if (this.hp.current <= 0) {
            this.hp.current = 0;
        }
    
        this.renderHP();
        cb && cb(count);
    }

    renderProgressbarHP = () => {
        const { hp: { current, total }, elProgressbar } = this;
        const procent = current / (total / 100);
        elProgressbar.style.width = procent + '%';
    }

    renderHPLife = () => {
        const { elHP, hp: { current, total } } = this;

        elHP.innerText = current + ' / ' + total;
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }
}

export default Pokemon;