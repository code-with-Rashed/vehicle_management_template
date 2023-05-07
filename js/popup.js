'use strict';

const popup = document.querySelector('.popup');
const confirm_btn = document.querySelector('.confirm_btn');

function popup_open(){
    popup.style.display = 'block';
}
function popup_close(){
    popup.style.display = 'none';
}
function confirm_delete(){
    popup_open();
}