// Caterogy-btn( circle-btn)
var category_btn_right = document.querySelector(".category-btn--right");
var category_btn_left = document.querySelector(".category-btn--left");
var category_list = document.querySelectorAll(".category-list");
category_btn_right.classList.add("circle-btn--on");
category_btn_right.onclick = function () {
  category_btn_right.classList.remove("circle-btn--on");
  category_btn_left.classList.add("circle-btn--on");
  for (let i = 0; i < category_list.length; i++) {
    category_list[i].classList.add("category-list__ml");
  }
};
category_btn_left.onclick = function () {
  category_btn_left.classList.remove("circle-btn--on");
  category_btn_right.classList.add("circle-btn--on");
  for (let i = 0; i < category_list.length; i++) {
    category_list[i].classList.remove("category-list__ml");
  }
};

// shopbeeMall-btn( circle-btn)

var mall_btn_right = document.querySelector(".mall-btn--right");
var mall_btn_left = document.querySelector(".mall-btn--left");
var mall_list = document.querySelectorAll(".shopbeeMall__body-right-list ");
mall_btn_right.classList.add("circle-btn--on");
mall_btn_right.onclick = function () {
  mall_btn_right.classList.remove("circle-btn--on");
  mall_btn_left.classList.add("circle-btn--on");
  for (let i = 0; i < mall_list.length; i++) {
    mall_list[i].classList.add("mall-list__ml");
  }
};
mall_btn_left.onclick = function () {
  mall_btn_left.classList.remove("circle-btn--on");
  mall_btn_right.classList.add("circle-btn--on");
  for (let i = 0; i < mall_list.length; i++) {
    mall_list[i].classList.remove("mall-list__ml");
  }
};

// slider

var urlSliderMain = [
  "assets/images/slider/slider-1.png",
  "assets/images/slider/slider-2.png",
  "assets/images/slider/slider-3.png",
  "assets/images/slider/slider-4.png",
  "assets/images/slider/slider-5.png",
];


var i = 1;
var boxSliderElm = document.querySelector(".slider-box");
var valueTranslate = [
  "translateX(0)",
  "translateX(-5.2631%)",
  "translateX(-10.5263%)",
  "translateX(-15.7895%)",
  "translateX(-21.0524%)",
];
function sliderMain() {
boxSliderElm.style.transform = valueTranslate[i];
i++;
if( i == 5){
    i = 0;
}
}
setInterval(sliderMain, 5000);

/* shopbemall slider */ 
var j = 1;
var sliderShopbeeMall = document.querySelector(".shopbeemall-slider-list");
var valueMall = [
  "translateX(0)",
  "translateX(-14.28571%)",
  "translateX(-28.57142%)",
  "translateX(-42.8571%)",
  "translateX(-57.14284%)",
  "translateX(-71.42855%)",
  "translateX(-85.71426%)",
];
function sliderMall() {
 sliderShopbeeMall.style.transform = valueMall[j];
  j++;
  if (j == 7) {
    j = 0;
  }
}
setInterval(sliderMall, 5000);

 var modalElm = document.querySelector('.modal');
 var pageBegin = document.querySelector('.page-begin');
 function removeBegin() {
   document.removeChild(modal);
 }
 setTimeout(removeBegin, 5000);