//	Generate actor information

var actors = {

	actor1: {
		name: "Christian Bale",
		dob: "30 January 1974",
		age: "45",
		citizen: "British, American",
		info: "Christian Charles Philip Bale (born 30 January 1974) is an English-American actor who is known for his intense method acting style, often transforming his body drastically for his roles. Bale is the recipient of many awards, including an Academy Award and two Golden Globes, and was featured in the Time 100 list of 2011. Born in Haverfordwest, Wales, to English parents, Bale had his first starring role at age 13 in Steven Spielberg's war film Empire of the Sun (1987). Following a decade of leading and supporting roles, including in Little Women (1994), he gained wider recognition for portraying the serial killer Patrick Bateman in American Psycho (2000). In 2004, he lost 63 pounds for his role in the psychological thriller The Machinist (2004). Within six months, he gained 100 pounds to star as Batman in Christopher Nolan's superhero film Batman Begins (2005). He later reprised his role in the sequels The Dark Knight (2008) and The Dark Knight Rises (2012).",
		colour: "#7b7c7c",
		image: "./img/cast/actor1.jpg"
	},

	actor2: {
		name: "Heath Ledger",
		dob: "4 April 1979",
		age: "28 (Deceased)",
		citizen: "Australian",
		info: "Heath Andrew Ledger (4 April 1979 – 22 January 2008) was an Australian actor and music video director. After performing roles in several Australian television and film productions during the 1990s, Ledger left for the United States in 1998 to further develop his film career. His work comprised nineteen films, including 10 Things I Hate About You (1999), The Patriot (2000), A Knight's Tale (2001), Monster's Ball (2001), Lords of Dogtown (2005), Brokeback Mountain (2005), Casanova (2005), The Dark Knight (2008), and The Imaginarium of Doctor Parnassus (2009), the latter two being posthumous releases. He also produced and directed music videos and aspired to be a film director. For his portrayal of Ennis Del Mar in Brokeback Mountain, Ledger won the New York Film Critics Circle Award for Best Actor and the Best International Actor Award from the Australian Film Institute; he was the first actor to win the latter award posthumously.He was nominated for the BAFTA Award for Best Actor in a Leading Role and the Academy Award for Best Actor. Posthumously, he shared the 2007 Independent Spirit Robert Altman Award with the rest of the ensemble cast, the director, and the casting director for the film I'm Not There, which was inspired by the life and songs of American singer-songwriter Bob Dylan. In the film, Ledger portrayed a fictional actor named Robbie Clark, one of six characters embodying aspects of Dylan's life and persona.",
		colour: "#4B0082",
		image: "./img/cast/actor2.jpg"
	},

	actor4: {
		name: "Gary Oldman",
		dob: "21 March 1958",
		age: "61",
		citizen: "British",
		info: "Gary Leonard Oldman (born 21 March 1958) is an English actor and filmmaker who has performed in theatre, film, and television. Known for his versatility and expressive acting style, Oldman is regarded as one of the greatest actors of his generation. Among other accolades, he has won an Academy Award, three BAFTA Awards, two Critics' Choice Awards, a Golden Globe Award and a Screen Actors Guild Award, along with nominations for an Emmy Award and the Palme d'Or. In 2011, Empire readers voted him the recipient of the Empire Icon Award. Oldman began acting in theatre in 1979, and made his earliest screen appearances in Remembrance (1982) and Meantime (1983). He continued to lead a stage career, during which he performed at London's Royal Court and was a member of the Royal Shakespeare Company, with credits including Cabaret (1979), The Massacre at Paris (1980), Entertaining Mr Sloane (1983), Saved (1983), The Country Wife (1987) and Hamlet (1987). Oldman rose to prominence in British film with his portrayals of Sid Vicious in Sid and Nancy (1986), Joe Orton in Prick Up Your Ears (1987), a football firm leader in The Firm (1989) and Rosencrantz in Rosencrantz & Guildenstern Are Dead (1990). Identified with the 'Brit Pack', he achieved greater renown as a Hell's Kitchen gangster in State of Grace (1990), Lee Harvey Oswald in JFK (1991) and Count Dracula in Bram Stoker's Dracula (1992).",
		colour: "#8B4513",
		image: "./img/cast/actor4.jpg"
	},

	actor5: {
		name: "Morgan Freeman",
		dob: "June 1 1937",
		age: "81",
		citizen: "American",
		info: "Morgan Freeman (born June 1, 1937) is an American actor, film director, film narrator, and philanthropist. Freeman won an Academy Award in 2005 for Best Supporting Actor with Million Dollar Baby (2004), and he has received Oscar nominations for his performances in Street Smart (1987), Driving Miss Daisy (1989), The Shawshank Redemption (1994), and Invictus (2009). He has also won a Golden Globe Award and a Screen Actors Guild Award. Freeman has appeared in many other box office hits, including Glory (1989), Robin Hood: Prince of Thieves (1991), Seven (1995), Deep Impact (1998), The Sum of All Fears (2002), Bruce Almighty (2003), The Dark Knight Trilogy (2005–2012), Wanted (2008), RED (2010), Now You See Me (2013), The Lego Movie (2014), and Lucy (2014). He rose to fame as part of the cast of the 1970s children's program The Electric Company. Noted for his deep voice, Freeman has served as a narrator, commentator, and voice actor for numerous programs, series and television shows. He is ranked as the fifth-highest box office start with $4.31 billion in total box office grosses, an average of $74.4 million per film.",
		colour: "#6B8E23",
		image: "./img/cast/actor5.jpg"
	},

	actor6: {
		name: "Maggie Gyllenhaal",
		dob: "November 16, 1977",
		age: "41",
		citizen: "American",
		info: "Margalit Ruth 'Maggie' Gyllenhaal born November 16, 1977) is an American actress and producer. Part of the Gyllenhaal family, she is the daughter of filmmakers Stephen Gyllenhaal and Naomi Achs, and the older sister of actor Jake Gyllenhaal. She began her career as a teenager with small roles in several of her father's films, and appeared alongside her brother in the cult favorite Donnie Darko (2001). She received critical acclaim for her starring roles in the independent films Secretary (2002) and Sherrybaby (2006), earning Golden Globe nominations in the Comedy and Drama categories, respectively. In 2008, she received widespread recognition for playing Rachel Dawes in Christopher Nolan's superhero film The Dark Knight. Her other film credits include Adaptation., Confessions of a Dangerous Mind (both 2002), Mona Lisa Smile (2003), Happy Endings (2005), Paris, je t'aime, World Trade Center, Monster House, Stranger Than Fiction (all 2006), and Away We Go (2009). For her performance in Crazy Heart (2009), she was nominated for the Academy Award for Best Supporting Actress. She subsequently starred in the films Nanny McPhee and the Big Bang (2010), Won't Back Down (2012), Hysteria (2011), White House Down (2013), and Frank (2014).",
		colour: "#ffb200",
		image: "./img/cast/actor6.jpeg"
	}
}

var actor = sessionStorage.getItem("actor");

document.getElementById("actor_title_name").innerHTML = actors[actor].name;
document.getElementById("actor_name").innerHTML = actors[actor].name;
document.getElementById("actor_dob").innerHTML = actors[actor].dob;
document.getElementById("actor_age").innerHTML = actors[actor].age;
document.getElementById("actor_citizen").innerHTML = actors[actor].citizen;
document.getElementById("actor_info").innerHTML = actors[actor].info;
document.getElementById("actor_portrait").src = actors[actor].image;
document.getElementById("header_colour").style.background = actors[actor].colour;

//	Loading animation
function runLoader(){
	setTimeout(loadPage, 1500);
}

function loadPage(){
	document.getElementById("loader").style.display = "none";
	document.getElementById("container").style.display = "block";
}

//	Go to previous page

function goBack() {
	history.go(-1);
}


