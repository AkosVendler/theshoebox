var slider_img = document.querySelector('.slider-img');
var slider_img1 = document.querySelector('.slider-img1');
var slider_img2 = document.querySelector('.slider-img2');
var slider_img3 = document.querySelector('.slider-img3');
var slider_img4 = document.querySelector('.slider-img4');
var slider_img5 = document.querySelector('.slider-img5');
var slider_img6 = document.querySelector('.slider-img6');
var img = ['low0.png','low1.png', 'low2.png','low3.png'];
var img1 = ['diamond1.png','diamond2.png', 'diamond3.png'];
var img2 = ['jordan.png','jordan2.png', 'jordan3.png', 'jordan4.png'];
var img3 = ['j1.png','j2.png', 'j3.png', 'j4.png'];
var img4 = ['se1.png','se2.png', 'se3.png', 'se4.png'];
var img5 = ['ac1.png','ac2.png', 'ac3.png', 'ac4.png'];
var img6 = ['zi1.png','zi2.png', 'zi3.png','zi4.png'];
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
//kos??r
var NikeAirForce1 = 47500
var AirJordan1Mid = 50000
var NikeAirMax270 = 58500
var NikeAirForceBlueGray =45500
var YeezySlideOnyx = 49500
var YeezySlideGlowGreen = 65000
var YeezyFoamRNNRSand = 93000
var YeezyFoamRNNRRed = 142000
var YeezyBoost350V2BlackRed = 158000
var YeezyBoost350V2DazzlingBlue = 120000
var YeezyBoost350V2Oreo = 165000
var AirJordan1Low = 49500
var AirJordan1MidDiamond = 120000
var AirJordan1Mid = 93000
var AirJordan11CMFTLow = 70000
var AirJordan1LowSE = 60000
var JordanAccess = 30000
var Zion2 = 65000

function hozz??ad(cucc) {
    
    db = Number(prompt('??rjon be egy ??sszeget'));
    localStorage.setItem(cucc, db);
    

    location.reload();
}

function torles() {
    localStorage.clear()
    location.reload();
}

function kos() {
    var list = "<tr><th class=\"table-header\">Term??k </th><th class=\"table-header\">Mennyis??g </th><th class=\"table-header\">??r </th></tr>\n"

    var ossz = 0;
    var menny = 0;
    var key = "";

    
    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        menny = Number(localStorage.getItem(key));
        list += "<tr class=\"table-var\"><td class=\"table-var\">" + key + "</td><td class=\"table-var\">" + "<button class=\"remove-button\" id=\"gombb\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"??rjon be egy ??sszeget\")" + ")'>" + menny + "</button>" + "</td>" + "</td><td class=\"table-var\">" + (window[key] * menny) + " Ft" + "</td><td>" + "<button class=\"table-button\" onclick='t??r??l(\"" + key + "\")'>X</button>" + "</td></tr>";
        ossz += window[key] * menny;
    }

    list += "<tr> <th>Fizetend?? </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"

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

function t??r??l(key) {
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