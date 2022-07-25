let pagos = [];
let cuerpotblPagos;
let lineaPago;

fetch("Modulos/moduloPagos/data_Pagos.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        pagos = jsondata;
        cargarPagosTbl();
    }
    );

export function cargarPago() {
        pagos.forEach(function (pago) {
            lineaPago =
                '<tr>' +
                '<td>' + pago.idPago + '</td>' +
                '<td>' + pago.fechaHora + '</td>' +
                '<td>' + pago.nombre + '</td>' +
                '<td>' + pago.idVenta + '</td>' +
                '<td>' + pago.monto + '</td></tr>';
            cuerpotblPagos += lineaPago;
            console.log(lineaPago);
        });
        console.log(cuerpotblPagos);
        document.getElementById("tblPagos").innerHTML = cuerpotblPagos;
        cuerpotblPagos = "";
}

export function cargarPagosTbl() {
    let cuerpotblPagos;
    pagos.forEach(function (pago) {
        let lineaPago =
            '<tr>' +
            '<td>' + pago.idPago + '</td>' +
            '<td>' + pago.fechaHora + '</td>' +
            '<td>' + pago.nombre + '</td>' +
            '<td>' + pago.idVenta + '</td>' +
            '<td>' + pago.monto + '</td></tr>';
        cuerpotblPagos += lineaPago;
    });
    document.getElementById("tblPagos").innerHTML = cuerpotblPagos;
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