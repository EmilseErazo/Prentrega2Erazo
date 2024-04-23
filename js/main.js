let compraMensuales = [
  {
    categoria: "Brujita 1",
    precio: 10000

  },
  {
    categoria: "Brujita 2",
    precio: 20000
  },

  {
    categoria: "Brujita 3",
    precio: 60000
  }
];

let categoriaProductoAgregado;
let precioProductoAgregado;
do {
  categoriaProductoAgregado = prompt ("Ingresa el producto elegido. Para terminar, escribe SALIR.").toUpperCase().trim();

 if (categoriaProductoAgregado !== "SALIR") {

   precioProductoAgregado = parseInt(prompt("Ingresa el precio del producto"));
   let productoAgregado = {
       categoria: categoriaProductoAgregado,
precio: precioProductoAgregado
   };
    compraMensuales.push(productoAgregado);
    
 }

} while(categoriaProductoAgregado !== "SALIR");

const calcularCompraTotal = () => {
  let total = compraMensuales.reduce((acc, compra) => acc + compra.precio, 0);

  console.log (total);
}
calcularCompraTotal();

