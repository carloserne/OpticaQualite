
let cuerpotblAccesorios = "";
let registroAccesorios;
let accesorios = [];
let posAccesorio;

fetch("Modulos/moduloAccesorios/data_Accesorio.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {

        accesorios = jsondata;
        cargarAccesoriostbl();
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
                '<td>' + accesorioss.existencias + '</td>' +
                '<td>' + accesorioss.estatus + '</td>';
            cuerpotblAccesorios += registroAccesorios;
        }
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}
export function cargarAccesoriostblM() {
    posAccesorio = 0;
    accesorios.forEach(function (accesorioss) {
        if (accesorioss.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesorioss.nombreAccesorio + '</td>' +
                '<td>' + accesorioss.marcaAccesorio + '</td>' +
                '<td>' + accesorioss.precioCompra + '</td>' +
                '<td>' + accesorioss.precioVenta + '</td>' +
                '<td>' + accesorioss.existencias + '</td>' +
                '<td>' + accesorioss.estatus + '</td>'+
                '<td>' + '<a onclick="moduloAccesorios.eliminarAccesorio(' + posAccesorio + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                '<a onclick="moduloAccesorios.modificar(' + posAccesorio + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
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
    fetch("Modulos/moduloAccesorios/view_eliminarAccesorio.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Accesorio.js").then(
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
                let accesorioSelec = accesorios[pos];
                posAccesorio = pos;
                document.getElementById("nombreAccesorio").value = accesorioSelec.nombreAccesorio;
                document.getElementById("marcaAccesorio").value = accesorioSelec.marcaAccesorio;
                document.getElementById("precioCompra").value = accesorioSelec.precioCompra;
                document.getElementById("precioVenta").value = accesorioSelec.precioVenta;
                document.getElementById("existencias").value = accesorioSelec.existencias;
            });


}
export function cargarAccesoriostblC() {
    let filtro = document.getElementById("filtro").value;
    accesorios.forEach(function (accesorioss) {
        if (filtro === "A" && accesorioss.estatus !== 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesorioss.nombreAccesorio + '</td>' +
                '<td>' + accesorioss.marcaAccesorio + '</td>' +
                '<td>' + accesorioss.precioCompra + '</td>' +
                '<td>' + accesorioss.precioVenta + '</td>' +
                '<td>' + accesorioss.existencias + '</td>' +
                '<td>' + accesorioss.estatus + '</td>';

            cuerpotblAccesorios += registroAccesorios;

        } else if (filtro === "I" && accesorioss.estatus === 0) {
            registroAccesorios =
                '<tr>' +
                '<td>' + accesorioss.nombreAccesorio + '</td>' +
                '<td>' + accesorioss.marcaAccesorio + '</td>' +
                '<td>' + accesorioss.precioCompra + '</td>' +
                '<td>' + accesorioss.precioVenta + '</td>' +
                '<td>' + accesorioss.existencias + '</td>' +
                '<td>' + accesorioss.estatus + '</td>';

            cuerpotblAccesorios += registroAccesorios;
        } else if (filtro === "Am") {
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
    $('#table_id').DataTable();
    document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";
}

export function catalogo() {
    fetch("./Modulos/moduloAccesorios/view_catalogoAccesorio.html")
            .then(function (respuesta) {
            return respuesta.text();
            })
            .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Accesorio.js").then(
                    function (controller) {
                    moduloAccesorios = controller;
                    $(document).ready(function(){
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
                title: '??Seguro de registrar el accesorio?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('??Accesorio registrado con exito!', '', 'success')
                    moduloAccesorios.almacenarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo sali?? mal',
                text: "??Asegurese de que ningun campo que no requiera n??meros no contenga ningun n??mero!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar!'
            })
        }

    } else {
        Swal.fire({
            title: 'Algo sali?? mal',
            text: "??Asegurese de llenar todos los campos!",
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

    let accesorio = {
        "nombreAccesorio": nombreAccesorio,
        "marcaAccesorio": marcaAccesorio,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "existencias": existencia,
        "estatus": 1
    };

    accesorios.push(accesorio);

    console.log(accesorios);

    mostrarAccesorios();
}


/*Modificar datos*/
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

    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '??Seguro de modificar el accesorio?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('??Accesorio modificado con exito!', '', 'success')
                    moduloAccesorios.modificarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo sali?? mal',
                text: "??Asegurese de que ningun campo que no requiera n??meros no contenga ningun n??mero!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar!'
            })
        }

    } else {
        Swal.fire({
            title: 'Algo sali?? mal',
            text: "??Asegurese de llenar todos los campos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar!'
        })
    }
}
export function modificarDatos() {
    let nombreAccesorio = document.getElementById("nombreAccesorio").value;
    let marcaAccesorio = document.getElementById("marcaAccesorio").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;
    let existencia = document.getElementById("existencias").value;

    let accesorio = {
        "nombreAccesorio": nombreAccesorio,
        "marcaAccesorio": marcaAccesorio,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "existencias": existencia,
        "estatus": 1
    };

    accesorios[posAccesorio]= accesorio;

    console.log(accesorios);

    mostrarAccesorios();
}

/*Eliminar accesorio */
export function eliminarAccesorio(posAccesorio) {
    Swal.fire({
        title: 'Advertencia',
        text: "??Esta seguro de eliminar a este accesorio?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'

    }).then((result) => {
        if (result.isConfirmed) {
            accesorios[posAccesorio].estatus = 0;
            moduloAccesorios.eliminar();
            Swal.fire(
                    'Eliminado!',
                    'El accesorio se ha eliminado con exito',
                    'success'
                    )
        }
    })
}