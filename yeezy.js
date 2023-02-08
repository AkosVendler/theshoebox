var slider_img = document.querySelector('.slider-img');
var slider_img1 = document.querySelector('.slider-img1');
var slider_img2 = document.querySelector('.slider-img2');
var slider_img3 = document.querySelector('.slider-img3');
var slider_img4 = document.querySelector('.slider-img4');
var slider_img5 = document.querySelector('.slider-img5');
var slider_img6 = document.querySelector('.slider-img6');
var img = ['slide1.png','slide3.png', 'slide2.png'];
var img1 = ['slideneon.png','slideneon2.png', 'slideneon3.png'];
var img2 = ['foam1.png','foam2.png', 'foam3.png', 'foam4.png'];
var img3 = ['foamred1.png','foamred2.png', 'foamred3.png', 'foamred4.png'];
var img4 = ['boost1.png','boost2.png', 'boost3.png', 'boost4.png'];
var img5 = ['boostblue1.png','boostblue2.png', 'boostblue3.png', 'boostblue4.png'];
var img6 = ['boostoreo1.png','boostoreo3.png', 'boostoreo2.png'];
var i = 0;

//1
function prev(){
    if(i <= 0 ) i = img.length;
    i--;
    return setImg();
}

function next(){
    if (i >= img.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'img/' + img[i]);
}

//2
function prev1(){
    if(i <= 0 ) i = img1.length;
    i--;
    return setImg1();
}

function next1(){
    if (i >= img1.length -1) i = -1;
    i++;
    return setImg1();
}

function setImg1(){
    return slider_img1.setAttribute('src', 'img/' + img1[i]);
}

//3
function prev2(){
    if(i <= 0 ) i = img2.length;
    i--;
    return setImg2();
}

function next2(){
    if (i >= img2.length -1) i = -1;
    i++;
    return setImg2();
}

function setImg2(){
    return slider_img2.setAttribute('src', 'img/' + img2[i]);
}
//4
function prev3(){
    if(i <= 0 ) i = img3.length;
    i--;
    return setImg3();
}

function next3(){
    if (i >= img3.length -1) i = -1;
    i++;
    return setImg3();
}

function setImg3(){
    return slider_img3.setAttribute('src', 'img/' + img3[i]);
}
//5
function prev4(){
    if(i <= 0 ) i = img4.length;
    i--;
    return setImg4();
}

function next4(){
    if (i >= img4.length -1) i = -1;
    i++;
    return setImg4();
}

function setImg4(){
    return slider_img4.setAttribute('src', 'img/' + img4[i]);
}
//6
function prev5(){
    if(i <= 0 ) i = img5.length;
    i--;
    return setImg5();
}

function next5(){
    if (i >= img5.length -1) i = -1;
    i++;
    return setImg5();
}

function setImg5(){
    return slider_img5.setAttribute('src', 'img/' + img5[i]);
}
//7
function prev6(){
    if(i <= 0 ) i = img6.length;
    i--;
    return setImg6();
}

function next6(){
    if (i >= img6.length -1) i = -1;
    i++;
    return setImg6();
}

function setImg6(){
    return slider_img6.setAttribute('src', 'img/' + img6[i]);
}
//kosár
var NikeAirForce1 = 47421
var AirJordan1Mid = 51459
var YeezySlideOnyx = 49500
var YeezySlideGlowGreen = 65000
var YeezyFoamRNNRSand = 93000
var YeezyFoamRNNRRed = 142000
var YeezyBoost350V2BlackRed = 158000
var YeezyBoost350V2DazzlingBlue = 120000
var YeezyBoost350V2Oreo = 165000

function hozzáad(cucc) {
    
    db = Number(prompt('Írjon be egy összeget'));
    localStorage.setItem(cucc, db);
    

    location.reload();
}

function torles() {
    localStorage.clear()
    location.reload();
}

function kos() {
    var list = "<tr><th class=\"table-header\">Termék </th><th class=\"table-header\">Mennyiség </th><th class=\"table-header\">Ár </th></tr>\n"

    var ossz = 0;
    var menny = 0;
    var key = "";

    
    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        menny = Number(localStorage.getItem(key));
        list += "<tr class=\"table-var\"><td class=\"table-var\">" + key + "</td><td class=\"table-var\">" + "<button class=\"remove-button\" id=\"gombb\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Írjon be egy összeget\")" + ")'>" + menny + "</button>" + "</td>" + "</td><td class=\"table-var\">" + (window[key] * menny) + " Ft" + "</td><td>" + "<button class=\"table-button\" onclick='töröl(\"" + key + "\")'>X</button>" + "</td></tr>";
        ossz += window[key] * menny;
    }

    list += "<tr> <th>Fizetendő </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"

    document.getElementById('tabla').innerHTML = list
}

function termekek() {
    var dbszam = 0;

    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        console.log(key)
        dbszam += Number(localStorage.getItem(key))
    }

    document.getElementById("darabszam").innerHTML = dbszam

}

function ModifyItem(key, darab) {
    localStorage.setItem(key, Number(darab));
    location.reload();
}

function töröl(key) {
    localStorage.removeItem(key);
    location.reload();
}


function noi() {
    var x = document.getElementById("noi");
    if (x.style.display === "none") {
    x.style.display = "inline-block";
    } else {
        x.style.display = "none";
}
}
function ferfi() {
    var x = document.getElementById("ferfi");
    if (x.style.display === "none") {
    x.style.display = "inline-block";
    } else {
        x.style.display = "none";
}
}

function ferfi() {
    var x = document.getElementById("ferfi");
    if (x.style.display === "none") {
    x.style.display = "inline-block";
    } else {
        x.style.display = "none";
}
}
function filter() {
    var x = document.getElementById("box");
    if (x.style.display === "none") {
    x.style.display = "flex"; 
    } else {
        x.style.display = "none";
}
}
