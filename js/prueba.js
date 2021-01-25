var estudiantes = [
    {
       nombreEstudiante: 'Billy',
       testScore: 77
    },
    {
       nombreEstudiante: 'Sandra',
       testScore: 98
    },
    {
       nombreEstudiante: 'Michelle',
       testScore: 81
    },
    {
       nombreEstudiante: 'Jason',
       testScore: 76
    }
];
alert(JSON.stringify(estudiantes));
estudiantes.push({nombreEstudiante: 'Andrea', testScore: 100}, { nombreEstudiante: 'Timmy', testScore: 71});

alert(JSON.stringify(estudiantes));