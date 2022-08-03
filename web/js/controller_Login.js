let usuarios = [];
fetch("Modulos/moduloEmp/data_Empleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            usuarios = jsondata;
        }
);

document.getElementById('usuario').addEventListener('keydown', focusContrasena);
function focusContrasena(event) {
  if (event.keyCode == 13) {
    document.getElementById('contrasena').focus();
  }
}

document.getElementById('contrasena').addEventListener('keydown', iniciar);
function iniciar(event) {
  if (event.keyCode == 13) {
    document.getElementById('btnIngresar').focus();
  }
}

        
function ingresar() {
    let userLogin = document.getElementById("usuario").value;
    let contraseñaLogin = document.getElementById("contrasena").value;
    let resultado = false;
    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i].Usuario.usuario;
        let contraseña = usuarios[i].Usuario.contasena;
        if (usuario === userLogin) {
            if (contraseña === contraseñaLogin) {
                resultado = true;
            }
        }

    }

    if (resultado === true) {
        Swal.fire({
            icon: 'success',
            title: 'Bien hecho',
            text: 'Bienvenido ' + userLogin,
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.assign("paginaMain.html");                       
            }
        })
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o contraseña incorrectos!'
        })
    }

}
