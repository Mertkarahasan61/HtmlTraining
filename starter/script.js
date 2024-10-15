'use strict';   // hatanin gozukmesini saglar
/*

let suruculisansi = false;
const sinav = true;
// ifleri yatay da yazabilirdik
if (sinav) suruculisansi = true;
if (suruculisansi) console.log("artik araba surebilirsin");

// degisken ismini yanlis yazinca seni uyarabiliyor
// diger ozellik javascpritte ozel kelimelere degisken atayamayacigimizi gosteriyo uyarı gelir  interface private if gibi

*/

// Functions
/*
function logger() {
    console.log("Merhaba");
}


// fonksiyonu olusturduk altta da 3 kere cagirdik
logger();
logger();
logger();

function fruitProcessor(apple, oranges) {             // fonksiyonun parametreleri oldu apple ve oranges
    console.log(apple, oranges);
    const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
    return juice             // fonksiyonda juice donecek yani fonksiyon juicenin degeri olcak ama assagida cagirinca

}

fruitProcessor(5, 0); // 5 ve 0 degerlerini parametrelere verdi . sonra console.log daki degerleri cikardi  apple 5  orange 0 oldu  5 0 cikti

console.log(fruitProcessor(5, 0));   // 5 0 cikti returndan sonra fonksiyonun degeri =     Juice with 5 apples and 0 oranges. oldu yani hem 5 0 hem  Juice with 5 apples and 0 oranges. cikar

//simdi baska degerler icin deniyelim ama bu sefer fonksiyonu degiskene kaydedelim

const a = fruitProcessor(2, 4);
console.log(a);

// birinci fonksiyonumuzda parametre ve return yoktu o yuzden deger uretemiyor  bir yere kaydedilmiyor sadece cikti verdi

// altta da bir ornek var return fonksiyonun degerini olusturur

function describeCountry(country, population, capitalcity) {
    return `${country} has ${population} million people and its capital city is ${capitalcity}.`;
}

const b = describeCountry("Turkiye", 8, "Ankara");
console.log(b);
*/

// Function Declarations vs. Expressions
// Function declaration
/*
function yasHesaplama(birthyear) {
    return 2037 - birthyear;
}

const age1 = yasHesaplama(1991);      // her zaman cagircaz kaydederek de cagirabiliriz

// Function expression
const yashesaplama2 = function (birthyear) {     // buna anonim fonksiyon denir
    return 2037 - birthyear;
}

const age2 = yashesaplama2(1992);           // const daki degisken fonksiyon sayilir ona gore yapilir

console.log(age1, age2);


// declaration da once cagirip sonra fonksiyon yazilabilir ama expressionda olmaz


// // Arrow functions
// tek satirli olarak yazilir avantaj saglar function expressiona benziyor

const yashesaplama3 = birthyear => 2037 - birthyear;

const age3 = yashesaplama3(1991);

console.log(age3);



const emeklilik = (birthyeah, isim) => {
    const age5 = 2037 - birthyeah;
    const emekliyil = 65 - age5;
    // return emekliyil;
    return `${isim} retires in ${emekliyil} years`;
}

console.log(emeklilik(1991, "ali"));
console.log(emeklilik(1880, "ayse"));

*/

//Functions Calling Other Functions
/*
function meyvekesim(meyve) {
    return meyve * 4;
}

function meyveislemci(elma, armut) {
    const a = meyvekesim(elma);    // hem cagirildi hem kaydedildi
    const b = meyvekesim(armut);    // hem cagirildi hem kaydedildi
    return `elma sayisi ${a} armut sayisi ${b}`;
}

console.log(meyveislemci(2, 3));


*/

// Reviewing Functions
/*
const yasihesapla = function (birthyeah) {    // farkli fonksiyonlarda ayni isimli parametre olabilir ayni ifade degildir
    return 2037 - birthyeah;
}


const emeklilik = function (birthyeah, isim) {

    const age5 = yasihesapla(birthyeah);   // cagirip kaydettik
    const emekliyil = 65 - age5;
    if (emekliyil >= 0) {
        return `${isim} retires in ${emekliyil} years`;
    }
    else {
        console.log("zaten emekli olmus");
        return -1;
        //  console.log("zaten emekli olmus");   bu calismaz cunku return fonksiyonu direkt dondurur alttakini okutmaz
    }

}

console.log(emeklilik(1991, "Jonas"));          // cagirip yazdirdik

console.log(emeklilik(1970, "Jonas"));


// not fonksiyonlarda console.loglu yer varsa fonksiyon console.log suz orasi gene doner sadece cagir yeter


*/


// Introduction to Arrays
// dizileri ogretiyor
/*
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";
// boyle yazcagina

const friend = ["Micheal", "Steven", "Peter"];  // buna dizi denir

console.log(friend);

// baska turlu yazilimi

const years = new Array(1991, 1984, 2008, 2020);

console.log(friend[0]);   // 1.ci elemani cikarir

console.log(friend[1]);  // 2.ci elemani cikarir

console.log(friend.length);  // eleman sayisini verir 3

console.log(friend[friend.length - 1]);  // son elemani cikarir

friend[2] = "Jay";    // diziler de degisim olabilir const ile esitlenmesine ragmen ama tum dizi degisemez
console.log(friend);

// friend = ["a", "b", "c"];       boyle bise olamaz

// dizinin icine degisken toplama cikarma yada baska dizi koyabiliriz

const isim = "Jonas";
const jonas = [isim, "selam", 1991 + 1500, friend, friend[2]];
console.log(jonas);
console.log(jonas.length);


const yas = function (birthYeah) {
    return 2037 - birthYeah;
}

const yil = [1990, 1967, 2002, 2010, 2018];

console.log(yas(yil[0]));
console.log(yas(yil[1]));    // 70 cikar
console.log(yas(yil[2]));

const yasdizi = [yas(yil[0]), yas(yil[1]), yas(yil[2])];   // dizi olusturduk cikan sonuclarla
console.log(yasdizi);



// diziler de + isareti gelirse yil+5  dizinin son elemaninin 20185 olmasi olur  cikarma islemi NaN olur

console.log(yil + 12);  // 1990 1967 2002 2010 201812 cikar

console.log(yil - 5); // Nan cikar

*/


// Basic Array Operations (Methods)
/*
const friends = ["Micheal", "Steven", "Peter"];
const uzunluk = friends.push("Jonas");
console.log(friends);
console.log(uzunluk);   // ekleme operatorunu bir degiskene atarsan ve console.log yaparsan lenghti verir cunku

// ekleme operatoru diziye bir veya daha fazla eleman ekler ve eleman sayisini dondurur kural


//console.log(friends.push("Jonas"));  boyle yazarsan yazdirmadan once 1 kere daha eleman ekler ve sonra eleman sayisini yazdirir 5 cikar

friends.unshift("John");
console.log(friends);   // basa elemean ekler  push sona  ekler
// buda once ekler sonra eleman sayisini olcer


friends.pop(); // son elemani siler kac kere yazarsan o kadar siler
const a = friends.pop();     // bu sildikten sonra eleman sayisini okumaz sildigi elemani okur
console.log(friends);
console.log(a);   // peteri okicak  sondan 2.ci elemani yani


const b = friends.shift();   // buda eleman siler
console.log(friends);    // 2 elemanli dizi kaldi
console.log(b);  // sildigi eleman John

friends.push(23);

console.log(friends.indexOf("Steven"));  // kacinci indeks oldugunu verir  1 mis  olmayan eleman icin -1 verir

console.log(friends.includes("Steven")); // elemanin dizi olup olmadigini booelan sekilde gosterir true cikar

console.log(friends.includes("23")); // false cikar cunku biz number 23 yazdik bu string 23 var mi yok mu bakiyo


if (friends.includes("Peter")) {
    console.log("Peter senin arkadasin");

}

else {
    console.log("Peter arkadasin degil");
}



*/

// Introduction to Objects
// nesne tanimi
// once bi dizi yazalim alt alta
/*
const jonesArray = [
    "Jonas",
    "Schdentment",
    2037 - 1991,
    "teacher",
    ["Micheal", "Peter", "Steven"]
];


// simdi nesne yaratalim

const jones = {
    firstname: "jones",
    lastname: "Schdentment",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Micheal", "Peter", "Steven"]
};
// nesnelerde sira onemli degildir en son kendi alfabetik siralar
console.log(jones);

console.log(jones.lastname);  // sira olmadigindan direkt degisken ile aratiyoruz

console.log(jones["lastname"]);    // boyle yazarak da Schdentment  yazdirabiliriz

console.log(jones["first" + "name"]);   // once en icdeki stringleri birlestirdi firstname cikti sonra jones nesnesi calisti  ve cikti jones verdi

//  console.log(jones."first"+"name");   boyle bise calismaz cunku burda string istemiyor direkt degiskeni istiyor


const bilgi = prompt("Jones hakkinda bilgi verin firstname  lastname age job friends bunlardan birini sorun");
console.log(jones[bilgi]);   // bilgi yerine job gelmisse  teacher cikar

console.log(jones.bilgi);   // undefined cikar  . ile [] nin farki bu

// ayni zamanda bunu if else de de booelan olarak kullanabiliriz

if (jones[bilgi]) {
    console.log(`Boyle bir deger var deger de ${jones[bilgi]} dir`);
}

else {
    console.log("Boyle bir deger yok");
}

// eleman ekleme nesneye

jones.ulke = "Turkiye";
jones["sehir"] = "Trabzon"
console.log(jones);

console.log(jones.friends[1]);   // burada jones nesnesinin friends dizisindeki 2.elemani cagirdik

console.log(jones.friends.length);   // 3 cikar


*/

// Object Methods
/*
const jones = {
    firstname: "jones",
    lastname: "Schdentment",
    birthYeah: 1991,
    job: "teacher",
    friends: ["Micheal", "Peter", "Steven"],
    ehliyet: true,
    yasHesaplama: function (birthYeah) {          // nesnenin icinde fonksiyon bole yazilir  const eklemedik basina dikkat   declaration seklinde olmazdi
        return 2037 - birthYeah;
    },
    yashesaplama1: function () {
        console.log(this);       // nesnenin icindekileri gosterir
        return 2037 - this.birthYeah;        // this yazarak nesnenin icindeki elemani sectigimizi gosteriyoruz   jonas.birthYeah ile ayni ifade oda yazilabilir
    },

    yashesaplama2: function () {
        this.age = 2037 - this.birthYeah;  // nesnelerde jones.age=  diye yeni eleman ekleyebiliyoduk onu yaptik
        return this.age;

    },

    toplam: function () {
        return `${this.firstname} ${this.yashesaplama1()}dir meslegi ${jones.job} dir sürücü ehliyeti ${this.ehliyet ? "var" : "yok"} dir`;
    }







};




/*  normalde boyle kullanirdik

const yasHesaplama = function (birthYeah) {
    return 2037 - birthYeah;
}



console.log(jones.yasHesaplama(1991));
console.log(jones.yasHesaplama(jones.birthYeah));  // hepsiside 46 verir
console.log(jones["yasHesaplama"](jones.birthYeah));
console.log(jones["yasHesaplama"](jones["birthYeah"]));

console.log(jones.yashesaplama1());  // 46

console.log(jones.yashesaplama2());   // 46

console.log(jones.age);   // bu da  deger verir 46

console.log(jones.toplam());



*/

// Donguler 

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`${rep}. tekrar`);
}
*/
/*
const jonesArray = [
    "Jonas",
    "Schdentment",
    2037 - 1991,
    "teacher",
    ["Micheal", "Peter", "Steven"]
];
const types = []  // listeye for dongusu sayesinde elemanlar ekletcez
for (let i = 0; i < jonesArray.length; i++) {
    console.log(jonesArray[i], typeof (jonesArray[i]));

    types[i] = typeof (jonesArray[i]);
    //  types.push(typeof (jonesArray[i]));   ayni anlama gelir ustteki eklemeyle 

}
console.log(types);


const yil = [1991, 2007, 1969, 2020];
const yaslar = [];  // ekleme yapcaz
for (let i = 0; i < yil.length; i++) {
    let yas = 2024 - yil[i];
    console.log(yas);
    yaslar[i] = yas;
}
console.log(yaslar);


// Continue and Break

for (let i = 0; i < jonesArray.length; i++) {
    if (typeof (jonesArray[i]) !== "string") continue;   // string degilse devam et yani atla tekrar donguye sok 
    console.log(jonesArray[i], typeof (jonesArray[i]));    // stringler cikti sadece 


}

for (let i = 0; i < jonesArray.length; i++) {
    if (typeof (jonesArray[i]) === "number") break;   // numara varsa bitir kes daha ilerleme 
    console.log(jonesArray[i], typeof (jonesArray[i]));    // ilk 2 string cikti

}




for (let i = jonesArray.length - 1; i >= 0; i--) {     // tersten yazma
    console.log(i, jonesArray[i]);
}



for (let egzersis = 1; egzersis < 4; egzersis++) {

    console.log(`----------Egzersiz basliyor--------${egzersis}`);
    for (let tekrar = 1; tekrar < 6; tekrar++) {
        console.log(`tekrar ${tekrar}`);
    }

}

*/

// While dongusu

let rep = 1;
while (rep < 5) {
    console.log(`${rep}. tekrar`);
    rep++;
}

let rastgelesayi = Math.trunc(Math.random() * 6) + 1;   // math random  1 ile 5 arasında ondalik sayi verir truncda tam sayiye cevirir
console.log(rastgelesayi);


while (rastgelesayi !== 6) {

    console.log(`sayi ${rastgelesayi}`);
    rastgelesayi = Math.trunc(Math.random() * 6) + 1;
}










































