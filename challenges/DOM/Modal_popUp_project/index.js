'use strict';

const showModal = document.getElementsByClassName("show-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


for(let i = 0;i<showModal.length;i++){
    showModal[i].addEventListener('click',  function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

const close = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);


