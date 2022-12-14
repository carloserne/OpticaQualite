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


$('.menuIcon').on('click', function () {
    $('#navMain').addClass('menuActivo');
})


export function cargarLentes() {
    let tipo;
    lentes.forEach(function (lentesR) {
        if (lentesR.TipoLentes === 1) {
            tipo = "Graduación";
        } else {
            tipo = "Estéticos";
        }
        if (lentesR.Estatus != 0) {
            registroLentes =
                '<tr>' +
                '<td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td> <img src="" class="img-fluid"> </td>' +
                '<td>' + tipo + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        }
    });
    document.getElementById("tblLentesC").innerHTML = cuerpotblLentes;
    cuerpotblLentes = "";

    cargarInput = document.getElementById("imgLentes");

}

export function cargarLentestbl() {
    let tipo;
    lentesC.forEach(function (lentesR) {
        if (lentesR.TipoLentes === 1) {
            tipo = "Graduación";
        } else {
            tipo = "Estéticos";
        }
        if (lentesR.Estatus !== 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td> <img src="" class="img-fluid"> </td>' +
                '<td>' + tipo + '</td>' +
                '<td>' + lentesR.Estatus + '</td>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        }
    });
    document.getElementById("tblLentesC").innerHTML = cuerpotblLentes;
    cuerpotblLentes = "";
}

export function cargarLentestblM() {
    let tipo;
    lentesC.forEach(function (lentesR) {
        if (lentesR.TipoLentes === 1) {
            tipo = "Graduación";
        } else {
            tipo = "Estéticos";
        }

        if (lentesR.Estatus !== 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td> <img src="" class="img-fluid"> </td>' +
                '<td>' + tipo + '</td>' +
                '<td>' + lentesR.Estatus + '</td>' +
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
    let tipo;
    lentesC.forEach(function (lentesR) {
        if (lentesR.TipoLentes === 1) {
            tipo = "Graduación";
        } else {
            tipo = "Estéticos";
        }
        if (filtro === "A" && lentesR.Estatus !== 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td> <img src="" class="img-fluid"> </td>' +
                '<td>' + tipo + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;

        } else if (filtro === "I" && lentesR.Estatus === 0) {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td>' + lentesR.Queratometria + '</td>' +
                '<td> <img src="" class="img-fluid"> </td>' +
                '<td>' + tipo + '</td>' +
                '<td>' + lentesR.Estatus + '</td></tr>';
            cuerpotblLentes += registroLentes;
            countIdLentes = lentesR.idLentesContacto;
        } else if (filtro === "Am") {
            registroLentes =
                '<tr><td>' + lentesR.Nombre + '</td>' +
                '<td>' + lentesR.Marca + '</td>' +
                '<td>' + lentesR.Color + '</td>' +
                '<td> <img src="" class="img-fluid"> </td>' +
                '<td>' + lentesR.Fotografia + '</td>' +
                '<td>' + tipo + '</td>' +
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
    fetch("./Modulos/moduloLentesContacto/view_modificarLentesContacto.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            indiceLentesM = pos;
            let lentesM = lentesC[indiceLentesM];
            document.getElementById("nombre").value = lentesM.Nombre;
            document.getElementById("marca").value = lentesM.Marca;
            document.getElementById("color").value = lentesM.Color;
            document.getElementById("queratometria").value = lentesM.Queratometria;
            //document.getElementById("foto").value = lentesM.Fotografia;
            document.getElementById("tipoL").value = lentesM.TipoLentes;
        });
}

export function catalogoLentes() {
    fetch("./Modulos/moduloLentesContacto/view_catalogoLentesContacto.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

            import("./controller_LentesContacto.js").then(
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
    let tipoLentes = document.getElementById("tipoL").value;

    let idLentes = (countIdLentes + 1);

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
    let tipoLentes = document.getElementById("tipoL").value;

    let idLentes = (countIdLentes + 1);

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

export function validarDatos(accion) {
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {
            vacios++;
        }
        if (input.name !== "queratometria" && input.name !== "foto" && input.name !== "tipoL") {
            if (isNaN(input.value) === false) {
                comprobarString = false;
            }

        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de ' + accion + ' el registro?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    if (accion === "guardar") {
                        Swal.fire('Lentes de contacto registrados con éxito!', '', 'success')
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
let cargarInput;
let imagenElegida;
export function cargarImg() {
    cargarInput = document.getElementById("foto");
    imagenElegida = document.getElementById("imgSelect");

    cargarInput.onchange = () => {
        let lector = new FileReader();
        lector.readAsDataURL(cargarInput.files[0]);
        lector.onload = () => {
            imagenElegida.setAttribute("src", lector.result);
        }
    }

}
