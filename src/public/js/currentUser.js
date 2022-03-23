fetch('/api/currentUser')
.then(res => res.json())
.then(json=>{
    let bienvenido = document.getElementById('bienvenido');
    let avatar = document.getElementById('avatar');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');
    let username = document.getElementById('username');

    bienvenido.innerHTML = 'Bienvenido ' + json.nombre +' '+ json.apellido ;
    avatar.innerHTML = '<img width="100" height="100" src="' + json.avatar + '">';
    email.innerHTML = 'Email: ' + json.email;
    telefono.innerHTML = 'Telefono: ' + json.telefono;
    username.innerHTML = 'Usuario: ' + json.usuario;

})

    
