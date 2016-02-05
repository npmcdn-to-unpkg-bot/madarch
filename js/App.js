  $(function() { 

    $("#main-content .row").niceScroll();
  }
);


$(".clickcultural").click(function(){
    $('.residential, .admin, .resorts, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.cultural').fadeTo(1000, 1);});

$(".clickresidential").click(function(){
    $('.cultural, .admin, .resorts, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.residential').fadeTo(1000, 1);});

$(".clickadmin").click(function(){
    $('.cultural, .residential, .resorts, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.admin').fadeTo(1000, 1);});

$(".clickresorts").click(function(){
    $('.cultural, .residential, .admin, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.resorts').fadeTo(1000, 1);});

$(".clickpublic").click(function(){
    $('.cultural, .residential, .admin, .resorts, .retail, .renovation').fadeTo(1000, 0.2);
    $('.public').fadeTo(1000, 1);});

$(".clickretail").click(function(){
    $('.cultural, .residential, .admin, .resorts, .public, .renovation').fadeTo(1000, 0.2);
    $('.retail').fadeTo(1000, 1);});

$(".clickrenovation").click(function(){
    $('.cultural, .residential, .admin, .resorts, .public, .retail').fadeTo(1000, 0.2);
    $('.renovation').fadeTo(1000, 1);});

$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(2500)
    .end()
    .appendTo('#slideshow');
},  8000);