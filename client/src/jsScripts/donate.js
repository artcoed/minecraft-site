		const Gers = 10; // Тайм должен делиться на это число без остатка.
		const time = 200; // Время прокрутки блоков
		let translate3d = 0;
		let canClick = true;
		let nowFrame = 0;
		let userWidth = window.innerWidth;
		container = document.getElementsByClassName('slider-container')[0];
		document.addEventListener("DOMContentLoaded", function(){
			for(i = 0; i < container.children.length; i++){
				elementikNow = container.children[i].children[0].children[0];
				elementikNow.classList.add('image-transition');
			}
		});		
		const contChildren = container.children[0];
			container.children[0].classList.add('active-slide');
			function paddingLeftBlockDo(){
				const slidContE = document.getElementsByClassName('slider-container')[0];
				let paddingLeftBlock = (userWidth - getComputedStyle(contChildren).width.replace(/[^.\d]/g, "")) / 2;
				slidContE.style.paddingLeft = paddingLeftBlock + "px";
			}
			paddingLeftBlockDo();
			let vw;
			function vwGet(){
				vw = Number(getComputedStyle(contChildren).marginRight.replace(/[^.\d]/g, "")) + Number(getComputedStyle(contChildren).width.replace(/[^.\d]/g, ""));
				vw = (vw / (userWidth / 100));
			}
			vwGet();
		window.onresize = () => {
					for(i = 0; i < container.children.length; i++){
						elementikNow = container.children[i].children[0].children[0];
						elementikNow.classList.remove('image-transition');
					}
					userWidth = window.innerWidth;
			    	paddingLeftBlockDo();
			    	vwGet();
			    	container.style.transform = `translate3d(0vw, 0px, 0px)`;
			    	document.getElementsByClassName('slide-active-number')[0].innerHTML = 0;
			    	for(i = 0; i < container.children.length; i++){
						elementikNow = container.children[i].children[0].children[0];
						elementikNow.classList.add('image-transition');
					}
			    };

		function nextSlide() {
			if (!container) {
				return;
			}
			if (!canClick) {
				return;
			}
			slideActive = Number(document.getElementsByClassName('slide-active-number')[0].innerHTML);
			nextActiveSlide = Number(slideActive) + 1;
			if(!container.children[nextActiveSlide]){
				return;
			}
			canClick = false;
			let nowTime = Gers * 2;
			
			const goTo = vw * (slideActive + 1);
			const goFrom = vw * slideActive; 
			const frame = ((goTo - goFrom) / time) * Gers;
			nowFrame = frame + goFrom;
			let inter = setInterval(()=>{
				if (nowTime > time) {
					clearInterval(inter);
					translate3dPlus = nowFrame * (window.innerWidth / 100);
					translate3d = -translate3dPlus;
					document.getElementsByClassName('slide-active-number')[0].innerHTML = nextActiveSlide;
					container.children[nextActiveSlide - 1].classList.remove('active-slide');
					container.children[nextActiveSlide].classList.add('active-slide');
					canClick = true;
				}else{
					nowFrame += frame;
					container.style.transform = `translate3d(-${nowFrame}vw, 0px, 0px)`;
					nowTime += Gers;
				}
			},Gers)
		}
		function prevSlide() {
			if (!container) {
				return;
			}
			if (!canClick) {
				return;
			}
			slideActive = Number(document.getElementsByClassName('slide-active-number')[0].innerHTML);
			nextActiveSlide = Number(slideActive) - 1;
			if(!container.children[nextActiveSlide]){
				return;
			}
			canClick = false;	
			let nowTime = Gers * 2;
			const goTo = vw * (slideActive - 1);
			const goFrom = vw * slideActive; 
			const frame = ((goTo - goFrom) / time) * Gers;
			let v = Number(frame.toFixed(5));
			nowFrame = Number(goFrom) + v;
			let inter = setInterval(()=>{
				if (nowTime > time) {
					if (nowFrame < 1) {
						nowFrame = 0;
						container.style.transform = `translate3d(-${nowFrame}vw, 0px, 0px)`;
					}
					clearInterval(inter);
					translate3dPlus = nowFrame * (window.innerWidth / 100);
					translate3d = -translate3dPlus;
					document.getElementsByClassName('slide-active-number')[0].innerHTML = nextActiveSlide;
					container.children[nextActiveSlide + 1].classList.remove('active-slide');
					container.children[nextActiveSlide].classList.add('active-slide');
					canClick = true;
				}else{
					nowFrame += frame;
					container.style.transform = `translate3d(-${nowFrame}vw, 0px, 0px)`;
					nowTime += Gers;
				}
			},Gers)
		}