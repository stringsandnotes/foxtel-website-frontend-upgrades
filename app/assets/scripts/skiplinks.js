$(document).ready(function(){
  var skipLinks = (function () {
      'use strict';    
        if($(document).contents().find('h1:nth-child(2)').length){
            $(document).contents().find('h1:nth-child(2)').attr("id", "content-header"); 
        }else if($(document).contents().find('h2').length){
          $(document).contents().find('h2').first().attr("id", "content-header");

        }else if($(document).contents().find('h3').length){
          $(document).contents().find('h3').first().attr("id", "content-header");

        }else if($(document).contents().find('p').length){
          $(document).contents().find('p').first().attr("id", "content-header");
        }    
  })();

  $('.top-search-tablet-div').click(function(e){
      e.preventDefault();
      $(this).hide();
      if($('.top-search').width() < 50){     
        $('.top-search').animate({width: '120%'});
      }
  })

})


