
let cuerpotblLentes = "";
let registroLentes;
let lentesC = [];
let countIdLentes;
let indiceLentesM;

fetch("Modulos/moduloLentesContacto/data_LentesContacto.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {

        lentesC = jsondata;

        cargarLentestbl();

    }
    );

export function cargarLentes() {
    lentes.forEach(function (lentesR) {
        if (lentesR.Estatus !== 0) {
            registroLentes =
                '<tr>' +
                '<td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td>' + lentesR.Fotografia + '</td>' +
                '<td>' + lentesR.TipoLentes + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        }
    });
    document.getElementById("tblLentesC").innerHTML = cuerpotblLentes;
    cuerpotblLentes = "";
}

export function cargarLentestbl() {
    lentesC.forEach(function (lentesR) {
        if (lentesR.Estatus !== 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td>' + lentesR.Fotografia + '</td>' +
                '<td>' + lentesR.TipoLentes + '</td>' +
                '<td>' + lentesR.Estatus + '</td>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        }
    });
    document.getElementById("tblLentesC").innerHTML = cuerpotblLentes;
    cuerpotblLentes = "";
}

export function cargarLentestblM() {
    lentesC.forEach(function (lentesR) {
        if (lentesR.Estatus !== 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td>' + lentesR.Fotografia + '</td>' +
                '<td>' + lentesR.TipoLentes + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>' +
                '<td>' + '<a onclick="moduloLentes.eliminarLentes(' + lentesC.indexOf(lentesR) + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                ' <a onclick="moduloLentes.modificarLentes(' + lentesC.indexOf(lentesR) + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        }
    });
    document.getElementById("tblLentesC").innerHTML = cuerpotblLentes;
    cuerpotblLentes = "";
}

export function cargarLentestblC() {
    let filtro = document.getElementById("filtro").value;

    lentesC.forEach(function (lentesR) {
        if (filtro === "A" && lentesR.Estatus !== 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td>' + lentesR.Fotografia + '</td>' +
                '<td>' + lentesR.TipoLentes + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;

        } else if (filtro === "I" && lentesR.Estatus === 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td>' + lentesR.Fotografia + '</td>' +
                '<td>' + lentesR.TipoLentes + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        } else if (filtro === "Am") {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td>' + lentesR.Fotografia + '</td>' +
                '<td>' + lentesR.TipoLentes + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        }

    });
    $('#table_id').DataTable();
    document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblLentesC").innerHTML = cuerpotblLentes;
    cuerpotblLentes = "";

}

export function mostrarPantallaRegistrar() {
    fetch("Modulos/moduloLentesContacto/view_RegistrarLentesContacto.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
        });
}

export function mostrarPantallaeliminar() {
    fetch("./Modulos/moduloLentesContacto/view_eliminarLentesContacto.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_LentesContacto.js").then(
                function (controller) {
                    moduloLentes = controller;
                    moduloLentes.cargarLentestblM();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";
                }
            );
        });
}

export function modificarLentes(pos) {
    fetch("./Modulos/moduloLentesContacto/view_modificarLentesCotacto.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            indiceLentesM = pos;
            let lentesM = lentesC[pos];        
            document.getElementById("").value = lentesM.Nombre;
            document.getElementById("").value = lentesM.Marca;
            document.getElementById("").value = lentesM.Color;
            document.getElementById("").value = lentesM.Queratometria;
            document.getElementById("").value = lentesM.Fotografia;
            document.getElementById("").value = lentesM.TipoLentes;            
        });
}

export function catalogoLentes() {
    fetch("./Modulos/moduloLentesContacto/view_catalogoLentesContacto.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

            import("./controller_Empleados.js").then(
                function (controller) {
                    moduloLentes = controller;
                    $(document).ready(function () {
                        moduloLentes.cargarLentestbl();
                        moduloLentes.cargarLentestblC();
                        $('#table_id').DataTable();
                        document.getElementById("table_id_filter").style.display = "none";
                    });
                }
            );
        });
}

export function almacenarDatos() {
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("marca").value;
    let color = document.getElementById("color").value;
    let queratometria = document.getElementById("queratometria").value;
    let foto = document.getElementById("foto").value;
    let tipoLentes = document.getElementById("tipoLentes").value;    

    let idLentes = (countIdPersona + 1);

    let lentesNuevo = {
        "idLentesContacto": idLentes,
        "Nombre": nombre,
        "Marca": marca,
        "Color": color,
        "Queratometria": queratometria,
        "Fotografia": foto,
        "TipoLentes": tipoLentes,
        "Estatus": 1
    };

    lentesC.push(lentesNuevo);
    lentes.push(lentesNuevo);

    abrirModuloLentes();
}

export function modificarDatos() {
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("marca").value;
    let color = document.getElementById("color").value;
    let queratometria = document.getElementById("queratometria").value;
    let foto = document.getElementById("foto").value;
    let tipoLentes = document.getElementById("tipoLentes").value;

    let idLentes = (countIdPersona + 1);

    let lentesNuevo = {
        "idLentesContacto": idLentes,
        "Nombre": nombre,
        "Marca": marca,
        "Color": color,
        "Queratometria": queratometria,
        "Fotografia": foto,
        "TipoLentes": tipoLentes,
        "Estatus": 1
    };

    lentes[indiceLentesM] = lentesNuevo;
    lentesC[indiceLentesM] = lentesNuevo;

    abrirModuloLentes();
}

/*Acciones de eliminar o modificar empleado*/

export function eliminarLentes(pos) {
    indiceLentesM = pos;
    Swal.fire({
        title: 'Advertencia',
        text: "¿Está seguro de eliminar el registro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'

    }).then((result) => {
        if (result.isConfirmed) {
            lentesC[indiceLentesM].Estatus = 0;
            lentes[indiceLentesM].Estatus = 0;        
            Swal.fire(
                'Eliminado!',
                'El registro se ha eliminado con éxito',
                'success'
            )
            moduloLentes.mostrarPantallaeliminar();
        }
    })
}

export function validarDatos(accion){
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {
            vacios++;
        }
        if (input.name !== "" && input.name !== "" && input.name !== "") {
            if (isNaN(input.value) === false) {
                comprobarString = false;
            }

        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de ' + accion + 'el registro?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    if (accion === "guardar") {
                        Swal.fire('Lentes de contacto registrados con éxito!','', 'success')
                        moduloLentes.almacenarDatos();
                    } else {
                        Swal.fire('Lentes de contacto modificados con éxito!', '', 'success')
                        moduloLentes.modificarDatos();
                    }
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo salio mal',
                text: "Asegurese de que ningún campo que no requiera numeros no contenga ningun número!",
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