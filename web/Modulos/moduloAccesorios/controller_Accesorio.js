
let cuerpotblAccesorios = "";
let registroAccesorios;
let accesorios = [];
let posAccesorio;

fetch("Modulos/moduloAccesorios/data_Accesorios.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {

        accesorios = jsondata;
        cargarAccesoriostbl();
        accesorios = jsondata;

    }
    );

export function cargarAccesorio() {

    acceso.forEach(function (accesorioss) {

        if (accesorioss.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesorioss.nombreAccesorio + '</td>' +
                '<td>' + accesorioss.marcaAccesorio + '</td>' +
                '<td>' + accesorioss.precioCompra + '</td>' +
                '<td>' + accesorioss.precioVenta + '</td>' +
                '<td>' + accesorioss.existencias + '</td>' +
                '<td>' + accesorioss.estatus + '</td>';
            cuerpotblAccesorios += registroAccesorios;
        }
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";
}

export function cargarAccesoriostbl() {

    accesorios.forEach(function (accesorioss) {
        if (accesorioss.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesorioss.nombreAccesorio + '</td>' +
                '<td>' + accesorioss.marcaAccesorio + '</td>' +
                '<td>' + accesorioss.precioCompra + '</td>' +
                '<td>' + accesorioss.precioVenta + '</td>' +
                '<td>' + accesorioss.existencia + '</td>' +
                '<td>' + accesorioss.estatus + '</td>';
            cuerpotblAccesorios += registroAccesorios;
        }
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}
export function cargarAccesoriotblM() {
    posAccesorio = 0;
    accesorios.forEach(function (accesorioss) {
        if (accesorioss.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesorioss.nombreAccesorio + '</td>' +
                '<td>' + accesorioss.marcaAccesorio + '</td>' +
                '<td>' + accesorioss.precioCompra + '</td>' +
                '<td>' + accesorioss.precioVenta + '</td>' +
                '<td>' + accesorioss.existencia + '</td>' +
                '<td>' + accesorioss.estatus + '</td>';
            '<td>' + '<a onclick="moduloAccesorio.eliminarAccesorio(' + posAccesorio + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                '<a onclick="moduloAccesorio.modificar(' + posAccesorio + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            posAccesorio++;
            cuerpotblAccesorios += registroAccesorios;
        }
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}

export function registrar() {
    fetch("./Modulos/moduloAccesorios/view_registrarAccesorio.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function eliminar() {
    fetch("./Modulos/moduloAccesorios/view_eliminarAccesorio.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Accesorio.js").then(
                function (controller) {
                    moduloAccesorios = controller;
                    moduloAccesorios.cargarAccesoriotblM();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";
                }
        );
        });
}

export function catalogo() {
    fetch("./Modulos/moduloAccesorios/view_catalogoAccesorio.html")
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

    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de registrar el accesorio?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Accesorio registrado con exito!', '', 'success')
                    moduloAccesorios.almacenarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo salió mal',
                text: "¡Asegurese de que ningun campo que no requiera números no contenga ningun número!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar!'
            })
        }

    } else {
        Swal.fire({
            title: 'Algo salió mal',
            text: "¡Asegurese de llenar todos los campos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar!'
        })
    }
}

export function almacenarDatos() {
    let nombreAccesorio = document.getElementById("nombreAccesorio").value;
    let marcaAccesorio = document.getElementById("marcaAccesorio").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;
    let existencia = document.getElementById("existencias").value;

    let persona = {
        "IdPersona": idPersona,
        "Nombre": nombres,
        "ApellidoPaterno": apellidoP,
        "ApellidoMaterno": apellidoM,
        "Genero": genero,
        "RFC": rfc,
        "TelCasa": telCasa,
        "TelMovil": telMovil,
        "Correo": correo,
        "Estatus": 1
    };
    let accesorios = {
        "nombreAccesorio": nombreAccesorio,
        "marcaAccesorio": marcaAccesorio,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "existencias": existencia,
        "estatus": 1
    };

    acceso.push(accesorioss);
    accesorios.push(accesorioss);

    accesorio();
}