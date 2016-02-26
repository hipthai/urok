/*! main.js */

				
		function faders(){

			$('.dg-expertise > .article').addClass('ltr');
			$('.dg-expertise > .article').addClass('rtl');
			$('.dg-expertise > .article').addClass('btt');
			$('.dg-expertise > .article').addClass('lnr');
			
		}
		
		
				/*** Animate Objects Positions and Fade properties
		////////////////////////////////////////////////////////////  ***/
		function objectsAnim(){
		  // get the height of #wrap
			var winH = $(window).height();
		  var y = ( $(window).scrollTop());
			
			$(".ltr, .rtl, .btt, .ttb, .lnr").each(function(e){
				var getPos =	$(this).offset().top - winH;
				if ( y > (getPos) ){
					//console.log('window posistion: ' + y);
					//console.log('object position: ' + getPos);
					$(this).addClass('fadeIn');
				}
			})
		}

		faders();
		objectsAnim();

		$(window).scroll(function(){
			objectsAnim();
		}); /** window scroll ends **/

