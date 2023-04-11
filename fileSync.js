const fs = require('fs');

fs.writeFileSync('./ejemplo.txt', 'Hola esto es una prueba 0');

if (fs.existsSync('./ejemplo.txt')) {
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido)

    fs.appendFileSync('./ejemplo.txt', '\nMas contenido');

    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido)

    fs.unlinkSync('./ejemplo.txt')
}