window.onload = function(){

/* Variables */

	var thankyou = document.getElementById("thankyou");
	var customername = document.getElementById("customername");
	var name = document.forms[0].thename;
	var email = document.forms[0].theemail;
	var zip = document.forms[0].thezip;
	var message = document.forms[0].message;
	var prov = document.forms[0].theprov;
	var phone = document.forms[0].thephone;
	var zippat = /^\w\d\w\d\w\d$/;
	var phonepat = /^\d\d\d\d\d\d\d\d\d\d$/;
	var empat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;	


var formhandle = document.forms.contactus;
formhandle.onsubmit = processform;

function processform(){

if (name.value === ""|| name.value === null ) {	
	name.style.background="#339933";
	name.focus();
	return false;
};
if (!phonepat.test(phone.value)){
	phone.style.background="#339933";
	phone.focus();
	return false;
};
if  (!empat.test(email.value)){	
	email.style.background="#339933";
	email.focus();
	return false;
};
if (!zippat.test(zip.value)){
	zip.style.background="#339933";
	zip.focus();
	return false;
};
if(prov.value == "0"){
	prov.style.background="#339933";
	prov.focus();
	return false;
};
if (message.value === ""|| message.value === null ) {	
	message.style.background="#339933";
	message.focus();
	alert("your message is empty")
	return false;
};

 	thankyou.style.display ="block";
	customername.innerHTML = " "+ name.value;


	/*-- Clear form after submission --*/		
	
	formhandle.style.display = "none";
	return false;

};

}