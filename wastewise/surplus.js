document.getElementById('ngoSearch').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const ngoList = [
        "NGO 1 - Helping Hands",
        "NGO 2 - Food for All",
        "NGO 3 - Green Earth",
        "NGO 4 - Community Support"
    ];
    
    const filteredList = ngoList.filter(ngo => ngo.toLowerCase().includes(searchQuery));
    const ngoDropdown = document.getElementById('ngoList');
    ngoDropdown.innerHTML = "";
    
    if (filteredList.length > 0) {
        ngoDropdown.style.display = "block";
        filteredList.forEach(ngo => {
            const item = document.createElement('div');
            item.textContent = ngo;
            item.addEventListener('click', function() {
                document.getElementById('ngoSearch').value = ngo;
                ngoDropdown.style.display = "none";
            });
            ngoDropdown.appendChild(item);
        });
    } else {
        ngoDropdown.style.display = "none";
    }
});
document.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    const heading = document.getElementById('main-heading');

    // Check if scrolled past the threshold to fade out the heading
    if (window.scrollY > 50) {
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
});
