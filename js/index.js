const navToggle = document.querySelector('.nav-toggle');//looks for document query selector, called nav-toggle
const navLinks = document.querySelectorAll('.nav__link');//finds all nav links
//when we click we want to do a function, so we use an arrow function here:
navToggle.addEventListener('click', () =>{
	//we are going to toggle a class called nav-open (the class will be added in css)
	document.body.classList.toggle('nav-open'); //this means that everytime we click that button, it should add that class
});

//for each navlinks- create an event listener for a click
navLinks.forEach(link => {
	//if someone, clicks we are going to do an arrow function
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})
