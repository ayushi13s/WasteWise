// script.js
document.getElementById("salesForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const title = document.getElementById("saleTitle").value;
    const description = document.getElementById("saleDescription").value;
    const imageUrl = document.getElementById("saleImage").value;

    // Create a new sales card
    const newCard = document.createElement("div");
    newCard.classList.add("sales-card");
    
    // Add content to the new card
    newCard.innerHTML = `
        <img src="${imageUrl}" alt="Sale Image">
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="popup">${title}: ${description}</div>
    `;

    // Add the new card to the sales cards section
    document.getElementById("salesCards").appendChild(newCard);

    // Reset the form fields
    document.getElementById("salesForm").reset();
});
