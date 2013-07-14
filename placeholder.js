/**
 * HTML5 Placeholder Text jQuery Fallback with Modernizr
 *
 * @url     http://uniquemethod.com/
 * @author  Unique Method
 */
 
var xmlhttp;
 
function displayDate()
{
/*
if (document.getElementById("username").value==="" )
{
    document.getElementById("login_msg").innerHTML="Please Enter User Name"
}
else
* */
{
	
	xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", "login.php");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({username:"John Rambo"}));
	xmlhttp.onreadystatechange  = receivedRandom;
	

    //document.getElementById("login_msg").innerHTML=""
}

}

function receivedRandom() {
	
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		//var json = eval('('+ xmlhttp.responseText +')');
		var username = document.getElementById("username");
		username.value = xmlhttp.responseText;
		//username.innerText = "Hello";
		//username.outerText = "Outer text";
	}
	
	
}
