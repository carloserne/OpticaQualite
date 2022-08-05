
let cuerpotblCliente = "";
let registroClient;
let clients = [];
let countIdPersona;
let countIdCliente;
let posClient;
fetch("Modulos/moduloClientes/data_Clientes.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {

            clients = jsondata;

            cargarClientbl();
            console.log(Date());
            $('#table_id').DataTable();
            document.getElementById("table_id_filter").style.display = "none";
        }
        );

export function cargarClient() {

    clients.forEach(function (cliente) {
        if (cliente.Persona.Estatus !== 0) {
            registroClient =
                    '<tr>' +
                    '<td>' + cliente.ClaveUnicaCliente + '</td>' +
                    '<td>' + cliente.Persona.Nombre + '</td>' +
                    '<td>' + cliente.Persona.ApellidoPaterno + '</td>' +
                    '<td>' + cliente.Persona.ApellidoMaterno + '</td>' +
                    '<td>' + cliente.Persona.Genero + '</td>' +
                    '<td>' + cliente.Persona.RFC + '</td>' +
                    '<td>' + cliente.Persona.TelCasa + '</td>' +
                    '<td>' + cliente.Persona.TelMovil + '</td>' +
                    '<td>' + cliente.Persona.Correo + '</td>' +
                    '<td>' + cliente.Persona.Estatus + '</td>';
                    cuerpotblCliente += registroClient;
            countIdPersona = parseInt(cliente.Persona.IdPersona);
            countIdCliente = parseInt(cliente.IdCliente);
        }

    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblCliente;
    cuerpotblCliente = "";

}


export function cargarClientbl() {

    clients.forEach(function (cliente) {
        if (cliente.Persona.Estatus !== 0) {
            registroClient =
                    '<tr>' +
                    '<td>' + cliente.ClaveUnicaCliente + '</td>' +
                    '<td>' + cliente.Persona.Nombre + '</td>' +
                    '<td>' + cliente.Persona.ApellidoPaterno + '</td>' +
                    '<td>' + cliente.Persona.ApellidoMaterno + '</td>' +
                    '<td>' + cliente.Persona.Genero + '</td>' +
                    '<td>' + cliente.Persona.RFC + '</td>' +
                    '<td>' + cliente.Persona.TelCasa + '</td>' +
                    '<td>' + cliente.Persona.TelMovil + '</td>' +
                    '<td>' + cliente.Persona.Correo + '</td>' +
                    '<td>' + cliente.Persona.Estatus + '</td>';
                    cuerpotblCliente += registroClient;
            countIdPersona = parseInt(cliente.Persona.IdPersona);
            countIdCliente = parseInt(cliente.IdCliente);
        }

    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblCliente;
    cuerpotblCliente = "";

}

export function cargarClientblM() {
    posClient = 0;
    clients.forEach(function (cliente) {
        if (cliente.Persona.Estatus !== 0) {
            registroClient =
                    '<tr>' +
                    '<td>' + cliente.ClaveUnicaCliente + '</td>' +
                    '<td>' + cliente.Persona.Nombre + '</td>' +
                    '<td>' + cliente.Persona.ApellidoPaterno + '</td>' +
                    '<td>' + cliente.Persona.ApellidoMaterno + '</td>' +
                    '<td>' + cliente.Persona.Genero + '</td>' +
                    '<td>' + cliente.Persona.RFC + '</td>' +
                    '<td>' + cliente.Persona.TelCasa + '</td>' +
                    '<td>' + cliente.Persona.TelMovil + '</td>' +
                    '<td>' + cliente.Persona.Correo + '</td>' +
                    '<td>' + cliente.Persona.Estatus + '</td>' +
                    '<td>' + '<a onclick="moduloCliente.eliminarClient(' + posClient + ');"  class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i><a>' +
                    '<a onclick="moduloCliente.modificar(' + posClient + ');"  class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i><a></td>';
            
            cuerpotblCliente += registroClient;
            countIdPersona = parseInt(cliente.Persona.IdPersona);
            countIdCliente = parseInt(cliente.IdCliente);
        }
        posClient ++;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpotblCliente;
    cuerpotblCliente = "";

}

export function cargarClientblC() {
    let filtro = document.getElementById("filtro").value;

    clients.forEach(function (cliente) {
        if (filtro === "A" && cliente.Persona.Estatus !== 0) {
            registroClient =
            '<tr>' +
            '<td>' + cliente.ClaveUnicaCliente + '</td>' +
            '<td>' + cliente.Persona.Nombre + '</td>' +
            '<td>' + cliente.Persona.ApellidoPaterno + '</td>' +
            '<td>' + cliente.Persona.ApellidoMaterno + '</td>' +
            '<td>' + cliente.Persona.Genero + '</td>' +
            '<td>' + cliente.Persona.RFC + '</td>' +
            '<td>' + cliente.Persona.TelCasa + '</td>' +
            '<td>' + cliente.Persona.TelMovil + '</td>' +
            '<td>' + cliente.Persona.Correo + '</td>' +
            '<td>' + cliente.Persona.Estatus + '</td>';
            cuerpotblCliente += registroClient;
    countIdPersona = parseInt(cliente.Persona.IdPersona);
    countIdCliente = parseInt(cliente.IdCliente);
                
        }else if(filtro === "I" && cliente.Persona.Estatus === 0){
            registroClient =
            '<tr>' +
            '<td>' + cliente.ClaveUnicaCliente + '</td>' +
            '<td>' + cliente.Persona.Nombre + '</td>' +
            '<td>' + cliente.Persona.ApellidoPaterno + '</td>' +
            '<td>' + cliente.Persona.ApellidoMaterno + '</td>' +
            '<td>' + cliente.Persona.Genero + '</td>' +
            '<td>' + cliente.Persona.RFC + '</td>' +
            '<td>' + cliente.Persona.TelCasa + '</td>' +
            '<td>' + cliente.Persona.TelMovil + '</td>' +
            '<td>' + cliente.Persona.Correo + '</td>' +
            '<td>' + cliente.Persona.Estatus + '</td>';
            cuerpotblCliente += registroClient;
    countIdPersona = parseInt(cliente.Persona.IdPersona);
    countIdCliente = parseInt(cliente.IdCliente);
        }else if(filtro === "Am"){
            registroClient =
            '<tr>' +
            '<td>' + cliente.ClaveUnicaCliente + '</td>' +
            '<td>' + cliente.Persona.Nombre + '</td>' +
            '<td>' + cliente.Persona.ApellidoPaterno + '</td>' +
            '<td>' + cliente.Persona.ApellidoMaterno + '</td>' +
            '<td>' + cliente.Persona.Genero + '</td>' +
            '<td>' + cliente.Persona.RFC + '</td>' +
            '<td>' + cliente.Persona.TelCasa + '</td>' +
            '<td>' + cliente.Persona.TelMovil + '</td>' +
            '<td>' + cliente.Persona.Correo + '</td>' +
            '<td>' + cliente.Persona.Estatus + '</td>';
            cuerpotblCliente += registroClient;
    countIdPersona = parseInt(cliente.Persona.IdPersona);
    countIdCliente = parseInt(cliente.IdCliente);
        }

    });
     $('#table_id').DataTable();
                            document.getElementById("table_id_filter").style.display = "none";
    document.getElementById("tblEmpleados").innerHTML = cuerpotblCliente;
    cuerpotblCliente = "";

}


export function registrar() {
    fetch("Modulos/moduloClientes/view_RegistrarClientes.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;
                import ("./controller_Clientes.js").then(
                    function (controller) {
                        moduloCliente = controller;
                       
                    }
            );
            });
}

export function eliminar() {
    fetch("./Modulos/moduloClientes/view_eliminarCliente.html")
            .then(function (respuesta) {
            return respuesta.text();
            })
            .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Clientes.js").then(
                    function (controller) {
                        moduloCliente = controller;
                        moduloCliente.cargarClientblM();
                            $('#table_id').DataTable();
                            document.getElementById("table_id_filter").style.display = "block";
                    }
            );
            });
    }
    export function modificar(pos) {
    fetch("./Modulos/moduloClientes/view_modificarClientes.html")
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (html) {
                document.getElementById("contenedorGestion").innerHTML = html;
                
                let personaM = clients[pos].Persona;
                let clienteM = clients[pos];
                posClient = pos;
                document.getElementById("numeroUnicoEmpleado").value = clienteM.ClaveUnicaCliente;
                document.getElementById("nombres").value = personaM.Nombre;
                document.getElementById("apellidoP").value = personaM.ApellidoPaterno;
                document.getElementById("apellidoM").value = personaM.ApellidoMaterno;
                document.getElementById("genero").value = personaM.Genero;
                document.getElementById("rfc").value = personaM.RFC;
                document.getElementById("telCasa").value = personaM.TelCasa;
                document.getElementById("telMovil").value = personaM.TelMovil;
                document.getElementById("correo").value = personaM.Correo;
                
            });
}
export function catalogo() {
    fetch("./Modulos/moduloClientes/view_catalogoClientes.html")
            .then(function (respuesta) {
            return respuesta.text();
            })
            .then(function (html) {
            document.getElementById("contenedorGestion").innerHTML = html;
            import ("./controller_Clientes.js").then(
                    function (controller) {
                        moduloCliente = controller;
                    $(document).ready(function(){
                        moduloCliente.cargarClientbl();
                        moduloCliente.cargarClientblC();
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
        if (input.name !== "telCasa" && input.name !== "telMovil") {
            if (isNaN(input.value) === false) {
                comprobarString = false;
            }

        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de registrar al Cliente?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Cliente registrado con exito!', '', 'success')
                    almacenarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo salio mal',
                text: "Asegurese de que ningun campo que no requiera numeros no contenga ningun número!",
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
    console.log("cliente");
    let numeroUnicoEmpleado = document.getElementById("numeroUnicoEmpleado").value;
    let nombres = document.getElementById("nombres").value;
    let apellidoP = document.getElementById("apellidoP").value;
    let apellidoM = document.getElementById("apellidoM").value;
    let genero = document.getElementById("genero").value;
    let rfc = document.getElementById("rfc").value;
    let telCasa = document.getElementById("telCasa").value;
    let telMovil = document.getElementById("telMovil").value;
    let correo = document.getElementById("correo").value;

    let idPersona = ((countIdPersona + 1).toString());
    let IdCliente = ((countIdCliente + 1).toString());
    let numeroUnico = apellidoP.slice(0,2)+"-"+apellidoM.slice(0,1)+"-"+Date();

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
    let cliente = {
        "Persona": persona,
        "IdCliente": IdCliente,
        "ClaveUnicaCliente": numeroUnico
    };

    clients.push(cliente);

    clientes();
}
export function modificarCliente() {
    let inputs = document.getElementsByTagName("input");
    let input;
    let vacios = 0;
    let comprobarString = true;
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];

        if (input.value === "") {

            vacios++;
        }
        if (input.name !== "telCasa" && input.name !== "telMovil") {
            if (isNaN(input.value) === false) {
                comprobarString = false;
            }

        }
    }

    if (vacios === 0) {
        if (comprobarString === true) {
            Swal.fire({
                title: '¿Seguro de modificar al cliente?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Cliente modificado con exito!', '', 'success')
                    moduloCliente.modificarDatos();
                } else if (result.isDenied) {

                }
            });
        } else {
            Swal.fire({
                title: 'Algo salio mal',
                text: "Asegurese de que ningun campo que no requiera numeros no contenga ningun número!",
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

export function modificarDatos() {
    let numeroUnicoEmpleado = document.getElementById("numeroUnicoEmpleado").value;
    let nombres = document.getElementById("nombres").value;
    let apellidoP = document.getElementById("apellidoP").value;
    let apellidoM = document.getElementById("apellidoM").value;
    let genero = document.getElementById("genero").value;
    let rfc = document.getElementById("rfc").value;
    let telCasa = document.getElementById("telCasa").value;
    let telMovil = document.getElementById("telMovil").value;
    let correo = document.getElementById("correo").value;
    
    let idPersona = ((countIdPersona + 1).toString());
    let IdCliente = ((countIdCliente + 1).toString());
    console.log(idPersona);
    let numeroUnico = apellidoP.slice(0,2)+"-"+apellidoM.slice(0,1)+"-"+Math.floor(Math.random()*10000);
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
    let cliente = {
        "Persona": persona,
        "IdCliente": IdCliente,
        "ClaveUnicaCliente": numeroUnico
    };

    clients[posClient] = cliente;
    

    clientes();
}
/*Acciones de elimonar o modificar empleado*/

export function eliminarClient(pos) {
    Swal.fire({
        title: 'Advertencia',
        text: "¿Esta seguro de eliminar a este Cliente?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'

    }).then((result) => {
        if (result.isConfirmed) {
            clients[pos].Persona.Estatus = 0;
            clients[pos].Persona.Estatus = 0;
            moduloCliente.eliminar();
            Swal.fire(
                    'Eliminado!',
                    'El Cliente se ha eliminado con exito',
                    'success'
                    )
        }
    })
}

export function mostrarArray() {
    return clients;
}