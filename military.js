// Get elemets by ID //
mr_button = document.getElementById("mr_button"); // Mass recruitment button
end_turn_button = document.getElementById("end_turn");

level_rOffice = document.getElementById("level_rOffice");
income_rOffice_per = document.getElementById("income_rOffice_per");
income_rOffice = document.getElementById("income_rOffice");
upgrade_rOffice = document.getElementById("upgrade_rOffice");
cost_rOffice = document.getElementById("cost_rOffice");

// Variables //
infantry = document.getElementById("infantry");
infantry_gain = document.getElementById("infantry_gain");
army_attack = document.getElementById("army_attack");
army_defense = document.getElementById("army_defense");
army_morale = document.getElementById("army_morale");

budget = document.getElementById("budget");
budget_gain = document.getElementById("budget_gain");

mr_infantry_growth = document.getElementById("mr_infantry_growth");
mr_population_loss = document.getElementById("mr_population_loss");
mr_happines_loss = document.getElementById("mr_happines_loss");

happines = document.getElementById("happines");

// Update variables
setInterval(change_color_percentage, 1000, army_attack);
setInterval(change_color_percentage, 1000, army_defense);
setInterval(change_color_percentage, 1000, army_morale);
setInterval(change_color, 1000, income_rOffice_per);
setInterval(change_color, 1000, income_rOffice);

// Click functions
function onclick_mr_button() {
    infantry_int = parseInt(infantry.innerHTML); // Get int
    happines_int = replace_sign(happines);

    infantry_int += 100; // Update values
    happines_int -= 30;

    infantry.innerHTML = infantry_int.toString(); // Write values
    happines.innerHTML =  (happines_int.toString() + "%");

    mr_button.disabled = true; // Disable buttons
}

function onclick_end_turn() {
    infantry_int = parseInt(infantry.innerHTML);

    infantry_int += parseInt(infantry_gain.innerHTML);

    infantry.innerHTML = infantry_int.toString();
}

function onclick_upgrade_rOffice() {
    level_rOffice_int = parseInt(level_rOffice.innerHTML);
    income_rOffice_per_int = parseInt(income_rOffice_per.innerHTML);
    income_rOffice_int = parseInt(income_rOffice.innerHTML);
    cost_rOffice_int = parseInt(cost_rOffice.innerHTML);
    infantry_gain_int = parseInt(infantry_gain.innerHTML);

    budget_int = parseInt(budget.innerHTML);

    // Check if it has enough money
    if(cost_rOffice_int > budget_int) {
        alert("Not enough money! Missing: " + (cost_rOffice_int-budget_int).toString());
        return;
    }

    // Set effects
    budget_int -= cost_rOffice_int;
    income_rOffice_int += income_rOffice_per_int;
    level_rOffice_int += 1;
    infantry_gain_int += income_rOffice_int;
    cost_rOffice_int += 100;

    // Update effects
    budget.innerHTML = budget_int.toString();
    income_rOffice.innerHTML = income_rOffice_int.toString();
    level_rOffice.innerHTML = level_rOffice_int.toString();
    infantry_gain.innerHTML = "+" + infantry_gain_int.toString();
    cost_rOffice.innerHTML = cost_rOffice_int.toString();
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

function change_color(element) {
    element_int = replace_sign(element);

    if(element_int >= 1) {
        element.style.color = "MediumSeaGreen";
    } else if(element_int <= -1) {
        element.style.color = "Tomato";
    }
}

function change_color_percentage(element) {
    element_int = replace_sign(element);
    if(element_int >= 66) {
        element.style.color = "MediumSeaGreen";
    }
    if (element_int >= 33 && element_int < 66) {
        element.style.color = "Orange";
    }
    if(element_int < 33) {
        element.style.color = "Tomato";
    }
}

change_color(infantry_gain);

// Listeners //
mr_button.addEventListener("click", onclick_mr_button);
end_turn_button.addEventListener("click", onclick_end_turn);
upgrade_rOffice.addEventListener("click", onclick_upgrade_rOffice);