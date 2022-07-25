
let moduloLogin;
let menuPrincipal;
let tabla;
let moduloEmp;

let emp = [];
fetch("./Modulos/moduloLogin/view_Login.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedorPrincipal").innerHTML = html;
        import ("../Modulos/moduloLogin/controller_Login.js").then(
                function (controller) {
                moduloLogin = controller;
                }
        );
        });
        function menu(){
        fetch("./Modulos/moduloMenuPrincipal/view_Menu.html")
                .then(function (respuesta) {
                return respuesta.text();
                })
                .then(function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import ("../Modulos/moduloMenuPrincipal/controller_MenuPrincipal.js").then(
                        function (controller) {
                        menuPrincipal = controller;
                        }
                );
                });
                menubody();
        }
function menubody(){
fetch("./Modulos/moduloMenuPrincipal/view_menuPrincipal.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("contenedor2").innerHTML = html;
        });
        }
function foot(){
fetch("./Modulos/moduloMenuPrincipal/view_Footer.html")
        .then(function (respuesta) {
        return respuesta.text();
        })
        .then(function (html) {
        document.getElementById("footer").innerHTML = html;
        });
        }

function empleados(){
   
    fetch("Modulos/moduloEmp/data_Empleados.json")
            .then(response => {
            return response.json();
            })
            .then(function (jsondata) {
            emp = jsondata;
            }
            );
    
    fetch("./Modulos/moduloEmp/view_Empleados.html")
    
            .then(function (respuesta) {
            return respuesta.text();
            })
            .then(function (html) {
            document.getElementById("contenedor2").innerHTML = html;
    
            import ("../Modulos/moduloEmp/controller_Empleados.js").then(
                    function (controller) {
                       
                    moduloEmp = controller;
                            moduloEmp.cargarEmp();
                            $('#table_id').DataTable();
                            document.getElementById("table_id_filter").style.display = "none";
                    }
            );
    
            });
            foot();
}

function accesorio(){
   
        fetch("Modulos/moduloAccesorios/data_Accesorio.json")
                .then(response => {
                return response.json();
                })
                .then(function (jsondata) {
                accesorio = jsondata;
                }
                );
        
        fetch("./Modulos/moduloAccesorios/view_Accesorios.html")
        
                .then(function (respuesta) {
                return respuesta.text();
                })
                .then(function (html) {
                document.getElementById("contenedor2").innerHTML = html;
        
                import ("../Modulos/moduloAccesorios/controller_Accesorio.js").then(
                        function (controller) {
                           
                        moduloAccesorios = controller;
                        moduloAccesorios.cargarAccesorio();
                                $('#table_id').DataTable();
                                document.getElementById("table_id_filter").style.display = "none";
                        }
                );
        
                });
                foot();
    }

function material(){
   
        fetch("Modulos/moduloMateriales/data_Material.json")
                .then(response => {
                return response.json();
                })
                .then(function (jsondata) {
                materiales = jsondata;
                }
                );
        
        fetch("./Modulos/moduloMateriales/view_Materiales.html")
        
                .then(function (respuesta) {
                return respuesta.text();
                })
                .then(function (html) {
                document.getElementById("contenedor2").innerHTML = html;
        
                import ("../Modulos/moduloMateriales/controller_Material.js").then(
                        function (controller) {
                           
                        moduloMateriales = controller;
                        moduloMateriales.cargarMaterial();
                                $('#table_id').DataTable();
                                document.getElementById("table_id_filter").style.display = "none";
                        }
                );
        
                });
                foot();
    }

function armazon(){
   
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
                document.getElementById("contenedor2").innerHTML = html;
        
                import ("../Modulos/moduloArmazones/controller_Armazon.js").then(
                        function (controller) {
                           
                        moduloMateriales = controller;
                        moduloMateriales.cargarMaterial();
                                $('#table_id').DataTable();
                                document.getElementById("table_id_filter").style.display = "none";
                        }
                );
        
                });
                foot();
    }

function ventas(){
   
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
                document.getElementById("contenedor2").innerHTML = html;
        
                import ("../Modulos/moduloVentas/controller_Ventas.js").then(
                        function (controller) {
                           
                        moduloVentas = controller;
                        moduloVentas.cargarVenta();
                                $('#table_id').DataTable();
                                document.getElementById("table_id_filter").style.display = "none";
                        }
                );
        
                });
                foot();
    }