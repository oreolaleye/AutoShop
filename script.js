


$( document ).ready(function() { 
		$(window).scroll(function() { 
		    var Scroll = $(window).scrollTop() + 1, 
						SectionOneOffset = $('#home').offset().top,
						SectionTwoOffset = $('#why-us').offset().top; 
						SectionThreeOffset = $('#services').offset().top;
						SectionFourOffset = $('#mechanics').offset().top;
						SectionFiveOffset = $('#visit').offset().top;
		    if (Scroll >= SectionOneOffset) { 
		        $(".menu-item-1").addClass("actively")
		        $(".menu-item-1").addClass("active"); 
		    } else { 
		    	$(".menu-item-1").removeClass("actively")
		    	$(".menu-item-1").removeClass("active"); 
		    }
		    	// about
				if (Scroll >= SectionTwoOffset) { 
		        $(".menu-item-2").addClass("actively")
		        $(".menu-item-2").addClass("active"); 
						$(".menu-item-1").removeClass("actively")
						$(".menu-item-1").removeClass("active"); 
		    } else { 
		        $(".menu-item-2").removeClass("actively")
		        $(".menu-item-2").removeClass("active"); 
		    }
		    	// services
		    	if (Scroll >= SectionThreeOffset) { 
		        $(".menu-item-3").addClass("actively")
		        $(".menu-item-3").addClass("active"); 
						$(".menu-item-2").removeClass("actively")
						$(".menu-item-2").removeClass("active"); 
		    } else { 
		        $(".menu-item-3").removeClass("actively")
		        $(".menu-item-3").removeClass("active"); 
		    }
		    	// clients
		    	if (Scroll >= SectionFourOffset) { 
		        $(".menu-item-4").addClass("actively")
		        $(".menu-item-4").addClass("active"); 
						$(".menu-item-3").removeClass("actively")
						$(".menu-item-3").removeClass("active"); 
		    } else { 
		        $(".menu-item-4").removeClass("actively")
		        $(".menu-item-4").removeClass("active"); 
		    }

		    	// contact
		    	if (Scroll >= SectionFiveOffset) {
		        $(".menu-item-5").addClass("actively")
		        $(".menu-item-5").addClass("active"); 
						$(".menu-item-4").removeClass("actively")
						$(".menu-item-4").removeClass("active"); 
		    } else { 
		        $(".menu-item-5").removeClass("actively")
		        $(".menu-item-5").removeClass("active"); 
		    }
		});
});

if ($(window).width() < 800) {
    $("#navi").removeClass("fixed-top");
} else {
    $("#navi").addClass("fixed-top");
}

if ($(window).width() < 800) {
    $("#social").removeClass("ra");
} else {
    $("#social").addClass("ra");
}


AOS.init();