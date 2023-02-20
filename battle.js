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
onra_size = document.getElementById("onra_size");
onra_attack_menu = document.getElementById("onra_attack");
onra_defense_menu = document.getElementById("onra_defense");
onra_morale_menu = document.getElementById("onra_morale");

onra_army_change = document.getElementById("onra_army_change");
enemy_army_change = document.getElementById("enemy_army_change");

button_retreat = document.getElementById("button_retreat");
button_start = document.getElementById("button_start");

// Set ints //
onra_size_int = parseInt(infantry.innerHTML);
onra_attack_int = replace_sign(onra_attack);
onra_defense_int = replace_sign(onra_defense);
onra_morale_int = replace_sign(onra_morale) * 0.01;
onra_morale_int = Math.round((onra_morale_int + Number.EPSILON) * 100) / 100

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

// Choose enemy depending on event
enemy_name = "Enemy";
enemy_size_int = 500;
enemy_attack_int = 5;
enemy_defense_int = 10;
enemy_morale_int = 0.8;

// Set info on battle menu
function update_info() {
    onra_size.innerHTML = infantry.innerHTML;
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



// Battle Function //
function battle() {



    // Army 1 attacks army 2
    damage1 = onra_size_int * onra_attack_int / enemy_defense_int;
    casualties1 = Math.round(damage1 * (1 - enemy_morale_int));
    
    // Army 2 attacks army 1
    damage2 = enemy_size_int * enemy_attack_int / onra_defense_int;
    casualties2 =  Math.round(damage2 * (1 - onra_morale_int));
    enemy_size_int -= casualties1;
    onra_size -= casualties2;

    if(onra_size_int <= 0 || enemy_size_int <= 0) {
        casualties1 = enemy_size_int - 0;
        casualties2 = onra_size_int -0;
    }

    console.log(`\n${"Onra"} lost ${casualties2} soldiers`);
    console.log(`${enemy_name} lost ${casualties1} soldiers`);
    console.log(`${"Onra"} has ${onra_size_int} soldiers left`);
    console.log(`${enemy_name} has ${enemy_size_int} soldiers left`);

    update_info();

    // Update army changes
    onra_army_change.style.visibility = "visible";
    onra_army_change.style.color ="tomato";
    onra_army_change.innerHTML = "-" + casualties2;

    enemy_army_change.style.visibility = "visible";
    enemy_army_change.style.color ="tomato";
    enemy_army_change.innerHTML = "-" + casualties1;
}
