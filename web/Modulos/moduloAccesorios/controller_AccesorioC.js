/*
let cuerpotblAccesorios = "";
let registroAccesorios;
let accesorios = [];
let countIdPersona;
let countIdEmpleado;
let posAccesorio;

fetch("Modulos/moduloAccesorios/data_Accesorio.json")
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

    acceso.forEach(function (accesoriosA) {
        if (accesoriosA.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesoriosA.nombreAccesorio + '</td>' +
                '<td>' + accesoriosA.marcaAccesorio + '</td>' +
                '<td>' + accesoriosA.precioCompra + '</td>' +
                '<td>' + accesoriosA.precioVenta + '</td>' +
                '<td>' + accesoriosA.existencias + '</td>' +
                '<td>' + accesoriosA.estatus + '</td>';


            cuerpotblAccesorios += registroAccesorios;
        }

    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}

export function cargarAccesoriostbl() {

    accesorios.forEach(function (accesoriosA) {
        if (accesoriosA.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesoriosA.nombreAccesorio + '</td>' +
                '<td>' + accesoriosA.marcaAccesorio + '</td>' +
                '<td>' + accesoriosA.precioCompra + '</td>' +
                '<td>' + accesoriosA.precioVenta + '</td>' +
                '<td>' + accesoriosA.existencias + '</td>' +
                '<td>' + accesoriosA.estatus + '</td>';

            cuerpotblAccesorios += registroAccesorios;
        }

    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}


export function cargarAccesoriostblM() {
    posAccesorio = 0;
    accesorios.forEach(function (accesoriosA) {
        if (accesoriosA.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesoriosA.nombreAccesorio + '</td>' +
                '<td>' + accesoriosA.marcaAccesorio + '</td>' +
                '<td>' + accesoriosA.precioCompra + '</td>' +
                '<td>' + accesoriosA.precioVenta + '</td>' +
                '<td>' + accesoriosA.existencias + '</td>' +
                '<td>' + accesoriosA.estatus + '</td>' +
                '<td>' + '<a onclick="moduloAccesorio.eliminarAccesorio(' + posAccesorio + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                '<a onclick="moduloAccesorio.modificar(' + posAccesorio + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            posAccesorio++;
            cuerpotblAccesorios += registroAccesorios;
        }
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}

export function cargarAccesoriostblC() {
    let filtro = document.getElementById("filtro").value;

    accesorios.forEach(function (accesoriosA) {
        if (filtro === "A" && accesoriosA.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesoriosA.nombreAccesorio + '</td>' +
                '<td>' + accesoriosA.marcaAccesorio + '</td>' +
                '<td>' + accesoriosA.precioCompra + '</td>' +
                '<td>' + accesoriosA.precioVenta + '</td>' +
                '<td>' + accesoriosA.existencias + '</td>' +
                '<td>' + accesoriosA.estatus + '</td>';

            cuerpotblAccesorios += registroAccesorios;

        } else if (filtro === "I" && accesoriosA.estatus === 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesoriosA.nombreAccesorio + '</td>' +
                '<td>' + accesoriosA.marcaAccesorio + '</td>' +
                '<td>' + accesoriosA.precioCompra + '</td>' +
                '<td>' + accesoriosA.precioVenta + '</td>' +
                '<td>' + accesoriosA.existencias + '</td>' +
                '<td>' + accesoriosA.estatus + '</td>';

            cuerpotblAccesorios += registroAccesorios;
        } else if (filtro === "Am") {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesoriosA.nombreAccesorio + '</td>' +
                '<td>' + accesoriosA.marcaAccesorio + '</td>' +
                '<td>' + accesoriosA.precioCompra + '</td>' +
                '<td>' + accesoriosA.precioVenta + '</td>' +
                '<td>' + accesoriosA.existencias + '</td>' +
                '<td>' + accesoriosA.estatus + '</td>';

            cuerpotblAccesorios += registroAccesorios;

        }

    });
    $('#table_id').DataTable();
    document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}


export function registrar() {
    fetch("Modulos/moduloAccesorios/view_registrarAccesorio.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
        });
}

export function eliminar() {
    fetch("Modulos/moduloAccesorios/view_eliminarAccesorio.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_Accesorio.js").then(
                function (controller) {
                    moduloAccesorios = controller;
                    moduloAccesorios.cargarAccesoriostblM();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";
                }
            );
        });
}
export function modificar(pos) {
    fetch("./Modulos/moduloAccesorios/view_modificarAccesorio.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            let accesorioM = accesorios[pos];
            posAccesorio = pos;
            document.getElementById("nombreAccesorio").value = accesorioM.nombreAccesorio;
            document.getElementById("marcaAccesorio").value = accesorioM.marcaAccesorio;
            document.getElementById("precioCompra").value = accesorioM.precioCompra;
            document.getElementById("precioVenta").value = accesorioM.precioVenta;
            document.getElementById("existencias").value = accesorioM.existencias;

        });


}
export function catalogo() {
    fetch("./Modulos/moduloAccesorios/view_catalogoAccesorios.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_Accesorio.js").then(
                function (controller) {
                    moduloAccesorios = controller;
                    $(document).ready(function () {
                        moduloAccesorios.cargarAccesoriostbl();
                        moduloAccesorios.cargarAccesoriostblC();
                        $('#table_id').DataTable();
                        document.getElementById("table_id_filter").style.display = "none";
                    });
                }
            );
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
                    Swal.fire('Accesorio registrado con exito!', '', 'success')
                    moduloAccesorios.almacenarDatos();
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

export function almacenarDatos() {
    let nombreAccesorio = document.getElementById("nombreAccesorio").value;
    let marcaAccesorio = document.getElementById("marcaAccesorio").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;
    let existencias = document.getElementById("existencias").value;

    let accesoriosA = {
        "nombreAccesorio": nombreAccesorio,
        "marcaAccesorio": marcaAccesorio,
        "PrecioCompra": precioCompra,
        "PrecioVenta": precioVenta,
        "existencias": existencias,
        "estatus": 1
    };

    acceso.push(accesoriosA);
    accesorios.push(accesoriosA);

    accesorio();
}
export function modificarAccesorio() {
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {

            vacios++;
        }
        if (input.name !== "telCasa" && input.name !== "telMovil" && input.name !== "contrasena") {
            if (isNaN(input.value) === false) {
                comprobarString = false;
            }

        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de modificar al empleado?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Empleado modificado con exito!', '', 'success')
                    moduloAccesorios.modificarDatos();
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

export function modificarDatos() {
    let numeroUnicoEmpleado = document.getElementById("numeroUnicoEmpleado").value;
    let nombres = document.getElementById("nombres").value;
    let apellidoP = document.getElementById("apellidoP").value;
    let apellidoM = document.getElementById("apellidoM").value;
    let genero = document.getElementById("genero").value;
    let rfc = document.getElementById("rfc").value;
    let telCasa = document.getElementById("telCasa").value;
    let telMovil = document.getElementById("telMovil").value;
    let correo = document.getElementById("correo").value;
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    let idPersona = ((countIdPersona + 1).toString());
    let idEmpleado = ((countIdEmpleado + 1).toString());

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
    let empleado = {
        "Persona": persona,
        "IdEmpleado": idEmpleado,
        "ClaveUnicaEmp": numeroUnicoEmpleado,
        "Administrador": "Sam",
        "Usuario": {
            "usuario": usuario,
            "contasena": contrasena
        }
    };

    emp[posEmp] = empleado;
    emps[posEmp] = empleado;

    empleados();
}
Acciones de elimonar o modificar empleado

export function eliminarAccesorio(pos) {
    Swal.fire({
        title: 'Advertencia',
        text: "¿Esta seguro de eliminar a este empleado?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'

    }).then((result) => {
        if (result.isConfirmed) {
            emps[pos].Persona.Estatus = 0;
            emp[pos].Persona.Estatus = 0;
            moduloAccesorios.eliminar();
            Swal.fire(
                'Eliminado!',
                'El empleado se ha eliminado con exito',
                'success'
            )
        }
    })
}/*
