class Place {
    constructor(name, actions = []) {
        this.name = name;
        this.actions = actions;
    }
}

class Region {
    constructor(name, places = []) {
        this.name = name;
        this.places = places;
    }
}

class World {
    constructor(day = 0, regions = []) {
        this.day = day;
        this.regions = regions;
    }

    findRegionByPlace(placeName) {
        for(let region of this.regions) {
            if(region.places.some(place => place.name === placeName)) {
                return region
            }
        }
        return null;
    }
}

// Define actions for places
let romeMarketActions = ["Buy Goods", "Sell Goods", "Open Bussines"];
let romeColiseumActions = ["Watch Gladiators", "Participate in a Duel"];
let romeBarracks = ["Train", "Enlist"];

let gaulMarketActions = ["Buy Goods", "Sell Goods"];
let gaulColiseumActions = ["Watch Gladiators", "Participate in a Duel"];

// Define places for each region
let romePlaces = [
    new Place("Rome Market", romeMarketActions),
    new Place("Rome Coliseum", romeColiseumActions),
    new Place("Rome Barracks", romeBarracks)
];
let gaulPlaces = [
    new Place("Gaul Market", gaulMarketActions),
    new Place("Gaul Coliseum", gaulColiseumActions)
];

// Create Region instances
let rome = new Region("Rome", romePlaces);
let gaul = new Region("Gaul", gaulPlaces);

// Create World instance with the regions
let MainWorld = new World(0, [rome, gaul]);