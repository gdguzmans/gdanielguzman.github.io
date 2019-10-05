function currentYear() {
	var today = new Date();
    var year = today.getFullYear();
   	document.getElementById("year").innerHTML = year;
}

function lastUpdate(){
	 var modified = document.lastModified;
	 document.getElementById("updated").innerHTML = modified;
}

function yearAndUpdate(){
	currentYear();
	lastUpdate();
}