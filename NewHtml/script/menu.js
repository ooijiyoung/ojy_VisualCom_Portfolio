function menuCtrl(){
	var menu = document.getElementById("mainMenuNav");
	if(menu.style.width!="250px"){
		openNav();
	}
	else{
		closeNav();
	}
}


function openNav() {
    document.getElementById("mainMenuNav").style.width = "250px";
    document.getElementById("push").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mainMenuNav").style.width = "0";
    document.getElementById("push").style.marginLeft= "0";
}