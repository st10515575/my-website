// proposal.js/specials.js

var slider_img= document.querySelector(`.slider-img`);
var images = [`specials.png`, `specials 2.png`, `specials 3.png`, `specials 4.png`, `specials 5.jpg`, `specials 6.jpg`];
var i = 0; // Current Image Index

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if( i >= images.length-1 ) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute(`src`, `images/` + images[i]);
}