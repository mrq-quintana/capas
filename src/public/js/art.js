let bienvenido = document.getElementById('bienvenido');
let avatar = document.getElementById('avatar');
let tabla = document.getElementById('idProductos')
let idProducto = document.getElementById('idProducto')
agregarId = []

fetch('/api/users/currentUser')
.then(res => res.json())
.then(json=>{
    bienvenido.innerHTML = 'Usuario: ' + json.usuario;
    avatar.innerHTML = '<img width="100" height="100" src="' + json.avatar + '">';
})


fetch('/api/productos')
.then(res => res.json())
    .then(info=>{
        let productos = info
            productos.map(producto=>{
                tabla.innerHTML += `
                                    <div class="card " style="width: 18rem;">
                                        <img src="${producto.thumbnail}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${producto.title}</h5>
                                        <p class="card-text">${producto.description}</p>
                                        <p class="card-text">$${producto.price}</p>
                                        <p id="idProducto">${producto._id}</p>
                                        <button onclick="agregarProducto()" class="btn btn-primary">Agregar</button>
                                        </div>
                                    </div>`;
    })
})

function agregarProducto(){
    let value = document.getElementById('idProducto').innerText
    agregarId.push(value)
    console.log(agregarId)
}