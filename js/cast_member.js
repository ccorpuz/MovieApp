//	Loading animation
//	Check if cast info is in session storage

function runLoader(){
	setTimeout(loadPage, 1500);
}

function loadPage(){
	document.getElementById("loader").style.display = "none";
	document.getElementById("container").style.display = "block";
}

function goBack() {
	history.go(-1);
}