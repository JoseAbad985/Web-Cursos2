document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo de curso inicial
    const courses = [
        {
            name: 'Curso de JavaScript',
            instructor: 'Juan Pérez',
            startDate: '2023-11-01',
            duration: '8 semanas',
            description: 'Aprende los fundamentos de JavaScript, el lenguaje más popular para desarrollo web.'
        },
        // Puedes añadir más cursos aquí
    ];

    const coursesContainer = document.getElementById('courses');

    // Función para mostrar los cursos en la página
    function displayCourses() {
        coursesContainer.innerHTML = '';

        courses.forEach((course, index) => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course');

            courseDiv.innerHTML = `
                <h3>${course.name}</h3>
                <p><strong>Profesor:</strong> ${course.instructor}</p>
                <p><strong>Fecha de Inicio:</strong> ${course.startDate}</p>
                <p><strong>Duración:</strong> ${course.duration}</p>
                <button class="details-btn">Ver más detalles</button>
                <div class="course-details" style="display: none;">
                    <p>${course.description}</p>
                </div>
            `;

            // Añadir evento al botón "Ver más detalles"
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

            coursesContainer.appendChild(courseDiv);
        });
    }

    displayCourses();
});

document.addEventListener('DOMContentLoaded', () => {
    // Código existente para index.html...

    // Código específico para agregar_curso.html
    if (document.getElementById('course-form')) {
        const courseForm = document.getElementById('course-form');

        courseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Lógica para validar y agregar el curso
        });
    }
});

courseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los valores de los campos
    const name = document.getElementById('course-name').value.trim();
    const instructor = document.getElementById('instructor-name').value.trim();
    const startDate = document.getElementById('start-date').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value.trim();

    // Validar que los campos no estén vacíos
    if (name === '' || instructor === '' || startDate === '' || duration === '' || description === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validar que la duración sea un número positivo
    if (isNaN(duration) || duration <= 0) {
        alert('La duración debe ser un número positivo.');
        return;
    }

    // Si las validaciones pasan, crear el objeto del curso
    const newCourse = {
        name,
        instructor,
        startDate,
        duration: `${duration} semanas`,
        description
    };

    // Guardar el curso en localStorage y redirigir
});

// Dentro del event listener del formulario, después de las validaciones
// Obtener los cursos existentes del localStorage
let courses = JSON.parse(localStorage.getItem('courses')) || [];

// Agregar el nuevo curso al array
courses.push(newCourse);

// Guardar el array actualizado en localStorage
localStorage.setItem('courses', JSON.stringify(courses));

// Redirigir a index.html o mostrar un mensaje de éxito
alert('¡Curso agregado exitosamente!');
window.location.href = 'index.html';


function displayCourses() {
    // Obtener los cursos del localStorage
    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    coursesContainer.innerHTML = '';

    if (courses.length === 0) {
        coursesContainer.innerHTML = '<p>No hay cursos disponibles.</p>';
        return;
    }

    courses.forEach((course, index) => {
        // El resto del código permanece igual...
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Verificar si hay cursos en localStorage
    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Si no hay cursos, agregamos el curso de ejemplo
    if (courses.length === 0) {
        courses = [
            {
                name: 'Curso de JavaScript',
                instructor: 'Juan Pérez',
                startDate: '2023-11-01',
                duration: '8 semanas',
                description: 'Aprende los fundamentos de JavaScript, el lenguaje más popular para desarrollo web.'
            }
        ];
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    // Llamamos a displayCourses()
    if (document.getElementById('courses')) {
        displayCourses();
  
    }

        // Verificar si estamos en index.html
    if (document.getElementById('courses')) {
        // Obtener cursos locales
        let courses = JSON.parse(localStorage.getItem('courses')) || [];

        // Obtener cursos del "servicio web"
        fetch('js/cursos_extra.json')
            .then(response => response.json())
            .then(data => {
                // Combinar los cursos locales con los obtenidos del servicio web
                courses = courses.concat(data);
                // Mostrar los cursos combinados
                displayCourses(courses);
            })
            .catch(error => {
                console.error('Error al obtener los cursos del servicio web:', error);
                // Mostrar solo los cursos locales en caso de error
                displayCourses(courses);
            });
    }
});


function displayCourses(courses) {


    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    coursesContainer.innerHTML = '';

    if (courses.length === 0) {
        coursesContainer.innerHTML = '<p>No hay cursos disponibles.</p>';
        return;
    }

    courses.forEach((course, index) => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');

        // Si es el último curso agregado, añadimos una clase especial
        if (index === courses.length - 1) {
            courseDiv.classList.add('new-course');
        }

        <button class="delete-btn">Eliminar curso</button>
    });

    const deleteBtn = courseDiv.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
    // Confirmar la acción
    if (confirm('¿Estás seguro de que deseas eliminar este curso?')) {
        // Eliminar el curso del array y actualizar localStorage
        courses.splice(index, 1);
        localStorage.setItem('courses', JSON.stringify(courses));
        // Volver a mostrar los cursos actualizados
        displayCourses();
    }
});

    
}


// Validar que la fecha de inicio no sea anterior a la fecha actual
const today = new Date().toISOString().split('T')[0];
if (startDate < today) {
    alert('La fecha de inicio no puede ser en el pasado.');
    return;
}

deleteBtn.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas eliminar este curso?')) {
        // Animación antes de eliminar
        courseDiv.style.transition = 'opacity 0.5s';
        courseDiv.style.opacity = '0';
        setTimeout(() => {
            // Eliminar el curso del array y actualizar localStorage
            courses.splice(index, 1);
            localStorage.setItem('courses', JSON.stringify(courses));
            // Volver a mostrar los cursos actualizados
            displayCourses();
        }, 500);
    }
});