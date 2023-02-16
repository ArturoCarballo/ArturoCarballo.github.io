// Get elemets by ID //
end_turn_button = document.getElementById("end_turn");
upgrade_market_button = document.getElementById("upgrade_market");
upgrade_factory_button = document.getElementById("upgrade_factory");

// Variables //
budget = document.getElementById("budget");
budget_gain = document.getElementById("budget_gain");

// Market
market_income_per = document.getElementById("income_market_per");
market_income = document.getElementById("income_market");
market_level = document.getElementById("level_market");
market_cost = document.getElementById("cost_market");

// Factory
factory_income_per = document.getElementById("income_factory_per");
factory_income = document.getElementById("income_factory");
factory_level = document.getElementById("level_factory");
factory_cost = document.getElementById("cost_factory");

//Functions for clicking //
function onclick_end_turn() {
    change_values_endturn();
}

function onclick_upgrade_market() {
    market_income_int = parseInt(market_income.innerHTML); // Gets int from the innerhtml
    market_level_int = parseInt(market_level.innerHTML);
    market_cost_int = parseInt(market_cost.innerHTML);
    budget_int = parseInt(budget.innerHTML);

    // Check if it has enough money
    if(market_cost_int > budget_int) {
        alert("Not enough money! Missing: " + (market_cost_int-budget_int).toString());
        return;
    }

    market_income_int += market_income_per_int; // Update values
    budget_gain_int += market_income_per_int;
    market_level_int += 1;
    budget_int -= market_cost_int;
    market_cost_int += 20;
    

    market_income.innerHTML = market_income_int.toString(); // Writes them on html
    budget_gain.innerHTML = "+" + budget_gain_int.toString();
    market_level.innerHTML = market_level_int.toString();
    market_cost.innerHTML = market_cost_int.toString();
    budget.innerHTML = budget_int.toString();
}

function onclick_upgrade_factory() {
    factory_income_int = parseInt(factory_income.innerHTML); // Gets int from the innerhtml
    factory_level_int = parseInt(factory_level.innerHTML);
    factory_cost_int = parseInt(factory_cost.innerHTML);
    budget_int = parseInt(budget.innerHTML);

    // Check if it has enough money
    if(factory_cost_int > budget_int) {
        alert("Not enough money! Missing: " + (factory_cost_int-budget_int).toString());
        return;
    }

    factory_income_int += factory_income_per_int; // Update values
    budget_gain_int += factory_income_per_int;
    factory_level_int += 1;
    budget_int -= factory_cost_int;
    factory_cost_int += 40;
    

    factory_income.innerHTML = factory_income_int.toString(); // Writes them on html
    budget_gain.innerHTML = "+" + budget_gain_int.toString();
    factory_level.innerHTML = factory_level_int.toString();
    factory_cost.innerHTML = factory_cost_int.toString();
    budget.innerHTML = budget_int.toString();
}

// Function that replaces sign
function replace_sign(number) {
    number_string = number.innerHTML;
    if(number_string.indexOf('-') > -1) { // If the number is negative, dont erase the -
        return parseInt(number_string)
    }
    number_string = number_string.replace(/[^\d.]/g, '' ); // Get rid of +
    return parseInt(number_string);
}

// Replace color //
budget_gain_int = replace_sign(budget_gain);

market_income_per_int = replace_sign(market_income_per);
market_income_int = replace_sign(market_income);

factory_income_per_int = replace_sign(factory_income_per);
factory_income_int = replace_sign(factory_income);
if(budget_gain_int >= 1 || market_income_per_int >= 1 || market_income_int >= 1 || factory_income_per_int >= 1 || factory_income_int >= 1) {
    budget_gain.style.color = "MediumSeaGreen";

    market_income_per.style.color = "MediumSeaGreen";
    market_income.style.color = "MediumSeaGreen";

    factory_income_per.style.color = "MediumSeaGreen";
    factory_income.style.color = "MediumSeaGreen";
} else if(budget_gain_int <= -1 || market_income_per_int <= -1 || market_income_int <= -1 || factory_income_per_int >= 1 || factory_income_int >= 1) {
    budget_gain.style.color = "Tomato";
    factory_income_per.style.color = "Tomato";
    factory_income.style.color = "Tomato";
}

// Update Value
function change_values_endturn() {
    budget_int = parseInt(budget.innerHTML);
    budget_int += budget_gain_int;

    budget.innerHTML = budget_int.toString();
}


// Listeners //
end_turn_button.addEventListener("click", onclick_end_turn);
upgrade_market_button.addEventListener("click", onclick_upgrade_market);
upgrade_factory_button.addEventListener("click", onclick_upgrade_factory);