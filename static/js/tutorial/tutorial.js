var driver = new Driver({
    allowClose: false,
    showButtons: true,         
    closeBtnText: 'Cerrar',      
    nextBtnText: 'Siguiente',
    prevBtnText: 'Anterior',   
    keyboardControl: true,
    
    opacity: 0.8,  // Background opacity (0 means only popovers and without overlay)
});

//Accedemos al boton de ayuda
let buttonHelpTrigger = document.getElementById('buttonHelpTutorialID');

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#a1_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Inicio.',
      description: 'Esta sección es la página principal de tu sitio web, aquí encontrarás una introducción a tu proyecto, así como un resumen de las secciones que encontrarás en el sitio.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a2_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Contenidos',
      description: 'En esta sección se presentan los temas y subtemas que se abordarán en el curso, con una breve descripción de cada uno.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a3_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Formulario',
      description: 'Aquí encontrarás una serie de actividades adicionales que te ayudarán a reforzar los temas vistos en clase.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a4_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Glosario',
      description: 'Esta sección contiene un listado de términos y conceptos clave utilizados en el curso, junto con sus definiciones.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a5_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Fuentes de consulta',
      description: 'En esta sección se incluyen una serie de recursos y materiales adicionales que te permitirán profundizar en los temas del curso, como libros, artículos y videos.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a6_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Descargar app móvil',
      description: 'En esta sección se proporciona información acerca de la aplicación móvil que se puede descargar para acceder al contenido del curso desde dispositivos móviles.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a7_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Bienvenida',
      description: 'En esta sección se da la bienvenida a los estudiantes y se les proporciona información básica acerca del curso, como el objetivo del mismo y el perfil del docente.',
      position: 'right' //right, left, bottom, top
    }
  },
  {
    element: '#a8_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Unidad de competencia',
      description: 'Esta sección se centra en la unidad de competencia del curso, presentando los objetivos específicos y las habilidades que se esperan que los estudiantes adquieran al completar el curso.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a9_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Metodología',
      description: 'En esta sección se describe la metodología utilizada para impartir el curso, incluyendo las estrategias y herramientas pedagógicas empleadas.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a10_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Evaluación de los aprendizajes',
      description: 'En esta sección se explica cómo se evaluará el aprendizaje de los estudiantes, qué criterios se utilizarán para evaluar y cómo se llevará a cabo la calificación.',
      position: 'bottom' //right, left, bottom, top
    }
  },
  {
    element: '#a11_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Contactos',
      description: 'En esta sección se proporciona información de contacto para que los estudiantes puedan comunicarse con el docente o el equipo de soporte técnico en caso de tener alguna duda o problema.',
      position: 'left' //right, left, bottom, top
    }
  },
  {
    element: '#a12_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Requerimientos',
      description: 'En esta sección se enumeran los requisitos técnicos necesarios para acceder al contenido del curso, como una conexión a internet estable y la descarga de software específico si es necesario.',
      position: 'left' //right, left, bottom, top
    }
  },
  {
    element: '#a13_tuto',
    popover: {
      className: 'first-step-popover-class',
      title: 'Manual de usuario',
      description: 'En esta sección puede descargar el manual de usuario.',
      position: 'left' //right, left, bottom, top
    }
  },
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelpTrigger.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})