
let cuerpotblEmp = "";
let registroEmp;
let empleados = [];
fetch("Modulos/moduloEmp/data_Empleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            empleados = jsondata;
            console.log(empleados);
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
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblEmp;
    cuerpotblEmp = "";

}


export function cargarEmptbl() {
     
    empleados.forEach(function (empleado) {
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
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblEmp;
    cuerpotblEmp = "";

}

export function registrar(){
    fetch("./Modulos/moduloEmp/view_RegistrarEmpleado.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function eliminar(){
    fetch("./Modulos/moduloEmp/view_eliminarEmpleado.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function catalogo(){
    fetch("./Modulos/moduloEmp/view_catalogoEmpleados.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}
