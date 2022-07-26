
let cuerpotblEmp = "";
let registroEmp;
let emps = [];
let countIdPersona;
let countIdEmpleado;
fetch("Modulos/moduloEmp/data_Empleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {

            empleados = jsondata;

            cargarEmptbl();

            emps = jsondata;
        }
        );

export function cargarEmp() {
    let pos = 0;
    emp.forEach(function (empleado) {
        console.log(pos);
        registroEmp =
                '<tr>' +
                '<td>' + empleado.ClaveUnicaEmp + '</td>' +
                '<td>' + empleado.Persona.Nombre + '</td>' +
                '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                '<td>' + empleado.Persona.Genero + '</td>' +
                '<td>' + empleado.Persona.RFC + '</td>' +
                '<td>' + empleado.Persona.TelCasa + '</td>' +
                '<td>' + empleado.Persona.TelMovil + '</td>' +
                '<td>' + empleado.Persona.Correo + '</td>' +
                '<td>' + empleado.Usuario.usuario + '</td>' +
                '<td>' + empleado.Usuario.contasena + '</td>' +
                '<td>' + empleado.Persona.Estatus + '</td>';
        cuerpotblEmp += registroEmp;
        countIdPersona = parseInt(empleado.Persona.IdPersona);
        countIdEmpleado = parseInt(empleado.IdEmpleado);
        pos++;

    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblEmp;
    cuerpotblEmp = "";

}


export function cargarEmptbl() {

    emps.forEach(function (empleado) {
        registroEmp =
                '<tr>' +
                '<td>' + empleado.ClaveUnicaEmp + '</td>' +
                '<td>' + empleado.Persona.Nombre + '</td>' +
                '<td>' + empleado.Persona.ApellidoPaterno + '</td>' +
                '<td>' + empleado.Persona.ApellidoMaterno + '</td>' +
                '<td>' + empleado.Persona.Genero + '</td>' +
                '<td>' + empleado.Persona.RFC + '</td>' +
                '<td>' + empleado.Persona.TelCasa + '</td>' +
                '<td>' + empleado.Persona.TelMovil + '</td>' +
                '<td>' + empleado.Persona.Correo + '</td>' +
                '<td>' + empleado.Usuario.usuario + '</td>' +
                '<td>' + empleado.Usuario.contasena + '</td>' +
                '<td>' + empleado.Persona.Estatus + '</td>';
        cuerpotblEmp += registroEmp;
        countIdPersona = parseInt(empleado.Persona.IdPersona);
        countIdEmpleado = parseInt(empleado.IdEmpleado);
    });
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
            });
}

export function eliminar() {
    fetch("Modulos/moduloEmp/view_eliminarEmpleado.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;
                import ("controller_Empleados.js").then(
                        function (controller) {
                            moduloEmp = controller;
                            moduloEmp.cargarEmp();
                            $('#table_id').DataTable();
                            document.getElementById("table_id_filter").style.display = "block";
                        }
                );
            });
}

export function catalogo() {
    fetch("./Modulos/moduloEmp/view_catalogoEmpleados.html")
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
        if(input.name !== "telCasa" && input.name !== "telMovil" && input.name !== "contrasena"){
                if(isNaN(input.value) === false ){
                    comprobarString = false;
                }
                
            }  
    }
    
    if (vacios === 0) {
        if(comprobarString === true){
            Swal.fire({
            title: '¿Seguro de registrar al empleado?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Empleado registrado con exito!', '', 'success')
                alacenarDatos();
            } else if (result.isDenied) {

            }
        });
        }else{
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
        "ClaveUnicaEmp": numeroUnicoEmpleado,
        "Administrador": "Sam",
        "Usuario": {"usuario": usuario,
            "contasena": contrasena}
    };

    emp.push(empleado);
    emps.push(empleado);

    empleados();
}