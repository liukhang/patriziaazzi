jQuery(document).ready(function($){
	jQuery('#backtotop').hide();
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 250) {
			jQuery('#backtotop').show();
		}
		else{
			jQuery('#backtotop').hide();
		}
		return false;
	});
	jQuery('a[href^="#top"]').click(function(e) {
		jQuery('html,body').animate({scrollTop:0}, 500);
		return false;
		e.preventDefault();
	});
	
	// if(jQuery('.header-sticker').hasClass('sticker')){
 //        jQuery(window).scroll(function () {
 //            if (jQuery(this).scrollTop() > 100) {
 //                jQuery('.header-sticker').addClass('header-container-fixed');
 //            }
 //            else{
 //                jQuery('.header-sticker').removeClass('header-container-fixed');
 //            }
 //            return false;
 //        });
 //    }
	if(jQuery('.header-sticker').hasClass('sticker')){
        jQuery('.header-sticker').addClass('header-container-fixed');
    }	
});	