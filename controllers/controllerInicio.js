// Inicio controllerInicio.js

let path = require('path');
let camino = path.join(__dirname + '\\..\\vistas');
let vistaInicio = require(camino + '/vistaInicio.js');

exports.cInicio = (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(vistaInicio.vInicio);
};



// Fin controllerInicio.js