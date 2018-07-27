// JavaScript Document
$( document ).ready(function() {
     $('ul').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $(''+$href).offset();
    window.scrollTo($anchor.left,$anchor.top);
    return false;   
    });
	  });