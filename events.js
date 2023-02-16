// Get elemets by ID //
end_turn_button = document.getElementById("end_turn");
event_2_title = document.getElementById("event_2_title");

// Elements //
alert_2 = document.getElementById("alert_2");
option1 = document.getElementById("option1");
option2 = document.getElementById("option2");

// Variables //
happines = document.getElementById("happines");

// Click functions
function onclick_option1() {
    hide(alert_2);
}

function onclick_option2() {
    hide(alert_2);
}

// End turn

function onclick_end_turn() {
    revoltchance();
}

// Check for happines, create event

function revoltchance() {
    happines_int = replace_sign(happines);

    if(happines_int <= 66) {
        chance = 100 - happines_int;
        selected = Math.round(Math.random()*100);

        if(selected <= chance) {
            show(alert_2);
        }
    }
}

// Take away signs
function replace_sign(number) {
    number_string = number.innerHTML;
    if(number_string.indexOf('-') > -1) { // If the number is negative, dont erase the -
        return parseInt(number_string)
    }
    number_string = number_string.replace(/[^\d.]/g, '' ); // Get rid of +
    return parseInt(number_string);
}

// Function to show div
function show(category) {
    category.style.display = "block";
}

// Function to hide div
function hide(category) {
    category.style.display = "none";
}

// Listeners //
option1.addEventListener("click",onclick_option1);
option2.addEventListener("click",onclick_option2);
end_turn_button.addEventListener("click", onclick_end_turn);