'use strict';

const showModal = document.getElementsByClassName("show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


for(let i = 0;i<showModal.length;i++){
    showModal[i].addEventListener('click',  function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})


