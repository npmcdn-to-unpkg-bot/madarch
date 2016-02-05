


$('.container').hover(function(){
$('.cb-slideshow').fadeTo(1000, 0.1) },
    
    function(){
$('.cb-slideshow').fadeTo(1000, 1)});




$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(2500)
    .end()
    .appendTo('#slideshow');
},  8000);