$(window).scroll(function() {
   let scroll = $(window).scrollTop();


   if (scroll >= 1) {
       $('.menu').addClass('fixed');
   } else {
       $('.menu').removeClass('fixed');
   }
});
$('.videoh').addClass('translate');
let video1 = document.querySelector('.video1').getBoundingClientRect();
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll>=511){
    $('.videoh').removeClass('translate');
    
  }else{
    $('.videoh').addClass('translate');
  }
});

let img2 = document.querySelector('.part2 .img2').getBoundingClientRect();
console.log(img2.top, img2.bottom, img2.left, img2.right);
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll>=1089 && scroll<=1756){
    $('.quote').addClass('translate');
  }else{
    $('.quote').removeClass('translate');
  }
});
$('.quote').addClass('translate');