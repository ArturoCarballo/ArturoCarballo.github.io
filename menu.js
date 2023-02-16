// Get elemets by ID //
menu_economy = document.getElementById("economy");
menu_military = document.getElementById("military");
menu_social = document.getElementById("social");
end_turn_button = document.getElementById("end_turn");
tab_economy = document.getElementById("tab_economy");
tab_military = document.getElementById("tab_military");
tab_social = document.getElementById("tab_social");

// Variables //
month = document.getElementById("month");
year = document.getElementById("year");

hide(tab_military);
hide(tab_social);

//Functions for clicking //
function onclick_economy() {
    menu_economy.className = "active"; // Activate economy
    // Deactivate others
    menu_military.className -= "active";
    menu_social.className -= "active";

    show(tab_economy);
    hide(tab_military);
    hide(tab_social);
}

function onclick_military() {
    menu_military.className = "active"; // Activate military
    // Deactivate others
    menu_economy.className -= "active";
    menu_social.className -= "active";

    hide(tab_economy);
    show(tab_military);
    hide(tab_social);
}

function onclick_social() {
    menu_social.className = "active"; // Activate military
    // Deactivate others
    menu_economy.className -= "active";
    menu_military.className -= "active";

    hide(tab_economy);
    hide(tab_military);
    show(tab_social);
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
}

// Menu config //
// Function to show div
function show(category) {
    category.style.display = "block";
}

// Function to hide div
function hide(category) {
    category.style.display = "none";
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

// Listeners //
menu_economy.addEventListener("click",onclick_economy);
menu_military.addEventListener("click", onclick_military);
menu_social.addEventListener("click", onclick_social);
end_turn_button.addEventListener("click", onclick_end_turn);