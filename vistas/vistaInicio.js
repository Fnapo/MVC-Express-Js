// Inicio vistaInicio.js

let fs = require('fs');
let constantes = require(__dirname + '/constantes.js');
let nombreTXT = 'visitas.txt';
let visitas = (fs.existsSync(nombreTXT) ? fs.readFileSync(nombreTXT) : '');
let misVisitas = '';

if (visitas.length == 0) {
    visitas = 1;
} else {
    ++visitas;
}
fs.writeFileSync(nombreTXT, visitas);
misVisitas = (visitas == 1 ? ': 1 VISITA.' : ': ' + visitas + ' VISITAS.');

/**
 * 
 * @param {string} nombre 
 */
const lecturaFichero = (nombre) => {
    let lectura = fs.readFileSync(nombre, 'utf8');

    return lectura;
};

exports.vInicio = lecturaFichero(__dirname + '/inicio01.html') + constantes.estilos + lecturaFichero(__dirname + '/inicio02.html') +
    misVisitas + lecturaFichero(__dirname + '/inicio03.html');

// Fin vistaInicio.js