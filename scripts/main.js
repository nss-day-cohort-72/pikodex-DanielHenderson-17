import { database } from "./database.js";

const generatePikomonCards = () => {
    const container = document.getElementById('container');
    let pikomonHTML = '';

    database.forEach((pikomon) => {
        pikomonHTML += `
            <div class="col-md-4 mx-auto">
                <div class="col-12 piko-card">
                    <img src="${pikomon.imageUrl}" class="piko-img img-fluid" alt="${pikomon.name}">
                    <div class="piko-info">
                        <h2 class="piko-name">${pikomon.name}</h2>
                        <p class="info-text">Category: ${pikomon.category}</p>
                        <p class="info-text">Abilities: ${pikomon.abilities}</p>
                        <p class="info-text">Weakness: ${pikomon.weakness}</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = pikomonHTML;
};

generatePikomonCards();
