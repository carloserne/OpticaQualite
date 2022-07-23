let usuarios = [];
fetch("Modulos/moduloEmp/data_Empleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            usuarios = jsondata;
        }
        );
export function ingresar() {
    let userLogin = document.getElementById("usuario").value;
    let contraseñaLogin = document.getElementById("contraseña").value;
    let resultado = false;
    let i;
    for (i = 0; i < usuarios.length; i++) {
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
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                menu();
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
