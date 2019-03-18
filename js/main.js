(() => {



console.log("javascript linked up");

const targetBox = document.querySelector('.box');

//basic greensock animation 
//TweenMax.to(el, time, {props});
Function runAnimation() {
	TweenMax.to(targetBox, 0.8, {
		x: 450, 
		rotation: 180,
		scaleX: 1.5,
		scaleY: 1.5
	});
}

Function resetAnimation() {
	TweenMax.to(targetBox, 0.8, {
		x: 0, 
		rotation: 0,
		scaleX: 1,
		scaleY: 1
	});
}

targetBox.addEventListener("mouseover", runAnimation);
targetBox.addEventListener("mouseout", resetAnimation);
})();