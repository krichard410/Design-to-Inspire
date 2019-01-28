var slideNumber = 1;
showDivs(slideNumber);

function plusDivs(n){
	showDivs(slideNumber += n);
}

function showDivs(n){
	var i;
	var p = document.getElementsByClassName("slider-images");
	if (n > p.length) {slideNumber = 1}

	if (n < 1) { slideNumber = p.length};

	for (i=0; i<p.length; i++){
		p[i].style.display="none";
	}
	p[slideNumber-1].style.display="block";
}

function warning(){
	alert("Warning! Right click has been disabled.");
	return false;
}
