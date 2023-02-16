// Get elemets by ID //
end_turn_button = document.getElementById("end_turn");

// Variables //
population_gain = document.getElementById("population_gain");
population = document.getElementById("population");
happines = document.getElementById("happines");

change_color(population_gain);

setInterval(change_color, 1000, happines);

// Functions for click
function onclick_end_turn() {
    population_int = parseInt(population.innerHTML);
    population_gain_int = replace_sign(population_gain);

    population_int += population_gain_int;

    population.innerHTML = population_int.toString();
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
function change_color(element) {
    element_int = replace_sign(element);
    if(element_int >= 1) {
        element.style.color = "MediumSeaGreen";
    } else if(element_int <= -1) {
        element.style.color = "Tomato";
    }
    // Just for the happines var
    if(element == happines) {
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
}

// Listeners //
end_turn_button.addEventListener("click", onclick_end_turn);