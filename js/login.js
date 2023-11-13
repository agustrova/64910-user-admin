/*
tomar el formulario
tomar los datos cargados

ver si existe un email como el que el usuario ingreso
corroborar que exista la contraseña
error cuando no exista el email, o cuando existe el email pero la contraseña no coincide

hacer login
 guardar en el localstorage un currentUser
- redireccionar al home
*/

const users = JSON.parse(localStorage.getItem("users")) || []

const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const email = loginForm.elements.email.value
    const password = evt.target.elements.password.value


    const user = users.find((usr) => {

        if (usr.email.toLowerCase() === email.toLowerCase()) {
            return true
        } 
        return false

//return usr.email === email

    })

// cortamos el submit ya que no existe el correo
if (!user || user.password !== password) {
    Swal.fire ({
        icon:"error",
        title: "Login incorrecto",
        text: "Alguno de los datos ingresados no es correcto",
        timer: 2000
    })
}

delete user.password

localStorage.setItem("currentUser", JSON.stringify(user))

Swal.fire ({
    icon: 'success',
    title: 'Login correcto!',
    text: 'Sera redireccionado en un momento'
})

console.log('iniciando timeout')
setTimeout(function(){
    window.location.href = '/index.html'
}, 2500)



/*if (user.password !== password ) {
    Swal.fire ({
        icon:"error",
        title: "Login incorrecto",
        text: "Alguno de los datos ingresados no es correcto",
        timer: 2000
    })
}*/


})
