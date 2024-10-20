const express = require('express');
const path = require('path');
const cors = require('cors'); // Importar cors
const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

const courses = [
    {
        id: 1,
        name: 'Curso de JavaScript',
        instructor: 'Juan Pérez',
        startDate: '2023-11-01',
        duration: '8 semanas',
        description: 'Aprende los fundamentos de JavaScript, el lenguaje más popular para desarrollo web.'
    },
    // Puedes agregar más cursos aquí
];

// Servir archivos estáticos desde Front_End
app.use(express.static(path.join(__dirname, '../Front_End')));

// Ruta principal para servir el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front_End/index.html'));
});

// API para obtener detalles del curso
app.get('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (course) {
        res.json(course);
    } else {
        res.status(404).send({ error: 'Curso no encontrado' });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

app.get('/api/courses', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Curso de JavaScript",
            instructor: "Juan Pérez",
            startDate: "2023-01-01",
            duration: "8 semanas",
            description: "Aprende los fundamentos de JavaScript, el lenguaje más popular para desarrollo web."
        },
        // Puedes agregar más cursos aquí
    ]);
});