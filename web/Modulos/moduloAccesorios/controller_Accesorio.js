
let cuerpotblAccesorios = "";
let registroAccesorios;
let accesorios = [];

fetch("Modulos/moduloAccesorios/data_Accesorios.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            accesorios = jsondata;
            console.log(accesorios);
            cargarAccesoriostbl();
        }
        );
       
export function cargarAccesorio() {
     
    accesorio.forEach(function (accesorio) {
        registroAccesorios =
                '<tr>' +
                '<td>' + accesorio.nombreAccesorio + '</td>' +
                '<td>' + accesorio.marcaAccesorio + '</td>' +
                '<td>' + accesorio.precioCompra + '</td>' +
                '<td>' + accesorio.precioVenta + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td>';
        cuerpotblAccesorios += registroAccesorios;
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}


export function cargarAccesoriostbl() {
     
    accesorios.forEach(function (accesorio) {
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
    fetch("./Modulos/moduloAccesorios/view_registrarAccesorio.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function eliminar(){
    fetch("./Modulos/moduloAccesorios/view_eliminarAccesorio.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function catalogo(){
    fetch("./Modulos/moduloAccesorios/view_catalogoAccesorio.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}
