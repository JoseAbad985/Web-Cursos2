document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos los cursos desde la API
    fetch('http://localhost:3000/api/courses')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener la lista de cursos');
            }
            return response.json();
        })
        .then(courses => {
            displayCourses(courses);
        })
        .catch(error => {
            console.error('Error al obtener los cursos:', error);
        });
});

function displayCourses(courses) {
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = '';

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-card');

        courseDiv.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Fecha de Inicio:</strong> ${course.startDate}</p>
            <p><strong>Duración:</strong> ${course.duration}</p>
            <p>${course.description}</p>
        `;

        coursesContainer.appendChild(courseDiv);
    });
}