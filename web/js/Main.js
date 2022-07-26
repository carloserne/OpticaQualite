let menuPrincipal;
let tabla;
let moduloEmp;
let moduloAccesorios;
let emp = [];

window.onload = menubody();

function removerEstilo() {
        document.getElementById("inicio").removeAttribute("style");
}

function menubody() {
        fetch("Modulos/moduloMenuPrincipal/view_menuPrincipal.html")
                .then(function (respuesta) {
                        return respuesta.text();
                })
                .then(function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                });
}


function empleados() {
        cambiarFocus();        
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

function cambiarFocus() {
        removerEstilo();
}

function accesorio() {

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

                        import("../Modulos/moduloAccesorios/controller_AccesorioC.js").then(
                                function (controller) {

                                        moduloAccesorios = controller;
                                        moduloAccesorios.cargarAccesorio();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function material() {

        fetch("Modulos/moduloMateriales/data_Material.json")
                .then(response => {
                        return response.json();
                })
                .then(function (jsondata) {
                        material = jsondata;
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
                                        moduloMateriales = controller;
                                        moduloMateriales.cargarArmazon();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function ventas() {

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
                                        moduloVentas.cargarVenta();
                                        $('#table_id').DataTable();
                                        document.getElementById("table_id_filter").style.display = "none";
                                }
                        );

                });
}

function pagos() {
        fetch("Modulos/moduloPagos/data_Pagos.json")
                .then(response => {
                        return response.json();
                })
                .then(function (jsondata) {
                        pago = jsondata;
                }
                );

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