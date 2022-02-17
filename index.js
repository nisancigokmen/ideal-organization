/*-Close the offers menu-*/

var openMenuClick = document.querySelector(".openIcon");
var closeMenuClick = document.querySelector(".closeIcon");

var offersMenu = document.querySelector("#offersOpen");

var cityInfos = document.querySelector("#cityInfos");

//openMenu Click
openMenuClick.addEventListener("click", function () {

    openMenuClick.style.display = "none";
    offersMenu.style.display = "block";
    offersGalery.style.display = "none";

    cityInfos.style.display = "block";

    italyaPay.style.display = "none";
    ispanyaPay.style.display = "none";
    fransaPay.style.display = "none";
    avusturyaPay.style.display = "none";

    city_info.style.display = "none";

});

//closeMenu Click
closeMenuClick.addEventListener("click", function () {

    openMenuClick.style.display = "block";
    offersMenu.style.display = "none";
    offersGalery.style.display = "block";

    cityInfos.style.display = "none";
    city_info.style.display = "none";
});


//openPage Gallery 

var offersGalery = document.querySelector("#discountGallery");

//italyaImages & pay

var italyaImg = document.querySelector(".discountItalya"); //click
var italyaPay = document.querySelector(".italyaPay");

//ispanyaImages & pay
var ispanyaImg = document.querySelector(".discountIspanya"); //click
var ispanyaPay = document.querySelector(".ispanyaPay");


//fransaImages & pay
var fransaImg = document.querySelector(".discountFransa"); //click
var fransaPay = document.querySelector(".fransaPay");


//avusturyaImages & pay
var avusturyaImg = document.querySelector(".discountAvusturya"); //click
var avusturyaPay = document.querySelector(".avusturyaPay");



italyaImg.addEventListener("click", function () {

    italyaPay.style.display = "block";
    ispanyaPay.style.display = "none";
    fransaPay.style.display = "none";
    avusturyaPay.style.display = "none";

});

ispanyaImg.addEventListener("click", function () {

    italyaPay.style.display = "none";
    ispanyaPay.style.display = "block";
    fransaPay.style.display = "none";
    avusturyaPay.style.display = "none";

});


fransaImg.addEventListener("click", function () {

    italyaPay.style.display = "none";
    ispanyaPay.style.display = "none";
    fransaPay.style.display = "block";
    avusturyaPay.style.display = "none";

});

avusturyaImg.addEventListener("click", function () {

    italyaPay.style.display = "none";
    ispanyaPay.style.display = "none";
    fransaPay.style.display = "none";
    avusturyaPay.style.display = "block";

});


// offers menu bar city click
var cityInfoRght = document.querySelector("#cityInfos");

var italyaClick = document.querySelector(".clickItalya");
var ispanyaClick = document.querySelector(".clickIspanya");
var fransaClick = document.querySelector(".clickFransa");
var avusturyaClick = document.querySelector(".clickAvusturya");

var city_info = document.querySelector("#city-info");

var italyaInfos = document.querySelector("#italyaInfos");
var ispanyaInfos = document.querySelector("#ispanyaInfos");
var fransaInfos = document.querySelector("#fransaInfos");
var avusturyaInfos = document.querySelector("#avusturyaInfos");


italyaClick.addEventListener("click", function () {

    cityInfoRght.style.display = "none";
    city_info.style.display = "block";

    italyaInfos.style.display = "block";
    ispanyaInfos.style.display = "none";
    fransaInfos.style.display = "none";
    avusturyaInfos.style.display = "none";

});


ispanyaClick.addEventListener("click", function () {

    cityInfoRght.style.display = "none";
    city_info.style.display = "block";


    italyaInfos.style.display = "none";
    ispanyaInfos.style.display = "block";
    fransaInfos.style.display = "none";
    avusturyaInfos.style.display = "none";

});



fransaClick.addEventListener("click", function () {

    cityInfoRght.style.display = "none";
    city_info.style.display = "block";

    italyaInfos.style.display = "none";
    ispanyaInfos.style.display = "none";
    fransaInfos.style.display = "block";
    avusturyaInfos.style.display = "none";

});


avusturyaClick.addEventListener("click", function () {

    cityInfoRght.style.display = "none";
    city_info.style.display = "block";

    italyaInfos.style.display = "none";
    ispanyaInfos.style.display = "none";
    fransaInfos.style.display = "none";
    avusturyaInfos.style.display = "block";

});