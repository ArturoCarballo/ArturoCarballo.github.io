// Detects button
var e_button = document.getElementById('economy_button');
var a_button = document.getElementById('army_button');

// Detects div
var e_stats = document.getElementById('economy_stats');
var a_stats = document.getElementById('army_stats');

// Function to show div
function show(category) {
    category.style.display = "block";
}

// Function to hide div
function hide(category) {
    category.style.display = "none";
}

// Functions for disabling them
function onclickButton_e() {
    e_button.disabled = true;
    // Enables all other buttons
    a_button.disabled = false;
    // Hides army stats and shows economy stats
    hide(a_stats);
    show(e_stats);
}

function onclickButton_a() {
    a_button.disabled = true;
    // Enables all other buttons
    e_button.disabled = false;
    // Hides army stats and shows economy stats
    hide(e_stats);
    show(a_stats);
}





// Listeners
e_button.addEventListener('click', onclickButton_e);
a_button.addEventListener('click', onclickButton_a);