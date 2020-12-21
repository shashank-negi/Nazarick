var attempt = 3; 

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "ninja@gmail.com" && password == "ninja"){
		alert ("Login successfully");
		window.location = "success.html"; //redirecting to other page
		return false;
	}
	else if(username == "prof@gmail.com" && password == "prof")
	{
        alert ("Login successfully");
		window.location = "teacher.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("Incorrect Password OR ID !! You have left "+attempt+" attempt;");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}