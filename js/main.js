
let cards = document.querySelector('#cards');
const korzinka = document.querySelector('.shoopping1');
const inputName = document.getElementById('name');
const inputNumber = document.getElementById('prince');
const inputMalumot = document.getElementById('malumot');
const btn = document.querySelector('.saqlash');


// JSON.parse(localStorage.getItem('wrappers')) ||
let arrCard =  [
  {
    "id":"1",
    "imgUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr59Mn5SlAthqJ5BIqL8IF8cKG4t5gR-PEEvf_jITCmnMsqAY8-vzPO0LnlbLkJ8A82fc&usqp=CAU',
    "doriNomi": "Gripxot",
    "narhi":'100',
    'malumotnoma': 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },


];








const card = {
  prods:[],
  totalPrice:0,
  quantity:0,
};

create();


function addToCard(id , narhi){
  const foundProdIndex = card.prods.findIndex(prod => {
    return prod.id === id;
  });

  if(foundProdIndex === -1){
    card.prods.push({
      id,
      qty:1,
    });
  }
  else{
    card.prods[foundProdIndex].qty = card.prods[foundProdIndex].qty + 1;
  }

  card.totalPrice += narhi;
  card.quantity += 1;

  korzinka.innerHTML = card.quantity;
}



function create(){

  arrCard.forEach((book) => {

    const {id , doriNomi , imgUrl , narhi , malumotnoma} = book;

    const cardTemp = `
      <div class="card mt-5 " style="width: 18rem; ">
        <img src="${imgUrl}" class="card-img-top" alt="${doriNomi}">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title">${doriNomi}</h5> <h4>$${narhi}</h4>
          </div>
          <p class="card-text">${malumotnoma}</p>
          <button href="#" class="btn btn-primary" data-product-id="${id}" 
              onclick="addToCard(${id} , ${narhi})">
            Sotib olish
          </button>
          <button href="#" class="btn btn-danger button_like" data-product-id="${id}">
            <i class="fa fa-heart icon_like"></i>
          </button>
        </div>
    </div>

    `;

    cards.innerHTML += cardTemp
  })
}





btn.addEventListener('click', (e) => {

  e.preventDefault();
  
  const inputNameValue = inputName.value;
  const inputNumberValue = inputNumber.value;
  const inputMalumotValue = inputMalumot.value;

  let newObj = {
      "imgUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr59Mn5SlAthqJ5BIqL8IF8cKG4t5gR-PEEvf_jITCmnMsqAY8-vzPO0LnlbLkJ8A82fc&usqp=CAU',
      "doriNomi": inputNameValue,
      "narhi":  inputNumberValue,
      "malumotnoma": inputMalumotValue,
  };


  let cardBigArr = arrCard.push(newObj);

  create();

  console.log(arrCard);
  
});





// localStorage.setItem("wrappers" , JSON.stringify(arrCard));
