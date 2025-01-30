const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function leerProductos() {
    const productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
    return productos;
}

