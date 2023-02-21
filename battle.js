// Variables

infantry = document.getElementById("infantry");


onra_attack = document.getElementById("army_attack");
onra_defense = document.getElementById("army_defense");
onra_morale = document.getElementById("army_morale");

enemy_name_menu = document.getElementById("enemy_name");
enemy_size_menu = document.getElementById("enemy_size");
enemy_attack_menu = document.getElementById("enemy_attack");
enemy_defense_menu = document.getElementById("enemy_defense");
enemy_morale_menu = document.getElementById("enemy_morale");

// Elements
battle_menu = document.getElementById("battle");

onra_size = document.getElementById("onra_size");
onra_attack_menu = document.getElementById("onra_attack");
onra_defense_menu = document.getElementById("onra_defense");
onra_morale_menu = document.getElementById("onra_morale");

onra_army_change = document.getElementById("onra_army_change");
enemy_army_change = document.getElementById("enemy_army_change");

button_retreat = document.getElementById("button_retreat");
button_start = document.getElementById("button_start");

event_type = document.getElementById("event_type");

battle_title = document.getElementById("battle_title");
battle_description = document.getElementById("battle_description");
button_end_battle = document.getElementById("end_battle");

event_button = document.getElementById("event_button");

end_turn_button = document.getElementById("end_turn");

// Set ints //
infantry_int = parseInt(infantry.innerHTML);
onra_attack_int = replace_sign(onra_attack);
onra_defense_int = replace_sign(onra_defense);
onra_morale_int = replace_sign(onra_morale) * 0.01;
onra_morale_int = Math.round((onra_morale_int + Number.EPSILON) * 100) / 100

enemy_name = "0";
enemy_size_int = 0;
enemy_attack_int = 0;
enemy_defense_int = 0;
enemy_morale_int = 0;

// Function that returns float
function getRandomFloat(min, max) {
    float = Math.random() * (max - min) + min
    return Math.round((float + Number.EPSILON) * 100) / 100
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

// Change color when there are percentages
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


function onclick_button_retreat() {

}

function onclick_button_start() {
    battle();
}

function onclick_button_end_battle() {
    hide(battle_menu);
    show_gui();
    end_turn_button.disabled = false;
}

// Set army depending on event
function set_enemy_stats() {
    switch(event_type.innerHTML) {
        case "12":
            enemy_name = "Rebel Army";
            enemy_size_int = getRandom(100,500);
            enemy_attack_int = getRandom(1, 5);
            enemy_defense_int = getRandom(5, 10);
            enemy_morale_int = getRandomFloat(0.2, 0.8);
            event_type.innerHTML="0"
            update_info();
    }
}

// Set battle info
function set_battle_info() {
    switch(event_type.innerHTML) {
        case "12":
            battle_title.innerHTML = "Battle:";
            hide(battle_description);
            hide(button_end_battle);
            button_retreat.style.visibility = "visible";
            button_start.style.visibility = "visible";
            enemy_army_change.style.visibility = "hidden";
            onra_army_change.style.visibility = "hidden";
    }
}

// Check if there is an event with battle
function check_event() {
    if(event_type.innerHTML == "12") {
        hide(event_button);
        // Choose enemy depending on event
        set_battle_info();
        set_enemy_stats();
        show(battle_menu);
    }
}

// Constantly check
setInterval(check_event, 1000);

// Set info on battle menu
function update_info() {
    infantry.innerHTML = infantry_int.toString();

    onra_size.innerHTML = infantry_int.toString();
    onra_attack_menu.innerHTML = onra_attack.innerHTML;
    onra_defense_menu.innerHTML = onra_defense.innerHTML;
    onra_morale_menu.innerHTML = onra_morale.innerHTML;
    
    enemy_name_menu.innerHTML = enemy_name;
    enemy_size_menu.innerHTML = enemy_size_int.toString();
    enemy_attack_menu.innerHTML = enemy_attack_int.toString() +"%";
    enemy_defense_menu.innerHTML = enemy_defense_int.toString() + "%";
    enemy_morale_menu.innerHTML = (enemy_morale_int * 100).toString() + "%";    
}

update_info();

// Update variables
setInterval(change_color_percentage, 1000, onra_attack_menu);
setInterval(change_color_percentage, 1000, onra_defense_menu);
setInterval(change_color_percentage, 1000, onra_morale_menu);

setInterval(change_color_percentage, 1000, enemy_attack_menu);
setInterval(change_color_percentage, 1000, enemy_defense_menu);
setInterval(change_color_percentage, 1000, enemy_morale_menu);


// Function to get random int
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function end_battle(winner) {
    // If Onra wins
    if(winner == 1) {
        battle_title.innerHTML = "Onran Army Victory!";
        battle_description.innerHTML = "Rebeles are crushed!";
        battle_description.style.visibility = "visible";

        button_retreat.style.visibility = "hidden";
        button_start.style.visibility = "hidden";
        show(button_end_battle);

        event_type.innerHTML = "0";
    }

    //If enemy wins
}

// Battle Function //
function battle() {

    // Make temp variables for variating battle result
    onra_attack_temp = getRandom(onra_attack_int-2, onra_attack_int);
    onra_defense_temp = getRandom(onra_defense_int-2, onra_defense_int);
    enemy_attack_temp = getRandom(enemy_attack_int-2, enemy_attack_int);
    enemy_defense_temp = getRandom(enemy_defense_int-2, enemy_defense_int);

    // Army 1 attacks army 2
    damage1 = infantry_int * onra_attack_temp / enemy_defense_temp;
    casualties1 = Math.round(damage1 * (1 - enemy_morale_int));
    
    // Army 2 attacks army 1
    damage2 = enemy_size_int * enemy_attack_temp / onra_defense_temp;
    casualties2 = Math.round(damage2 * (1 - onra_morale_int));

    
    // If size gets to zero kill al soldiers
    if((infantry_int - casualties2) <= 0) {
        casualties2 = Math.abs(infantry_int - 0);
        infantry_int = 0;
        enemy_size_int -= casualties1;
    } else if((enemy_size_int - casualties1) <= 0) {
        casualties1 = Math.abs(enemy_size_int - 0);
        enemy_size_int = 0;
        infantry_int -= casualties2;
    } else {
        enemy_size_int -= casualties1;
        infantry_int -= casualties2;
    }


    // Debug
    console.log(`\n${"Onra"} lost ${casualties2} soldiers`);
    console.log(`Attack: ${onra_attack_temp}`);
    console.log(`Defense: ${onra_defense_temp}`);
    console.log(`${enemy_name} lost ${casualties1} soldiers`);
    console.log(`Attack: ${enemy_attack_temp}`);
    console.log(`Defense: ${enemy_defense_temp}`);
    console.log(`${"Onra"} has ${infantry_int} soldiers left`);
    console.log(`${enemy_name} has ${enemy_size_int} soldiers left`);

    update_info();

    // Update army changes
    onra_army_change.style.visibility = "visible";
    onra_army_change.style.color ="tomato";
    onra_army_change.innerHTML = "-" + casualties2;

    enemy_army_change.style.visibility = "visible";
    enemy_army_change.style.color ="tomato";
    enemy_army_change.innerHTML = "-" + casualties1;

    if(infantry_int == 0) {
        end_battle(2);
    } else if(enemy_size_int == 0) {
        end_battle(1);
    }

}

// Listeners //
button_retreat.addEventListener("click", onclick_button_retreat);
button_start.addEventListener("click", onclick_button_start);
button_end_battle.addEventListener("click", onclick_button_end_battle);