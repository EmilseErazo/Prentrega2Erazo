let productoCandy = [];

let categoriaProductoAgregado;
let precioProductoAgregado;
do {
    categoriaProductoAgregado = prompt ("Ingresa el producto elegido. Para terminar, escribe SALIR.");
    precioProductoAgregado = parseInt(prompt("Ingresa el monto"));
} while(categoriaProductoAgregado !== "SALIR");
