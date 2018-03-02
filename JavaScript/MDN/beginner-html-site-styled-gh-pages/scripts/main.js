var myHeading = document.querySelector('h1');
myHeading.textContent = "Go Ahead";

// document.querySelector('html').onclick = function() {
// 	alert("Stop poking me");
// }

// // Equivalemt to

// var myHtml = document.querySelector('html');
// myHtml.onclick = function() {
// 	alert("Don't poke me");
// }

var myImage = document.querySelector('img');
myImage.onclick = function() {
	getsrc = myImage.getAttribute('src');
	if(getsrc == 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/logo.png');
	}
	else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

var getHeading = document.querySelector('h1');
var getButton  = document.querySelector('button');

function setUserName() {
	var userName = prompt("Please enter your name");
	localStorage.setItem('name', userName);
	getHeading.textContent = "Go Ahead "  + userName;
}

if(!localStorage.getItem('name')) {
	setUserName();
}
else {
	var getName = localStorage.getItem('name');
	myHeading.textContent = "Go Ahead " + getName;
}

getButton.onclick = function() {
	setUserName();
}