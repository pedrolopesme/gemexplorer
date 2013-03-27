$.safeGet= function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    console.log(xhr.responseText);
	    callback(JSON.parse(xhr.responseText));
	  }
	}
	xhr.send();
}