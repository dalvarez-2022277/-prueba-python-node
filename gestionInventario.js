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

function mostrarProductos() {
    const productos = leerProductos();
    console.log('\nProductos en el inventario:');
    productos.forEach(producto => {
        console.log(`ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: Q${producto.precio}`);
    });
}

function agregarProducto() {
    rl.question('Ingrese el nombre del producto: ', (nombre) => {
        rl.question('Ingrese el precio del producto: ', (precio) => {
            const productos = leerProductos();
            const nuevoProducto = {
                id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
                nombre: nombre,
                precio: parseFloat(precio)
            };

            productos.push(nuevoProducto);
            fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
            console.log('Producto agregado exitosamente.');
            menu();
        });
    });
}


function eliminarProducto() {
    rl.question('Ingrese el ID del producto a eliminar: ', (id) => {
      const productos = leerProductos();
      const index = productos.findIndex(p => p.id === parseInt(id));
  
      if (index !== -1) {
        productos.splice(index, 1);
        fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
        console.log('Producto eliminado exitosamente.');
      } else {
        console.log('Producto no encontrado.');
      }
      menu();
    });
  }
  
  function menu() {
    console.log('\n¿Qué desea hacer?');
    console.log('1. Mostrar productos');
    console.log('2. Agregar producto');
    console.log('3. Eliminar producto');
    console.log('4. Salir');
  
    rl.question('Seleccione una opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          mostrarProductos();
          menu();
          break;
        case '2':
          agregarProducto();
          break;
        case '3':
          eliminarProducto();
          break;
        case '4':
          rl.close();
          break;
        default:
          console.log('Opción no válida. Intente de nuevo.');
          menu();
          break;
      }
    });
  }
  
  menu();


  //para iniciar el script se debe de correr el comando node gestionInventario.js