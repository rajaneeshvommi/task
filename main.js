var modal  = document.getElementById("pop-modal");
var closemodal =document.getElementsByClassName("close")[0];

closemodal.onclick = function(){
	modal.style.display ="none";
}

 document.onkeydown = function(p){
	if(p.keyCode == 27){
		modal.style.display ="none";
	}else{
		modal.style.display ="block";
	}
}

window.onload =function(){
	document.onclick =function(c){
		if(c.target.id !== 'pop-modal'){
			modal.style.display="none";
		}
	}
}