let cuerpotblArmazones = "";
let registroArmazones;
let armazones = [];
let posArmazon;

fetch("Modulos/moduloArmazones/data_Armazon.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            armazones = jsondata;
            console.log(armazones);
            cargarArmazonestbl();
        }
        );
       
export function cargarArmazon() {
     
    armazones.forEach(function (armazon) {
        registroArmazones =
                '<tr>' +
                '<td>' + armazon.codigoBarras + '</td>' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + armazon.fotografia + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precioCompra + '</td>' +
                '<td>' + armazon.precioVenta + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td>';
        cuerpotblArmazones += registroArmazones;
    });
    document.getElementById("tblArmazones").innerHTML = cuerpotblArmazones;
    cuerpotblArmazones = "";

}


export function cargarArmazonestbl() {
     
    armazones.forEach(function (armazon) {
    registroArmazones =
                '<tr>' +
                '<td>' + armazon.codigoBarras + '</td>' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + armazon.fotografia + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precioCompra + '</td>' +
                '<td>' + armazon.precioVenta + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td>';
        cuerpotblArmazones += registroArmazones;
    });
    document.getElementById("tblArmazones").innerHTML = cuerpotblArmazones;
    cuerpotblArmazones = "";

}
export function cargarArmazonestblM() {
    posArmazon = 0;
    armazones.forEach(function (armazon) {
        if (armazon.estatus !== 0) {
            registroArmazones =
            '<tr>' +
            '<td>' + armazon.codigoBarras + '</td>' +
            '<td>' + armazon.nombre + '</td>' +
            '<td>' + armazon.marca + '</td>' +
            '<td>' + armazon.modelo + '</td>' +
            '<td>' + armazon.color + '</td>' +
            '<td>' + armazon.descripcion + '</td>' +
            '<td>' + armazon.fotografia + '</td>' +
            '<td>' + armazon.dimensiones + '</td>' +
            '<td>' + armazon.precioCompra + '</td>' +
            '<td>' + armazon.precioVenta + '</td>' +
            '<td>' + armazon.existencias + '</td>' +
            '<td>' + armazon.estatus + '</td>' +
                '<td>' + '<a onclick="moduloArmazones.eliminarArmazon(' + posArmazon + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                '<a onclick="moduloArmazon.modificar(' + posArmazon + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            posArmazon++;
            cuerpotblArmazones += registroArmazones;
        }
    });
    document.getElementById("tblArmazones").innerHTML = cuerpotblArmazones;
    cuerpotblArmazones = "";

}

export function registrar(){
    fetch("./Modulos/moduloArmazones/view_registrarArmazon.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function eliminar() {
    fetch("Modulos/moduloArmazones/view_eliminarArmazon.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Armazon.js").then(
                function (controller) {
                    moduloArmazones = controller;
                    moduloArmazones.cargarArmazonestblM();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";

                }
        );
        });
}

export function catalogo(){
    fetch("./Modulos/moduloArmazones/view_catalogoArmazon.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}
