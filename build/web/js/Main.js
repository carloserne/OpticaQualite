
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