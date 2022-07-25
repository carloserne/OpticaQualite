let cuerpotblMateriales = "";
let registroMateriales;
let materiales = [];

fetch("Modulos/moduloAccesorios/data_Accesorios.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            materiales = jsondata;
            console.log(materiales);
            cargarMaterialestbl();
        }
        );
       
export function cargarMaterial() {
     
    material.forEach(function (material) {
        registroMateriales =
                '<tr>' +
                '<td>' + material.numeroUnicoMaterial + '</td>' +
                '<td>' + material.nombreMaterial + '</td>' +
                '<td>' + material.precioCompra + '</td>' +
                '<td>' + material.precioVenta + '</td>' +
                '<td>' + material.estatus + '</td>';
        cuerpotblMateriales += registroMateriales;
    });
    document.getElementById("tblMateriales").innerHTML = cuerpotblMateriales;
    cuerpotblMateriales = "";

}


export function cargarMaterialestbl() {
     
    material.forEach(function (material) {
        registroMateriales =
                '<tr>' +
                '<td>' + material.numeroUnicoMaterial + '</td>' +
                '<td>' + material.nombreMaterial + '</td>' +
                '<td>' + material.precioCompra + '</td>' +
                '<td>' + material.precioVenta + '</td>' +
                '<td>' + material.estatus + '</td>';
        cuerpotblMateriales += registroMateriales;
    });
    document.getElementById("tblMateriales").innerHTML = cuerpotblMateriales;
    cuerpotblMateriales = "";


}

export function registrar(){
    fetch("./Modulos/moduloMateriales/view_registrarMaterial.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function eliminar(){
    fetch("./Modulos/moduloMateriales/view_eliminarMaterial.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}

export function catalogo(){
    fetch("./Modulos/moduloMateriales/view_catalogoMaterial.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorGestion").innerHTML = html;

        });
}
