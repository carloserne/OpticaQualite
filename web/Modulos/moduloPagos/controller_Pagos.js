let pagos = [];
let cuerpotblPagos;
let lineaPago;
let date = new Date;
let fecha;
let posGlobal;

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
    cuerpotblPagos
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

export function cargarTablaParaEliminarOModificar() {
    let posPago = 0;
    pagos.forEach(function (pago) {
            lineaPago =
                '<tr>' +
                '<td>' + pago.idPago + '</td>' +
                '<td>' + pago.fechaHora + '</td>' +
                '<td>' + pago.nombre + '</td>' +
                '<td>' + pago.idVenta + '</td>' +
                '<td>' + pago.monto + '</td>' +
                '<td>' + 
                '<a onclick="moduloPagos.eliminarPago(' + posPago + ');" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                '<a onclick="moduloPagos.modificar(' + posPago + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td></tr>';
            posPago++;
            cuerpotblPagos += lineaPago;
    });
    document.getElementById("tblPagos").innerHTML = cuerpotblPagos;
    cuerpotblPagos = "";
}

export function eliminar() {
    fetch("./Modulos/moduloPagos/view_eliminarPagos.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_Pagos.js").then(
                function (controller) {
                    moduloPagos = controller;
                    moduloPagos.cargarTablaParaEliminarOModificar();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";
                }
            );
        });
}

export function catalogo() {
    fetch("./Modulos/moduloPagos/view_catalogoPagos.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            moduloPagos.cargarPagosTbl();
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
export function volverPagos() {
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

    for (let i = 0; i < pagos.length; i++) {
        contadorClaves += 1;
    }

    let pago = {
        "idPago": contadorClaves + 1,
        "fechaHora": fechaHora,
        "monto": monto,
        "idVenta": idVenta,
        "nombre": nombre
    };

    pagos.push(pago);

    mostrarPagos();
}

export function eliminarPago(pos) {
    (async () => {
        const { value: password } = await Swal.fire({
        title: 'Advertencia',
        text: "Ingresa tu contraseña para eliminar este pago",
        input: 'password',
        inputPlaceholder: 'Ingresa tu contraseña',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        inputPlaceholder: "Password"

    })
    
    if (password === "123") {
        pagos.splice(pos,1);
        Swal.fire(
            'Eliminado!',
            'El pago se ha eliminado con exito',
            'success'
            )
        moduloPagos.eliminar();
        moduloPagos.cargarPagosTbl();
      }
    ;
})()
}

export function modificar(pos) {
    posGlobal = pos;
    fetch("./Modulos/moduloPagos/view_modificarPago.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;

                document.getElementById("clavePago").value = pagos[pos].idPago;
                document.getElementById("claveVenta").value = pagos[pos].idVenta;
                document.getElementById("montoPago").value = pagos[pos].monto;
            });
}

export function modificarPago() {
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    console.log(posGlobal);
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {

            vacios++;
        }
    }
    comprobarString = true;

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de modificar el pago?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Pago modificado con exito!', '', 'success')
                    moduloPagos.almacenarDatosPagos();
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

export function almacenarDatosPagos(){
    let pago = pagos[posGlobal];
    pago.monto = document.getElementById("montoPago").value;
    pagos[posGlobal] = pago;
    console.log(pagos);
    moduloPagos.eliminar();
}