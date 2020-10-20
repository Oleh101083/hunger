function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();


/*GUMBURGER-MENU */
const menuIcon = document.querySelector
(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const bodyLock = document.querySelector("body");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});
menuIcon.addEventListener("click", () => {
    navList.classList.toggle("change");
});
menuIcon.addEventListener("click", () => {
    bodyLock.classList.toggle("lock");
});

/*------spoiler--------*/
function Spoiler() {
	let ele = document.getElementById("contentSpoiler");
	let text = document.getElementById("linkSpoiler");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "Подробнее";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Скрыть";
	}
}
/*-----spoiler2-------*/
let user_icon = document.querySelector('.user-header_spoiler');
user_icon.addEventListener("click", function (e){
    let user_menu = document.querySelector('.user-header_spoiler-menu');
    user_menu.classList.toggle('_active');
});
// let user_menu = document.querySelector('.user-header_spoiler-menu');
// user_icon.addEventListener("click", function (e) {
//     user_menu.classList.toggle('_active');
// });

// document.documentElement.addEventListener("click", function (e) {
//     if (!e.target.closest('.user-header')){
//         user_menu.classList.remove('_active');
//     }
// });
/*-----spoiler3-------*/
function openbox(box){
    display = document.getElementById('box').style.display;
    if(display == "none") {
        document.getElementById('box').style.display = "block";
    }else{
        document.getElementById('box').style.display = "none";
    }
}
/*-----spoiler3-------*/

/*-----slider-------*/
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      slidesWrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;


const activeSlide = n => {
for(slide of slides){
    slide.classList.remove('active');
}
slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
    }

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    }
const nextSlide  = () => {
 if(index ==slides.length - 1){
     index = 0;
     prepareCurrentSlide(index);
 } else {
     index++;
     prepareCurrentSlide(index);
 }
}
const prevSlide  = () => {
    if(index == 0){
       index = slides.length - 1;
       prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
   }

dots.forEach((item,indexDot)=>{
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})   

const interval = setInterval(nextSlide, 2500);
function startSlid(){
   return interval;
}
function stopSlid(){
    clearInterval(interval);
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// clearInterval(interval)





/*-----slider end-------*/
