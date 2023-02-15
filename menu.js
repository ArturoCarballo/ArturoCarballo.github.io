// Get elemets by ID //
menu_economy = document.getElementById("economy");
menu_military = document.getElementById("military");
menu_society = document.getElementById("society");
end_turn_button = document.getElementById("end_turn");

// Variables //
month = document.getElementById("month");
year = document.getElementById("year");
budget = document.getElementById("budget");
budget_gain = document.getElementById("budget_gain");

//Functions for clicking //
function onclick_economy() {
    menu_economy.className = "active"; // Activate economy
    // Deactivate others
    menu_military.className -= "active";
    menu_society.className -= "active";
}

function onclick_military() {
    menu_military.className = "active"; // Activate military
    // Deactivate others
    menu_economy.className -= "active";
    menu_society.className -= "active";
}

function onclick_society() {
    menu_society.className = "active"; // Activate military
    // Deactivate others
    menu_economy.className -= "active";
    menu_military.className -= "active";
}

function onclick_end_turn() {
    month_int = parseInt(month.innerHTML); // Converts the string to an int
    year_int = parseInt(year.innerHTML);
    month_int += 1; // +1 month
    if(check_month(month_int)) { // Checks if month is bigger that 12, changes year if so
        month_int = 1;
        year_int += 1;
    }
    month.innerHTML = month_int.toString(); // Changes the html
    year.innerHTML = year_int.toString();

    change_values();
}

// Mechanics //
function check_month(month){
    if(month == 13) {
        return true;
    }
    else {
        return false;
    }
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

// Replace color
budget_gain_int = replace_sign(budget_gain);
if(budget_gain_int >= 1) {
    budget_gain.style.color = "MediumSeaGreen";
} else if(budget_gain_int <= -1) {
    budget_gain.style.color = "Tomato";
}

function change_values() {
    budget_int = parseInt(budget.innerHTML);
    budget_int += budget_gain_int;

    budget.innerHTML = budget_int.toString();
}

// Listeners //
menu_economy.addEventListener("click",onclick_economy);
menu_military.addEventListener("click", onclick_military);
menu_society.addEventListener("click", onclick_society);
end_turn_button.addEventListener("click", onclick_end_turn);