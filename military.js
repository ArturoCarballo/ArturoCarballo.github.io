// Get elemets by ID //
mr_button = document.getElementById("mr_button"); // Mass recruitment button
end_turn_button = document.getElementById("end_turn");

// Variables //
infantry = document.getElementById("infantry");
infantry_gain = document.getElementById("infantry_gain");
army_attack = document.getElementById("army_attack");
army_defense = document.getElementById("army_defense");
army_morale = document.getElementById("army_morale");

mr_infantry_growth = document.getElementById("mr_infantry_growth");
mr_population_loss = document.getElementById("mr_population_loss");
mr_happines_loss = document.getElementById("mr_happines_loss");

happines = document.getElementById("happines");

// Update variables
setInterval(change_color_percentage, 1000, army_attack);
setInterval(change_color_percentage, 1000, army_defense);
setInterval(change_color_percentage, 1000, army_morale);


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