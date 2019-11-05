jQuery(document).ready(function($) {

	'use strict';

    $(window).scroll(function(){
         $('.header-bloc').toggleClass('scrolled', $(this).scrollTop() > 1);
     });


});
