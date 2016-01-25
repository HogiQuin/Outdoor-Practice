//Variables
var modalVisible = false;
var modalWidth = 0;
var modalHeight = 0;
var width = 0;
var widthWindow = window.innerWidth;
var cookie;

var products = '{ "status" : 0,"products" : [{"id" : 1,"name" : "Super Backpack Predator","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 45.99,"image" : "2001_001.png"},{ "id" : 2,"name" : "Super Backpack Goat","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 60.00,"image" : "2002_001.png"},{ "id" : 3,"name" : "Super Backpack Xtreme Goat","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 50.00,"image" : "2003_001.png"},{ "id" : 4,"name" : "Outdoor Backpack","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 40.00,"image" : "2004_001.png"},{ "id" : 5,"name" : "Outdoor Backpack lite","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 30.00,"image" : "2005_001.png"},{ "id" : 6,"name" : "Mountain Backpack","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 120.00,"image" : "2006_001.png"},{ "id" : 7,"name" : "Xtreme Lak","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 80.00,"image" : "2007_001.png"},{ "id" : 8,"name" : "Waterproof Backpack","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 50.00,"image" : "2008_001.png"},{ "id" : 9,"name" : "Outdoor X","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 90.00,"image" : "2009_001.png"},{ "id" : 10,"name" : "Kids Backpack","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 45.00,"image" : "2010_001.png"},{ "id" : 11,"name" : "Outdoor Sleeping","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 80.99,"image" : "2011_001.png"},{ "id" : 12,"name" : "X-Treme backpack","description" : "Translate offers both professional human and machine translations between 75 languages. Translators can also edit paid jobs via our online portal.","price" : 99.99,"image" : "2012_001.png"}]}';

var jsonProducts = JSON.parse(products);

window.onresize = function(){
  pageResize();
  if(modalVisible) modalPosition();
  width = window.innerWidth;
}
window.onscroll = function()
{
  if(modalVisible) modalPosition();
}

function pageResize(){
  var home = document.getElementById('home');
  var cover = document.getElementById('img-cover');
  var about = document.getElementById('about');
  var contact = document.getElementById('contact');

  home.style.height = window.innerHeight + 'px';
  cover.style.height = (window.innerHeight - 80) + 'px'; 
  about.style.height = window.innerHeight + 'px';
  contact.style.height = window.innerHeight + 'px';
}
//display size and position
function modalPosition()
{
  var divCover = document.getElementById('cover');
  divCover.style.width = window.innerWidth;
  divCover.style.height = window.innerHeight;
  divCover.style.left = window.pageXOffset;
  divCover.style.top = window.pageYOffset;
  //modal
  var divModal = document.getElementById('modal');
  divModal.style.left = ((window.innerWidth - modalWidth)/2) + window.pageXOffset;
  divModal.style.top = ((window.innerHeight+50 - modalHeight)/2) + window.pageYOffset;
}
//show modal
function showModal(width, height, title,id)
{
  var product = jsonProducts.products;
  var divProduct = document.createElement('div');
  var divTitleProduct = document.createElement('div');
  var divImage = document.createElement('div');
  var img = document.createElement('img');
  var divPrice = document.createElement('div');
  var divDescription = document.createElement('div');
  //content 
  var divContent = document.getElementById('content');
  //create cover 
  var divCover = document.createElement('div');

  divProduct.setAttribute('class', 'product');
  divTitleProduct.setAttribute('class', 'product-title');
  divImage.setAttribute('class', 'product-image');
  img.setAttribute('src', 'products/'+product[id-1].image);
  divPrice.setAttribute('class', 'product-price');
  divDescription.setAttribute('class','product-description');
  //id
  divCover.setAttribute('id', 'cover');
  //add to document
  divContent.appendChild(divCover);
  //create modal
  var divModal = document.createElement('div');
  //id
  divModal.setAttribute('id', 'modal');
  //size
  divModal.style.width = width; modalWidth = width;
  divModal.style.height = height; modalHeight = height;
  //modal titlw
  var divTitleBar = document.createElement('div');
  var divTitle = document.createElement('div');
  var divClose = document.createElement('div');
  //id
  divTitleBar.setAttribute('id', 'titlebar');
  divTitle.setAttribute('id', 'title');
  divClose.setAttribute('id', 'close');
//title content
  divTitle.innerHTML = title;
  divTitleProduct.innerHTML = product[id-1].name;
  divPrice.innerHTML = toCurrency(product[id-1].price);
  divDescription.innerHTML = product[id-1].description;

  divProduct.style.width = '50%';
  divProduct.style.margin = '40px 0px 0px 10px';
  divDescription.style.width = '40%';
  divDescription.style.position ='relative';
  divDescription.style.float = 'left';
  divDescription.style.marginTop = '150px';
  divDescription.style.textAlign = 'justify';
  divDescription.style.marginLeft = '20px';
  //close content
  var btnClose = document.createElement('button');
  btnClose.innerHTML = 'X';
  btnClose.setAttribute('onClick', 'closeModal();')
  divClose.appendChild(btnClose);
  //add to title bar
  divTitleBar.appendChild(divTitle);
  divTitleBar.appendChild(divClose);
  //add to title modal
  divModal.appendChild(divTitleBar);
  divModal.appendChild(divProduct);
  divProduct.appendChild(divTitleProduct);
  divProduct.appendChild(divImage);
  divImage.appendChild(img);
  divProduct.appendChild(divPrice);
  divModal.appendChild(divDescription);
  //add to document
  divContent.appendChild(divModal);
  //modal is visible
  modalVisible = true;
  //position modal
  modalPosition();
}

//close modal
function closeModal()
{
  //elements
  var divContent = document.getElementById('content');
  var divCover = document.getElementById('cover');
  var divModal = document.getElementById('modal');
  //remove Child
  divContent.removeChild(divCover);
  divContent.removeChild(divModal);
  //modal not visible
  modalVisible = false;
}

function showProducts(){

  var product = jsonProducts.products;
  var divContain = document.getElementById('contain-products');
  
  for(var i = 0; i < jsonProducts.products.length; i++){
    var divProduct = document.createElement('div');
    var divTitle = document.createElement('div');
    var divImage = document.createElement('div');
    var img = document.createElement('img');
    var divPrice = document.createElement('div');
    var divBtnInfo = document.createElement('div');
    var btnMore = document.createElement('button');

    divProduct.setAttribute('class', 'product');
    divTitle.setAttribute('class', 'product-title');
    divImage.setAttribute('class', 'product-image');
    img.setAttribute('src', 'products/'+product[i].image);
    divPrice.setAttribute('class', 'product-price');
    divBtnInfo.setAttribute('class','button-info');
    btnMore.setAttribute('id', ''+product[i].id+'');
    if(widthWindow > 800){
      btnMore.setAttribute('onClick','showModal(500,500,"More Info",'+product[i].id+');');
    }
    if(widthWindow < 800){
      btnMore.setAttribute('onClick','loadProductDetail('+product[i].id+');');
    }

    divTitle.innerHTML = product[i].name;
    divPrice.innerHTML = toCurrency(product[i].price);
    btnMore.innerHTML = 'More info...';

    divContain.appendChild(divProduct);
    divProduct.appendChild(divTitle);
    divProduct.appendChild(divImage);
    divImage.appendChild(img);
    divProduct.appendChild(divPrice);
    divProduct.appendChild(divBtnInfo);
    divBtnInfo.appendChild(btnMore);
  }
}

function toCurrency(value)
{
  return value.toLocaleString("en-US", 
          {style: "currency", 
          currency:"USD",
          minimumFractionDigits:2});
}

function backPage(){
  window.location ='index.html#products';
}

function loadProductDetail(id){
  window.location = 'product-detail.html';
  setValue(id*1);
}
function loadProduct(){
  console.log(getValue());
}

function setValue(value){
  cookie = value;
}

function getValue(){
  return window.cookie;
}



