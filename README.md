
# Proyecto Web Cursos - Plataforma de Formación Digital

## Descripción del Proyecto

Este proyecto tiene como objetivo crear una plataforma de gestión de cursos en línea que permita a los usuarios ver una lista de cursos disponibles, agregar nuevos cursos, y obtener más información sobre ellos. La aplicación está desarrollada utilizando HTML, CSS, JavaScript para el frontend, y Node.js para el backend.

### Características Principales

- **Visualización de Cursos Disponibles**: Los usuarios pueden ver una lista de cursos disponibles en la página de inicio y en una sección específica para cursos.
- **Agregar Nuevos Cursos**: Un formulario permite a los usuarios agregar nuevos cursos, los cuales se sincronizan con el backend.
- **Ver Más Información del Curso**: Cada curso tiene un botón para obtener detalles adicionales desde un servicio web externo.

## Uso de LocalStorage y Enriquecimiento con Servicio Web

### Almacenamiento de Datos en el Cliente

Para mejorar la eficiencia del proyecto y proporcionar una mejor experiencia de usuario, se optó por almacenar la información de los cursos en el cliente utilizando **LocalStorage**. Esta técnica nos permite guardar datos de manera local en el navegador del usuario, evitando que se necesite realizar una solicitud al servidor cada vez que se accede a la página. De esta manera, los cursos se pueden mostrar de forma instantánea, mejorando el rendimiento de la aplicación.

Los cursos se obtienen inicialmente desde el servidor, y luego se almacenan en **LocalStorage** para ser reutilizados cuando el usuario vuelve a cargar la página. Esta estrategia asegura una carga rápida de los cursos y reduce la dependencia del servidor.

### Enriquecimiento de los Cursos desde un Servicio Web Externo

Además, se añadió una funcionalidad para enriquecer los datos de los cursos con información adicional proveniente de un servicio web externo. Al cargar los cursos, se realiza una solicitud a un servicio de instructores para obtener más detalles sobre cada uno de ellos, como sus credenciales o experiencia. Estos datos enriquecen la información que se presenta al usuario, proporcionando un contexto más completo sobre cada curso.

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Almacenamiento Local**: LocalStorage en el navegador
- **Servicio Web Externo**: Integración con una API externa para obtener detalles del instructor

## Instalación y Ejecución del Proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/usuario/Web-Cursos.git
   ```

2. **Instalar las dependencias**:
   ```bash
   cd Web-Cursos/Back_End
   npm install
   ```

3. **Iniciar el servidor**:
   ```bash
   node server.js
   ```

4. **Abrir el proyecto**: Abrir `index.html` en un navegador para visualizar la aplicación.

## Consideraciones Finales

Este proyecto fue diseñado para mejorar la experiencia del usuario al interactuar con cursos en línea, permitiendo una navegación rápida y eficiente. Utilizar **LocalStorage** para almacenar datos localmente minimiza el uso de la red y mejora la carga de páginas. Además, la integración con un servicio web externo añade valor al proporcionar información más detallada sobre cada curso.
