window.onload = startnow;

function startnow(){

/* Variables */
	var logo = document.getElementById("logobig");	
	var thepic1 = document.getElementById("pic1");
	var thepic2 = document.getElementById("pic2");
	var thepic3 = document.getElementById("pic3");
	thepic1.onmouseover = show1;
	thepic2.onmouseover = show2;
	thepic3.onmouseover = show3;

	function show1(){
		logo.src = thepic1.src;
	}
	function show2(){
		logo.src = thepic2.src;
	}
	function show3(){
		logo.src = thepic3.src;
	}

/*Function to reset the pic */
	function reset(){
			logo.src = "images/logo.png";
	}

	thepic1.onmouseout = reset;
	thepic2.onmouseout = reset;
	thepic3.onmouseout = reset;
}

/*Jquery to Show and Hide the menu with a click */

jQuery(document).ready(function(){

$("table").hide();


$("h2").click(function(){
	$("table").hide(1000);
	$(this).next("table").slideToggle(1000);
});

});