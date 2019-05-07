window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

//	Changes like and unlike button colours
function activate(choice){
	if (choice === "like") {
		document.getElementById("like").style.backgroundImage = "url('./img/liked.png')";
		document.getElementById("unlike").style.backgroundImage = "url('./img/unlike.png')";
	} else {
		document.getElementById("like").style.backgroundImage = "url('./img/like.png')";
		document.getElementById("unlike").style.backgroundImage = "url('./img/unliked.png')";
	}
}