let cuerpotblMateriales = "";
let registroMateriales;
let materiales = [];
let posMaterial;


fetch("Modulos/moduloMateriales/data_Material.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {

            materiales = jsondata;
            cargarMaterialestbl();
            material = materiales;
        }
        );
       
export function cargarMaterial() {
     
    material.forEach(function (materialess) {
        registroMateriales =
                '<tr>' +
                '<td>' + materialess.numeroUnicoMaterial + '</td>' +
                '<td>' + materialess.nombreMaterial + '</td>' +
                '<td>' + materialess.precioCompra + '</td>' +
                '<td>' + materialess.precioVenta + '</td>' +
                '<td>' + materialess.estatus + '</td>';
        cuerpotblMateriales += registroMateriales;
    });
    document.getElementById("tblMateriales").innerHTML = cuerpotblMateriales;
    cuerpotblMateriales = "";

}


export function cargarMaterialestbl() {
     
    materiales.forEach(function (materialess) {
        registroMateriales =
                '<tr>' +
                '<td>' + materialess.numeroUnicoMaterial + '</td>' +
                '<td>' + materialess.nombreMaterial + '</td>' +
                '<td>' + materialess.precioCompra + '</td>' +
                '<td>' + materialess.precioVenta + '</td>' +
                '<td>' + materialess.estatus + '</td>';
        cuerpotblMateriales += registroMateriales;
    });
    document.getElementById("tblMateriales").innerHTML = cuerpotblMateriales;
    cuerpotblMateriales = "";


}
export function cargarMaterialestblM() {
    posMaterial = 0;
    materiales.forEach(function (materialess) {
        if (materialess.estatus !== 0) {
            registroMateriales =
            '<tr>' +
            '<td>' + materialess.numeroUnicoMaterial + '</td>' +
            '<td>' + materialess.nombreMaterial + '</td>' +
            '<td>' + materialess.precioCompra + '</td>' +
            '<td>' + materialess.precioVenta + '</td>' +
            '<td>' + materialess.estatus + '</td>' +
            '<td>' + '<a onclick="moduloMateriales.eliminarMaterial(' + posMaterial + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
            '<a onclick="moduloMateriales.modificar(' + posMaterial + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            posMaterial++;
            cuerpotblMateriales += registroMateriales;
        }
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

export function eliminar() {
    fetch("./Modulos/moduloMateriales/view_eliminarMaterial.html")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Material.js").then(
                function (controller) {
                    moduloMateriales = controller;
                    moduloMateriales.cargarMaterialestblM();
                    $('#table_id').DataTable();
                    document.getElementById("table_id_filter").style.display = "block";

                }
        );
        });
}
export function modificar(pos) {
    fetch("./Modulos/moduloMateriales/view_modificarMaterial.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;
                let materialSelec = materiales[pos];
                posMaterial = pos;
            
                document.getElementById("nombreMaterial").value = materialSelec.nombreMaterial;
                document.getElementById("precioCompra").value = materialSelec.precioCompra;
                document.getElementById("precioVenta").value = materialSelec.precioVenta;

            });


}
export function cargarMaterialestblC() {
    let filtro = document.getElementById("filtro").value;
    materiales.forEach(function (materialess) {
        if (filtro === "A" && materialess.estatus !== 0) {
            registroMateriales =
            '<tr>' +
            '<td>' + materialess.numeroUnicoMaterial + '</td>' +
            '<td>' + materialess.nombreMaterial + '</td>' +
            '<td>' + materialess.precioCompra + '</td>' +
            '<td>' + materialess.precioVenta + '</td>' +
            '<td>' + materialess.estatus + '</td>';

            cuerpotblMateriales += registroMateriales;
        } else if (filtro === "I" && materialess.estatus === 0) {
            registroMateriales =
            '<tr>' +
            '<td>' + materialess.numeroUnicoMaterial + '</td>' +
            '<td>' + materialess.nombreMaterial + '</td>' +
            '<td>' + materialess.precioCompra + '</td>' +
            '<td>' + materialess.precioVenta + '</td>' +
            '<td>' + materialess.estatus + '</td>';

            cuerpotblMateriales += registroMateriales;
        } else if (filtro === "Am") {
            registroMateriales =
            '<tr>' +
            '<td>' + materialess.numeroUnicoMaterial + '</td>' +
            '<td>' + materialess.nombreMaterial + '</td>' +
            '<td>' + materialess.precioCompra + '</td>' +
            '<td>' + materialess.precioVenta + '</td>' +
            '<td>' + materialess.estatus + '</td>';

            cuerpotblMateriales += registroMateriales;

        }
        });
    $('#table_id').DataTable();
    document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblMateriales").innerHTML = cuerpotblMateriales;
    cuerpotblMateriales = "";
}
export function catalogo() {
    fetch("./Modulos/moduloMateriales/view_catalogoMaterial.html")
            .then(function (respuesta) {
            return respuesta.text();
            })
            .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Material.js").then(
                    function (controller) {
                    moduloMateriales = controller;
                    $(document).ready(function(){
                            moduloMateriales.cargarMaterialestbl();
                            moduloMateriales.cargarMaterialestblC();
                            $('#table_id').DataTable();
                            document.getElementById("table_id_filter").style.display = "none";
                    });
                    }
            );
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
            title: '??Seguro de registrar el material?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('??Material registrado con exito!', '', 'success')
                moduloMateriales.almacenarDatos();
            } else if (result.isDenied) {

            }
        });
        }else{
            Swal.fire({
            title: 'Algo salio mal',
            text: "Asegurese de que ningun campo que no requiera n??meros no contenga ningun n??mero!",
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

    let material = {
        "nombreMaterial": nombreMaterial,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "estatus": 1
    };

    materiales.push(material);

    console.log(materiales);

    pantallaMaterial();
}

/*Modificar datos*/
export function modificarMaterial() {
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
        if (comprobarString === true) {
            Swal.fire({
                title: '??Seguro de modificar el material?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('??Material modificado con exito!', '', 'success')
                    moduloMateriales.modificarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo sali?? mal',
                text: "??Asegurese de que ningun campo que no requiera n??meros no contenga ningun n??mero!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar!'
            })
        }

    } else {
        Swal.fire({
            title: 'Algo sali?? mal',
            text: "??Asegurese de llenar todos los campos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar!'
        })
    }
}
export function modificarDatos() {
    let nombreMaterial = document.getElementById("nombreMaterial").value;
    let precioCompra = document.getElementById("precioCompra").value;
    let precioVenta = document.getElementById("precioVenta").value;


    let material = {
        "numeroUnicoMaterial": (posMaterial),
        "nombreMaterial": nombreMaterial,
        "precioCompra": precioCompra,
        "precioVenta": precioVenta,
        "estatus": 1
    };

    materiales[posMaterial]= material;

    material[posMaterial]= material;

    pantallaMaterial();
}

/*Eliminar material */
export function eliminarMaterial(posMaterial) {
    Swal.fire({
        title: 'Advertencia',
        text: "??Esta seguro de eliminar a este material?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'

    }).then((result) => {
        if (result.isConfirmed) {
            materiales[posMaterial].estatus = 0;
            moduloMateriales.eliminar();
            Swal.fire(
                    'Eliminado!',
                    'El material se ha eliminado con exito',
                    'success'
                    )
        }
    })
}