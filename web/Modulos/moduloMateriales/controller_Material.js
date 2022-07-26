let cuerpotblMateriales = "";
let registroMateriales;
let materiales = [];
let countNumeroUnicoMaterial;


fetch("Modulos/moduloAccesorios/data_Accesorios.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {

            materiales = jsondata;
            cargarMaterialestbl();
            materiales = jsondata;

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
        countNumeroUnicoMaterial = parseInt
    });
    document.getElementById("tblMateriales").innerHTML = cuerpotblMateriales;
    cuerpotblMateriales = "";

}


export function cargarMaterialestbl() {
     
    materiales.forEach(function (material) {
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
        cargarMaterialestbl();
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
 
    }
    
    if (vacios === 0) {
        if(comprobarString === true){
            Swal.fire({
            title: '¿Seguro de registrar el material?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('!Material registrado con exito!', '', 'success')
                alacenarDatos();
            } else if (result.isDenied) {

            }
        });
        }else{
            Swal.fire({
            title: 'Algo salio mal',
            text: "Asegurese de que ningun campo que no requiera números no contenga ningun número!",
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
    let nombreMaterial = document.getElementById("nombreMaterial").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;

    let persona = {
        "IdPersona": idPersona,
        "Nombre": nombres,
        "ApellidoPaterno": apellidoP,
        "ApellidoMaterno": apellidoM,
        "Genero": genero,
        "RFC": rfc,
        "TelCasa": telCasa,
        "TelMovil": telMovil,
        "Correo": correo,
        "Estatus": 1
    };
    let material = {
        "nombreMaterial": nombreMaterial,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "estatus": 1
    };

    materiales.push(material);

    material();
}
