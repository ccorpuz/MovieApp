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