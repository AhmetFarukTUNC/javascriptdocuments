var ahmet = document.getElementById("ahmet").addEventListener("click",changecolor)
var ahmetmouseover = document.getElementById("ahmet").addEventListener("mouseover",changename)
function changecolor(){
    document.getElementById("ahmet").style.color="brown";
    
}

function changename(){
    document.getElementsByName("musteriadi")[0].value="merhaba";
}