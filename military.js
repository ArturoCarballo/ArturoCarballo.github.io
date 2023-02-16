// Get elemets by ID //
mr_button = document.getElementById("mr_button"); // Mass recruitment button

// Variables //
infantry = document.getElementById("infantry");
infantry_gain = document.getElementById("infantry_gain");
mr_infantry_growth = document.getElementById("mr_infantry_growth");
mr_population_loss = document.getElementById("mr_population_loss");
mr_happines_loss = document.getElementById("mr_happines_loss");
happines = document.getElementById("happines");

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

change_color(infantry_gain);

// Listeners //
mr_button.addEventListener("click", onclick_mr_button);