let menuPrincipal;
let tabla;
let moduloEmp;
let moduloLentes;
let emp = [];
let lentes = [];
let material = [];
let examenes = [];

window.onload = menubody();



function menubody() {
        fetch("Modulos/moduloMenuPrincipal/view_menuPrincipal.html")
                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                });
}
function clientes() {
        cambiarFocus();        
        if (emp.length === 0) {
                fetch("Modulos/moduloClientes/data_Clientes.json")
                .then(response => {
                        return response.json();
                })
                .then(function (jsondata) {
                        clients = jsondata;
                        console.log(clients);
                }
                );   
        }
        
        fetch("Modulos/moduloClientes/view_Clientes.html")

                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloClientes/controller_Clientes.js").then(
                                function (controller) {

                                        moduloCliente = controller;
                                        moduloCliente.cargarClient();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}


function empleados() {

        if (emp.length === 0) {
                fetch("Modulos/moduloEmp/data_Empleados.json")
                        .then(response => {
                                return response.json();
                        })
                        .then(function (jsondata) {
                                emp = jsondata;
                                console.log(emp);
                        }
                        );
        }

        fetch("Modulos/moduloEmp/view_Empleados.html")

                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloEmp/controller_Empleados.js").then(
                                function (controller) {

                                        moduloEmp = controller;
                                        moduloEmp.cargarEmp();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}



function mostrarAccesorios() {

        fetch("Modulos/moduloAccesorios/data_Accesorio.json")
                .then(response => {
                        return response.json();
                })
                .then(function (jsondata) {
                        acceso = jsondata;
                }
                );

        fetch("Modulos/moduloAccesorios/view_Accesorios.html")

                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloAccesorios/controller_Accesorio.js").then(
                                function (controller) {

                                        moduloAccesorios = controller;
                                        moduloAccesorios.cargarAccesoriostbl();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function pantallaMaterial() {

        fetch("Modulos/moduloMateriales/data_Material.json")
                .then(response => {
                        return response.json();
                })
                .then(function (jsondata) {
                        material = jsondata;
                        console.log(material);
                }
                );

        fetch("Modulos/moduloMateriales/view_Materiales.html")

                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloMateriales/controller_Material.js").then(
                                function (controller) {

                                        moduloMateriales = controller;
                                        moduloMateriales.cargarMaterial();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function PantallaArmazones() {

        fetch("Modulos/moduloArmazones/data_Armazon.json")
                .then(response => {
                        return response.json();
                })
                .then(function (jsondata) {
                        armazones = jsondata;
                }
                );

        fetch("./Modulos/moduloArmazones/view_Armazones.html")

                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloArmazones/controller_Armazon.js").then(
                                function (controller) {
                                        moduloArmazones = controller;
                                        moduloArmazones.cargarArmazon();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function mostrarPagos() {
        cambiarFocus();
        if (emp.length === 0) {
                fetch("Modulos/moduloPagos/data_Pagos.json")
                        .then(response => {
                                return response.json();
                        })
                        .then(function (jsondata) {
                                pago = jsondata;
                        }
                        );

        }

        fetch("./Modulos/moduloPagos/view_Pagos.html")

                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloPagos/controller_Pagos.js").then(
                                function (controller) {

                                        moduloPagos = controller;
                                        moduloPagos.cargarPagosTbl();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}


function mostrarVentas() {

        fetch("Modulos/moduloVentas/data_Ventas.json")
                .then(response => {
                        return response.json();
                })
                .then(function (jsondata) {
                        venta = jsondata;
                }
                );

        fetch("./Modulos/moduloVentas/view_Ventas.html")
                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloVentas/controller_Ventas.js").then(
                                function (controller) {

                                        moduloVentas = controller;
                                        moduloVentas.cargarVentastbl();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );
                });

}

function abrirModuloLentes() {
        if (lentes.length === 0) {
                fetch("Modulos/moduloLentesContacto/data_LentesContacto.json")
                        .then(response => {
                                return response.json();
                        })
                        .then(function (jsondata) {
                                lentes = jsondata;                                
                        }
                        );
        }
        fetch("Modulos/moduloLentesContacto/view_LentesContacto.html")
                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloLentesContacto/controller_LentesContacto.js").then(
                                function (controller) {
                                        moduloLentes = controller;
                                        moduloLentes.cargarLentes();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function abrirModuloExamen() {
        if (lentes.length === 0) {
                fetch("Modulos/moduloExamenVista/data_ExamenVista.json")
                        .then(response => {
                                return response.json();
                        })
                        .then(function (jsondata) {
                                examenes = jsondata;                                
                        }
                        );
        }
        fetch("Modulos/moduloExamenVista/view_ExamenVista.html")
                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;

                        import("../Modulos/moduloExamenVista/controller_ExamenVista.js").then(
                                function (controller) {
                                        moduloLentes = controller;
                                        moduloLentes.cargarLentes();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function removerEstilo() {
        document.getElementById("inicio").removeAttribute("style");
}
function cambiarFocus() {
        removerEstilo();
}
