let titulo = document.getElementById("body")
console.log(body)

let marcas = document.getElementsByClassName("marcas")
console.log(marcas)

let articulos = document.getElementsByTagName("article")
console.log(articulos)
console.log(articulos[0].innerHTML)
console.log(articulos[1].innerHTML)
for(const articulo of articulos){
    console.log(articulo.innerHTML)
}

const productos= [
    {  
    nombre: 550, 
    precio: 120000 },
    {
        
        nombre: "Air force", 
        precio: 180000},
    {
       
        nombre: "forum", 
        precio: 150000},
    {
        
        nombre: "HRC", 
        precio: 100000},
]



let productscontainer = document.getElementById("productos")
function renderProducto(productsArray){
    productsArray.forEach(producto =>{
        const card =document.createElement("div")
        card.innerHTML = `<h3>nombre: ${producto.nombre} </h3>
                          <h4>precio: $${producto.precio} </h4>
                          <button class "agregar id="${producto.id}">agregar</button>`
        productscontainer.appendChild(card)
    })
    addToCartButton ()
}
renderProducto(productos)

function addToCartButton(){
    let addButton = document.querySelectorAll(".agregar")
    addButton.forEach(button =>{
        button.onclick = (e) => {
            const productoid = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productoid)
            cartProducts.push(selectedProduct)
            console.log ("carrito de productos")

            localStorage.setItem("carrito de productos", JSON.stringify(cartproducts))
        }
    })
}


let input = document.getElementById("input")
input.onkeydown = () => {
    console.log ("apretaste una tecla") }

Tienda.innerText = "TooR zapatillas"
