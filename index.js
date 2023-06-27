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

function giris(){
    if ((email==kullanıcılar[0].email && sifre==kullanıcılar[0].sifre) || (email==kullanıcılar[1].email && sifre==kullanıcılar[1].sifre)) {
        console.log(tweets);
    }
    else{
        console.log("Kullanıcı adı veya parola yanlış!")
    }
}

giris()


