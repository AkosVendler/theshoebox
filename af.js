var slider_img = document.querySelector('.slider-img');
var slider_img1 = document.querySelector('.slider-img1');
var slider_img2 = document.querySelector('.slider-img2');
var slider_img3 = document.querySelector('.slider-img3');
var slider_img4 = document.querySelector('.slider-img4');
var slider_img5 = document.querySelector('.slider-img5');
var slider_img6 = document.querySelector('.slider-img6');
var images = ['supreme1.png', 'supreme2.png', 'supreme3.png'];
var images1 = ['af1.png', 'af2.png', 'af3.png', 'af4.png'];
var images2 = ['af5.png', 'af6.png', 'af7.png', 'af8.png'];
var images3 = ['af9.png', 'af10.png', 'af11.png', 'af12.png'];
var images4 = ['force1.png', 'force2.png', 'force3.png', 'force4.png'];
var images5 = ['force5.png', 'force6.png', 'force7.png', 'force8.png'];
var images6 = ['air1.png', 'air2.png', 'air3.png', 'air4.png'];
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

function prev1(){
    if(i <= 0 ) i = images1.length;
    i--;
    return setImg1();
}

function next1(){
    if (i >= images1.length -1) i = -1;
    i++;
    return setImg1();
}

function setImg1(){
    return slider_img1.setAttribute('src', 'img/' + images1[i]);
}

function prev2(){
    if(i <= 0 ) i = images2.length;
    i--;
    return setImg2();
}

function next2(){
    if (i >= images2.length -1) i = -1;
    i++;
    return setImg2();
}

function setImg2(){
    return slider_img2.setAttribute('src', 'img/' + images2[i]);
}

function prev3(){
    if(i <= 0 ) i = images3.length;
    i--;
    return setImg3();
}

function next3(){
    if (i >= images3.length -1) i = -1;
    i++;
    return setImg3();
}

function setImg3(){
    return slider_img3.setAttribute('src', 'img/' + images3[i]);
}

function prev4(){
    if(i <= 0 ) i = images4.length;
    i--;
    return setImg4();
}

function next4(){
    if (i >= images4.length -1) i = -1;
    i++;
    return setImg4();
}

function setImg4(){
    return slider_img4.setAttribute('src', 'img/' + images4[i]);
}

function prev5(){
    if(i <= 0 ) i = images5.length;
    i--;
    return setImg5();
}

function next5(){
    if (i >= images5.length -1) i = -1;
    i++;
    return setImg5();
}

function setImg5(){
    return slider_img5.setAttribute('src', 'img/' + images5[i]);
}

function prev6(){
    if(i <= 0 ) i = images6.length;
    i--;
    return setImg6();
}

function next6(){
    if (i >= images6.length -1) i = -1;
    i++;
    return setImg6();
}

function setImg6(){
    return slider_img6.setAttribute('src', 'img/' + images6[i]);
}

//kosár
var NikeAirForce1Gray = 45500
var NikeAirForce1BlackandWhite = 50000
var NikeAirForce1DarkGray = 45500
var NikeAirForce1Special = 50000
var NikeAirForce1Custom = 50000
var NikeAirForce1Blue = 50000
var SupremeAirForce1 = 90000
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