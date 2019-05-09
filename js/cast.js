//	Put selected cast member id in sessionStorage
function redirectCast(id){
	sessionStorage.setItem("actor", id);
	location.href = "./cast_member.html";
}

//	Add listeners for redirect
var castClasses = document.getElementsByClassName("cast_card");

for (var i = 0; i < castClasses.length; i++) {
	if (i != 2) {
		castClasses[i].addEventListener('click', redirectCast.bind(this, castClasses[i].id), false);
	}
}

function poof(){
	for(var i = 1; i < castClasses.length; i+=2){
		castClasses[i].classList.add("poof");
	}
}
