function getDate() {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth() + 1;
  return d.toString() + m.toString();
}

var currentDate = getDate();
	if (currentDate == "2512") {
		document.getElementById("yesno").innerHTML = "YES";
		document.getElementById("yesno").style.color = "green";
		document.getElementById("yesno").style.fontSize = "170";
	}
	else {
		document.getElementById("yesno").innerHTML = "NO";
	}