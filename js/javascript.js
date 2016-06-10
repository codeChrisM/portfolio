$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


    if(wScroll > $('.aboutMe').offset().top-($(window).height()/ 1.2)) {
      console.log("test");
    	
    	$('.aboutMe').addClass('is-showing');

    }
});