// Inicio mvc.js

let express = require('express');
let app = express(); // Creación de la App.
let controllerInicio = require('./controllers/controllerInicio');


app.use('/', (req, res, next) => {
    next();
}); // Inicializa visitas y comienza la App.

app.get('/', controllerInicio.cInicio);

app.listen(4000); // Puerto de escucha.

// Fin mvc.js