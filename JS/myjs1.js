//Navbar
function hideIconBar(){
	var iconBar = document.getElementById("barIcon");
	var navi = document.getElementById("navi");
	iconBar.setAttribute("style", "display:none;");
	navi.classList.remove("hide");
}

function showIconBar(){
	var iconBar = document.getElementById("barIcon");
	var navi = document.getElementById("navi");
	iconBar.setAttribute("style", "display:block");
	navi.classList.add("hide");
}