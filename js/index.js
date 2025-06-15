
var cli = new Audio("audio/ok.wav");


var images = ["backgrounds/tenhours.png", "backgrounds/ambush.png", "backgrounds/engineer.png", "backgrounds/okp.gif", "backgrounds/mcpk.png"]; 
function selectbackground() {
	document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';
}
/* 
var quotes = ["meow","FUCK!!!"]
function selectquote() {
	document.body.style.backgroundImage = 'url(' + quotes[Math.floor(Math.random() * quote.length)] + ')';
}
 */
//let youtube = document.getElementById('youtube')
//let reddit = document.getElementById('reddit')
//let fumo = document.getElementById('fumo')
//let misty = document.getElementById('misty')
//let onepiece = document.getElementById('onepiece')
//let cobalt = document.getElementById('cobalt')
//let mainlink = document.getElementById('mainlink')
