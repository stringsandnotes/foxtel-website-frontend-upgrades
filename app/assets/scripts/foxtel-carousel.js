// --------------------------------------------------
// Foxtel Generic Carousel
// --------------------------------------------------

var genericCarousel = (function () {
    'use strict';

    var sIndex;
    var carouselMainBtns;
    var sIndexOld; 

    function changeGenericCarouselIcon(that, from, to) {
        var elemId = that;
        var toggleIcons = ".toggle-icon-arrows";
        $(toggleIcons).removeClass(to);
        $(toggleIcons).addClass(from);
        $(elemId + " " + toggleIcons).removeClass(from);
        $(elemId + " " + toggleIcons).addClass(to);
    }
   
    //Mobile Collapse
    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
      var $this   = $(this);
      if($('.desktop-generic-carousel').length){
        changeGenericCarouselIcon("#" + $this.context.id, 'icon-arrow-bottom', 'icon-close');
      }
      //remove and add bottom borders
      $('.panel-heading').addClass('bottom-border');
      $("#" + $this.context.id).parent().parent().removeClass('bottom-border');
    })


    //Desktop Carousel
    var genericCarouselHandler = function (e) {
      var $this   = $(this);

      sIndex = $this.attr('generic-carousel-slide');

      //Check if user using the arrow left/right nav or main top buttons
      if(sIndex){
        //arrows
        carouselMainBtns = $(".carousel-indicators li[generic-carousel-slide-to='" + sIndex + "']"); 
      }else{
        //top nav
        sIndex = $(".carousel-indicators").find("li.active").attr('generic-carousel-slide-to');
        //This will allow user to click the first item on first load.
        if(!sIndex) {
          sIndex = $(".carousel-indicators").find("li:first-child").attr('generic-carousel-slide-to');
        }
        carouselMainBtns = $(".carousel-indicators li[generic-carousel-slide-to='" + sIndex + "']");        
      }      

      if(sIndex != sIndexOld){
        sIndexOld = sIndex;
        $('.carousel-inner').slideDown();
        carouselMainBtns.addClass('active');
        if($('.desktop-generic-carousel').length){
          changeGenericCarouselIcon(carouselMainBtns.selector, 'icon-arrow-bottom', 'icon-close');
        }

      }else{
        $('.carousel-inner').slideUp();
        carouselMainBtns.removeClass('active');
        $('.toggle-icon-arrows').removeClass('icon-close');
        $('.toggle-icon-arrows').addClass('icon-arrow-bottom');
        sIndexOld = "";
      }
    e.preventDefault();
    }

    $(document)
      .on('click.bs.generic-carousel.data-api', '[generic-carousel-slide]', genericCarouselHandler)
      .on('click.bs.generic-carousel.data-api', '[generic-carousel-slide-to]', genericCarouselHandler)
})();


// --------------------------------------------------
// Custom Carousel
// --------------------------------------------------

var customCarousel = (function () {
  'use strict';

  var targetImg;
  var targetImgActive;
  var slideIndexOld;

  function changeBBDetailsCarouselIcon(that, from, to) {
      var elemId = that;
      var toggleIcons = ".carousel-main-icon-arrows";
      $(toggleIcons).removeClass(to);
      $(toggleIcons).addClass(from);
      $(elemId + " " + toggleIcons).removeClass(from);
      $(elemId + " " + toggleIcons).addClass(to);
  }

  var BBDetailsCarouselHandler = function (e) {
     if($('.custom-carousel').length){
       var $this   = $(this);
       var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
       var slideIndex = $this.attr('data-slide-to')
       var broadbandMainBtns = $(".carousel-indicators li[data-slide-to='" + slideIndex + "']");
       
        if(slideIndex != slideIndexOld){
          //Change Carousel Images when clicked
          if(slideIndexOld != ''){
            $(".carousel-indicators li[data-slide-to='" + slideIndexOld + "'] .carousel-main-nav-desktop img").attr('src', targetImg);
          }
          targetImg = $(".carousel-indicators li[data-slide-to='" + slideIndex + "'] .carousel-main-nav-desktop img").attr('src');
          targetImgActive = targetImg.replace('.png','-active.png');
          $(".carousel-indicators li[data-slide-to='" + slideIndex + "'] .carousel-main-nav-desktop img").attr('src', targetImgActive);

          slideIndexOld = slideIndex;
          $('.carousel-inner').slideDown();

          broadbandMainBtns.addClass('active');

          //Change icons
          changeBBDetailsCarouselIcon(broadbandMainBtns.selector, 'icon-arrow-bottom', 'icon-close');
        }else{
          $('.carousel-inner').slideUp();
          broadbandMainBtns.removeClass('active');
          
          //Change Carousel Images when clicked
           $(".carousel-indicators li[data-slide-to='" + slideIndexOld + "'] .carousel-main-nav-desktop img").attr('src', targetImg);

          //Change icons
          $('.carousel-main-icon-arrows').removeClass('icon-close');
          $('.carousel-main-icon-arrows').addClass('icon-arrow-bottom');
          slideIndexOld = "";
        }
      }
    e.preventDefault();
  }

   $(document)
   .on('click.bs.carousel.data-api', '[data-slide]', BBDetailsCarouselHandler)
   .on('click.bs.carousel.data-api', '[data-slide-to]', BBDetailsCarouselHandler)


    // --------------------------------------------------
    // Package collapsing content 
    // --------------------------------------------------
    function getTargetFromTrigger($trigger) {
      var href
      var target = $trigger.attr('data-target')
        || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

      return $(target)
    }

    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
      var $this   = $(this) 
      var $target = getTargetFromTrigger($this);            
      var selectorName = JSON.stringify($target.selector);

      if(selectorName.length > 3){
        selectorName = selectorName.replace('#', '');
        selectorName = selectorName.replace(/\"/g, '');
          selectorName = selectorName.replace("#", "").toLowerCase();
          $("." + selectorName).slideToggle();
      }
    })

})();

$(document).ready(function(){

    // --------------------------------------------------
    // Generic Carousel onLoad scripts
    // --------------------------------------------------

    //Function to toggle arrow button
    function getCarouselBtns() {
        var contentVal = $('.carousel-inner-content');
        var title;
        var content;
        var linkID;
        var j;
        titleVal = $('#desktop-generic-carousel .content');
        
        for(var i = 0; i < titleVal.length; i++ ) {
          title = $(titleVal[ i ]).html();
          content = $(contentVal[ i ]).html();

          j = i + 1;
          linkID = '<div class="panel panel-default"> <div class="panel-heading bottom-border" role="tab" id="heading'+j+'"> <h4 class="panel-title"> <a id="collapseBtn'+j+'" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+j+'" aria-expanded="false" aria-controls="collapse'+j+'" class="btn_link"> <span class="content">'+title+'</span> <span class="icon-arrow-bottom icon--orange toggle-icon-arrows"></span> </a> </h4> </div><div class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+j+'" id="collapse'+j+'"> <div class="panel-body">'+content+'</div></div></div>';

          $('.mobile-collapsable-content').append(linkID);
        }  
    }
    function changeGenericCarouselNavHeight(){
        //Make top button height the same
        var carouselBtnHeight = $('.desktop-generic-carousel .carousel-indicators').height();
        $('.desktop-generic-carousel .carousel-indicators li').css('height', carouselBtnHeight);      
    }
    //This function changes the icon when Carousel Left and Right arrow is used.
    function changeGenericCarouselIconArrow(){
      var genericSlideIndex = $(".carousel-indicators").find("li.active").attr('generic-carousel-slide-to');
      
      var activeElement = ".carousel-indicators li[generic-carousel-slide-to="+ genericSlideIndex +"] .toggle-icon-arrows"
      element =$(".carousel-indicators li[generic-carousel-slide-to="+ genericSlideIndex +"]");      
      $('.toggle-icon-arrows').removeClass('icon-close');
      $('.toggle-icon-arrows').addClass('icon-arrow-bottom');
      $(activeElement).removeClass('icon-arrow-bottom');
      $(activeElement).addClass('icon-close')
    }

    if($('.desktop-generic-carousel').length){
      var generateBtns = getCarouselBtns();
      var changeHeight = changeGenericCarouselNavHeight();
      
      $('.carousel-control').click(function(){
        setTimeout(changeGenericCarouselIconArrow, 100);
      });
    }

    $( window ).resize(function() {
      if($('.desktop-generic-carousel').length){
        changeGenericCarouselNavHeight();
      }
    });

    // --------------------------------------------------
    // Custom Carousel onLoad scripts
    // --------------------------------------------------

    //This function duplicates the desktop tab and content to collapse for mobile view
    /* Get JSP to generate this
    function getTabLinks(elem, content) {
      for ( var i = 0; i < elem.length; i++ ) {
        var elemVal = $(elem[ i ]).html(); 
        var j = i + 1;
        var content = $('#bb-package-content-desktop #pack-tab' + j).html();     
        var linkID = '<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading'+j+'"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#pack-collapse'+j+'" aria-expanded="false" aria-controls="collapse'+j+'">';
        var collapsableContainer = '<div id="pack-collapse'+j+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+j+'">'+content+'</div>';
        $('#bb-package-nav-mobile').append(linkID + elemVal + '</a></div><div class="panel-body">' + collapsableContainer + '</div></div>');
      }
    }
    if($('#bb-package-nav-desktop').length) {
      var tabLinks = getTabLinks($('#bb-package-nav-desktop li a'), $('#bb-package-content-desktop'));
    } 
    */
    // --------------------------------------------------
    // Radio buttons - change containing div colour 
    // --------------------------------------------------

    if($('.plan-compare').length){
        $(".detail.plan-1 input").click(function(){
            if($(this).is(":checked")){
                $(".detail.plan-1").addClass("active");
                $(".detail.plan-2").removeClass("active");
            }
        });
        $(".detail.plan-2 input").click(function(){
            if($(this).is(":checked")){
                $(".detail.plan-2").addClass("active");
                $(".detail.plan-1").removeClass("active");
            }
        });
    }
})
