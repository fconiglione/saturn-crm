document.addEventListener('DOMContentLoaded', function () {
    // Adding visual effects to the large header search bar
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearButton');
    clearButton.style.display = 'none';

    searchInput.addEventListener('input', function () {
        if (searchInput.value.trim() !== '') {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
    });

    clearButton.addEventListener('click', function () {
        searchInput.value = '';
        clearButton.style.display = 'none';
    });
});
function open_app_launcher() {
    var appLauncher = document.getElementById("app-launcher");
    var overlay = document.getElementById("overlay");

    appLauncher.style.display = "block";
    appLauncher.classList.remove("inactive");
    appLauncher.classList.add("active");
    document.getElementById("overlay").style.display = "block";

    overlay.style.display = "block";
    overlay.addEventListener("click", close_app_launcher);
    document.body.style.overflow = "hidden";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function close_app_launcher() {
    var appLauncher = document.getElementById("app-launcher");
    var overlay = document.getElementById("overlay");

    appLauncher.classList.remove("active");
    appLauncher.classList.add("inactive");
    document.getElementById("overlay").style.display = "none";

    overlay.style.display = "none";
    overlay.removeEventListener("click", close_app_launcher);
    document.body.style.overflow = "auto";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}