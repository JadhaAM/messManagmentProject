let menubar=document.querySelector(".menuBar i");
let closeBar=document.querySelector(".closeBar i");
let subNavBar=document.querySelector(".subNav");

menubar.addEventListener("click", () => {
    
    if (subNavBar.style.display === "none") {
        subNavBar.style.display = "flex";
    } else {
        subNavBar.style.display = "none";
    }
});

 closeBar.addEventListener("click", function() {
    if (subNavBar.style.display === "none") {
        subNavBar.style.display = "flex";
    } else {
        subNavBar.style.display = "none";
    }
 });

//  login btn 
        function toggleDropdown() {
            var dropdownContent = document.getElementById("dropdown-content");
            dropdownContent.classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
 

        


