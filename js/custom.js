$(window).load(function(){
	//var scrollDoc = $(window).scrollTop();
	var windowHeight = $(window).height();
    //if (scrollDoc >= windowHeight) {
//        $("header").addClass("navClass");
//    }
//	
//	if (scrollDoc < windowHeight) {
//        $("header").removeClass("navClass");
//    }
	
	var classArray = ['.blue', '.banner-image', '#header'];
	
	$.each(classArray, function(index, value){
			$(value).css('height', windowHeight);
	});
	
	$('#home .main').css('top', windowHeight);
	 
	
});

//flexslider

$(window).load(function() {
  $('.slider').flexslider({
    animation: "slide",
	direction: "vertical",
	controlNav: false,
	directionNav: false,
	slideshowSpeed: 3500,
  });
});

//NAvigation on Scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	var windowHeigt = $(window).height()-80;
    if (scroll >= windowHeigt) {
        $("header#nav").addClass("navClass");
    }
	
	if (scroll < windowHeigt) {
        $("header").removeClass("navClass");
    }
});

