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