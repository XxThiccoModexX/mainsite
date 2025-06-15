var cli = new Audio("audio/lawl.wav");
cli.loop = true;
unmute = document.getElementById("unmute");
window.onclick = function() {cli.play(); unmute.remove();}; 