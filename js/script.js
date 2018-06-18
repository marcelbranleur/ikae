document.addEventListener("DOMContentLoaded", function(event) {
    var menu = document.getElementById("menu");
    var icon = document.getElementById("icon");
    
    icon.addEventListener("click", function() {
        if (menu.style.display == "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
        
    });

  });