//	Image Links
const like_image = "url('./img/interface/like.png')";
const unlike_image = "url('./img/interface/unlike.png')";
const liked_image = "url('./img/interface/liked.png')";
const unliked_image = "url('./img/interface/unliked.png')";

//	Sticky Navigation
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
		document.getElementById("like").style.backgroundImage = liked_image;
		document.getElementById("unlike").style.backgroundImage = unlike_image;
	} else {
		document.getElementById("like").style.backgroundImage = like_image;
		document.getElementById("unlike").style.backgroundImage = unliked_image;
	}
}

//	Share Feedback Menu
function toggleMenu() {
  document.getElementById("drop_menu").classList.toggle("show");
}

//	Modal
function showModal(src) {
	var modal = document.getElementById('poster_modal');
	var modalImg = document.getElementById("modalImage");
	modalImg.src = src;
	modal.style.display = "block";	
}

var posterImages = document.getElementsByClassName("posterImage");

for (var i = 0; i < posterImages.length; i++) {
    posterImages[i].addEventListener('click', showModal.bind(this, posterImages[i].src), false);
}

function closeModal(){
	document.getElementById('poster_modal').style.display = "none";
}