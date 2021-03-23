class products{
	constructor(name,price,image,discountPrice,quantity){
		this.name = name;
		this.price = price;
		this.image = image;
		this.discountPrice = discountPrice;
		this.quantity = quantity;
	}
}
class Basket {
  constructor() {
    this.items = []
  }
  
  addItem(item){
    this.items.push(item)
  }
  removeItem(index){
    this.items.splice(index,1);
  }
}

var basket = new Basket();


var product1 = new products("Product 1","59","img/product-21.jpg",50,1);
var product2 = new products("Product 2","59","img/product-22.jpg",50,1);
var product3 = new products("Product 3","59","img/product-23.jpg",50,1);
var product4 = new products("Product 4","59","img/product-24.jpg",50,1);
var product5 = new products("Product 5","$59","img/product-21.jpg",50,1);
var product6 = new products("Product 6","$59","img/product-22.jpg",50,1);
var product7 = new products("Product 7","$59","img/product-23.jpg",50,1);
var product8 = new products("Product 8","$59","img/product-24.jpg",50,1);
var product9 = new products("Product 9","$59","img/product-21.jpg",50,1);
var product10 = new products("Product 10","$59","img/product-22.jpg",50,1);
var product11 = new products("Product 11","$59","img/product-23.jpg",50,1);
var product12 = new products("Product 12","$59","img/product-24.jpg",50,1);
var items = [product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12];
var totalDistance = [];
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");
var slider = document.getElementById("product-items");

function addItem(index) {
  	basket.addItem(items[index]);
  	showBasket()
}
function removeItem(index) {
    basket.removeItem(index)
    showBasket()
}
function showBasket() {
  let cart = document.getElementById("cart-list");
  var c = basket.items;
  var s = basket.items.map((item,index)=>"<div class=cart-item><div class=cart-info><span class=name><a href=# title=name>"+item.name+"</a></span><span class=cart-price>"+item.discountPrice+"</span><span class=cart-total>Total : "+item.discountPrice+"</span><div class=increament><span class=minus>-</span><input type=text name=a class=input value="+item.quantity+"><span class=plus>+</span></div></div><div class=cart-image><span class=remove onclick=removeItem("+index+")>X</span><a href=# title=img><img src="+item.image+" alt=img></a></div></div></div>").join("");
  cart.innerHTML = s;
  var count = document.getElementById("count");
  var countCart = document.getElementById("count-cart");
  count.innerHTML = c.length+" Items";
  countCart.innerHTML = c.length;
  var getTotal = document.querySelectorAll(".cart-total");
  var prices = document.querySelectorAll(".cart-price");
  var innerTotal = document.getElementById("total");
  for(price of prices){
    e = parseInt(price.innerText);
  }
   var cartsTotal = document.querySelectorAll(".cart-total");
  var btnPlus = document.querySelectorAll(".plus");
    for(plus of btnPlus) {
      plus.onclick = function(){
        var b = this.parentElement.parentElement;
        var c = b.querySelector("input");
        var d = b.querySelector(".cart-total")
        c.value++;
        total = c.value*e;
        d.innerHTML = "Total : "+total;     
        var arr = [];
       for(per of getTotal){
          let abc = per.innerText;
          var cutString = abc.substring(8)
          var stringToNum = parseInt(cutString);
          arr.push(stringToNum);
          }
          var result = arr.reduce((a, b) => a + b, 0)
          innerTotal.innerHTML = "Total Price : "+result+"$";
      }
    }
var btnMinus = document.querySelectorAll(".minus");
    for(minus of btnMinus) {
      minus.onclick = function(){
        var b = this.parentElement.parentElement;
        var c = b.querySelector("input");
        var d = b.querySelector(".cart-total")
        c.value--;
        if (c.value==0) {
          c.value = 1;
        }
        total = c.value*e;
        d.innerHTML = "Total : "+total;
        var arr = [];
       for(per of getTotal){
          let abc = per.innerText;
          var cutString = abc.substring(8)
          var stringToNum = parseInt(cutString);
          arr.push(stringToNum);
          }
          var result = arr.reduce((a, b) => a + b, 0)
          innerTotal.innerHTML = "Total Price : "+result+"$";
      }
    }
    var arr = [];
       for(per of getTotal){
          let abc = per.innerText;
          var cutString = abc.substring(8)
          var stringToNum = parseInt(cutString);
          arr.push(stringToNum);
          }
          var result = arr.reduce((a, b) => a + b, 0)
          innerTotal.innerHTML = "Total Price : "+result+"$";
}
var market = document.getElementById("product-items");
let add = items.map((item, index)=>"<div class=item><div class=item-img><a href=#><img src="+item.image+"></a><div class=add-item onClick=addItem("+index+")><p>Add</p></div></div><div class=item-info><a href=#>"+item.name+"</a><div class=price-box><span class=old-price>"+item.price+"$"+"</span><span class=price>"+item.discountPrice+"$"+"</span></div></div></div>").join("");
market.innerHTML = add;

rightArrow.onclick = function(e){
	slider.scrollLeft += 295;
	totalDistance.push(295);
	let keoPhai = 295;

	if(totalDistance.length >= items.length-3){
		totalDistance = [];
		slider.scrollLeft = 0;
	}
}
leftArrow.onclick = function(e) {
	slider.scrollLeft -= 295;
	totalDistance.pop();
}
var a = 0;
var slide = document.getElementsByClassName("slider-image");
setInterval(function(){
	if(a == slide.length-1){
     	a = 0;
     	}
     else{
     	a++;
     }
    for(i=0; i<slide.length;i++){
	if(i != a){
		slide[i].classList.add("hidden");
	}
	else {
		slide[i].classList.remove("hidden")
	}
}
},3000);

var input = document.getElementById("search-input");
var btn = document.getElementById("search-btn");
var alert = document.getElementById("alert")
btn.onclick = function(event){
		if(!input.value){
     		event.preventDefault();
     		alert.style.display = 'block';
     	}
}
alert.onclick = function(){
	alert.style.display = 'none';
}
$( ".add-item" ).click(function() {
  $( "#add-notification" ).fadeIn(1000, function(){
    setTimeout(
  function() 
  {
    $("#add-notification").fadeOut(3000,function(){
    })
  }, 1000);
  });
});
