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

            document.getElementById("fechaHora").value = fecha_filtrada;
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

export function registrarNuevo() {
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {

            vacios++;
        }
        if (input.name !== "montoPago") {
            if (isNaN(input.value) === false) {
                comprobarString = false;
            }

        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de registrar el pago?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Pago registrado con exito!', '', 'success')
                    moduloPagos.almacenarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo salio mal',
                text: "Asegurese de que ningun campo que no requiera numeros no contenga ningun número!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar!'
            })
        }

    } else {
        Swal.fire({
            title: 'Algo salio mal',
            text: "Asegurese de llenar todos los campos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar!'
        })
    }
}
export function volverPagos(){
    if (emp.length === 0) {
            fetch("Modulos/moduloPagos/data_Pagos.json")
            .then(response => {
                    return response.json();
            })
            .then(function (jsondata) {
                    pago = jsondata;
            }
            );

    }

    fetch("Modulos/moduloPagos/view_Pagos.html")

            .then(function (respuesta) {
                    return respuesta.text();
            })
            .then(function (html) {
                    document.getElementById("contenedorPrincipal").innerHTML = html;

                    import("controller_Pagos.js").then(
                            function (controller) {

                                    moduloPagos = controller;
                                    moduloPagos.cargarPagosTbl();
                                    $('#table_id').DataTable();
                                    document.getElementById("table_id_filter").style.display = "none";
                            }
                    );

            });
}

export function almacenarDatos() {
    let fechaHora = document.getElementById("fechaHora").value;
    let monto = document.getElementById("montoPago").value;
    let idVenta = document.getElementById("claveVenta").value;
    let nombre = "nuevo";
    let contadorClaves = new Number;

    for(let i = 0; i < pagos.length; i++){
        contadorClaves += 1;
    }

    let pago = {
        "idPago": contadorClaves+1,
        "fechaHora": fechaHora,
        "monto": monto,
        "idVenta": idVenta,
        "nombre": nombre
    };

    pagos.push(pago);

    mostrarPagos();
}