var slider_img = document.querySelector('.slider-img');
var slider_img1 = document.querySelector('.slider-img1');
var slider_img2 = document.querySelector('.slider-img2');
var slider_img3 = document.querySelector('.slider-img3');
var images = ['1.png', '2.png', '3.png', '4.png'];
var img = ['jordan1.png', 'jordan1-2.png', 'jordan1-3.png', 'jordan1-4.png']
var images2 = ['KUKI.png', 'KUKI oldalrol.png' , 'KUKI felülröl.png' ,'KUKI hátulrol.png' ]
var images3 = ['Főkép.png', 'Kép1.png', 'Kép2.png', 'Képhátul.png']
var i = 0;


function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){
    if (i >= images.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'img/' + images[i]);
}


function prev2(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg2();
}

function next2(){
    if (i >= images.length -1) i = -1;
    i++;
    return setImg2();
}

function setImg2(){
    return slider_img2.setAttribute('src', 'img/' + images2[i]);
}


function prev3(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg3();
}

function next3(){
    if (i >= images.length -1) i = -1;
    i++;
    return setImg3();
}

function setImg3(){
    return slider_img3.setAttribute('src', 'img/' + images3[i]);
}

function setImg1(){
    return slider_img1.setAttribute('src', 'img/' + img[i]);
}

function prev1(){
    if(i <= 0 ) i = img.length;
    i--;
    return setImg1();
}

function next1(){
    if (i >= img.length -1) i = -1;
    i++;
    return setImg1();
}

//kosár
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
