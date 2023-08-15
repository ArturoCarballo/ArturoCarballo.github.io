function updateActionMenu() {
    const actionMenu = document.getElementById('mainActionMenu');
    actionMenu.innerHTML = `<h1 style="font-size: 66px;" id="locationPlayer">${Player1.location}</h1>`;

    // Use the 'findRegionByPlace' function to get the current region based on the player's location
    const currentRegion = MainWorld.findRegionByPlace(Player1.location);

    if (currentRegion) {
        // Find the current place from the places array in the found region
        const currentPlace = currentRegion.places.find(place => place.name === Player1.location);

        if (currentPlace && currentPlace.actions) {
            // Append actions for the current place
            currentPlace.actions.forEach(action => {
                const actionElement = document.createElement('p');
                actionElement.textContent = action;
                actionElement.id = action;
                actionMenu.appendChild(actionElement);
            });
        }
    }
}

function updateLocationMenu(playerLocation) {
    const locationMenuDiv = document.getElementById('locationMenu');
    const currentRegion = MainWorld.findRegionByPlace(playerLocation);

    if (currentRegion) {
        locationMenuDiv.innerHTML = `<p>${currentRegion.name}</p>`;
        currentRegion.places.forEach(place => {
            const isSelected = playerLocation === place.name ? 'selected' : '';
            locationMenuDiv.innerHTML += `<p class="${isSelected}" data-place-name="${place.name}"> - ${place.name}</p>`;
        });
    } else {
        locationMenuDiv.innerHTML = '<p>Unknown Region</p>';
    }

    updateActionMenu();
}

updateLocationMenu(Player1.location);

document.getElementById('locationMenu').addEventListener('click', function (event) {
    if (event.target.getAttribute('data-place-name')) {
        // Update player's location
        Player1.location = event.target.getAttribute('data-place-name');

        // Update location display
        Player1.displayData();

        // Update location menu to reflect the new location
        updateLocationMenu(Player1.location);
    }
});

var buyGoods = document.getElementById('Buy Goods');
var sellGoods = document.getElementById('Sell Goods');

buyGoods.addEventListener('click', function() {
    if(Player1.hasEnergy()) {
        if(Player1.gold >= 10) {
            alert("Goods bought!\nGoods +1\nGold -10");
            Player1.gold -= 10;
            Player1.goods += 1;

            Player1.energy -= 1;
    
            Player1.displayData();

        } else {
            alert("Not enough money!");
        }
    } else {
        alert("You don't have enough energy!");
    }

})

sellGoods.addEventListener('click', function() {
    if(Player1.hasEnergy()) {
        if(Player1.goods >= 1) {
            alert("Goods sold!\nGoods -1\nGold +1");
            Player1.gold += 10;
            Player1.goods -= 1;

            Player1.energy -= 1;
    
            Player1.displayData();
        } else {
            alert("Not enough goods!");
        }
    } else {
        alert("You don't have enough energy!");
    }
})