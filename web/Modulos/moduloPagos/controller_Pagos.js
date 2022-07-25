let pagos = [];
let cuerpotblPagos;
let lineaPago;
let date = new Date;
let fecha;

fetch("Modulos/moduloPagos/data_Pagos.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        pagos = jsondata;
        cargarPagosTbl();
    }
    );

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
    fetch("./Modulos/moduloPagos/view_RegistrarPago.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

            fecha = date.toISOString();
            let fecha_filtrada = fecha.replace("T", " ");
            fecha_filtrada = fecha_filtrada.replace("Z", "");

            document.getElementById("fecha").value = fecha_filtrada;
        });
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

export function guardarPago() {

    const fs = require('fs');

    let jason;
    
    pagos.forEach(function (pago) {
        let lineaPago = "{\"idpago\":"+pago.idPago+",\"fechaHora\":"+pago.fechaHora+",\"monto\":"+pago.monto+",\"idVenta\":"+pago.idVenta+",\"nombre\":"+pago.nombre+"},";
        jason += lineaPago;
    });

    let pagos = {
        name: 'Mike',
        age: 23,
        gender: 'Male',
        department: 'English',
        car: 'Honda'
    };

    let data = JSON.stringify(student);
    fs.writeFileSync('student-2.json', data);
}