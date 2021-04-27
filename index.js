const carouselSlide= document.querySelector(".image-slider");
const carosuelImage=document.querySelectorAll(".image-slider img");
const prev= document.querySelector("#prev");
const next= document.querySelector('#next');

let counter=1;
console.log(counter)
const size= carosuelImage[0].clientWidth;
carouselSlide.style.transform= 'translateX('+(-size*counter)+'px)';

next.addEventListener('click',()=>{
    if(counter>=carosuelImage.length-1) return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform= 'translateX('+(-size*counter)+'px)';
    
})

prev.addEventListener('click',()=>{
    if(counter<=0) return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform= 'translateX('+(-size*counter)+'px)';
    
})
carouselSlide.addEventListener('transitionend',()=>{
   
    if(carosuelImage[counter].id==='last'){
        carouselSlide.style.transition='none';
        counter=carosuelImage.length-2;
        carouselSlide.style.transform= 'translateX('+(-size*counter)+'px)';
    }
    if(carosuelImage[counter].id==='first'){
        carouselSlide.style.transition='none';
        counter=carosuelImage.length-counter;
        carouselSlide.style.transform= 'translateX('+(-size*counter)+'px)';
    }
        
    })


