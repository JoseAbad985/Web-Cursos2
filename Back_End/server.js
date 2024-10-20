const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let courses = [
    {
        id: 1,
        name: 'Curso de JavaScript',
        instructorId: 101,
        instructor: 'Juan Pérez',
        startDate: '2023-01-01',
        duration: '8 semanas',
        description: 'Aprende los fundamentos de JavaScript, el lenguaje más popular para desarrollo web.',
        fullDescription: 'Descripción completa del curso de JavaScript.',
        requirements: 'Conocimientos básicos de programación.',
        price: '100 USD'
    }
];

// Endpoint para obtener todos los cursos
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Endpoint para agregar un curso nuevo
app.post('/api/courses', (req, res) => {
    const newCourse = req.body;
    newCourse.id = courses.length + 1;
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
