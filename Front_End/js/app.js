document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los botones con la clase 'details-btn'
    const detailsBtns = document.querySelectorAll('.details-btn');

    // Iteramos sobre cada botón y le añadimos un evento click
    detailsBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Verificar si ya se están mostrando los detalles
            const courseDiv = button.closest('.course');
            const detailsDiv = courseDiv.querySelector('.course-details');

            if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
                // Realizar la solicitud a la API para obtener los detalles del curso
                fetch(`http://localhost:3000/api/courses/${index + 1}`)
                    .then(response => response.json())
                    .then(data => {
                        // Mostrar los detalles obtenidos de la API
                        detailsDiv.innerHTML = `
                            <p><strong>Descripción:</strong> ${data.description}</p>
                            <p><strong>Duración:</strong> ${data.duration}</p>
                        `;
                        detailsDiv.style.display = 'block';
                        button.textContent = 'Ocultar detalles';
                    })
                    .catch(error => {
                        console.error('Error al obtener los detalles del curso:', error);
                        detailsDiv.innerHTML = '<p>Error al cargar los detalles del curso.</p>';
                        detailsDiv.style.display = 'block';
                        button.textContent = 'Ocultar detalles';
                    });
            } else {
                // Ocultar los detalles si están visibles
                detailsDiv.style.display = 'none';
                button.textContent = 'Ver más detalles';
            }
        });
    });
});