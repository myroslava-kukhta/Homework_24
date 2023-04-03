'use strict';

let imagesPhoto = [];

imagesPhoto.push('./img/01.jpg');
imagesPhoto.push('./img/02.jpg');
imagesPhoto.push('./img/03.jpg');
imagesPhoto.push('./img/04.jpg');
imagesPhoto.push('./img/05.jpg');
imagesPhoto.push('./img/06.jpg');
imagesPhoto.push('./img/07.jpg');
imagesPhoto.push('./img/08.jpg');
imagesPhoto.push('./img/09.jpg');

let randomNum = Math. floor(Math. random() * imagesPhoto. length); 
document. getElementById("img"). src = imagesPhoto[randomNum];
