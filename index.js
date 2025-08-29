 
//search button working
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
    // Remove spaces & make lowercase
    const query = searchInput.value.toLowerCase().replace(/\s+/g, '');

    cards.forEach(card => {
        const name = card.querySelector(".card-title")
                         .textContent
                         .toLowerCase()
                         .replace(/\s+/g, '');
        if (name.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});



//menu
