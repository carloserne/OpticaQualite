
let cuerpotblAccesorios = "";
let registroAccesorios;
let accesorio = [];

fetch("Modulos/moduloAccesorios/data_Accesorios.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            accesorio = jsondata;
            console.log(accesorio);
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
                '<td>' + accesorio.existencia + '</td>' +
                '<td>' + accesorio.estatus + '</td>';
        cuerpotblAccesorios += registroAccesorios;
    });
    document.getElementById("tblAccesorios").innerHTML = cuerpotblAccesorios;
    cuerpotblAccesorios = "";

}


export function cargarAccesoriostbl() {
     
    accesorio.forEach(function (accesorio) {
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
