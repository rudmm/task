$('.videoh').addClass('translate');
let positionTopVideoh= $('.backvideo').offset().top;
let positionBottomVideoh = positionTopVideoh + $('.backvideo').innerHeight(); 
console.log($('.part1').innerHeight());

$(window).scroll(function() {
   let scroll = $(window).scrollTop();
   //console.log(scroll);
  if (scroll >= 1) {
       $('.menu').addClass('fixed');

   } else {
       $('.menu').removeClass('fixed');
   }
   if(scroll>=positionTopVideoh && scroll<=positionBottomVideoh){
    $('.videoh').addClass('translate');
  }else{
    $('.videoh').removeClass('translate');
  }
});

/*


let img2 = document.querySelector('.part2 .img2').getBoundingClientRect();
console.log(img2.top, img2.bottom, img2.left, img2.right);
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll>=1000 && scroll<=2238){
    $('.quote').addClass('translate');
  }else{
    $('.quote').removeClass('translate');
  }
});
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll>=2441 &&scroll<=3741){
    $(' .quote2').addClass('translate');
  }else{
    $('.quote2').removeClass('translate');
  }
});

$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll>=2850){
    $('.part5 .tomatop').addClass('translate');
  }else{
     $('.part5 .tomatop').removeClass('translate');
  }
});*/

//footercontact begin
let footerp = document.querySelectorAll("footer .footercontent .p");
let width = 0;
footerp.forEach(function(e){
  width+=e.clientWidth;
});
let footercontact = document.querySelector('footer .footercontact');
footercontact.style.maxWidth = width+'px';
//footercontact end
