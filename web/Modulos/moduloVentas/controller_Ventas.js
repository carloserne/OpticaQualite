
let cuerpotblVentas = "";
let registroVenta;
let ventas = [];
let productos = new Array;

fetch("Modulos/moduloVentas/data_Ventas.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        ventas = jsondata;
        cargarVentastbl();
    }
    );

export function cargarVentastbl() {

    ventas.forEach(function (venta) {
        registroVenta =
        '<tr>' +
        '<td>' + venta.ClaveUnicaVenta + '</td>' +
        '<td>' + venta.FechaDeLaVenta + '</td>' +
        '<td>' + venta.Persona.Nombre + '</td>' +
        '<td>' + venta.TotalDeLaVenta + '</td>' +
        '<td>' + venta.TotalAbonado + '</td>' +
        '<td>' + venta.AdeudoActual + '</td>';
    cuerpotblVentas += registroVenta;
    });
    document.getElementById("tblVentas").innerHTML = cuerpotblVentas;
    cuerpotblVentas = "";

}

export function registrar() {
    fetch("./Modulos/moduloVentas/view_RegistrarVenta.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
        });

    console.log(productos);
}

export function eliminar() {
    fetch("./Modulos/moduloVentas/view_eliminarVentas.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function catalogo() {
    fetch("./Modulos/moduloVentas/view_catalogoVentas.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function agregarProductoTabla(){
    let idNombreProducto = parseInt(document.getElementById("seleccionProducto").value);
    let nombreProducto;
    let claveUnicaProducto;
    let producto;
    let descuento = 0;
    let precioProducto;

    if(idNombreProducto === 1){
        claveUnicaProducto = 1;
        precioProducto = 10;
        nombreProducto = "Armazon";
    }
    if(idNombreProducto === 2){
        claveUnicaProducto = 2;
        precioProducto = 20;
        nombreProducto = "Solucion";
    }

    if(idNombreProducto === 3){
        claveUnicaProducto = 3;
        precioProducto = 30;
        nombreProducto = "Accesorio";
    }

    let cantidad = document.getElementById("txtCantidad").value;
    descuento = document.getElementById("txtDescuento").value;

    producto = {
        "claveUnicaProducto": claveUnicaProducto,
        "nombre": nombreProducto,
        "cantidad": cantidad,
        "precio": precioProducto,
        "descuento": descuento,
        "total": cantidad*precioProducto-descuento
    }

    productos.push(producto);

    cargarTablaVentasProductos();
}

export function cargarTablaVentasProductos() {
    let registroVentaProducto;
    let cuerpotblVentasProducto;

    productos.forEach(function (producto) {
        registroVentaProducto =
        '<tr>' +
        '<td>' + producto.claveUnicaProducto + '</td>' +
        '<td>' + producto.nombre + '</td>' +
        '<td>' + producto.cantidad + '</td>' +
        '<td>' + producto.precio + '</td>' +
        '<td>' + producto.descuento + '</td>' +
        '<td>' + producto.total + '</td></tr>';
    cuerpotblVentasProducto += registroVentaProducto;
    });
    document.getElementById("tblVentaProducto").innerHTML = cuerpotblVentasProducto;
}