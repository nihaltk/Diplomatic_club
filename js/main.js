(function($){
	$(window).on("load",function(){
		$(".content").mCustomScrollbar({
			theme:"minimal"
		});
		$(".content").mCustomScrollbar({ autoDraggerLength: "500px" });
	});
	})(jQuery);



$(document).ready(function() {
 $("#owl-demo").owlCarousel({
	margin: 10,
	nav: false,
	loop: false,
	autoplay:false,
	dots:true,
	rewind:false,
    autoplayTimeout:4000,
	autoplayHoverPause:false,
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
	navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
})

$(document).ready(function() {
 $("#owl-demo1").owlCarousel({
	margin: 10,
	nav: false,
	loop: false,
	autoplay:true,
	dots:true,
	rewind:false,
    autoplayTimeout:3000,
	autoplayHoverPause:false,
	navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
})

$(document).ready(function() {
 $("#owl-demo2").owlCarousel({
	margin: 10,
	nav: true,
	loop: false,
	autoplay:false,
	dots:false,
	rewind:false,
    autoplayTimeout:4000,
	autoplayHoverPause:false,
	navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsive: {
	  0: {
		items: 2,
		nav: false,
		dots:true
	  },
	  600: {
		items: 3,
		nav: false,
		dots:true
	  },
	  1000: {
		items: 5,
		nav: false,
		dots:true
	  },
	  1100: {
		items: 5,
	  }
	}
  })
})

$(document).ready(function() {
 $("#owl-demo3").owlCarousel({
	margin: 10,
	nav: true,
	loop: false,
	autoplay:false,
	dots:false,
	rewind:false,
    autoplayTimeout:4000,
	autoplayHoverPause:false,
	navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsive: {
	  0: {
		items: 2
	  },
	  600: {
		items: 3
	  },
	  1000: {
		items: 4
	  }
	}
  })
})
$(document).ready(function() {
 $("#owl-demo10").owlCarousel({
	margin: 10,
	nav: false,
	loop: false,
	autoplay:false,
	dots:false,
	rewind:false,
    autoplayTimeout:4000,
	autoplayHoverPause:false,
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
	navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
})
$(document).ready(function() {
 $("#owl-demo11").owlCarousel({
	margin: 10,
	nav: false,
	loop: false,
	autoplay:false,
	dots:false,
	rewind:false,
    autoplayTimeout:4000,
	autoplayHoverPause:false,
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
	navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
})

$(function openMenu() {
  $('html').on('click', '.navigation__open', function (event) {
    event.preventDefault();
    $(this).find('.navigation__icon').toggleClass('active');
    $('.nav-tggle').toggleClass('menu-active');
  });
});



// FORMS
$(".form-toggle select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
  }).change();




  // 
  // 

	
$(document).mousemove(function(event){
	$(".dark-menu-div").mouseover(function(){
		console.log('mouseover');
		$(".navigation__open").addClass('navigation_dark');
	});
	$(".dark-menu-div").mouseout(function(){
		console.log('mouseout');
		$(".navigation__open").removeClass('navigation_dark');
	});
});

