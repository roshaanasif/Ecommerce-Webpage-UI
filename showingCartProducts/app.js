const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "bottom"
  }
});

let heading=document.getElementById("heading");
let cartItemsDiv=document.getElementById("cartItems");
let RemoveAllCartItems=document.getElementById("RemoveAll");
let backToHomeBtn=document.getElementById("back");
let noItemsOnCart=document.getElementById("noItemsOnCart");
let mainCartBtn=document.getElementById("mainCartBtn");
let prices=document.getElementById("prices");
let couponBtn=document.getElementById("couponBtn");
// let removeItem=document.getElementById("removeItem");
let gettingCartProducts=JSON.parse(localStorage.getItem("cartProducts"))||[];

let quantity=1;


let addQuantity=((btn,id)=>{
    console.log("yes");
    const container = btn.closest(".accessNumber");
  const numberBox = container.querySelector(".number");

  let qty = Number(numberBox.innerHTML);
  
  let product=gettingCartProducts.find(item=>item.Productid==id)
  product.quantity=qty+1;
  numberBox.innerHTML = product.quantity ;

  localStorage.setItem("cartProducts",JSON.stringify(gettingCartProducts));
  console.log(gettingCartProducts);
  
  showingCartProducts();
        
  
  })
   

let subtractQuantity=((btn,id)=>{
   const container = btn.closest(".accessNumber");
  const numberBox = container.querySelector(".number");

  let qty = Number(numberBox.innerHTML);
  console.log(qty);
  
  if (qty==1) {
    notyf.error("one quantity is necessary")
  }else{
      numberBox.innerHTML = qty-1;
      let product=gettingCartProducts.find(item=>item.Productid==id)
      product.quantity= qty-1;
      numberBox.innerHTML=product.quantity;
      

  localStorage.setItem("cartProducts",JSON.stringify(gettingCartProducts))
    showingCartProducts();
  }

})


heading.innerHTML=` <h2 class="text-xl font-semibold mb-6">cart(${gettingCartProducts.length})</h2>`;


let pricesCalculation=(()=>{
     let total=0
     
     gettingCartProducts.forEach(item => {  
    let discountedPrice =item.Productprice - (item.Productprice * item.Productdiscount) / 100;
     console.log(discountedPrice);
    
    if(item.Productdiscount){ 
     total+=discountedPrice*Number(item.quantity);
    console.log(total);
    }else{
      total+=item.Productprice*Number(item.quantity);
      console.log(total);
    }
    

  });

  return total;
});


let getdiscount = 0;
let once=true;

const discount = () => {
    const coupon = document.getElementById("coupon").value;

    if(once){
        if (coupon === "happy" ) {
            getdiscount = 20;
            notyf.success("Coupon applied! 20% off.");
            once=false
        } else {
            getdiscount = 0;
            notyf.error("Invalid Coupon");
        }
   }else{
       notyf.success("Coupon already applied! ");
    }

    // console.log("Discount is:", getdiscount);
document.getElementById("coupon").value=""
    showingCartProducts()
};

couponBtn.addEventListener("click",discount);



let totalPriceCalculation=(()=>{
    let percent=(getdiscount/100)*pricesCalculation();
    let total=pricesCalculation()-percent;
    return total;
    
})


let showingCartProducts=(()=>{
    cartItemsDiv.innerHTML=""

    if (gettingCartProducts.length==0) {
         cartItemsDiv.innerHTML=`  
    <div class="w-full h-64 flex justify-center items-center p-4">

    <p class="font-medium text-2xl">Go,do some window shopping</p>
    </div>`

    noItemsOnCart.classList.add("flex");
    mainCartBtn.classList.remove("flex");
    mainCartBtn.classList.add("hidden");
    noItemsOnCart.classList.remove("hidden");
    }

gettingCartProducts.forEach(item => {
    noItemsOnCart.classList.add("hidden");
    noItemsOnCart.classList.remove("flex");
    mainCartBtn.classList.remove("hidden");
    mainCartBtn.classList.add("flex");

    let discountedPrice =item.Productprice - (item.Productprice * item.Productdiscount) / 100;
    console.log(discountedPrice);

    let price=0;

    if (item.Productdiscount) {
        price=discountedPrice;
        console.log(price);
        
    }else{
      price=item.Productprice;
    }

    cartItemsDiv.innerHTML+=` 
    <div class="flex gap-4 border-b pb-6 pt-8">
          <img src=".${item.Productimage}" class="w-20 h-20 rounded-md bg-gray-100">
          <div class="flex-1">
            <p class="font-medium">${item.ProductName}</p>
            <p class="text-sm text-gray-500">
              Size: medium, Color: blue, Material: Plastic<br>
              Seller: Artel Market
            </p>
            <div class="flex gap-4 mt-2">
              <button onclick="removeCartItem(${item.Productid})" class="text-red-500 hover:cursor-pointer hover:text-red-700 text-sm">Remove</button>
              <button class="text-blue-600 text-sm">Save for later</button>
            </div>
          </div>
          <div class=" text-right space-y-2">
            <p  class=" font-medium">${price}</p>
            <div  class="accessNumber w-full border-2 rounded-md flex">
                <a onclick="addQuantity(this,${item.Productid})" class="add w-8 h-8 hover:cursor-pointer font-bold  flex justify-center items-center">+</a>
                <div  class="number w-10 h-8  font-bold  border-l-2 border-r-2 flex justify-center items-center">
                 ${item.quantity}
                </div>
                <a onclick="subtractQuantity(this,${item.Productid})" subtract class="w-8 h-8 hover:cursor-pointer  font-bold  flex justify-center items-center">-</a>

            </div>
          </div>
        </div>`
});

prices.innerHTML=`
 <div class="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>${pricesCalculation()} $</span>
          </div>
          <div class="flex justify-between text-sm text-red-500">
            <span>Discount:</span>
            <span>-${getdiscount} %</span>
          </div>
          <hr>
          <div class="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${totalPriceCalculation()} $</span>
          </div>
`
})
showingCartProducts();















let RemoveAllItems=(()=>{
    CartProducts=[];
    localStorage.setItem("cartProducts",JSON.stringify(CartProducts));
    notyf.success("All items Removed Successfully");
    showingCartProducts();
    cartItemsDiv.innerHTML=`  
    <div class="w-full h-64 flex justify-center items-center p-4">

    <p class="font-medium text-2xl">Go,do some window shopping</p>
    </div>`

    noItemsOnCart.classList.add("flex");
    mainCartBtn.classList.remove("flex");
    mainCartBtn.classList.add("hidden");
    noItemsOnCart.classList.remove("hidden");
    heading.innerHTML=` <h2 class="text-xl font-semibold mb-6">cart(${gettingCartProducts.length})</h2>`;

})

let backToHome=(()=>{
   location.href="../index.html";
})
let shopping=(()=>{
   location.href="../index.html";
})

let removeCartItem=((id)=>{
console.log("nkcd");

let atteration=0;
    gettingCartProducts.forEach(item => {
        atteration++
         if (item.Productid==id) {
            console.log(atteration);
            
            gettingCartProducts.splice(atteration-1,1); 
            localStorage.setItem("cartProducts",JSON.stringify(gettingCartProducts));
            console.log(gettingCartProducts);
            
            notyf.success("Item removed Successfully")
            heading.innerHTML=` <h2 class="text-xl font-semibold mb-6">cart(${gettingCartProducts.length})</h2>`;
            showingCartProducts();
        }
    });
  
})




RemoveAllCartItems.addEventListener("click",RemoveAllItems)
backToHomeBtn.addEventListener("click",backToHome)
noItemsOnCart.addEventListener("click",shopping)
