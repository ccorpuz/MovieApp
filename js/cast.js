//	Put selected cast member id in sessionStorage

function redirectCast(id){
	location.href = "./cast_member.html?a=" + id;
}

var castClasses = document.getElementsByClassName("cast_card");

for (var i = 0; i < castClasses.length; i++) {
	if (i != 2) {
		castClasses[i].addEventListener('click', redirectCast.bind(this, castClasses[i].id), false);
	}
}