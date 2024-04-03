let cartStorage = localStorage.getItem("carrito de compras")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("carritoDeCompras")

function renderCarrito (cartItems) {
    cartItems.forEach (productos => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>${producto.nombre}</h3>
                          <p>${producto.precio}</p>`
        cartContainer.appendChild(cart)
    })
}

renderCarrito(cartStorage)