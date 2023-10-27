const usersArray = [
    {
    fullname: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    id: '1',
    active: true,
    password: 'password123',
    bornDate: new Date('1993-01-01').getTime(),
    location: 'Buenos Aires',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280'
    },
    {
      fullname: 'Jane Doe',
      age: 25,
      email: 'jane.doe@example.com',
      id: '2',
      active: false,
      password: 'password456',
      bornDate: new Date('1998-05-05').getTime(),
      location: 'Chubut',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280'
    },
    {
      fullname: 'Alice Johnson',
      age: 35,
      email: 'alice.johnson@example.com',
      id: '3',
      active: true,
      password: 'password789',
      bornDate: new Date('1988-08-08').getTime(),
      location: 'Miami, FL',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325'
    },
    {
      fullname: 'Michael Smith',
      age: 40,
      email: 'michael.smith@example.com',
      id: '4',
      active: false,
      password: 'password101',
      bornDate: new Date('1983-04-10').getTime(),
      location: 'Chicago, IL',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280'
    },
    {
      fullname: 'Emily Johnson',
      age: 28,
      email: 'emily.johnson@example.com',
      id: '5',
      active: true,
      password: 'password202',
      bornDate: new Date('1995-02-15').getTime(),
      location: 'Houston, TX',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325'
    },
    {
      fullname: 'Daniel Lee',
      age: 34,
      email: 'daniel.lee@example.com',
      id: '6',
      active: false,
      password: 'password303',
      bornDate: new Date('1989-07-07').getTime(),
      location: 'San Francisco, CA',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325'
    },
    {
      fullname: 'Samantha Davis',
      age: 22,
      email: 'samantha.davis@example.com',
      id: '7',
      active: true,
      password: 'password404',
      bornDate: new Date('2001-11-11').getTime(),
      location: 'Boston, MA',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'
    },
    {
      fullname: 'James Moore',
      age: 45,
      email: 'james.moore@example.com',
      id: '8',
      active: false,
      password: 'password505',
      bornDate: new Date('1978-12-19').getTime(),
      location: 'Dallas, TX',
      image: 'https://m.media-amazon.com/images/I/81wNRtDaTXL.png'
    },
    {
      fullname: 'Isabella Taylor',
      age: 29,
      email: 'isabella.taylor@example.com',
      id: '9',
      active: true,
      password: 'password606',
      bornDate: new Date('1994-06-24').getTime(),
      location: 'San Diego, CA',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325'
    },
    {
      fullname: 'Ethan Johnson',
      age: 31,
      email: 'ethan.johnson@example.com',
      id: '10',
      active: false,
      password: 'password707',
      bornDate: new Date('1992-03-03').getTime(),
      location: 'Denver, CO',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
    }
];
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

/*
//si el email ya existe
const emailExist = usersArray.find((user) => {
if (user.email === el.email.value)
return true
})

if(emailExist) {
  alert(`El correo ya se encuentra registrado`)
  return
}
*/

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
  Swal.fire('Usuario agregado', 'El usuario se creó correctamente', 'success')
}

pintarUsuarios(usersArray)
resetearFormulario()
} )

function resetearFormulario() {
  userForm.reset()
  userForm.elements.password.disabled = false
  userForm.elements.password2.disabled = false 
  submitBtn.classList.remove ('btn-edit')
  submitBtn.innerText = 'Agregar usuario'
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
console.log(usuariosFiltrados)
})




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
        <button class="action-btn btn-danger" title="Borrar usuario" onclick="borrarUsuario(${index})">
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

pintarUsuarios(usersArray)


function borrarUsuario (indice) {

  usersArray.splice(indice, 1)
  
  pintarUsuarios(usersArray)
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