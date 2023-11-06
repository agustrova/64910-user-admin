// Guardar datos uso una key y el valor

const user = {
    nombre: "jose",
    apellido: "perez",
    edad: 24,
}

localStorage.setItem("usuario", JSON.stringify(user))

// si yo quisiera leer algo que este en local storage, tiene que ser local storage, sino en sessionStorage si quiero en session


// Obtener datos del local Storage
const resultado = JSON.parse (localStorage.getItem("usuario"))
console.log(resultado)

// borrar un dato guardado
//localStorage.removeItem("usuario")

// borrar todo el local storage
//localStorage.clear()


// La propiedad JSON te lo convierte a JS
