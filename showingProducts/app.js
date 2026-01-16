const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "bottom"
  }
});
let gettingDiscountProductInfo=JSON.parse(localStorage.getItem("discountedProductsToShow"));
let gettingProductInfo=JSON.parse(localStorage.getItem("productToShow"));
// console.log(gettingProductInfo);
let gettingConsumerProductInfo=JSON.parse(localStorage.getItem("consumerProductToShow"));
let gettingConsumerProduct=JSON.parse(localStorage.getItem("consumerproducts"));
let gettingHomeProduct=JSON.parse(localStorage.getItem("homeproducts"));
// console.log(gettingConsumerProduct);

let picturesDiv=document.getElementById("pictures");
let discountedprice=document.getElementById("discountedprice");
let cartRelatedProductDiv=document.getElementById("cartRelatedProduct");
let afterCart=document.getElementById("afterCart");
let price=document.getElementById("price");
let productName=document.getElementById("name");
let calculatedprice=document.getElementById("calculatedprice");
let addToCartBtn=document.getElementById("cart");
let buy=document.getElementById("buy");
let gettingCartProducts=JSON.parse(localStorage.getItem("cartProducts"))||[];
let gettingdiscountedProductInfo=JSON.parse(localStorage.getItem("discountedProductsToShow"))||[];

let gettingDiscountedProducts=JSON.parse(localStorage.getItem("discountedProducts"))||[];

let cartItems =document.getElementById("cartItems");

if (gettingCartProducts.length>0) {
    cartItems.classList.add("flex")
    cartItems.classList.remove("hidden")

    cartItems.innerHTML=` <p class="text-xs font-semibold text-white">${gettingCartProducts.length}</p>`
}else{
    cartItems.classList.add("hidden")
    cartItems.classList.remove("flex") 
}

addToCartBtn.disabled=false;


let choosingProductToShow=(()=>{

if (gettingDiscountProductInfo) {
  
     picturesDiv.innerHTML=`   <div class="h-64 shadow-sm   hover:scale-105 rounded-lg p-4 flex justify-center">
          <img class="w-[50%] bg-contain" src=".${gettingDiscountProductInfo.Productimage}" >
        </div>
  
    
        <div class="flex justify-center items-center gap-4 mt-4">
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingDiscountProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingDiscountProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingDiscountProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingDiscountProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingDiscountProductInfo.Productimage}" />
          </div>
        </div>`
      let discount=Number(gettingDiscountProductInfo.ProductDiscount);
      console.log(gettingdiscountedProductInfo);
      
      let percent=(discount/100)*gettingDiscountProductInfo.Productprice;
     let total=gettingDiscountProductInfo.Productprice-percent;
  
      productName.innerHTML=`<h1 class="text-xl font-semibold ">${gettingDiscountProductInfo.ProductName}</h1>`;
      price.innerHTML=` <p>${total} $</p>`;
      // discountedprice.innerHTML=` <p>${total} $</p>`;
  
      calculatedprice.innerHTML=` 
        <div class="flex-1 bg-red-50 p-3 shadow-black border-r-1">
            <p class=" text-red-500 font-semibold">${(Number(total)*50)}$</p>
            <p class="text-xs text-gray-500">50 pcs</p>
          </div>
          <div class="flex-1 bg-orange-50 p-3 shadow-black border-r-1">
            <p class=" font-semibold">${Number(total)*75}$</p>
            <p class="text-xs text-gray-500">75 pcs</p>
          </div>
          <div class="flex-1 bg-orange-50 p-3">
            <p class=" font-semibold">${Number(total)*100}$</p>
            <p class="text-xs text-gray-500">100 pcs</p>
          </div>`
  
  cartRelatedProductDiv.innerHTML=""
      gettingDiscountedProducts.forEach(item => {
        if(item.ProductName!=gettingDiscountProductInfo.ProductName){
          cartRelatedProductDiv.innerHTML+=` <div onclick="savingSelectedConsumerProduct(${item.productID})" class="flex hover:scale-105 hover:shadow-sm justify-center items-center flex-col w-full text-center p-4 rounded-2xl shadow-sm">
            <div class=" w-[80%] h-[80%] ">
              <img src=".${item.imageSrc}" class="mx-auto w-full h-full rounded-md ">
            </div>
            <div class="w-full mt-4">
              <p class="text-base text-black">${item.ProductName}</p>
              <p class="text-xs mt-2 text-black">${item.productPrice}</p>
              <p class="text-xs mt-2 text-red-600">-${item.discount}</p>
            </div>
            </div>`
        }
      });   
    }else if (!gettingProductInfo) {
     picturesDiv.innerHTML=`   <div class="h-64 shadow-sm   hover:scale-105 rounded-lg p-4 flex justify-center">
          <img class="w-[50%] bg-contain" src=".${gettingConsumerProductInfo.Productimage}" >
        </div>
  
    
        <div class="flex justify-center items-center gap-4 mt-4">
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingConsumerProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingConsumerProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingConsumerProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingConsumerProductInfo.Productimage}" />
          </div>
          <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
            <img src=".${gettingConsumerProductInfo.Productimage}" />
          </div>
        </div>`
      
      productName.innerHTML=`<h1 class="text-xl font-semibold ">${gettingConsumerProductInfo.ProductName}</h1>`;
      price.innerHTML=` <p>${gettingConsumerProductInfo.Productprice} $</p>`;
  
      calculatedprice.innerHTML=` 
        <div class="flex-1 bg-red-50 p-3 shadow-black border-r-1">
            <p class=" text-red-500 font-semibold">${(Number(gettingConsumerProductInfo.Productprice)*50)}$</p>
            <p class="text-xs text-gray-500">50 pcs</p>
          </div>
          <div class="flex-1 bg-orange-50 p-3 shadow-black border-r-1">
            <p class=" font-semibold">${Number(gettingConsumerProductInfo.Productprice)*75}$</p>
            <p class="text-xs text-gray-500">75 pcs</p>
          </div>
          <div class="flex-1 bg-orange-50 p-3">
            <p class=" font-semibold">${Number(gettingConsumerProductInfo.Productprice)*100}$</p>
            <p class="text-xs text-gray-500">100 pcs</p>
          </div>`
  
  cartRelatedProductDiv.innerHTML=""
      gettingConsumerProduct.forEach(item => {
        if(item.ProductName!=gettingConsumerProductInfo.ProductName){
          cartRelatedProductDiv.innerHTML+=` <div onclick="savingSelectedConsumerProduct(${item.productID})" class="flex hover:scale-105 hover:shadow-sm justify-center items-center flex-col w-full text-center p-4 rounded-2xl shadow-sm">
            <div class=" w-[80%] h-[80%] ">
              <img src=".${item.imageSrc}" class="mx-auto w-full h-full rounded-md ">
            </div>
            <div class="w-full mt-4">
              <p class="text-base text-black">${item.ProductName}</p>
              <p class="text-xs mt-2 text-black">${item.productPrice}</p>
            </div>
            </div>`
        }
      });   
    }else{
      cartRelatedProductDiv.innerHTML=""
    gettingHomeProduct.forEach(item => {
      if(item.ProductName!=gettingProductInfo.ProductName){
        cartRelatedProductDiv.innerHTML+=` <div onclick="savingSelectedHomeProduct(${item.productID})" class="flex hover:scale-105 hover:shadow-sm justify-center items-center flex-col w-full text-center p-4 rounded-2xl shadow-sm">
          <div class=" w-[80%] h-[80%] ">
            <img src=".${item.imageSrc}" class="mx-auto w-full h-full rounded-md ">
          </div>
          <div class="w-full mt-4">
            <p class="text-base text-black">${item.ProductName}</p>
            <p class="text-xs mt-2 text-black">${item.productPrice} $</p>
          </div>
          </div>`
      }
    });   
    picturesDiv.innerHTML=`   <div class="h-64 shadow-sm   hover:scale-105 rounded-lg p-4 flex justify-center">
        <img class="w-[50%] bg-contain" src=".${gettingProductInfo.Productimage}" >
      </div>
    
    
      <div class="flex justify-center items-center gap-4 mt-4">
        <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
          <img src=".${gettingProductInfo.Productimage}" />
        </div>
        <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
          <img src=".${gettingProductInfo.Productimage}" />
        </div>
        <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
          <img src=".${gettingProductInfo.Productimage}" />
        </div>
        <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
          <img src=".${gettingProductInfo.Productimage}" />
        </div>
        <div class="w-20 h-20 shadow rounded flex hover:scale-105 items-center justify-center">
          <img src=".${gettingProductInfo.Productimage}" />
        </div>
      </div>`
    
    productName.innerHTML=`<h1 class="text-xl font-semibold ">${gettingProductInfo.ProductName}</h1>`;
    price.innerHTML=` <p>${gettingProductInfo.Productprice} $</p>`;
    
    calculatedprice.innerHTML=` 
      <div class="flex-1 bg-red-50 p-3 shadow-black border-r-1">
          <p class=" text-red-500 font-semibold">${(Number(gettingProductInfo.Productprice)*50)}$</p>
          <p class="text-xs text-gray-500">50 pcs</p>
        </div>
        <div class="flex-1 bg-orange-50 p-3 shadow-black border-r-1">
          <p class=" font-semibold">${Number(gettingProductInfo.Productprice)*75}$</p>
          <p class="text-xs text-gray-500">75 pcs</p>
        </div>
        <div class="flex-1 bg-orange-50 p-3">
          <p class=" font-semibold">${Number(gettingProductInfo.Productprice)*100}$</p>
          <p class="text-xs text-gray-500">100 pcs</p>
        </div>`
  }
})

choosingProductToShow();


        
let addToCart=(()=>{

  if (gettingdiscountedProductInfo.length>0) {

    gettingdiscountedProductInfo.quantity=1;
   localStorage.setItem("discountedProductsToShow",JSON.stringify(gettingdiscountedProductInfo));
 
   gettingCartProducts.push(gettingdiscountedProductInfo);
   localStorage.setItem("cartProducts",JSON.stringify(gettingdiscountedProductInfo));
   
   console.log(gettingCartProducts);
 
    
  }else if (!gettingProductInfo) {

    gettingConsumerProductInfo.quantity=1;
   localStorage.setItem("consumerProductToShow",JSON.stringify(gettingConsumerProductInfo));
 
   gettingCartProducts.push(gettingConsumerProductInfo);
   localStorage.setItem("cartProducts",JSON.stringify(gettingCartProducts));

    console.log(gettingConsumerProductInfo);
    
   console.log(gettingCartProducts);
 
    
  }else{
     gettingProductInfo.quantity=1;
     localStorage.setItem("productToShow",JSON.stringify(gettingProductInfo));
     gettingCartProducts.push(gettingProductInfo);
    localStorage.setItem("cartProducts",JSON.stringify(gettingCartProducts));
  
    console.log(gettingCartProducts);
}

 

 addToCartBtn.disabled=true;
 addToCartBtn.classList.toggle("hidden");
 afterCart.classList.toggle("hidden");

 location.href="../showingCartProducts/index.html"
 

})

addToCartBtn.addEventListener("click",addToCart) 



// for cart related product
let getHomeProducts=JSON.parse(localStorage.getItem("homeproducts"));
let getConsumerProducts=JSON.parse(localStorage.getItem("consumerproducts"));

let savingSelectedHomeProduct=((id)=>{
  console.log(id);


  let checkingRepeatCartProduct=gettingCartProducts.find(item=>item.Productid==id);
  

  if (checkingRepeatCartProduct=="") {
    location.href="../showingCartProducts/index.html";
  }else{
      location.href="../showingProducts/index.html";
    
      // localStorage.removeItem("productToShow");
      localStorage.removeItem("productToShow");
      getHomeProducts.forEach(item=>{
        if (item.productID==id){
        
            let selectedProduct={ProductName:item.ProductName,Productprice:item.productPrice,Productid:item.productID,Productimage:item.imageSrc};
            console.log(selectedProduct);
            
            localStorage.setItem("productToShow",JSON.stringify(selectedProduct));  

        }
      })
      
      choosingProductToShow();
  }

  

})
let savingSelectedConsumerProduct=((id)=>{
 console.log(id);
 
  let checkingRepeatCartProduct=gettingCartProducts.find(item=>item.Productid==id);

  if (checkingRepeatCartProduct) {
    location.href="../showingCartProducts/index.html";
    
  }else{
      location.href="../showingProducts/index.html";
    
      localStorage.removeItem("consumerProductToShow");
      getConsumerProducts.forEach(item=>{
        if (item.productID==id){
            
            let selectedProduct={ProductName:item.ProductName,Productprice:item.productPrice,Productid:item.productID,Productimage:item.imageSrc};
            console.log(selectedProduct);
            
            localStorage.setItem("consumerProductToShow",JSON.stringify(selectedProduct));

            
          }
        })
        choosingProductToShow();
  }
  

})
let savingSelectedDiscountProduct=((id)=>{

    let checkingRepeatCartProduct=cartProducts.find(item=>item.Productid==id);

  if (checkingRepeatCartProduct) {
    location.href="./showingCartProducts/index.html";
  }else{
      location.href="./showingProducts/index.html";
    
      gettingDiscountedProducts.forEach(item=>{
        if (item.productID==id){
            // localStorage.removeItem("productToShow");
            localStorage.removeItem("discountedProductsToShow");
            let selectedProduct={ProductName:item.ProductName,Productprice:item.productPrice,Productid:item.productID,ProductDiscount:item.discount,Productimage:item.imageSrc};
            console.log(selectedProduct);
            
            localStorage.setItem("discountedProductsToShow",JSON.stringify(selectedProduct));
    
            
        }
      })
  }
  

})


