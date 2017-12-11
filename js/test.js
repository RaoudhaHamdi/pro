$(document).ready(function (){
     /* $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Back to Top</div>');*/
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    
   
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
   

//show demo wrapper when click on the fa-fw

$('.sett').click(function () {
                $("#demo-wrapper").toggle("slide");
});



/*
$('head').append('<link id="colorme" rel="stylesheet" href="#" type="text/css" />');

    
$('#demo-wrapper ul li').on('click', function()
        {
             var path = $(this).attr('path');
             $('#colorme').attr('href', path);
        }
              
             )
                           
 */                          
 


/*
var colorLi=$("#demo-wrapper ul li");
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#9bc12d").end()
    .eq(2).css("backgroundColor","##FF69B4").end()
    .eq(3).css("backgroundColor","##02f9fb");

colorLi.click(function()
{
    
    console.log($(this).attr("data-path"))
    
  $("link=[href*='theme']").attr("href",$(this).attr("data-path"));
  
    
}
); 

*/




$(".color1" ).click(function(){
   
		$("#demo-wrapper ul li" ).attr("href", "css/Default-theme.css");
		return false;
	});


	$(".color2" ).click(function(){
		$("#demo-wrapper ul li" ).attr("href", "css/gree-theme.css ");
		return false;
        
	});

	$(".color3" ).click(function(){
		$("#demo-wrapper" ).attr("href", "css/pink-theme.css" );
		return false;
	});

	$(".color4" ).click(function(){
		$("#demo-wrapper" ).attr("href", "css/blue-theme.css" );
		return false;
	});

    
    
    
    
    
    
    /*
     // Navigation scrolls
    
    $('.nav navbar-nav navbar-right li a').click(function(e){
        
        var headerHeight= $('header').outerHeight();
        var windowWidth  = $(window).width();
        console.log(headerHeight);
        console.log(windowWidth);
        
        
        
        if ( windowWidth > 992 ) {
			// Animate the body to the div ID
			$('html, body').animate({
				scrollTop: $( $(this).attr('href')).offset().top - headerHeight
			}, 1000);
		} else {
			$('html, body').animate({
				scrollTop: $( $(this).attr('href')).offset().top
			}, 1000);
            console.log('hello');
		}
        
        e.preventDefault();
        });
    
    //End Navigation Scrolls */
    
   
  $(document).on('click', '.nav navbar-nav navbar-right li a', function(event) {
       var headerHeight= $('header').outerHeight();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top -headerHeight )
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });  
    
    
    

});





