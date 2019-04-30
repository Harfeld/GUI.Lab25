class Sailboat {
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }

    get speed() {
        return this.Hullspeed();
    }
    Hullspeed() {
        return 1.34 * Math.sqrt(this.length);
    }
}

function btn_clk(nm, ln) {
    let boat = new Sailboat(nm, ln);
}