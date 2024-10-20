document.addEventListener('DOMContentLoaded', () => {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
        renderCourses(JSON.parse(storedCourses));
    } else {
        fetchAndStoreCourses();
    }

    // Configurar el formulario para agregar un nuevo curso
    const addCourseForm = document.querySelector('#add-course-form');
    if (addCourseForm) {
        addCourseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newCourse = {
                name: document.querySelector('#course-name').value,
                instructor: document.querySelector('#course-instructor').value,
                startDate: document.querySelector('#course-start-date').value,
                duration: document.querySelector('#course-duration').value,
                description: document.querySelector('#course-description').value,
                fullDescription: 'Descripción completa no disponible',
                requirements: 'No disponible',
                price: 'No disponible'
            };
            addCourse(newCourse);
        });
    }
});

function fetchAndStoreCourses() {
    fetch('http://localhost:3000/api/courses')
        .then(response => response.json())
        .then(courses => {
            localStorage.setItem('courses', JSON.stringify(courses));
            renderCourses(courses);
        })
        .catch(error => {
            console.error('Error al obtener los cursos:', error);
        });
}

function addCourse(course) {
    fetch('http://localhost:3000/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())
        .then(newCourse => {
            const courses = JSON.parse(localStorage.getItem('courses')) || [];
            courses.push(newCourse);
            localStorage.setItem('courses', JSON.stringify(courses));
            renderCourses(courses);
        })
        .catch(error => {
            console.error('Error al agregar el curso:', error);
        });
}

function renderCourses(courses) {
    const coursesContainer = document.querySelector('#courses-container');
    if (coursesContainer) {
        coursesContainer.innerHTML = '';
        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course');
            courseDiv.innerHTML = `
                <h3>${course.name}</h3>
                <p><strong>Instructor:</strong> ${course.instructor}</p>
                <p><strong>Fecha de Inicio:</strong> ${course.startDate}</p>
                <p><strong>Duración:</strong> ${course.duration}</p>
                <p>${course.description}</p>
                <button class="details-btn">Ver más detalles</button>
                <div class="course-details" style="display: none;">
                    <p><strong>Descripción Completa:</strong> ${course.fullDescription}</p>
                    <p><strong>Requisitos:</strong> ${course.requirements}</p>
                    <p><strong>Precio:</strong> ${course.price}</p>
                </div>
            `;
            coursesContainer.appendChild(courseDiv);

            // Configurar el botón para mostrar/ocultar detalles
            const detailsBtn = courseDiv.querySelector('.details-btn');
            const detailsDiv = courseDiv.querySelector('.course-details');
            detailsBtn.addEventListener('click', () => {
                if (detailsDiv.style.display === 'none') {
                    detailsDiv.style.display = 'block';
                    detailsBtn.textContent = 'Ocultar detalles';
                } else {
                    detailsDiv.style.display = 'none';
                    detailsBtn.textContent = 'Ver más detalles';
                }
            });
        });
    }
}
