 $(document).ready(function($) {

 	$('.fadeOnIconRow').each(function(i){
    		setTimeout(function(){
    			$('.fadeOnIconRow').eq(i).addClass('is-showingIconRow');
    		}, 100 * (i+2));
        	console.log("document ready");
    	});
 	

 });   


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

    if(wScroll > $('#aboutMe').offset().top-($(window).height()/ 1.2)) {
    
    	var opacity = (wScroll - $('.fadeOn').offset().top+ 400 ) / (wScroll/6)
    	$('.fadeOn').addClass('is-showing');
    	console.log("class added");;
    }

    if(wScroll > $('#Projects').offset().top-($(window).height()/ 1.2)) {
    	
    	$('.fadeOnProject').each(function(i){
    		setTimeout(function(){
    			$('.fadeOnProject').eq(i).addClass('is-showingProject');
    		}, 300 * (i+2));
    	})
    	/*var opacity = (wScroll - $('.fadeOnProject').offset().top+ 400 ) / (wScroll/6)
    	$('.fadeOnProject').addClass('is-showingProject');
    	console.log("class added Project");*/
    	console.log("project added");
    }

        if(wScroll > $('#aboutMe').offset().top-($(window).height()/ 1.2)) {
    
    	var opacity = (wScroll - $('.fadeOn').offset().top+ 400 ) / (wScroll/6)
    	$('.fadeOn').addClass('is-showing');
    	console.log("class added");;
    }

});



