document.addEventListener('DOMContentLoaded', () => {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
        renderCourses(JSON.parse(storedCourses));
    } else {
        fetchAndStoreCourses(); // Cargar los datos desde el servidor si no están en localStorage
    }
});

function renderCourses(courses) {
    const coursesContainer = document.querySelector('#courses-container');
    coursesContainer.innerHTML = '';

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${course.name}</h5>
                    <p class="card-text"><strong>Instructor:</strong> ${course.instructorDetails ? course.instructorDetails.name : course.instructor}</p>
                    <p class="card-text"><strong>Fecha de Inicio:</strong> ${course.startDate}</p>
                    <p class="card-text"><strong>Duración:</strong> ${course.duration}</p>
                    <p class="card-text">${course.description}</p>
                </div>
            </div>
        `;
        coursesContainer.appendChild(courseCard);
    });
}