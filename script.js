var slider_img = document.querySelector('.slider-img');
var slider_img1 = document.querySelector('.slider-img1');
var images = ['1.png', '2.png', '3.png', '4.png'];
var img = ['jordan1.png', 'jordan1-2.png', 'jordan1-3.png', 'jordan1-4.png']
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
var NikeAirForce1 = 47421
var AirJordan1Mid = 51459

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

