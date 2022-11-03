function logout(){
    window.location.href = "login.html";
    localStorage.removeItem("orders");
    localStorage.removeItem("cart_count");
    localStorage.removeItem("amount");
}

let cart_items_count = document.getElementById("cart-items-count");

let orders = [];
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

function place_order(){
    let dialog = document.getElementById("place-order-dialog");
    dialog.show();
}



window.onload = () => {
    cart_items_count.innerText = localStorage.getItem("cart_count");
    let content1 = document.getElementsByClassName("left-section")[0];
    let template_1 = document.getElementById("template-1");
    for(let i=0;i<orders.length;i++){
        let clone = template_1.content.cloneNode(true);
        clone.getElementById("item-name").innerText = orders[i];
        clone.getElementById("item-amt").innerText = amount[i];
        content1.appendChild(clone);
    }

    let content2 = document.getElementsByClassName("card-content")[0];
    let template_2 = document.getElementById("template-2");
    for(let i=0;i<orders.length;i++){
        let clone = template_2.content.cloneNode(true);
        clone.getElementById("item-name").innerText = orders[i];
        clone.getElementById("amount").innerText = amount[i];
        clone.getElementById("total").innerText = amount[i];
        content2.appendChild(clone);
    }
    
    let item = document.getElementsByClassName("item");
    for(let i of item){

        let increase = i.getElementsByClassName("fa-plus")[0];
        increase.addEventListener('click',()=>{
            if(parseInt(i.querySelector("span").innerText) < 10){
                let item_name = i.querySelector("p").innerText;
                let val = parseInt(i.querySelector("span").innerText)+1;
                i.querySelector("span").innerText = val;
                i.querySelector("span").addEventListener('change',countChange(val,item_name));
            }
        })

        let decrease = i.getElementsByClassName("fa-minus")[0];
        decrease.addEventListener('click',()=>{
            if(parseInt(i.querySelector("span").innerText) > 1){
                let item_name = i.querySelector("p").innerText;
                let val = parseInt(i.querySelector("span").innerText)-1;
                i.querySelector("span").innerText = val;
                i.querySelector("span").addEventListener('change',countChange(val,item_name));
            }
        })
    }

    function countChange(val,name){
        let info_item = document.getElementsByClassName("info-item");
        for(let i=0; i<info_item.length; i++){
            if(info_item[i].querySelector('p').querySelector("span").innerText === name){
                info_item[i].querySelector('p').querySelectorAll("span#count")[0].innerText = val;

                let temp_count = parseInt(info_item[i].querySelector('p').querySelectorAll("span#count")[0].innerText);
                let temp_amt = parseInt(info_item[i].querySelector('p').querySelectorAll("span#amount")[0].innerText);

                info_item[i].querySelector('p').querySelectorAll("span#total")[0].innerText =  temp_count * temp_amt;
            }
        }
    }

}

