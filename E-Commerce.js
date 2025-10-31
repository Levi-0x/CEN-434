    const sideBar = document.querySelector(".shopping-cart")
    const list = document.getElementById("cart-ul")
    const total = document.getElementById("total")
    let amount = 0

    function slideOut(){
    sideBar.classList.add("open")
    }

    function slideClose(){
    sideBar.classList.remove("open")
    }

    function addToCart(itemName , itemPrice){
    update(itemPrice)

    const newItem = document.createElement("li")
    newItem.textContent = `${itemName} = $${itemPrice}`
    list.appendChild(newItem)


    const button = document.createElement("button")
    button.textContent = "remove"
    newItem.appendChild(button)
    button.onclick = () =>
    {
    newItem.remove();
    remove(itemPrice)     
    } 

    }

    function remove(itemPrice){
    amount = amount -= itemPrice
    total.innerHTML=`$${amount}`
    }

    function update(itemPrice){
    amount += itemPrice
    total.innerHTML=`$${amount}`
    } 

    function clearAll(){
    list.innerHTML =""
    total.innerHTML = "$0"
    amount = 0
    }
