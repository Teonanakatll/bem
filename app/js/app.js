// Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper from 'swiper'
import {Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thmbs} from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
	// $('.button').on('click', function() {
	// 	if($(this).attr('filter') == 'all') {
	// 		if($(this).attr('val') == 'off') {
	// 			$('.button[filter]').attr('val', 'off').removeClass('active');
	// 			$(this).attr('val', 'on').addClass('active');
	// 			$('.filter > div').show(300);
	// 		}
	// 	} else
	// 	if($(this).attr('val') == 'off') {
	// 		$('.button[filter]').attr('val', 'off').removeClass('active');
	// 		$(this).attr('val', 'on').addClass('active');
	// 		$('.filter > div').hide(300);
	// 		var filter = $(this).attr('filter');
	// 		$('.filter > div[filter='+filter+']').show(300);
	// 	}
	// })

//фильтрация итемов 
	$('.button[filter]').on('click', function() {
		
		if ($(this).attr('val') == 'off') {
			$('.button[filter]').attr('val', 'off').removeClass('active');
			$(this).attr('val', 'on').addClass('active');
			$('.filter > div').hide(300);
			$('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
			if ($(this).attr('filter') == 'all') {
				$('.button[filter]').attr('val', 'off').removeClass('active');
				$('this').attr('val', 'on').addClass('active');
				$('.filter > div').show(300);
			}
		}
	})

	const sliderTeam = new Swiper('.slider-team', {
		modules: [Parallax, Mousewheel, Pagination],
		loop: true,
		speed: 2400,
		parallax: true,
		mousewheel: {
			invert: false,
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 15,
			},
		},
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 20,
		pagination: {
			el: '.slider-team__pagination',
			clickable: true,
		},
	});

	// скролл к разделу при нажатии на пункт меню
	$('ul.menu a[href^="#"').on('click', function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
		$('ul.menu a[href^="#"]').css({'color':'#212121'})
		$(this).css({'color':'#D22121'});
		//чтобы ссылка не перебрасывала на другие страницы
		return false;
	});

	// после обьекта .logo добавляем div .mobile-menu и скрываем на разрешении больше 992px
	$('.logo').after('<div class="mobile-menu d-lg-none">');
	// клонируем меню в div
	$('.top-menu').clone().appendTo('.mobile-menu');


	// выпадающее меню
	$('.logo__menu-icon').on('click', function() {
		$('.mobile-menu').stop().slideToggle(500);
		$('.top-menu ul').css({
			'display':'flex', 'flex-direction':'column'
		});
		// проверяем содержимое с помощю хтмл
		if($('.logo__menu-icon').html()=='<i class="fa fa-bars"></i>') {
				// и если так то меняем содержимое на другую иконку
			$(this).html('<i class="fa fa-times"></i>')
		} else {
			$(this).html('<i class="fa fa-bars"></i>')
		}
	
			
	})

	// тогл кнопки вверх
	$(window).on('scroll', function() {
		if ($(this).scrollTop() != 0)
		// fadeIn показывает и скрывает элементы путём изменения прозрачности
			$('#toTop').fadeIn();
		else 
			$('#toTop').fadeOut();
	});
	// скролл на верх страницы
	$('#toTop').on('click', function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	})

})
