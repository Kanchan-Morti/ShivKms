(function ($) {
	"use strict";

	function sliders() {
		/***************************

		about slider

		***************************/
		var swiper = new Swiper('.elementor-editor-active .knsl-about-slider', {
			slidesPerView: 2,
			spaceBetween: 20,
			parallax: false,
			autoHeight: false,
			updateOnWindowResize: false,
			initialSlide: 1,
			centeredSlides: true,
			speed: 800,
			observer: false,
			observeParents: false,
			pagination: {
			el: '.knsl-about-slider-1-pagination',
			type: "fraction",
			},
			navigation: {
			prevEl: '.knsl-about-slider-1-prev',
			nextEl: '.knsl-about-slider-1-next',
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1600: {
				slidesPerView: 3,
			},
			},
		});
		/***************************

		testimonials slider

		***************************/
		var swiper = new Swiper('.elementor-editor-active .knsl-testimonials-slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			parallax: false,
			autoHeight: false,
			updateOnWindowResize: false,
			initialSlide: 1,
			centeredSlides: true,
			speed: 800,
			observer: false,
			observeParents: false,
			pagination: {
			el: '.knsl-testimonials-slider-1-pagination',
			type: "fraction",
			},
			navigation: {
			prevEl: '.knsl-testimonials-slider-1-prev',
			nextEl: '.knsl-testimonials-slider-1-next',
			},
		});
		/***************************

			testimonials slider tow

		***************************/
		var swiper = new Swiper('.knsl-testimonials-two-slider', {
			slidesPerView: 1,
			spaceBetween: 50,
			parallax: false,
			autoHeight: false,
			updateOnWindowResize: false,
			initialSlide: 1,
			centeredSlides: true,
			speed: 800,
			noSwipingSelector: 'button',
			observer: false,
			observeParents: false,
			pagination: false,
			rewind: false,
			navigation: {
			prevEl: '.knsl-two-slider-tt-prev',
			nextEl: '.knsl-two-slider-tt-next',
			},
		});
		/***************************

		rooms slider

		***************************/
		var swiper = new Swiper('.elementor-editor-active .knsl-uni-slider', {
			slidesPerView: 3,
			spaceBetween: 20,
			parallax: false,
			autoHeight: false,
			updateOnWindowResize: false,
			speed: 800,
			observer: false,
			observeParents: false,
			pagination: {
			el: '.knsl-uni-slider-pagination',
			type: "fraction",
			},
			navigation: {
			prevEl: '.knsl-uni-slider-prev',
			nextEl: '.knsl-uni-slider-next',
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			},
		});
		/***************************

		room details

		***************************/
		$('.elementor-editor-active .knsl-room-detail-slider-frame').each(function(){
			var swiper1 = new Swiper($(this).find(".knsl-rd-slider-1")[0], {
				loop: false,
				spaceBetween: 10,
				slidesPerView: 4,
				freeMode: false,
				watchSlidesVisibility: false,
				watchSlidesProgress: false,
				observer: false,
				observeParents: false,
				navigation: {
				nextEl: $(this).find('.knsl-rd-slider-1 .swiper-button-next')[0],
				prevEl: $(this).find('.knsl-rd-slider-1 .swiper-button-prev')[0],
				},
			});
			var swiper2 = new Swiper($(this).find(".knsl-rd-slider-2")[0], {
				loop: false,
				effect: 'fade',
				parallax: false,
				observer: false,
				observeParents: false,
				thumbs: {
				swiper: swiper1,
				},
				navigation: {
				nextEl: $(this).find('.knsl-rd-slider-2 .swiper-button-next')[0],
				prevEl: $(this).find('.knsl-rd-slider-2 .swiper-button-prev')[0],
				},
			});
		});
		/***************************

		hero slideshow

		***************************/
		var swiper = new Swiper('.elementor-editor-active .knsl-banner-slideshow', {
			slidesPerView: 1,
			spaceBetween: 0,
			parallax: false,
			effect: 'fade',
			observer: false,
			observeParents: false,
			autoplay: false,
			speed: 800,
		});
		/***************************
		 
		hero slider

		***************************/
		var hero_slider_interleave_offset = 0.5;
		var mainSliderSelector = new Swiper('.elementor-editor-active .knsl-banner-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: false,
			speed: 800,
			parallax: false,
			autoplay: false,
			grabCursor: false,
			watchSlidesProgress: false,
			observer: false,
			observeParents: false,
			navigation: {
				nextEl: '.knsl-banner-slider-wrapper .swiper-custom-nav .next',
				prevEl: '.knsl-banner-slider-wrapper .swiper-custom-nav .prev',
			},
			on: {
				progress: function() {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress,
					innerOffset = swiper.width * hero_slider_interleave_offset,
					innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector('.knsl-banner-slide').style.transform = 'translateX(' + innerTranslate + 'px)';
					}
				},
				touchStart: function() {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = '';
					}
				},
				setTransition: function(swiper, speed) {
					for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + 'ms';
					swiper.slides[i].querySelector('.knsl-banner-slide').style.transition = speed + 'ms';
					}
				}
			}
		});
		/***************************
		 
		hero slider v

		***************************/
		if ($('.elementor-editor-active .knsl-banner-slider-v').length || $('.elementor-editor-active .knsl-banner-slider-vt').length) {
			var mainSlidervSelector = new Swiper('.elementor-editor-active .knsl-banner-slider-v', {
			  direction: "vertical",
			  spaceBetween: 0,
			  loop: false,
			  rewind: false,
			  speed: 1200,
			  parallax: false,
			  autoplay: false,
			  watchSlidesProgress: false,
			  navigation: false,
			  observer: false,
			  observeParents: false,
			  on: {
				progress: function() {
				  var swiper = this;
				  for (var i = 0; i < swiper.slides.length; i++) {
				  var slideProgress = swiper.slides[i].progress,
					innerOffset = swiper.height * 0.5,
					innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector('.knsl-banner-slide').style.transform = 'translateY(' + innerTranslate + 'px)';
				  }
				},
				touchStart: function() {
				  var swiper = this;
				  for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = '';
				  }
				},
				setTransition: function(swiper, speed) {
				  for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + 'ms';
					swiper.slides[i].querySelector('.knsl-banner-slide').style.transition = speed + 'ms';
				  }
				}
			  }
			});
			var mainSlidervtSelector = new Swiper('.elementor-editor-active .knsl-banner-slider-vt', {
			  slidesPerView: 'auto',
			  centeredSlides: true,
			  spaceBetween: 0,
			  loop: false,
			  rewind: false,
			  speed: 1200,
			  parallax: false,
			  autoplay: false,
			  grabCursor: false,
			  watchSlidesProgress: false,
			  navigation: false,
			  observer: false,
			  observeParents: false,
			});
			mainSlidervtSelector.controller.control = mainSlidervSelector;
			mainSlidervSelector.controller.control = mainSlidervtSelector;
		}
	}

	/* Init Elementor Front Scripts */
	$(window).on('elementor/frontend/init', function () {

		// Widgets
		elementorFrontend.hooks.addAction( 'frontend/element_ready/kinsley-hero-slider.default', function() {
		} );

		// Global
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			sliders();
		} );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {

		} );
	});
})(jQuery);
