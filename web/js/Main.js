let menuPrincipal;
let tabla;
let moduloEmp;
let moduloLentes;
let moduloExamen;
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
        document.getElementById('menuSecundario').classList.remove('d-none');
}
function clientes() {
        if (emp.length === 0) {
                fetch("Modulos/moduloClientes/data_Clientes.json")
                        .then(response => {
                                return response.json();
                        })
                        .then(function (jsondata) {
                                clients = jsondata;                                
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
        $('.menuIcon').on('click', function () {
                $('#navMain').addClass('menuActivo');
        })
}

function abrirModuloExamen() {
        if (examenes.length === 0) {
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
                                        moduloExamen = controller;
                                        moduloExamen.cargarExamen();
                                        crearTabla();                                        
                                }
                        );

                });
}

function crearTabla(){
        $('#table_id').DataTable({
                "language": {
                        "decimal": ",",
                        "thousands": ".",
                        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",                    
                        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                        "loadingRecords": "Cargando...",
                        "lengthMenu": "Mostrar _MENU_ registros",
                        "paginate": {
                            "next": "Siguiente",
                            "previous": "Anterior"
                        },
                        "processing": "Procesando...",
                        "search": "Buscar:",
                        "zeroRecords": "No se encontraron resultados",
                        "emptyTable": "Ningún dato disponible en esta tabla",
                        "aria": {
                            "sortAscending":  ": Activar para ordenar la columna de manera ascendente",
                            "sortDescending": ": Activar para ordenar la columna de manera descendente"
                        }
                },
                scrollY: '55vh',
                scrollCollapse: true,
                "searching": false,
                "drawCallback": function( settings ) {
                    $('ul.pagination').addClass("pagination-sm");
                }
            });
}