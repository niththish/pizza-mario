function logout(){
    window.location.href = "login.html";
    localStorage.removeItem("orders");
    localStorage.removeItem("cart_count");
    localStorage.removeItem("amount");
}


let card = document.getElementsByClassName("card");
let cart_items_count = document.getElementById("cart-items-count");

let orders =  [];
for(let i=0;i<localStorage.length;i++){
    if(localStorage.key(i) == 'orders'){
        orders = localStorage.getItem("orders").split(",");
    }
}

let amount = [];
for(let i=0;i<localStorage.length;i++){
    if(localStorage.key(i) == 'amount'){
        amount = localStorage.getItem("amount").split(",");
    }
}


for(let i of card){
    let add_to_cart_icon = i.getElementsByClassName("add-to-cart-icon")[0];
    let pizza_name = i.getElementsByClassName("pizza-name")[0].innerText;
    let amt = i.getElementsByClassName("amt_details")[0].innerText;
    add_to_cart_icon.addEventListener('click',()=>{
        if(!orders.includes(pizza_name)){
            orders.push(pizza_name);
            amount.push(amt);
            if(localStorage.getItem("cart_count") == null){
                localStorage.setItem("cart_count", 1);    
            }else{
                localStorage.setItem("cart_count", parseInt(localStorage.getItem("cart_count"))+1);
            }
            localStorage.setItem("orders",orders);
            localStorage.setItem("amount",amount);
            cart_items_count.innerText = localStorage.getItem("cart_count");
            
        }
    })
}


window.onload = ()=>{
    cart_items_count.innerText = localStorage.getItem("cart_count");
}


function show_vegpizza(){
    let veg_pizza_div = document.getElementById("show_vegpizza");
    let show_nonveg_pizza_div = document.getElementById("show_nonvegpizza");
    let show_offered_pizza_div = document.getElementById("show_offeredpizza");
    
    let left_section_childern = document.getElementsByClassName("left-section")[0].children;
    for(let i of left_section_childern){
        i.classList.remove("active");
    }
    left_section_childern[0].classList.add("active");
    
    show_nonveg_pizza_div.style.display = "none";
    show_offered_pizza_div.style.display = "none";
    
    veg_pizza_div.style.display = "block";

}

function show_nonvegpizza(){
    let veg_pizza_div = document.getElementById("show_vegpizza");
    let show_nonveg_pizza_div = document.getElementById("show_nonvegpizza");
    let show_offered_pizza_div = document.getElementById("show_offeredpizza");
    
    let left_section_childern = document.getElementsByClassName("left-section")[0].children;
    for(let i of left_section_childern){
        i.classList.remove("active");
    }
    left_section_childern[1].classList.add("active");

    show_offered_pizza_div.style.display = "none";
    veg_pizza_div.style.display = "none";

    show_nonveg_pizza_div.style.display = "block";

}

function show_offeredpizza(){
    let veg_pizza_div = document.getElementById("show_vegpizza");
    let show_nonveg_pizza_div = document.getElementById("show_nonvegpizza");
    let show_offered_pizza_div = document.getElementById("show_offeredpizza");
    
    let left_section_childern = document.getElementsByClassName("left-section")[0].children;
    for(let i of left_section_childern){
        i.classList.remove("active");
    }
    left_section_childern[2].classList.add("active");

    show_nonveg_pizza_div.style.display = "none";
    veg_pizza_div.style.display = "none";

    
    show_offered_pizza_div.style.display = "block";

}
