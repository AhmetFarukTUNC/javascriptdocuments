var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML;

var tumlisteler = document.getElementsByTagName("ul");

var sehirler = tumlisteler[0];

tumelemanlar = sehirler.getElementsByTagName("li");

for(i=0;i<tumelemanlar.length;++i){
    alert(tumelemanlar[i].innerHTML)
}