// JavaScript Document
$(document).ready(function () {
	console.log('yes sir');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('header.header').addClass('scrolled');
		} else {
			$('header.header').removeClass('scrolled');
		}
	});

	/* navigation */
	document.addEventListener('click', function (e) {
		/* Hamburger menu */
		if (e.target.classList.contains('hamburger-toggle')) {
			e.target.children[0].classList.toggle('active');
		}
	});
	$(".navbar-toggler").click(function () {
		$("html").toggleClass("nav-menu-open overflow-hidden");
		$(".header").toggleClass("nav-menu-open");

		// setTimeout(() => {
		// 	var header_height = $(".header").innerHeight();
		// 	$(".navbar .navbar-collapse.show").css({"height": "calc(100vh - "+ header_height +"px)"});
		// }, 500);
	});
	/* navigation */

	/* best-experience-carousel */
	bestexperiencemobileOnlySlider(".best-experience-carousel", true, false, 767);

	function bestexperiencemobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
		var bestexperience_slider = $($slidername);
		var settings = {
			mobileFirst: true,
			// adaptiveHeight: true,
			dots: $dots,
			arrows: $arrows,
			responsive: [
				{
					breakpoint: $breakpoint,
					settings: "unslick"
				}
			]
		};

		bestexperience_slider.slick(settings);

		$(window).on("resize", function () {
			if ($(window).width() > $breakpoint) {
				return;
			}
			if (!bestexperience_slider.hasClass("slick-initialized")) {
				return bestexperience_slider.slick(settings);
			}
		});
	}
	/* best-experience-carousel */

	/* influential-ambassadors-carousel */
	influentialmobileOnlySlider(".influential-ambassadors-carousel", true, false, 767);

	function influentialmobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
		var influential_slider = $($slidername);
		var settings = {
			mobileFirst: true,
			dots: $dots,
			arrows: $arrows,
			responsive: [
				{
					breakpoint: $breakpoint,
					settings: "unslick"
				}
			]
		};

		influential_slider.slick(settings);

		$(window).on("resize", function () {
			if ($(window).width() > $breakpoint) {
				return;
			}
			if (!influential_slider.hasClass("slick-initialized")) {
				return influential_slider.slick(settings);
			}
		});
	}
	/* influential-ambassadors-carousel */

	/* influential-ambassadors-block read-more-less */
	$(".influential-ambassadors-block .influential-readmore-link a").click(function (e) {
		$(this).parent().parent().toggleClass("view-full-detail");

		if ($(this).parent().parent().hasClass("view-full-detail")) {
			$(this).text("Read less");
		} else {
			$(this).text("Read more");
		}
		e.preventDefault();
	});
	/* influential-ambassadors-block read-more-less */

	/* holistic-video-block play pause */
	$(".holistic-video-block .video-play-icon").click(function (e) {
		$(this).parent().toggleClass("video-playing");
		if ($(this).parent().hasClass("video-playing")) {
			$(this).parent().find("img").addClass("d-none");
			$(this).parent().find("iframe").removeClass("d-none");
			var video_src = $(this).attr("data-video-src");
			$(this).parent().find("iframe").attr("src", video_src + "&autoplay=1");

			// $(this).parent().find("video").removeClass("d-none");
			// $(this).parent().find("video")[0].play();
		} else {
			$(this).parent().find("img").removeClass("d-none");
			$(this).parent().find("iframe").addClass("d-none");
			$(this).parent().find("iframe").attr("src", "");
			// $(this).parent().find("video").addClass("d-none");
			// $(this).parent().find("video")[0].pause();
		}
		e.preventDefault();
	});
	/* holistic-video-block play pause */

	/* lazyload */
	var myLazyLoad = new LazyLoad();
	myLazyLoad.update();
	/* lazyload */

	var list = document.getElementsByClassName("typography-block");
	if (list.length > 0) {
		var items = list.getElementsByTagName("li");

		for (var i = 0; i < items.length; i++) {
			var itemNumber = i + 1;
			items[i].textContent = itemNumber.toString().padStart(2, '0') + ". " + items[i].textContent;
		}
	}

	/* OFI Browser */
	objectFitImages();
	/* OFI Browser */
});
