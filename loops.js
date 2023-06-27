 for (i = 1; i <= 10; i++) {
     console.log(i)
    
 }

var sehirler = ["Anakara","İstanbul","İzmir"]

 for (let i = 0; i < sehirler.length;i++)
 {
    console.log(sehirler[i]);
 }

var index = 1;

while (index<10) {
     console.log(index)
     if(index==10){
         break
     }
     ++index
 }
 i=1
 do {
   console.log(i)
   ++i  
 } while (i<=10);

 sehirler.forEach(function(sehir) {
     console.log(sehir);
 });
