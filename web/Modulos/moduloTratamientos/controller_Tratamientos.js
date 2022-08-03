let tratamientos = [];
let cuerpotblTratamientos = "";
let lineaTratamiento = "";
let date = new Date;
let fecha;
let posGlobal;

fetch("Modulos/moduloTratamientos/data_Tratamientos.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        tratamientos = jsondata;
        cargarTratamientosTbl();
    }
    );

export function cargarTratamientosTbl() {
    let cuerpotblTratamientos = "";
    console.log(tratamientos);
    tratamientos.forEach(function (tratamiento) {
        let lineatratamiento =
            '<tr>' +
            '<td>' + tratamiento.nombre + '</td>' +
            '<td>' + tratamiento.precioCompra + '</td>' +
            '<td>' + tratamiento.precioVenta + '</td>' +
            '<td>' + tratamiento.estatus + '</td></tr>';
        cuerpotblTratamientos += lineatratamiento;
    });

    console.log(cuerpotblTratamientos);
    document.getElementById("tblTratamientos").innerHTML = cuerpotblTratamientos;
}

export function registrar() {
    fetch("./Modulos/moduloTratamientos/view_registrarTratamientos.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
        });
}

export function cargarTablaParaEliminarOModificar() {
    let posTratamiento = 0;
    tratamientos.forEach(function (tratamiento) {
        lineaTratamiento =
            '<tr>' +
            '<td>' + tratamiento.nombre + '</td>' +
            '<td>' + tratamiento.precioCompra + '</td>' +
            '<td>' + tratamiento.precioVenta + '</td>' +
            '<td>' + tratamiento.estatus + '</td>' +
            '<td>' +
            '<a onclick="moduloTratamientos.eliminarTratamiento(' + posTratamiento + ');" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
            '<a onclick="moduloTratamientos.modificar(' + posTratamiento + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td></tr>';
        posTratamiento++;
        cuerpotblTratamientos += lineaTratamiento;
    });
    document.getElementById("tblTratamientos").innerHTML = cuerpotblTratamientos;
    cuerpotblTratamientos = "";
}

function crearTabla(){
    $('#table_id').DataTable({
            "language": {
                    "decimal": ",",
                    "thousands": ".",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",                    
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "loadingRecords": "Cargando...",
                    "lengthMenu": "Mostrar _MENU_ registros",
                    "paginate": {
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "No se encontraron resultados",
                    "emptyTable": "Ningún dato disponible en esta tabla",
                    "aria": {
                        "sortAscending":  ": Activar para ordenar la columna de manera ascendente",
                        "sortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
            },
            destroy: true,
            scrollY: '55vh',
            scrollCollapse: true,
            "drawCallback": function( settings ) {
                $('ul.pagination').addClass("pagination-sm");
            }
        });
}

export function eliminar() {
    fetch("./Modulos/moduloTratamientos/view_eliminarTratamientos.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_Tratamientos.js").then(
                function (controller) {
                    moduloTratamientos = controller;
                    moduloTratamientos.cargarTablaParaEliminarOModificar();
                    c
                    document.getElementById("table_id_filter").style.display = "block";
                }
            );
        });
}

export function catalogo() {
    fetch("./Modulos/moduloTratamientos/view_catalogoTratamientos.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            moduloTratamientos.cargarTratamientosTbl();
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
        if (input.name !== "nombre") {
            if (isNaN(input.value) === false) {
                comprobarString = true;
            }

        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de registrar el tratamiento?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Tratamiento registrado con exito!', '', 'success')
                    moduloTratamientos.almacenarDatos();
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
    let nombreProducto = document.getElementById("nombre").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let PrecioVenta = document.getElementById("precioVenta").value;

    let tratamiento = {
        "nombre": nombreProducto,
        "precioCompra": precioCompra,
        "precioVenta": PrecioVenta,
        "estatus": 1
    };

    tratamientos.push(tratamiento);

    mostrarTratamientos();
}

export function eliminarTratamiento(pos) {
    Swal.fire({
        title: 'Advertencia',
        text: "¿Esta seguro de eliminar a este tratamiento?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'

    }).then((result) => {
        if (result.isConfirmed) {
            tratamientos[pos].estatus = 0;
            moduloTratamientos.eliminar();
            Swal.fire(
                    'Eliminado!',
                    'El tratamiento se ha eliminado con exito',
                    'success'
                    )
        }
    })
}

export function modificar(pos) {
    posGlobal = pos;
    fetch("./Modulos/moduloTratamientos/view_modificarTratamientos.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

            document.getElementById("nombre").value = tratamientos[pos].nombre;
            document.getElementById("precioCompra").value = tratamientos[pos].precioCompra;
            document.getElementById("precioVenta").value = tratamientos[pos].precioVenta;
        });
}

export function modificarTratamiento() {
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    console.log(posGlobal);
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "nombre") {
            vacios++;
            comprobarString = true;
        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de modificar el tratamiento?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Tratamiento modificado con exito!', '', 'success')
                    moduloTratamientos.almacenarTratamientos();
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

export function almacenarTratamientos() {
    let tratamiento = tratamientos[posGlobal];
    tratamiento.nombre = document.getElementById("nombre").value;
    tratamiento.precioCompra = document.getElementById("precioCompra").value;
    tratamiento.precioVenta = document.getElementById("precioVenta").value;
    tratamientos[posGlobal] = tratamiento;
    mostrarTratamientos();
}