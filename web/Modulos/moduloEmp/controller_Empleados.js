
let cuerpotblEmp = "";
let registroEmp;
let emps = [];
let countIdPersona;
let countIdEmpleado;
let posEmp;
fetch("Modulos/moduloEmp/data_Empleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {

            emps = jsondata;

            cargarEmptbl();

            emps = jsondata;
        }
        );

export function cargarEmp() {
let estatus;
    emp.forEach(function (empleado) {
        if (empleado.Persona.Estatus !== 0) {
            if(empleado.Persona.Estatus === 1){
                estatus = "Activo";
            }

            if(empleado.Persona.Estatus === 0){
                estatus = "Inactivo";
            }
            registroEmp =
                    '<tr>' +
                    '<td hidden>' + empleado.ClaveUnicaEmp + '</td>' +
                    '<td>' + empleado.Persona.Nombre + '</td>' +
                    '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                    '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                    '<td>' + empleado.Persona.Genero + '</td>' +
                    '<td hidden>' + empleado.Persona.RFC + '</td>' +
                    '<td>' + empleado.Persona.TelCasa + '</td>' +
                    '<td>' + empleado.Persona.TelMovil + '</td>' +
                    '<td hidden>' + empleado.Persona.Correo + '</td>' +
                    '<td hidden>' + empleado.Usuario.usuario + '</td>' +
                    '<td hidden>' + empleado.Usuario.contasena + '</td>' +
                    '<td>' + estatus + '</td>';
            cuerpotblEmp += registroEmp;
            countIdPersona = parseInt(empleado.Persona.IdPersona);
            countIdEmpleado = parseInt(empleado.IdEmpleado);
        }

    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblEmp;
    cuerpotblEmp = "";

}

export function cargarEmptbl() {
    let estatus;

    emps.forEach(function (empleado) {
        if (empleado.Persona.Estatus !== 0) {
            if(empleado.Persona.Estatus === 1){
                estatus = "Activo";
            }

            if(empleado.Persona.Estatus === 0){
                estatus = "Inactivo";
            }

            registroEmp =
                    '<tr>' +
                    '<td hidden>' + empleado.ClaveUnicaEmp + '</td>' +
                    '<td>' + empleado.Persona.Nombre + '</td>' +
                    '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                    '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                    '<td>' + empleado.Persona.Genero + '</td>' +
                    '<td hidden>' + empleado.Persona.RFC + '</td>' +
                    '<td>' + empleado.Persona.TelCasa + '</td>' +
                    '<td>' + empleado.Persona.TelMovil + '</td>' +
                    '<td hidden>' + empleado.Persona.Correo + '</td>' +
                    '<td hidden>' + empleado.Usuario.usuario + '</td>' +
                    '<td hidden>' + empleado.Usuario.contasena + '</td>' +
                    '<td>' + estatus + '</td>';

            cuerpotblEmp += registroEmp;
            countIdPersona = parseInt(empleado.Persona.IdPersona);
            countIdEmpleado = parseInt(empleado.IdEmpleado);
        }
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblEmp;
    cuerpotblEmp = "";

}

export function cargarEmptblM() {
    posEmp = 0;
    let estatus
    emps.forEach(function (empleado) {
        if (empleado.Persona.Estatus !== 0) {

            if(empleado.Persona.Estatus === 1){
                estatus = "Activo";
            }

            if(empleado.Persona.Estatus === 0){
                estatus = "Inactivo";
            }

            registroEmp =
                    '<tr onclick="moduloEmp.accionesEmp(' + posEmp + ');">' +
                    '<td hidden>' + empleado.ClaveUnicaEmp + '</td>' +
                    '<td>' + empleado.Persona.Nombre + '</td>' +
                    '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                    '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                    '<td>' + empleado.Persona.Genero + '</td>' +
                    '<td hidden>' + empleado.Persona.RFC + '</td>' +
                    '<td>' + empleado.Persona.TelCasa + '</td>' +
                    '<td>' + empleado.Persona.TelMovil + '</td>' +
                    '<td hidden>' + empleado.Persona.Correo + '</td>' +
                    '<td hidden>' + empleado.Usuario.usuario + '</td>' +
                    '<td hidden>' + empleado.Usuario.contasena + '</td>' +
                    '<td>' + estatus + '</td>';
            
            cuerpotblEmp += registroEmp;
            countIdPersona = parseInt(empleado.Persona.IdPersona);
            countIdEmpleado = parseInt(empleado.IdEmpleado);
        }
        posEmp++;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblEmp;
    cuerpotblEmp = "";

}

export function accionesEmp(posEmp){
       
            Swal.fire({
                title: '??Qu?? deseas hacer?',
                showDenyButton: true,
                confirmButtonText: '<i class="fa fa-pencil" aria-hidden="true"></i>Modificar',
                denyButtonText: `<i class="fa fa-trash-o" aria-hidden="true"></i>Eliminar`
            }).then((result) => {
                if (result.isConfirmed) {
                    moduloEmp.modificar(posEmp);
                } else if (result.isDenied) {
                    moduloEmp.eliminarEmp(posEmp);
                }
            });

}

export function cargarEmptblC() {
    let filtro = document.getElementById("filtro").value;
    let estatus;

    emps.forEach(function (empleado) {
        if(empleado.Persona.Estatus === 1){
            estatus = "Activo";
        }

        if(empleado.Persona.Estatus === 0){
            estatus = "Inactivo";
        }

        if (filtro === "A" && empleado.Persona.Estatus !== 0) {
                registroEmp =
                        '<tr>' +
                        '<td hidden>' + empleado.ClaveUnicaEmp + '</td>' +
                        '<td>' + empleado.Persona.Nombre + '</td>' +
                        '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                        '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                        '<td>' + empleado.Persona.Genero + '</td>' +
                        '<td hidden>' + empleado.Persona.RFC + '</td>' +
                        '<td>' + empleado.Persona.TelCasa + '</td>' +
                        '<td>' + empleado.Persona.TelMovil + '</td>' +
                        '<td hidden>' + empleado.Persona.Correo + '</td>' +
                        '<td hidden>' + empleado.Usuario.usuario + '</td>' +
                        '<td hidden>' + empleado.Usuario.contasena + '</td>' +
                        '<td>' + estatus + '</td>';

                cuerpotblEmp += registroEmp;
                countIdPersona = parseInt(empleado.Persona.IdPersona);
                countIdEmpleado = parseInt(empleado.IdEmpleado);
                
        }else if(filtro === "I" && empleado.Persona.Estatus === 0){
            registroEmp =
                        '<tr>' +
                        '<td hidden>' + empleado.ClaveUnicaEmp + '</td>' +
                        '<td>' + empleado.Persona.Nombre + '</td>' +
                        '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                        '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                        '<td>' + empleado.Persona.Genero + '</td>' +
                        '<td hidden>' + empleado.Persona.RFC + '</td>' +
                        '<td>' + empleado.Persona.TelCasa + '</td>' +
                        '<td>' + empleado.Persona.TelMovil + '</td>' +
                        '<td hidden>' + empleado.Persona.Correo + '</td>' +
                        '<td hidden>' + empleado.Usuario.usuario + '</td>' +
                        '<td hidden>' + empleado.Usuario.contasena + '</td>' +
                        '<td>' + estatus + '</td>';

                cuerpotblEmp += registroEmp;
                countIdPersona = parseInt(empleado.Persona.IdPersona);
                countIdEmpleado = parseInt(empleado.IdEmpleado);
        }else if(filtro === "Am"){
            registroEmp =
                        '<tr>' +
                        '<td hidden>' + empleado.ClaveUnicaEmp + '</td>' +
                        '<td>' + empleado.Persona.Nombre + '</td>' +
                        '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                        '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                        '<td>' + empleado.Persona.Genero + '</td>' +
                        '<td hidden>' + empleado.Persona.RFC + '</td>' +
                        '<td>' + empleado.Persona.TelCasa + '</td>' +
                        '<td>' + empleado.Persona.TelMovil + '</td>' +
                        '<td hidden>' + empleado.Persona.Correo + '</td>' +
                        '<td hidden>' + empleado.Usuario.usuario + '</td>' +
                        '<td hidden>' + empleado.Usuario.contasena + '</td>' +
                        '<td>' + estatus + '</td>';

                cuerpotblEmp += registroEmp;
                countIdPersona = parseInt(empleado.Persona.IdPersona);
                countIdEmpleado = parseInt(empleado.IdEmpleado);
        }

    });
     $('#table_id').DataTable();
                            document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblEmpleados").innerHTML = cuerpotblEmp;
    cuerpotblEmp = "";

}

export function registrar() {
    fetch("Modulos/moduloEmp/view_RegistrarEmpleado.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;
                let txtInput = document.querySelector('#telMovil');
               /* import ("./controller_Empleados.js").then(
                    function (controller) {
                        moduloEmp = controller;                
                        txtInput.addEventListener('keyup',()=>{
                            
                        });
                    }
            );*/

            });
}

export function eliminar() {
    fetch("./Modulos/moduloEmp/view_eliminarEmpleado.html")
            .then(function (respuesta) {
            return respuesta.text();
            })
            .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Empleados.js").then(
                    function (controller) {
                    moduloEmp = controller;
                            moduloEmp.cargarEmptblM();
                            crearTabla();
                            document.getElementById("table_id_filter").style.display = "block";
                    }
            );
            });
    }
    export function modificar(pos) {
    fetch("./Modulos/moduloEmp/view_modificarEmpleado.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;
                let personaM = emps[pos].Persona;
                let empleadoM = emps[pos];
                posEmp = pos;
                document.getElementById("numeroUnicoEmpleado").value = empleadoM.ClaveUnicaEmp;
                document.getElementById("nombres").value = personaM.Nombre;
                document.getElementById("apellidoP").value = personaM.ApellidoPaterno;
                document.getElementById("apellidoM").value = personaM.ApellidoMaterno;
                document.getElementById("genero").value = personaM.Genero;
                document.getElementById("rfc").value = personaM.RFC;
                document.getElementById("telCasa").value = personaM.TelCasa;
                document.getElementById("telMovil").value = personaM.TelMovil;
                document.getElementById("correo").value = personaM.Correo;
                document.getElementById("usuario").value = empleadoM.Usuario.usuario;
                document.getElementById("contrasena").value = emps[pos].Usuario.contasena;
            });
}
export function catalogo() {
    fetch("./Modulos/moduloEmp/view_catalogoEmpleados.html")
            .then(function (respuesta) {
            return respuesta.text();
            })
            .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Empleados.js").then(
                    function (controller) {
                    moduloEmp = controller;
                    $(document).ready(function(){
                            
                            moduloEmp.cargarEmptbl();
                            moduloEmp.cargarEmptblC();
                            crearTabla();
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
    let inputsVacios = [];
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {

            vacios++;
            inputsVacios.push(inputs[i]);
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
                title: '??Seguro de registrar al empleado?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Empleado registrado con exito!', '', 'success')
                    moduloEmp.almacenarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo salio mal',
                text: "Asegurese de que ningun campo que no requiera numeros no contenga ningun n??mero!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar!'
            })
        }

    } else {
        for (let index = 0; index < inputsVacios.length; index++) {
            input = inputsVacios[index];
            input.classList.add("vacio");
            let mensaje = input.getAttribute("mensaje");
            document.getElementById(mensaje).style.display="block";
            inputsVacios[0].focus();
        }
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
    let numeroUnico = apellidoP.slice(0,2)+"-"+apellidoM.slice(0,1)+"-"+Math.floor(Math.random()*10000);

    let persona = {"IdPersona": idPersona,
        "Nombre": nombres,
        "ApellidoPaterno": apellidoP,
        "ApellidoMaterno": apellidoM,
        "Genero": genero,
        "RFC": rfc,
        "TelCasa": telCasa,
        "TelMovil": telMovil,
        "Correo": correo,
        "Estatus": 1};
    let empleado = {
        "Persona": persona,
        "IdEmpleado": idEmpleado,
        "ClaveUnicaEmp": numeroUnico,
        "Administrador": 1,
        "Usuario": {"usuario": usuario,
            "contasena": contrasena}
    };

    emp.push(empleado);
    emps.push(empleado);

    empleados();
}
export function modificarEmp() {
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    let inputsVacios = [];
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {

            vacios++;
            inputsVacios.push(inputs[i]);
            console.log(inputsVacios);
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
                title: '??Seguro de modificar al empleado?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Empleado modificado con exito!', '', 'success')
                    moduloEmp.modificarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            
            Swal.fire({
                title: 'Algo salio mal',
                text: "Asegurese de que ningun campo que no requiera numeros no contenga ningun n??mero!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar!'
            })
        }

    } else {
        for (let index = 0; index < inputsVacios.length; index++) {
            input = inputsVacios[index];
            input.classList.add("vacio");
            let mensaje = input.getAttribute("mensaje");
            console.log(input);
            document.getElementById(mensaje).style.display="block";
            inputsVacios[0].focus();
        }
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
    let numeroUnico = apellidoP.slice(0,2)+"-"+apellidoM.slice(0,1)+"-"+Math.floor(Math.random()*10000);
    let persona = {"IdPersona": idPersona,
        "Nombre": nombres,
        "ApellidoPaterno": apellidoP,
        "ApellidoMaterno": apellidoM,
        "Genero": genero,
        "RFC": rfc,
        "TelCasa": telCasa,
        "TelMovil": telMovil,
        "Correo": correo,
        "Estatus": 1};
    let empleado = {
        "Persona": persona,
        "IdEmpleado": idEmpleado,
        "ClaveUnicaEmp": numeroUnico,
        "Administrador": "Sam",
        "Usuario": {"usuario": usuario,
            "contasena": contrasena}
    };

    emp[posEmp] = empleado;
    emps[posEmp] = empleado;

    empleados();
}
/*Acciones de elimonar o modificar empleado*/

export function eliminarEmp(pos) {
    Swal.fire({
        title: 'Advertencia',
        text: "??Esta seguro de eliminar a este empleado?",
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
            moduloEmp.eliminar();
            Swal.fire(
                    'Eliminado!',
                    'El empleado se ha eliminado con exito',
                    'success'
                    )
        }
    })
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
                    "emptyTable": "Ning??n dato disponible en esta tabla",
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
// export function contar(num){
//     alert("Contando");
// }
