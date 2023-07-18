'use strict';

const selectSign = document.querySelector('.sign-selection');
const horoscopeContainer = document.querySelector('.card-container');

selectSign.addEventListener('change', function () {
	const sign = selectSign.value;
	// const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
	fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			horoscopeContainer.innerHTML = `<h2>${data.date_range}</h2>
            <p>${data.description}</p>
            <ul>
            <li><strong>Lucky Number : </strong>${data.lucky_number}</li>
            <li><strong>Lucky Colour : </strong>${data.color}</li>
            <li><strong>Mood : </strong>${data.mood}</li>
            <li><strong>Compatibility :</strong> ${data.compatibility}</li>
            </ul>
            `;
		});
});
