const carousel = {
	container: document.querySelector(".carousel")
};
carousel.items = Array.from(
	carousel.container.querySelectorAll(".carousel-item")
);

let current = 2;
carousel.items[current].style.display = "block";

function moveRight() {
	const previous = current - 1 < 0 ? carousel.items.length - 1 : current - 1;
	console.log(previous, current);
	const previousSlide = carousel.items[previous];
	const currentSlide = carousel.items[current];
	previousSlide.style.display = "block";
	previousSlide.style.visibility = "hidden";
	previousSlide.style.transform = "translateX(-100%)";
	previousSlide.style.visibility = "visible";
	currentSlide.style.transform = "translateX(100%)";
	previousSlide.style.transform = "translateX(0)";

	setTimeout(() => {
		currentSlide.style.display = "none";
	}, 275);

	current = previous;
}

function moveLeft() {
	const next = (current + 1) % carousel.items.length;
	console.log(next, current);
	const nextSlide = carousel.items[next];
	const currentSlide = carousel.items[current];
	nextSlide.style.display = "block";
	nextSlide.style.visibility = "hidden";
	nextSlide.style.transform = "translateX(100%)";
	nextSlide.style.visibility = "visible";
	currentSlide.style.transform = "translateX(-100%)";
	nextSlide.style.transform = "translateX(0)";

	setTimeout(() => {
		currentSlide.style.display = "none";
	}, 275);

	current = next;
}

document.querySelector("#rightBtn").addEventListener("click", moveRight);
document.querySelector("#leftBtn").addEventListener("click", moveLeft);