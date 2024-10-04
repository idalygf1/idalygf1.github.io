document.addEventListener("DOMContentLoaded", function() {
    const ParametroURL = new URLSearchParams(window.location.search);
    const id_producto = parseInt(ParametroURL.get('id_producto'), 10);


// Array de productos con sus datos
const productos = [
    {
        nombre: 'Producto 1',
        descripcion: 'SERUM',
        precio: '$100.00',
        imagen: 'assets/Imagenes/producto1.jpg'
    },
    {
        nombre: 'Producto 2',
        descripcion: 'BASE DE MAQUILLAJE',
        precio: '$200.00',
        imagen: 'assets/Imagenes/producto2.jpg'
    },
    {
        nombre: 'Producto 3',
        descripcion: 'CREMA',
        precio: '$300.00',
        imagen: 'assets/Imagenes/producto3.jpg'
    }
];

// Función para cambiar el producto mostrado
function cambiarProducto(indiceProducto) {
    if (indiceProducto >= 0 && indiceProducto < productos.length) {
        // Obtener los elementos del DOM
        const imgProducto = document.getElementById('producto-imagen');
        const nombreProducto = document.getElementById('nombre_producto');
        const descripcionProducto = document.getElementById('descripcion_producto');
        const precioProducto = document.getElementById('precio_producto');

        // Actualizar los valores del producto
        imgProducto.src = productos[indiceProducto].imagen;
        nombreProducto.textContent = productos[indiceProducto].nombre;
        descripcionProducto.textContent = productos[indiceProducto].descripcion;
        precioProducto.textContent = productos[indiceProducto].precio;
    } else {
        console.error('Índice de producto fuera de rango');
    }
}

// Mostrar el primer producto por defecto al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cambiarProducto(0); // Producto inicial
});

});