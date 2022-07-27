let cuerpotblArmazones = "";
let registroArmazones;
let armazones = [];
let posArmazon;

fetch("Modulos/moduloArmazones/data_Armazon.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        armazones = jsondata;
        console.log(armazones);
        cargarArmazonestbl();
    }
    );

export function cargarArmazon() {

    armazones.forEach(function (armazon) {
        registroArmazones =
            '<tr>' +
            '<td>' + armazon.codigoBarras + '</td>' +
            '<td>' + armazon.nombre + '</td>' +
            '<td>' + armazon.marca + '</td>' +
            '<td>' + armazon.modelo + '</td>' +
            '<td>' + armazon.color + '</td>' +
            '<td>' + armazon.descripcion + '</td>' +
            '<td>' + armazon.fotografia + '</td>' +
            '<td>' + armazon.dimensiones + '</td>' +
            '<td>' + armazon.precioCompra + '</td>' +
            '<td>' + armazon.precioVenta + '</td>' +
            '<td>' + armazon.existencias + '</td>' +
            '<td>' + armazon.estatus + '</td>';
        cuerpotblArmazones += registroArmazones;
    });
    document.getElementById("tblArmazones").innerHTML = cuerpotblArmazones;
    cuerpotblArmazones = "";

}


export function cargarArmazonestbl() {

    armazones.forEach(function (armazon) {
        registroArmazones =
            '<tr>' +
            '<td>' + armazon.codigoBarras + '</td>' +
            '<td>' + armazon.nombre + '</td>' +
            '<td>' + armazon.marca + '</td>' +
            '<td>' + armazon.modelo + '</td>' +
            '<td>' + armazon.color + '</td>' +
            '<td>' + armazon.descripcion + '</td>' +
            '<td>' + armazon.fotografia + '</td>' +
            '<td>' + armazon.dimensiones + '</td>' +
            '<td>' + armazon.precioCompra + '</td>' +
            '<td>' + armazon.precioVenta + '</td>' +
            '<td>' + armazon.existencias + '</td>' +
            '<td>' + armazon.estatus + '</td>';
        cuerpotblArmazones += registroArmazones;
    });
    document.getElementById("tblArmazones").innerHTML = cuerpotblArmazones;
    cuerpotblArmazones = "";

}
export function cargarArmazonestblM() {
    posArmazon = 0;
    armazones.forEach(function (armazon) {
        if (armazon.estatus !== 0) {
            registroArmazones =
                '<tr>' +
                '<td>' + armazon.codigoBarras + '</td>' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + armazon.fotografia + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precioCompra + '</td>' +
                '<td>' + armazon.precioVenta + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td>' +
                '<td>' + '<a onclick="moduloArmazones.eliminarArmazon(' + posArmazon + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                '<a onclick="moduloArmazon.modificar(' + posArmazon + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            posArmazon++;
            cuerpotblArmazones += registroArmazones;
        }
    });
    document.getElementById("tblArmazones").innerHTML = cuerpotblArmazones;
    cuerpotblArmazones = "";

}

export function registrar() {
    fetch("./Modulos/moduloArmazones/view_registrarArmazon.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function eliminar() {
    fetch("Modulos/moduloArmazones/view_eliminarArmazon.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_Armazon.js").then(
                function (controller) {
                    moduloArmazones = controller;
                    moduloArmazones.cargarArmazonestblM();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";

                }
            );
        });
}
export function modificar(pos) {
    fetch("./Modulos/moduloArmazones/view_modificarArmazon.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            let armazonSelec = armazones[pos];
            posArmazon = pos;
            document.getElementById("nombre").value = armazonSelec.nombre;
            document.getElementById("marca").value = armazonSelec.marca;
            document.getElementById("modelo").value = armazonSelec.modelo;
            document.getElementById("color").value = armazonSelec.color;
            document.getElementById("nombre").value = armazonSelec.nombre;
            document.getElementById("descripcion").value = armazonSelec.descripcion;
            document.getElementById("fotografia").value = armazonSelec.fotografia;
            document.getElementById("nombre").value = armazonSelec.nombre;
            document.getElementById("dimensiones").value = armazonSelec.dimensiones;
            document.getElementById("nombre").value = armazonSelec.nombre;
            document.getElementById("precioCompra").value = armazonSelec.precioCompra;
            document.getElementById("precioVenta").value = armazonSelec.precioVenta;
            document.getElementById("existencias").value = armazonSelec.existencias;
        });


}
export function cargarArmazonestblC() {
    let filtro = document.getElementById("filtro").value;
    armazones.forEach(function (armazon) {
        if (filtro === "A" && armazon.estatus !== 0) {
            registroArmazones =
                '<tr>' +
                '<td>' + armazon.codigoBarras + '</td>' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + armazon.fotografia + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precioCompra + '</td>' +
                '<td>' + armazon.precioVenta + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td>';

            cuerpotblArmazones += registroArmazones;

        } else if (filtro === "I" && armazon.estatus === 0) {
            registroArmazones =
                '<tr>' +
                '<td>' + armazon.codigoBarras + '</td>' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + armazon.fotografia + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precioCompra + '</td>' +
                '<td>' + armazon.precioVenta + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td>';

            cuerpotblArmazones += registroArmazones;
        } else if (filtro === "Am") {
            registroArmazones =
                '<tr>' +
                '<td>' + armazon.codigoBarras + '</td>' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + armazon.fotografia + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precioCompra + '</td>' +
                '<td>' + armazon.precioVenta + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td>';

            cuerpotblArmazones += registroArmazones;

        }
    });
    $('#table_id').DataTable();
    document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblArmazones").innerHTML = cuerpotblArmazones;
    cuerpotblArmazones = "";
}
export function catalogo() {
    fetch("./Modulos/moduloArmazones/view_catalogoArmazon.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_Armazon.js").then(
                function (controller) {
                    moduloArmazones = controller;
                    $(document).ready(function () {
                        moduloArmazones.cargarArmazonestbl();
                        moduloArmazones.cargarArmazonestblC();
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
                    Swal.fire('¡Armazón registrado con exito!', '', 'success')
                    moduloArmazones.almacenarDatos();
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
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let descripcion = document.getElementById("descripcion").value;
    let fotografia = document.getElementById("fotografia").value;
    let dimensiones = document.getElementById("dimensiones").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;
    let existencias = document.getElementById("existencias").value;

    let armazon = {
        "nombre": nombre,
        "marca": marca,
        "modelo": modelo,
        "color": color,
        "descripcion": descripcion,
        "fotografia": fotografia,
        "dimensiones": dimensiones,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "existencias": existencias,
        "estatus": 1
    };

    armazones.push(armazon);

    console.log(armazones);

    pantallaArmazones();
}

/*Modificar datos*/
export function modificarArmazon() {
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
                title: '¿Seguro de modificar el accesorio?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Accesorio modificado con exito!', '', 'success')
                    moduloArmazones.modificarDatos();
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
export function modificarDatos() {
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let descripcion = document.getElementById("descripcion").value;
    let fotografia = document.getElementById("fotografia").value;
    let dimensiones = document.getElementById("dimensiones").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;
    let existencias = document.getElementById("existencias").value;

    let armazon = {
        "nombre": nombre,
        "marca": marca,
        "modelo": modelo,
        "color": color,
        "descripcion": descripcion,
        "fotografia": fotografia,
        "dimensiones": dimensiones,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "existencias": existencias,
        "estatus": 1
    };

    armazones[posArmazon]= armazon;

    console.log(armazones);

    pantallaArmazones();
}

/*Eliminar accesorio */
export function eliminarArmazon(posArmazon) {
    Swal.fire({
        title: 'Advertencia',
        text: "¿Esta seguro de eliminar a este armazón?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'

    }).then((result) => {
        if (result.isConfirmed) {
            armazones[posArmazon].estatus = 0;
            moduloArmazones.eliminar();
            Swal.fire(
                    'Eliminado!',
                    'El armazón se ha eliminado con exito',
                    'success'
                    )
        }
    })
}

