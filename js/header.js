// Este archivo header  lo vamos a utilizar cross todo el site
/*

3) Si tenemos user logueado vamos a tener que 
    *evaluar su rol y ver si pintamos en el nav el boton de admin product y admin user
    * userInfo: 
            - Pintar el nombre del user
            - Pintar el nombre logout

4) Si no tenemos user logueado:
    * No pintamos los botones admin
    * No colocamos el name
    * Pintamos el boton login

*/

// 1) Tenemos que obtener el nav y el user info
const headerNav = document.getElementById('header-nav')
const userInfoHeader = document.getElementById('header-user')

// 2) Evaluar si tenemos un usuario logueado
const loguedUser = JSON.parse(localStorage.getItem("currentUser"))

if (loguedUser) {
    //tengo un usuario logueado
    if(loguedUser.role === 'ADMIN_ROLE') {
        // pintar los botones de admin
         const adminUserLink = document.createElement ("a") // <a></a>

        adminUserLink.href = '/pages/admin/user-admin.html'
        adminUserLink.innerText = 'User admin'
        adminUserLink.classList.add('header-link', 'otra-clase')

        headerNav.appendChild(adminUserLink)

         const productAdminLink = document.createElement("a") //<a></a>
        productAdminLink.href = '/pages/admin/product-admin.html'
        productAdminLink.innerText = 'Product admin'
        productAdminLink.classList.add('header-link');
        headerNav.appendChild(productAdminLink)

    }

    const userNameHTML = userInfoHeader.querySelector('.user-name')

    userNameHTML.innerText = loguedUser.fullname

    const userImg = document.createElement('img')
    userImg.src = loguedUser.image;
    userImg.alt = `${loguedUser.fullname} profile picture`
    userImg.classList.add('user-profile-picure')

    userInfoHeader.appendChild(userImg)

     // -LOGOUT ACTION BUTTON
    const userActionHTML = userInfoHeader.querySelector('.user-action')

    const logoutButton = document.createElement('button');
    logoutButton.classList.add('header-link')
    logoutButton.innerText = 'Logout'

    logoutButton.onclick = function() {

        localStorage.removeItem("currentUser");
        window.location.href = '/index.html'

    }

    userActionHTML.append(logoutButton)

} else {
    // no tengo un user logueado
    const userActionHTML = userInfoHeader.querySelector('.user-action')

    const loginLink = document.createElement("a")
    loginLink.href = '/pages/login/login.html';
    loginLink.innerText = "Ingresar";
    loginLink.classList.add('header-link')

    userActionHTML.appendChild(loginLink)
}

