// Get elemets by ID //
end_turn_button = document.getElementById("end_turn");
event_2_title = document.getElementById("event_2_title");
event_2_description = document.getElementById("event2_description");
effect1_desc = document.getElementById("effect1_desc");
effect2_desc = document.getElementById("effect2_desc");

event_button = document.getElementById("event_button");

event_type = document.getElementById("event_type");

alert_2 = document.getElementById("alert_2");
event_2_option1 = document.getElementById("option1");
event_2_option2 = document.getElementById("option2");

tab_economy = document.getElementById("tab_economy");
tab_military = document.getElementById("tab_military");
tab_social = document.getElementById("tab_social");

topmenu = document.getElementById("topmenu");

// Variables //
happines = document.getElementById("happines");
event_id = 0;

// Click functions
function onclick_event_2_option1() {
    if(event_id == 1) {
        hide(alert_2);
        event_button.style.display = "none";
        end_turn_button.disabled = false;
        console.log("Dies");
        show_gui();
    }

}

function onclick_event_2_option2() {
    if(event_id == 1) {
        hide(alert_2);
        event_type.innerHTML = "12";
    }
}

function hide_gui() {
    hide(tab_economy);
    hide(tab_military);
    hide(tab_social);
    hide(topmenu);
}

function show_gui() {
    show(tab_economy);
    show(tab_military);
    show(tab_social);
    show(topmenu);
}

// End turn
function onclick_event_button() {
    hide_gui();
    show(alert_2);
}


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
            choose_event(1); // Choose the event ID
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

/// EVENTS //
function choose_event(eventID) {
    show(event_button);
    end_turn_button.disabled = true;
    switch(eventID) {
        case 1:
            event_id = 1; // Set the global event ID
            // Show info about the event
            event_2_title.innerHTML = "Citizen take up arms";
            event_2_description.innerHTML = "Due to low happines in your government, citizen take up arms and arm themselves";
            event_2_option1.innerHTML = "We surrender";
            effect1_desc.innerHTML = "<span style='color: tomato'>Rebels take the country</span>";
            event_2_option2.innerHTML = "We will fight to the last man!";
            effect2_desc.innerHTML = "A battle starts against the rebels<br><br>";
    }
}


// Listeners //
event_2_option1.addEventListener("click",onclick_event_2_option1);
event_2_option2.addEventListener("click",onclick_event_2_option2);
end_turn_button.addEventListener("click", onclick_end_turn);
event_button.addEventListener("click", onclick_event_button);