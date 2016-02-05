$(window).load(function() {
    $(".gallery").show();
});

$(".clickcultural").click(function(){
    $(".gallery, .barinfo").hide();
    $(".win").load ("Projects.html .loadpage", function() {
    $('.loadpage').append('<link rel="stylesheet" href="css/thumbnail-gallery.css" type="text/css" />');
    $.getScript("js/App.js");
    $('.residential, .admin, .resorts, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.cultural').fadeTo(1000, 1);});
});

$(".clickresidential").click(function(){
    $(".gallery, .barinfo").hide();
    $(".win").load ("Projects.html .loadpage", function() {
    $('.loadpage').append('<link rel="stylesheet" href="css/thumbnail-gallery.css" type="text/css" />');
    $.getScript("js/App.js");
    $('.cultural, .admin, .resorts, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.residential').fadeTo(1000, 1);});
});

$(".clickadmin").click(function(){
    $(".gallery, .barinfo").hide();
    $(".win").load ("Projects.html .loadpage", function() {
    $('.loadpage').append('<link rel="stylesheet" href="css/thumbnail-gallery.css" type="text/css" />');
    $.getScript("js/App.js");
    $('.cultural, .residential, .resorts, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.admin').fadeTo(1000, 1);});
});

$(".clickresorts").click(function(){
    $(".gallery, .barinfo").hide();
    $(".win").load ("Projects.html .loadpage", function() {
    $('.loadpage').append('<link rel="stylesheet" href="css/thumbnail-gallery.css" type="text/css" />');
    $.getScript("js/App.js");
    $('.cultural, .residential, .admin, .public, .retail, .renovation').fadeTo(1000, 0.2);
    $('.resorts').fadeTo(1000, 1);});
});

$(".clickpublic").click(function(){
    $(".gallery, .barinfo").hide();
    $(".win").load ("Projects.html .loadpage", function() {
    $('.loadpage').append('<link rel="stylesheet" href="css/thumbnail-gallery.css" type="text/css" />');
    $.getScript("js/App.js");
    $('.cultural, .residential, .admin, .resorts, .retail, .renovation').fadeTo(1000, 0.2);
    $('.public').fadeTo(1000, 1);});
});

$(".clickretail").click(function(){
    $(".gallery, .barinfo").hide();
    $(".win").load ("Projects.html .loadpage", function() {
    $('.loadpage').append('<link rel="stylesheet" href="css/thumbnail-gallery.css" type="text/css" />');
    $.getScript("js/App.js");
    $('.cultural, .residential, .admin, .resorts, .public, .renovation').fadeTo(1000, 0.2);
    $('.retail').fadeTo(1000, 1);});
});

$(".clickrenovation").click(function(){
    $(".gallery, .barinfo").hide();
    $(".win").load ("Projects.html .loadpage", function() {
    $('.loadpage').append('<link rel="stylesheet" href="css/thumbnail-gallery.css" type="text/css" />');
    $.getScript("js/App.js");
    $('.cultural, .residential, .admin, .resorts, .public, .retail').fadeTo(1000, 0.2);
    $('.renovation').fadeTo(1000, 1);});
});