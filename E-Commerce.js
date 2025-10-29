const sideBar = document.querySelector(".shopping-cart")
const list = document.getElementById("cart-ul")

function slideOut(){
    sideBar.classList.add("open")
}

function slideClose(){
    sideBar.classList.remove("open")
}

function addToCart(itemName){
    const newItem = document.createElement("li")
    newItem.textContent = itemName
    list.appendChild(newItem)

    const button = document.createElement("button")
    button.textContent = "remove"
    newItem.appendChild(button)
    button.onclick = () => newItem.remove();

}
