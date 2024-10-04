document.addEventListener("DOMContentLoaded", function() {
        const ParametroURL = new URLSearchParams(window.location.search);
        const id_producto = parseInt(ParametroURL.get('id_producto'), 10);
    
        const productos = {
            1: {
                nombre: "SERUM", 
                imagen: "assets/imagenes/producto1.jpg",
                descripcion: "LA ROCHE-POSAY",
                precio: "$400.00"
            },
            2: {
                nombre: "BASE DE MAQUILLAJE", 
                imagen: "assets/imagenes/producto2.jpg",
                descripcion: "Base de maquillaje Beauty Creations",
                precio: "$100.00"
            },
            3: {
                nombre: "CREMA HIDRATANTE", 
                imagen: "assets/imagenes/producto3.jpg",
                descripcion: "Drunk Elephant",
                precio: "$700.00"
            },
            4: {
                nombre: "BLUSH", 
                imagen: "assets/imagenes/producto4.jpg",
                descripcion: "Maybelline",
                precio: "$180.00"
            },
            5: {
                nombre: "SHAMPOO", 
                imagen: "assets/imagenes/producto5.jpg",
                descripcion: "Hidratante",
                precio: "$1200.00"
            }
        };
    
        if (productos[id_producto]) {
            document.getElementById("nombre_producto").textContent = productos[id_producto].nombre;
            document.getElementById("img_producto").src = productos[id_producto].imagen;
            document.getElementById("descripcion_producto").textContent = productos[id_producto].descripcion;
            document.getElementById("precio_producto").textContent = productos[id_producto].precio;
        } else {
            document.getElementById("nombre_producto").textContent = "Producto no disponible";
            document.getElementById("img_producto").style.display = "none";
            document.getElementById("descripcion_producto").textContent = "Descripción no disponible";
            document.getElementById("precio_producto").textContent = "Precio no disponible";
        }
    });
    