window.onscroll = function() {
	stickyScroll()
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function stickyScroll() {
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

function toggleMenu() {
  document.getElementById("drop_menu").classList.toggle("show");
}