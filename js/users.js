
// nosotros hardcodeamos usuarios y productos, porque eso se hace desde el backend
const usersArray = JSON.parse(localStorage.getItem("users"))

// Obtener el body de la tabla
const tableBody = document.getElementById('table-body')
const searchInput = document.querySelector('#search') 
const userForm = document.querySelector("form#user-form")
const submitBtn = userForm.querySelector('button[type=submit].btn-form')


//Escuchamos el evento submit en el formulario
userForm.addEventListener("submit", (evt) => {

evt.preventDefault()

const el = evt.target.elements

//obtener los datos del form
//console.dir(evt.target.elements.fullname.value)

//deberia cortar la ejecucion de la funcion callback del evento submit cuando password y password2 sean distintas

if(el.password.value !== el.password2.value) {
  alert(`Las contraseñas no coinciden`)
  return
}


//si el email ya existe
const emailExist = usersArray.find((user) => {
if (user.email === el.email.value)
return true
})

if(emailExist && el.id.value !== emailExist.id) {
  swal.fire ({
    title: "El correo ya existe",
    icon: "error"
  })
  return
}

/*
let id 
if(el.id.value) {
  id = el.id.value 
} else {
  id = crypto.randomUUID()
}
*/

// # OPERADOR TERNARIO 
// permite resolver if y else en una sola linea (para resolver lo de arriba en una sola linea)

//const id = condicion ? condicionTrue : condicionFalse

//           condicion        true          false
const id = el.id.value ? el.id.value : crypto.randomUUID()  



const user = {
  fullname: el.fullname.value,
  age: el.age.valueAsNumber, //obtengo el valor numerico
  email: el.email.value,
  password: el.password.value,
  password2: el.password2.value,
  active: el.active.checked,
  bornDate: new Date (el.bornDate.value).getTime(),
  location: el.location.value,
  id: id,
  image: el.image.value,
}

//tenemos 2 posibles acciones a realizar
// Opcion 2 = edito un usuario y reemplazar un usuario
// opcion  1 = agregue un usuario nuevo

//pregunto si tengo id para saber si estoy editando o no
if (el.id.value) {
  //editando
  const indice = usersArray.findIndex(usuario => {
    if(usuario.id === el.id.value) {
      return true
    }
  })
  // reemplazo al usuario con los datos nuevos del form
  usersArray[indice] = user
  Swal.fire({
    title: 'Usuario editado',
    text: 'Los datos del usuario fueron actualizados correctamente',
    icon:'success',
    timer: 1000
  })

} else {
  //agregando un usuario nuevo
  usersArray.push(user)
  Swal.fire({
  title: 'Usuario Agregado',
  text: 'Usuario se creo correctamente',
  icon: 'success',
  timer: 1000
})
}

pintarUsuarios(usersArray)
actualizarLocalStorage()
resetearFormulario()
} )

function resetearFormulario() {
  userForm.reset()
  userForm.elements.password.disabled = false
  userForm.elements.password2.disabled = false 
  submitBtn.classList.remove ('btn-edit')
  submitBtn.innerText = 'Agregar usuario'
  userForm.elements.nombreCompleto.focus()
}

// Filtro de usuarios
//escuchar cuando el usuario selecciona una tecla en el input search
searchInput.addEventListener ('keyup', (eventito) => {
//obtener el valor del input
const inputValue = eventito.target.value.toLowerCase()
//buscar en todos los usuarios aquellos donde su nombre tengan este texto
const usuariosFiltrados = 
usersArray.filter((usuario) => {

const nombre = usuario.fullname.toLowerCase()

return nombre.includes(inputValue) 
})
//pintar solo los usuarios que hayan coincidido
//buscar en todos los usuarios aquellos donde su nombre tengan ese texto

//no hace falta el if porque sino, es falso


//Pintar solo los usuarios que hayan coincidido
pintarUsuarios(usuariosFiltrados)
})

//Llamo por primera vez que se ejecuta mi script la funcion pintar usuarios
pintarUsuarios(usersArray)

function pintarUsuarios(arrayPintar) {
  // Iterar el array y agregar un tr por cada alumno que tengamos. 
  tableBody.innerHTML = ""
  arrayPintar.forEach ((user, index) => {

    tableBody.innerHTML += `
    <tr class="table-body">
        <td class="user-image">
            <img src="${user.image}" alt="$user.fullname} avar">
        </td>
        <td class="user-name">${user.fullname}</td>
        <td class="user-email">${user.email}</td>
        <td class="user-location">${user.location}</td>
        <td class="user-age">${user.age}</td>
        <td class="user-date">${formatDate (user.bornDate)}</td>
        <td> 
        <button class="action-btn btn-danger" title="Borrar usuario" onclick="borrarUsuario('${user.id}', '${user.fullname} ')">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="action-btn"
                title="Editar usuario"
                onclick="editarUsuario('${user.id}')">
                <i class="fa-solid fa-pen-to-square"></i>
        </button>

        </td>
    </tr>`
    //ahi en formatdate user.borndate lo que hice fue definir la funcion formatdate y despues le pongo el nombre fecha porque es lo mismo, le puedo poner el nombre que quiera
})

}



function actualizarLocalStorage () {
  localStorage.setItem("users", JSON.stringify(usersArray))
}



function borrarUsuario (ID, nombre) {

const confirmDelete = confirm (`Realmente desea borrar al usuario ${nombre}?`)

if(confirmDelete) {
  const indice = usersArray.findIndex(user => user.id === ID)
  usersArray.splice(indice, 1)
  pintarUsuarios(usersArray)
  actualizarLocalStorage()
}

}


const objeto = {
  nombre: "pepito",
  apellid: "perez",
  saludar () {
    console.log("Hola mi nombre es pepito")
  }
}

objeto.saludar


// forEach, map, filter, findIndex, find, flat, flatMap, every, some. Todos estos metodos trabajan agarrando el primer elemento y le pones el nombre que quieras

function editarUsuario(idBuscar) {
  //buscar un usuario con id y obtenerlo
  const userEdit = usersArray.find((usuario) => {

    //deberia devolver un true, segun la condicion id que me enviaron === al del usuario que estoy iterando
    if(usuario.id === idBuscar) {
      return true
    }

  })

  //indicar que el usuario no fue encontrado
  //if(userEdit === undefined) 
  // si no es true, o sea si no existe va con ! is not
  if(!userEdit) {
    //console.warn(`El usuario a editar no existe`)
    Swal.fire('Error', 'No se pudo editar el usuario', 'error')
    return
  }

  console.log(userEdit)

  //rellenar el formulario con los datos del usuario a editar

  const el = userForm.elements

  el.id.value = userEdit.id
  el.age.value = userEdit.age
el.fullname.value = userEdit.fullname
el.email.value = userEdit.email
el.image.value = userEdit.image
el.location.value = userEdit.location
el.active.checked = userEdit.active

// deshaiblitar los input de la contraseña
el.password.value = userEdit.password
el.password.disabled = true
el.password2.value = userEdit.password


el.password2.disabled = true
el.bornDate.value = formatInputDate(userEdit.bornDate)

console.log(formatInputDate(userEdit.bornDate))
  //cambiar el nombre del boton a editar usuario

submitBtn.classList.add('btn-edit')
submitBtn.innerText = 'Editar usuario'


  











}


/* 
<tr class="table-body">
    <td class="user-image">
        <img src="https://m.media-amazon.com/images/I/81wNRtDaTXL.png" alt="Imagen de prueba">
    </td>
    <td class="user-name">Sonic Heroes</td>
    <td class="user-email">sonic@gmail.com</td>
    <td class="user-location">Super Mario World</td>
    <td class="user-age">24</td>
    <td class="user-date">24/05/98</td>
</tr> */