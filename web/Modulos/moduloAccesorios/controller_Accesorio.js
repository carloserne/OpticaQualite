
let cuerpotblAccesorios = "";
let registroAccesorios;
let accesorios = [];

fetch("Modulos/moduloAccesorios/data_Accesorios.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {

            accesorios = jsondata;
            cargarAccesoriostbl();
            accesorios = jsondata;

        }
        );
       
export function cargarAccesorio() {
     
    acceso.forEach(function (accesorio) {
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
            title: '¿Seguro de registrar el accesorio?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('!Accesorio registrado con exito!', '', 'success')
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
    let nombreAccesorio = document.getElementById("nombreAccesorio").value;
    let marcaAccesorio = document.getElementById("marcaAccesorio").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;
    let existencia = document.getElementById("existencia").value;

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
    let accesorio = {
        "nombreAccesorio": nombreAccesorio,
        "marcaAcceorio": marcaAccesorio,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "existencias": existencia,
        "estatus": 1
    };

    accesorio.push(accesorio);
    accesorios.push(accesorio);

    accesorio();
}