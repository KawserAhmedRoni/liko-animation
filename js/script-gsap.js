(function ($) {
	("use strict");

	// Scroll smoother
	if ($("#smooth-wrapper").length && $("#smooth-content").length) {
		gsap.registerPlugin(
			ScrollTrigger,
			ScrollSmoother,
			TweenMax,
			ScrollToPlugin
		);

		gsap.config({
			nullTargetWarn: false,
		});

		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});
	}

	// Scroll Zoom Animation
	if ($(".tp-hero-bottom-img-wrap").length > 0) {
		let ms = gsap.matchMedia();
		ms.add("(min-width: 768px)", () => {
			// Home 8
			let tp_hero = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-hero-bottom-img-wrap",
					start: "top 70",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 50%",
				},
			});
			tp_hero.to(".tp-hero-bottom-img", {
				width: "100%",
			});
		});
	}

	// Fade Animation
	if ($(".tp_fade_top").length > 0) {
		gsap.set(".tp_fade_top", { y: -100, opacity: 0 });
		const fadetopArray = gsap.utils.toArray(".tp_fade_top");
		fadetopArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				},
			});
			fadeTl.to(item, {
				y: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			});
		});
	}

	if ($(".tp_fade_bottom").length > 0) {
		gsap.set(".tp_fade_bottom", { y: 100, opacity: 0 });
		const fadeArray = gsap.utils.toArray(".tp_fade_bottom");
		fadeArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=400",
				},
			});
			fadeTl.to(item, {
				y: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 1.5,
			});
		});
	}

	if ($(".tp_fade_left").length > 0) {
		gsap.set(".tp_fade_left", { x: -100, opacity: 0 });
		const fadeleftArray = gsap.utils.toArray(".tp_fade_left");
		fadeleftArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				},
			});
			fadeTl.to(item, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			});
		});
	}

	if ($(".tp_fade_right").length > 0) {
		gsap.set(".tp_fade_right", { x: 100, opacity: 0 });
		const faderightArray = gsap.utils.toArray(".tp_fade_right");
		faderightArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				},
			});
			fadeTl.to(item, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			});
		});
	}

	// button hover animation

	// $(".tp-hover-btn").on("mouseenter", function (e) {
	// 	var x = e.pageX - $(this).offset().left;
	// 	var y = e.pageY - $(this).offset().top;

	// 	$(this).find(".tp-btn-circle-dot").css({
	// 		top: y,
	// 		left: x,
	// 	});
	// });

	// $(".tp-hover-btn").on("mouseout", function (e) {
	// 	var x = e.pageX - $(this).offset().left;
	// 	var y = e.pageY - $(this).offset().top;

	// 	$(this).find(".tp-btn-circle-dot").css({
	// 		top: y,
	// 		left: x,
	// 	});
	// });

	var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

	const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 60);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 1, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 1, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});
	// button hover end
    
})(jQuery);
