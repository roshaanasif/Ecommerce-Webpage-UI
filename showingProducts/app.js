const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "bottom"
  }
});
let gettingProductInfo=JSON.parse(localStorage.getItem("productToShow"));
// console.log(gettingProductInfo);
let gettingConsumerProductInfo=JSON.parse(localStorage.getItem("consumerProductToShow"));
let gettingConsumerProduct=JSON.parse(localStorage.getItem("consumerproducts"));
let gettingHomeProduct=JSON.parse(localStorage.getItem("homeproducts"));
// console.log(gettingConsumerProduct);

let picturesDiv=document.getElementById("pictures");
let cartRelatedProductDiv=document.getElementById("cartRelatedProduct");
let afterCart=document.getElementById("afterCart");
let price=document.getElementById("price");
let productName=document.getElementById("name");
let calculatedprice=document.getElementById("calculatedprice");
let addToCartBtn=document.getElementById("cart");
let buy=document.getElementById("buy");
// let calculatedprice=document.getElementsByClassName(".calculatedprice");

addToCartBtn.disabled=false;

if (!gettingProductInfo) {
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
    price.innerHTML=` <p>${gettingConsumerProductInfo.Productprice}</p>`;

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


    gettingConsumerProduct.forEach(item => {
      if(item.ProductName!=gettingConsumerProductInfo.ProductName){
        cartRelatedProductDiv.innerHTML+=` <div class="flex justify-center items-center flex-col w-full text-center p-4 rounded-2xl shadow-sm">
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
  gettingHomeProduct.forEach(item => {
    if(item.ProductName!=gettingProductInfo.ProductName){
      cartRelatedProductDiv.innerHTML+=` <div class="flex justify-center items-center flex-col w-full text-center p-4 rounded-2xl shadow-sm">
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
  price.innerHTML=` <p>${gettingProductInfo.Productprice}</p>`;
  
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



        
let cartProducts=JSON.parse(localStorage.getItem("cartProducts"))||[];
let addToCart=(()=>{

  if (!gettingProductInfo) {
    cartProducts.push(gettingConsumerProductInfo);
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
    
    console.log(cartProducts);
    
  }else{
    cartProducts.push(gettingProductInfo);
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
  
    console.log(cartProducts);
}

 

 addToCartBtn.disabled=true;
 addToCartBtn.classList.toggle("hidden");
 afterCart.classList.toggle("hidden");

 location.href="../showingCartProducts/index.html"
 

})

addToCartBtn.addEventListener("click",addToCart)        

