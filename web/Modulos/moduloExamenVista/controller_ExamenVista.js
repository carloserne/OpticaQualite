let cuerpotblExamen = "";
let registroExamen;
let examen = [];
let clientes = [];
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
fetch("Modulos/moduloClientes/data_Clientes.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        clientes = jsondata;
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

    return fecha+" "+horaActual;
}

export function cargarExamen() {    
    examenes.forEach(function (ex) {    
        if (ex.Estatus != 0) {
            let fecha = ex.FechaHora.slice(0,10);
            let hora = ex.FechaHora.slice(10);
            registroExamen =                
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td>';
            cuerpotblExamen += registroExamen;
        }
    });
    document.getElementById("tblExamen").innerHTML = cuerpotblExamen;
    cuerpotblExamen = "";    
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
        } else if (filtro === "I" && ex.Estatus === 0) {
            registroExamen =
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td></tr>';
            cuerpotblExamen += registroExamen;
        } else if (filtro === "Am") {
            registroExamen =
                '<tr><td>' + fecha + '</td>' +
                '<td>' + hora + '</td>' +
                '<td>' + ex.Cliente + '</td>' +
                '<td>' + ex.Graduacion + '</td></tr>';
            cuerpotblExamen += registroExamen;
            
        }
        
    });
    crearTabla();
    document.getElementById("tblExamen").innerHTML = cuerpotblExamen;
    cuerpotblExamen = "";

}

export function mostrarPantallaRegistrar() {
    fetch("Modulos/moduloExamenVista/view_RegistrarExamenVista.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            cargarClientes();
        });
    
}
function cargarClientes(){
    let sel = document.getElementById('cliente');
    clientes.forEach(function (cl) {        
        const option = document.createElement('option');
        const valor = cl.ClaveUnicaCliente;
        
        option.value = valor;
        option.text = cl.ClaveUnicaCliente;
        sel.appendChild(option);        
    })
    
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
            cargarClientes();
            indiceExamenM = pos;
            let ExamenM = examen[indiceExamenM]; 
            let fecha = ExamenM.FechaHora.slice(0,10);
            let hora = ExamenM.FechaHora.slice(10); 

            document.getElementById("fecha").value = fecha;
            document.getElementById("hora").value = hora;
            document.getElementById("cliente").value = ExamenM.Cliente;
            document.getElementById("graduacion").value = ExamenM.Graduacion;
            
        });
}

export function catalogoExamen() {
    fetch("./Modulos/moduloExamenVista/view_catalogoExamenVista.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;

            import("./controller_ExamenVista.js").then(
                function (controller) {
                    moduloExamen = controller;
                    $(document).ready(function () {
                        moduloExamen.cargarExamentbl();
                        moduloExamen.cargarExamentblC();
                        $('#table_id').DataTable();
                        document.getElementById("table_id_filter").style.display = "none";
                    });
                }
            );
        });
}

export function almacenarDatos() {
    //let fecha = document.getElementById("fecha").value;
    //let hora = document.getElementById("hora").value;
    let cliente = document.getElementById("cliente").value;
    let graduacion = document.getElementById("graduacion").value;

    let fechaHoy = obtenerFecha();

    let idExamen = examen[examen.length-1].idExamenVista;

    let examenNuevo = {
        "idExamenVista": (idExamen+1),
        "FechaHora": fechaHoy,
        "Cliente": cliente,
        "Graduacion": graduacion,
        "Estatus": 1    
    };

    examen.push(examenNuevo);
    examenes.push(examenNuevo);
    guardarJSON();
    abrirModuloExamen();
}

export function modificarDatos() {
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let cliente = document.getElementById("cliente").value;
    let graduacion = document.getElementById("graduacion").value;
    let hola = "";
    let fechaHora = fecha.replace("-","/")+hora;

    examen[indiceExamenM].FechaHora = fechaHora;
    examen[indiceExamenM].Cliente = cliente;
    examen[indiceExamenM].Graduacion = graduacion; 
    
    examenes[indiceExamenM].FechaHora = fechaHora;
    examenes[indiceExamenM].Cliente = cliente;
    examenes[indiceExamenM].Graduacion = graduacion; 

    abrirModuloExamen();
}

/*Acciones de eliminar o modificar empleado*/

export function eliminarExamen(pos) {
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
            examenes[indiceExamenM].Estatus = 0;
            Swal.fire(
                'Eliminado!',
                'El registro se ha eliminado con éxito',
                'success'
            )
            moduloExamen.mostrarPantallaeliminar();
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
        if (input.name !== "fecha" && input.name !== "hora") {
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
                        Swal.fire('Examen de la vista registrado con éxito!','', 'success')
                        moduloExamen.almacenarDatos();
                    } else {
                        Swal.fire('Examen de la vista modificado con éxito!', '', 'success')
                        moduloExamen.modificarDatos();
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

// function guardarJSON() {

//     const fs = require('fs');

//     let actua = JSON.stringify(examen);
//     console.log(actua);

//     fs.writeFile('Modulos/moduloExamenVista/data_ExamenVista.json',actua,(error)=>{
//         if(error){
//             console.log('Error:'+error);
//         } else {
//             console.log("Correcto");
//         }
//     });
// }