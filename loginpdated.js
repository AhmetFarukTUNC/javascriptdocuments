var kullanıcılar = [

    {email:"ahmet.tunc.faruk@gmail.com",sifre:"12345"},

    {email:"atunc8402@gmail.com",sifre:"12345"}

]

var tweets = [

    {email:kullanıcılar[0].email,tweet:"Merhaba ben hesap 1!"},

    {email:kullanıcılar[1].email,tweet:"Merhaba ben hesap 2!"},

]

var email = prompt("email?");

var sifre = prompt("sifre?");

function kullanicivarmi(email,sifre){
    for(i=0;i<kullanıcılar.length;++i){
        if (kullanıcılar[i].email==email && kullanıcılar[i].sifre==sifre) {
            return true;
        }
    }
    return false
}

function giris(){
    if (kullanicivarmi(email,sifre)) {
        console.log(tweets);
    }
    else{
        console.log("Kullanıcı adı veya parola yanlış!")
    }
}

giris()