
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
            emps = jsondata;
            cargarEmptbl();
        }
        );

export function cargarEmp() {

    emp.forEach(function (empleado) {
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
    fetch("./Modulos/moduloEmp/view_RegistrarEmpleado.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;

            });
}

export function eliminar() {
    fetch("./Modulos/moduloEmp/view_eliminarEmpleado.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;

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
    Swal.fire({
        title: '¿Seguro de registrar al empleado?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            alacenarDatos();
        } else if (result.isDenied) {
            
        }
    })
}
export function alacenarDatos() {
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