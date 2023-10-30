const navbarIcon = document.getElementById("navbarIcon");
const navbar = document.getElementById("navbar");

navbarIcon.addEventListener("click", () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
    
});