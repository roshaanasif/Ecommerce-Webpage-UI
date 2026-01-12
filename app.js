const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'bottom'
  }
});
let homeProductsDiv =document.getElementById("home&Outdoor");
let consumerProductsDiv =document.getElementById("consumer");

let inquiryBtn=document.getElementById("inquiryBtn");
let imageSrc;

let findImage=( id =>{
 if(id=="1"){
     return imageSrc="./assets/Image/interior/1.png";
 }else if(id=="2"){
     return imageSrc="./assets/Image/interior/3.png";
 }else if(id=="3"){
     return imageSrc="./assets/Image/interior/6.png";
 }else  if(id=="4"){
     return imageSrc="./assets/Image/interior/7.png";
 }else  if(id=="5"){
     return imageSrc="./assets/Image/interior/8.png";
 }else  if(id=="6"){
     return imageSrc="./assets/Image/interior/9.png";
 }else  if(id=="7"){
     return imageSrc="./assets/Image/interior/image 89.png";
 }else  if(id=="8"){
     return imageSrc="./assets/Image/interior/image 93.png";
 }else  if(id=="9"){
     return imageSrc="./assets/Image/tech/6.png";
 }else  if(id=="10"){
     return imageSrc="./assets/Image/tech/8.png";
 }else  if(id=="11"){
     return imageSrc="./assets/Image/tech/image 23.png";
 }else  if(id=="12"){
     return imageSrc="./assets/Image/tech/image 29.png";
 }else  if(id=="13"){
     return imageSrc="./assets/Image/tech/image 32.png";
 }else  if(id=="14"){
     return imageSrc="./assets/Image/tech/image 34.png";
 }else  if(id=="15"){
     return imageSrc="./assets/Image/tech/image 85.png";
 }else  if(id=="16"){
     return imageSrc="./assets/Image/tech/image 86.png";
 }
})

let homeProducts=[
    {
     ProductName:"Chair",
     productPrice:"19",
     productID:"1",
  imageSrc: findImage("1") },
  {
     ProductName:"pot",
     productPrice:"19",
     productID:"2",
imageSrc: findImage("2") 
    },
    {
     ProductName:"lamp",
     productPrice:"19",
     productID:"3",
imageSrc: findImage("3") 
    },
    {
     ProductName:"stand",
     productPrice:"19",
     productID:"4",
   imageSrc: findImage("4") 
    },
    {
     ProductName:"Coffee machine",
     productPrice:"19",
     productID:"5",
   imageSrc: findImage("5") 
    },
    {
     ProductName:"juicer",
     productPrice:"19",
     productID:"6",
    imageSrc: findImage("6") 
    },
    {
     ProductName:"plant",
     productPrice:"19",
     productID:"7",
    imageSrc: findImage("7") 
    },
    {
     ProductName:"matress",
     productPrice:"19",
     productID:"8",
    imageSrc: findImage("8") 
    }


];
let consumerProducts=[
    {
     ProductName:"camera",
     productPrice:"19",
     productID:"1",
  imageSrc: findImage("9") },
  {
     ProductName:"watch",
     productPrice:"19",
     productID:"2",
imageSrc: findImage("10") 
    },
    {
     ProductName:"phone",
     productPrice:"19",
     productID:"3",
imageSrc: findImage("11") 
    },
    {
     ProductName:"Headphones",
     productPrice:"19",
     productID:"4",
   imageSrc: findImage("12") 
    },
    {
     ProductName:"tablet",
     productPrice:"19",
     productID:"5",
   imageSrc: findImage("13") 
    },
    {
     ProductName:"laptop",
     productPrice:"19",
     productID:"6",
    imageSrc: findImage("14") 
    },
    {
     ProductName:"Juicer",
     productPrice:"19",
     productID:"7",
    imageSrc: findImage("15") 
    },
    {
     ProductName:"headphones",
     productPrice:"19",
     productID:"8",
    imageSrc: findImage("16") 
    }


];

localStorage.setItem("homeproducts",JSON.stringify(homeProducts));
localStorage.setItem("consumerproducts",JSON.stringify(consumerProducts));

let getHomeProducts=JSON.parse(localStorage.getItem("homeproducts"));
let getConsumerProducts=JSON.parse(localStorage.getItem("consumerproducts"));


getHomeProducts.forEach(item => {
    homeProductsDiv.innerHTML+=`<div onclick="savingSelectedHomeProduct(${item.productID})" class="w-full h-fit sm:w-[22%] md:w-[23%] lg:w-[22%] xl:w-[23%]  hover:scale-105 hover:shadow-xl hover:border-none flex flex-row sm:flex-col xl:flex-row justify-between border rounded-lg p-3 ">
            <div class="w-full sm:w-[50%] md:w-full  xl:w-[50%]">
                <p class="text-base font-semibold">${item.ProductName}</p>
                <p class="text-sm text-gray-500">From USD<span> ${item.productPrice}</span> </p>
            </div>
            <img src="${item.imageSrc}"
                 class="h-12 w-20 xl:w-30 xl:h-18 mt-2">
          </div>`
});

getConsumerProducts.forEach(item => {
    consumerProductsDiv.innerHTML+=`<div onclick="savingSelectedConsumerProduct(${item.productID})" class="w-full h-fit sm:w-[22%] md:w-[23%] lg:w-[22%] xl:w-[23%]  hover:scale-105 hover:shadow-xl hover:border-none flex flex-row sm:flex-col xl:flex-row justify-between border rounded-lg p-3 ">
            <div class="w-full sm:w-[50%] md:w-full  xl:w-[50%]">
                <p class="text-base font-semibold">${item.ProductName}</p>
                <p class="text-sm text-gray-500">From USD<span> ${item.productPrice}</span> </p>
            </div>
            <img src="${item.imageSrc}"
                 class="h-12 w-20 xl:w-30 xl:h-18 mt-2">
          </div>`
});



let savingSelectedHomeProduct=((id)=>{
  location.href="./showingProducts/index.html";

  getHomeProducts.forEach(item=>{
    if (item.productID==id){
        localStorage.removeItem("productToShow");
        let selectedProduct={ProductName:item.ProductName,Productprice:item.productPrice,Productid:item.productID,Productimage:item.imageSrc};
        console.log(selectedProduct);
        
        localStorage.setItem("productToShow",JSON.stringify(selectedProduct));   
    }
  })
  

})
let savingSelectedConsumerProduct=((id)=>{
  location.href="./showingProducts/index.html";

  getConsumerProducts.forEach(item=>{
    if (item.productID==id){
        localStorage.removeItem("productToShow");
        let selectedProduct={ProductName:item.ProductName,Productprice:item.productPrice,Productid:item.productID,Productimage:item.imageSrc};
        console.log(selectedProduct);
        
        localStorage.setItem("consumerProductToShow",JSON.stringify(selectedProduct));

        
    }
  })
  

})


// inquiry form
// let gettingInquiry=JSON.parse(localStorage.getItem("inquiries"))||[];
let savingInquiry=[];
let saveInquiry=(()=>{
    let inquiryInput=document.getElementById("inquiryInput").value;
    let inquiryDetail=document.getElementById("inquiryDetail").value;
    let inquiryQuantity=document.getElementById("inquiryQuantity").value;
    let inquiryDropdownPcs=document.getElementById("inquiryDropdownPcs").value;

    console.log(inquiryDetail,inquiryDropdownPcs,inquiryInput,inquiryQuantity);
    
    let saveInquiry={
    need:inquiryInput,
    detail:inquiryDetail,
    quantity:inquiryQuantity,
    pcs:inquiryDropdownPcs,
}

savingInquiry.push(saveInquiry);

notyf.success("Inquiry send successfully");
localStorage.setItem("inquiries",JSON.stringify(savingInquiry));
// notyf.success("Inquiry send successfully");

document.getElementById("inquiryDetail").value="";
document.getElementById("inquiryQuantity").value="";
document.getElementById("inquiryDropdownPcs").value="";
document.getElementById("inquiryInput").value="";





    





});

inquiryBtn.addEventListener("click",saveInquiry)

