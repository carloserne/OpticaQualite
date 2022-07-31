let cuerpotblExamen = "";
let registroExamen;
let examen = [];
let countIdLexamen;
let indiceExamenM;

fetch("Modulos/moduloExamenVista/data_ExamenVista.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        examen = jsondata;        
        cargarExamentbl();       
    }
    );
    
function obtenerFecha(){
    let date = new Date();

    let dia = date.getDate();
    let mes = (date.getMonth() + 1);
    let ano = date.getFullYear();
    let hora = date.getHours();
    let min = date.getMinutes();

    let fecha = dia+"/0"+mes+"/"+ano;;
    let horaActual = hora+":"+min;

    return fechaActual = fecha+" "+horaActual;
}

export function cargarExamen() {
    examenes.forEach(function (ex) {    
        if (ex.Estatus != 0) {
            registroExamen =
                '<tr>' +
                '<td>' + ex.FechaHora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Color + '</td>' +
                '<td>' + ex.Queratometria + '</td>' +
                '<td> <img src="" class="img-fluid"> </td>' +
                '<td>' + tipo + '</td>' +
                '<td>' + ex.Estatus + '</td></tr>';
            cuerpotblExamen += registroExamen;
            countIdLexamen = ex.idLentesContacto;
        }
    });
    document.getElementById("tblExamen").innerHTML = cuerpotblExamen;
    cuerpotblExamen = "";

    cargarInput = document.getElementById("imgLentes");
    
}

export function cargarExamentbl() {
    examen.forEach(function (ex) {     
        if (ex.Estatus != 0) {
            let fecha = ex.FechaHora.slice(0,10);
            let hora = ex.FechaHora.slice(10);
            registroExamen =        
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td></tr>';
            cuerpotblExamen += registroExamen;
            countIdLexamen = ex.idExamenVista;
        }
    });
    document.getElementById("tblExamen").innerHTML = cuerpotblExamen;
    cuerpotblExamen = "";
}

export function cargarExamentblM() {
    examen.forEach(function (ex) {  
        if (ex.Estatus !== 0) {
            let fecha = ex.FechaHora.slice(0,10);
            let hora = ex.FechaHora.slice(10);
            registroExamen =
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td>' +
                '<td>' + '<a onclick="moduloExamen.eliminarExamen(' + examen.indexOf(ex) + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                ' <a onclick="moduloExamen.modificarExamen(' + examen.indexOf(ex) + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            cuerpotblExamen += registroExamen;
            countIdLexamen = ex.idExamenVista;        
        }
    });
    document.getElementById("tblExamen").innerHTML = cuerpotblExamen;
    cuerpotblExamen = "";
}

export function cargarExamentblC() {
    let filtro = document.getElementById("filtro").value;

    examen.forEach(function (ex) {
        let fecha = ex.FechaHora.slice(0,10);
        let hora = ex.FechaHora.slice(10);
        if (filtro === "A" && ex.Estatus !== 0) {
            registroExamen =
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td></tr>';
            cuerpotblExamen += registroExamen;
            countIdLexamen = ex.idLentesContacto;

        } else if (filtro === "I" && ex.Estatus === 0) {
            registroExamen =
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td></tr>';
            cuerpotblExamen += registroExamen;
            countIdLexamen = ex.idLentesContacto;
        } else if (filtro === "Am") {
            registroExamen =
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td></tr>';
            cuerpotblExamen += registroExamen;
            countIdLexamen = ex.idLentesContacto;
        }

    });
    $('#table_id').DataTable();
    document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblLentesC").innerHTML = cuerpotblExamen;
    cuerpotblExamen = "";

}

export function mostrarPantallaRegistrar() {
    fetch("Modulos/moduloExamenVista/view_RegistrarExamenVista.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
        });
}

export function mostrarPantallaeliminar() {
    fetch("./Modulos/moduloExamenVista/view_eliminarExamenVista.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import("./controller_ExamenVista.js").then(
                function (controller) {
                    moduloExamen = controller;
                    moduloExamen.cargarExamentblM();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";
                }
            );
        });
}

export function modificarExamen(pos) {
    fetch("./Modulos/moduloExamenVista/view_modificarExamenVista.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            indiceExamenM = pos;
            let ExamenM = examen[indiceExamenM];        
            document.getElementById("").value = ExamenM.Nombre;
            document.getElementById("").value = ExamenM.Marca;
            document.getElementById("").value = ExamenM.Color;
            document.getElementById("queratometria").value = ExamenM.Queratometria;
            //document.getElementById("foto").value = ExamenM.Fotografia;
            document.getElementById("tipoL").value = ExamenM.TipoLentes;
        });
}

export function catalogoLentes() {
    fetch("./Modulos/moduloExamenVista/view_catalogoExamenVista.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

            import("./controller_ExamenVista.js").then(
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

    let idLentes = (countIdLexamen + 1);

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

    examen.push(lentesNuevo);
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

    let idLentes = (countIdLexamen + 1);

    let lentesNuevo = {
        "idexamenontacto": idLentes,
        "Nombre": nombre,
        "Marca": marca,
        "Color": color,
        "Queratometria": queratometria,
        "Fotografia": foto,
        "TipoLentes": tipoLentes,
        "Estatus": 1
    };

    lentes[indiceExamenM] = lentesNuevo;
    examen[indiceExamenM] = lentesNuevo;

    abrirModuloLentes();
}

/*Acciones de eliminar o modificar empleado*/

export function eliminarLentes(pos) {
    indiceExamenM = pos;
    
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
            examen[indiceExamenM].Estatus = 0;
            lentes[indiceExamenM].Estatus = 0;
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
