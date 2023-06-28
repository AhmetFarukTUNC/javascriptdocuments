// var agac = document.getElementById("agac")

// alert(agac.childNodes[0].nodeValue)

var heading = document.createElement("h2")
var node = document.createTextNode("Merhaba!")
heading.appendChild(node)
var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")
div1.insertBefore(heading,p2)
alert("P2 siliniyor...")
div1.removeChild(p2)