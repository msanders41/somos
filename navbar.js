function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }

  var y = document.getElementById("phone")
  if (y.className === "nav") {
  	x.className += " responsive"
  }
}