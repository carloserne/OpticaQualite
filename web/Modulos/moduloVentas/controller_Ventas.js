
let cuerpotblVentas = "";
let registroVenta;
let ventas = [];

export function obtenerFechayHora(){
    let date = new Date();
    console.log(""+date.getDay());
    document.getElementById("claveEmpleado").innerHTML = ""+date.toISOString();
}

fetch("Modulos/moduloVentas/data_Ventas.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        ventas = jsondata;
        console.log(ventas);
        cargarVentastbl();
    }
    );

export function cargarVenta() {

    venta.forEach(function (venta) {

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

    obtenerFechayHora();
}

export function eliminar() {
    fetch("./Modulos/moduloEmp/view_eliminarEmpleado.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function catalogo() {
    fetch("./Modulos/moduloEmp/view_catalogoEmpleados.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

        });
}
