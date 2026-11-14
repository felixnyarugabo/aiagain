// our original data
const products = [
    { id: 1, name: "Laptop", price: 80000, stock: 5 },
    { id: 2, name: "Phone", price: 25000, stock: 10 },
    { id: 3, name: "Mouse", price: 1200, stock: 20 },
    { id: 4, name: "Keyboard", price: 2500, stock: 8 },
    { id: 5, name: "Monitor", price: 18000, stock: 4 }
];
// our cart storege before send it to localStorage
// let cart = [];
// oure localStorage
let cart = JSON.parse(localStorage.getItem('product')) || [] //if not string// 

const main = document.getElementById('main')
const containner = document.getElementById('containner')

function addtocart(){
    // create paragraph that will hold oure data


// loop through our array and in every object displays data

for(let i = 0; i<products.length; i ++){


let para =document.createElement('p')
let addtocartbt=document.createElement('button')
let card = document.createElement('div')
addtocartbt.innerHTML='addtocart'

    // that point to individue array
    const id=products[i].id;
    // point to individue set
    // const data= products.some(product=>product.id ===id)

    para.innerHTML=`product ${products[i].name} price ${products[i].price} ${products[i].stock} `
    // display paragraph
    containner.append(para)
    // display button
    containner.append(addtocartbt)
// when click button below
    addtocartbt.addEventListener('click',function(){
// //    choose what to save by id
//         const map=products.find(produc=>produc.id ===id)
        
// // save to localStorage
// cart.push(map)
//         localStorage.setItem('product',JSON.stringify(cart))
//         // display what is saved
//         card.appendChild(Cart)
//         // put card into main div

//         main.appendChild(card)
const selectedprduct= products.find(product=>product.id === id)
const existingproduct = cart.find(product =>product.id === id)
//   let quantity ; 


if(existingproduct){
 if(existingproduct.quantity < existingproduct.stock){
    existingproduct.quantity++
 }else{
    console.log("you run out of stock")
 }

}else{
    //   const addcart=  para.innerHTML=`product ${products[i].name} price ${products[i].price} ${products[i].stock} quantity: ${quantity} `
  cart.push({...selectedprduct, quantity : 1})
  
}

localStorage.setItem('product',JSON.stringify(cart))
 displayCart()
})

}

}
// call function
addtocart()



function displayCart(){

    // 1. Clear the previous display
    main.innerHTML = '';

    // 2. Loop through every product in cart
    cart.forEach(product => {

        // 3. Create a div
        const card = document.createElement('div');!

        // 4. Create a paragraph
        const para = document.createElement('p');

        // 5. Display product name, price and quantity
        para.textContent = `product : ${product.name} price : ${product.price} quantity : ${product.quantity}`;

        // 6. Put paragraph inside card
        card.append(para)

        // 7. Put card inside main
        main.append(card)

    });

}