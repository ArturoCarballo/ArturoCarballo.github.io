class Player {
    constructor(gold = 0, goods = 0, energy = 0, location = "") {
        this.gold = gold;
        this.goods = goods;
        this.energy = energy;
        this.location = location;
    }

    displayData() {
        document.getElementById('gold').textContent = this.gold;
        document.getElementById('goods').textContent = this.goods;
        document.getElementById('energy').textContent = this.energy;
        document.getElementById('locationPlayer').textContent = this.location;
    }

    hasEnergy() {
        if(this.energy > 0) {
            return true;
        }
        return false;
    }
}

let Player1 = new Player(100, 10, 3, MainWorld.regions[0].places[0].name);
Player1.displayData();