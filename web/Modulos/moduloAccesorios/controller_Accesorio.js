let cuerpotblAccesorios = "";
let registroAccesorios;
let accesorio = [];
fetch("Modulos/moduloAccesorios/data_Accesorios.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            accesorios = jsondata;
            console.log(accesorio);
            cargarAccesoriostbl();
        }
        );
       
export function cargarAccesorio() {
     
    emp.forEach(function (accesorio) {
        registroAccesorios =
                '<tr>' +
                '<td>' + accesorio.nombreAccesorio + '</td>' +
                '<td>' + accesorio.marcaAccesorio + '</td>' +
                '<td>' + accesorio.precioCompra + '</td>' +
                '<td>' + accesorio.precioVenta + '</td>' +
                '<td>' + accesorio.existencia + '</td>' +
                '<td>' + accesorio.estatus + '</td>';
        cuerpotblAccesorios += registroAccesorios;
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}


export function cargarAccesoriostbl() {
     
    empleados.forEach(function (accesorio) {
        registroAccesorios =
        '<tr>' +
        '<td>' + accesorio.nombreAccesorio + '</td>' +
        '<td>' + accesorio.marcaAccesorio + '</td>' +
        '<td>' + accesorio.precioCompra + '</td>' +
        '<td>' + accesorio.precioVenta + '</td>' +
        '<td>' + accesorio.existencia + '</td>' +
        '<td>' + accesorio.estatus + '</td>';
cuerpotblAccesorios += registroAccesorios;
});
document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
cuerpotblAccesorios = "";

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
