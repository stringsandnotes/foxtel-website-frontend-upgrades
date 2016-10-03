
// --------------------------------------------------
// Broadband Bundles Details Carousel
// --------------------------------------------------

+function ($) {
  'use strict';

	var targetImg
	var targetImgActive
	var slideIndexOld

	// LOAD EXTERNAL CONTENT 
	// =====================
	function LoadCarouselContent(target){
		//Load HTML content
		var selectorName = target;
		selectorName = 'carousel-tab' + selectorName + '.html';

		$.ajax({url: selectorName, success: function(result){
		    $('.carousel-content-'+target).html(result);
		}});    
	}

	var BBDetailsCarouselHandler = function (e) {
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    var slideIndex = $this.attr('data-slide-to')
	    var broadbandMainBtns = ".carousel-indicators li[data-slide-to='" + slideIndex + "']";

	    if (slideIndex) {
	      $('.carousel-inner').show();

	      //Load external content
	      LoadCarouselContent(slideIndex);

	      //Custom JS - Toggle image background and arrow
	      if(slideIndexOld != slideIndex){        
	        if(slideIndexOld != ''){
	          $(".carousel-indicators li[data-slide-to='" + slideIndexOld + "'] img").attr('src', targetImg);
	        }        
	        targetImg = $(broadbandMainBtns+ " img").attr('src');
	        targetImgActive = targetImg.replace('.png','-active.png')
	        $(broadbandMainBtns+ " img").attr('src', targetImgActive);  
	        $(".carousel-main-icon-arrows").removeClass('icon-close');
	        $(".carousel-main-icon-arrows").addClass('icon-arrow-bottom'); 

	        $(broadbandMainBtns+ " .carousel-main-icon-arrows").removeClass('icon-arrow-bottom');
	        $(broadbandMainBtns+ " .carousel-main-icon-arrows").addClass('icon-close'); 
	        $(broadbandMainBtns).addClass('active');

	        slideIndexOld = slideIndex;
	      }	      

	    }

	    e.preventDefault()
	  }

	$(document)
	.on('click.bs.carousel.data-api', '[data-slide]', BBDetailsCarouselHandler)
	.on('click.bs.carousel.data-api', '[data-slide-to]', BBDetailsCarouselHandler)

}(jQuery);


