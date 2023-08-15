document.addEventListener("DOMContentLoaded", function() {
    var sideMenu = document.getElementById('sideMenu');
    var toggleButton = document.getElementById('toggleMenu');
    var tabs = document.querySelectorAll('[data-target]');
    var endTurn = document.getElementById('endTurn');
    
    toggleButton.addEventListener('click', function() {
        if (sideMenu.style.left === '0%' || !sideMenu.style.left) {
            sideMenu.style.left = '-10%';  
            toggleButton.style.left = '0.5%'; 
        } else {
            sideMenu.style.left = '0%';  
            toggleButton.style.left = '10.5%'; 
        }
    });

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var targetId = tab.getAttribute('data-target');
            
            // Hide all content menus
            document.querySelectorAll('[id$="Menu"]:not(#sideMenu):not(#toggleMenu)').forEach(function(menu) {
                menu.style.display = 'none';
            });
            
            // Show the targeted menu and all its children
            var targetMenu = document.getElementById(targetId);
            targetMenu.style.display = 'block';
            
            if (targetMenu.classList.contains('content-container')) {
                var childDivs = targetMenu.querySelectorAll('div');
                childDivs.forEach(function(childDiv) {
                    childDiv.style.display = 'block';
                });
            }
        });
    });

    endTurn.addEventListener('click', function() {
        MainWorld.day += 1;

        var days = document.getElementById('day');

        days.textContent = MainWorld.day;

        // Restore energy
        Player1.energy = 3;

        // Display it
        Player1.displayData();
    })
});




