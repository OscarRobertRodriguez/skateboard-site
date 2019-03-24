"use strict";

let slideIndex = 0;

let carouselBtns = document.querySelectorAll('.carousel__btn');



 carouselBtns.forEach(btn =>
    btn.addEventListener('click' , changeImg)
 );






function changeImg(e) {
	let btn = e.currentTarget;
	let imgs = document.querySelectorAll('.carousel__img');
	let articles = document.querySelectorAll('.carousel__info');
 console.log(articles);
	if(slideIndex === 0 ) {
		btn.dataset.name === 'prev' ? slideIndex = 2 : slideIndex = 1;
	}
	else if(slideIndex === 2) {
		btn.dataset.name === 'prev' ? slideIndex = 1 : slideIndex = 0;
	}
	else if(slideIndex === 1) {
		btn.dataset.name === 'prev' ? slideIndex = 0 : slideIndex = 2;
	}

	imgs.forEach(item => {
		item.classList.add('img__hidden');
	});

	articles.forEach(item => {
		item.style.zIndex = '1';
	});

	imgs[slideIndex].classList.remove('img__hidden');
  articles[slideIndex].style.zIndex = '10';
}


