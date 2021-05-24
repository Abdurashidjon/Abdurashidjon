// //alert("Hello, User")

// // let yourAge = prompt("Yoshingizni kiriting: ");
// // alert(`Sizning yoshingiz ${yourAge}`+` ga teng`);2 
// // //console.log(yourAge);
// // console.log(`Sizning yoshingiz ${yourAge}`+` da`);

// // 1-ozgaruvchilar 
// let a=22;
// console.log(a);

// let b=22.5;
// console.log(b);

// let c='Abdurashidjon';
// console.log(c);

// let d=true;
// console.log(d);

// let f=10<6;
// console.log(f);

// let g=null;
// console.log(g);

// let k;
// console.log(k);

// let big=123324346346346565464564574576575673473457456456462n;
// console.log(big);


// console.log(a == b);


// console.log('Pastda matematik misollar keltirilgan');


// let h=-10;
// console.log(Math.abs(h));

// let aa=10;
// aa--;
// console.log('10 dan 1 ni ayirsak '+aa+' ga teng');

// aa-=10;
// console.log("9 dan 10 ni ayirsak "+aa+' ga teng');


// let  o=8;
// let  w=32;
// let q;
// q=w/o;
// console.log(q);

// console.log("pow operatorini korib chiqamiz");
// console.log(Math.sqrt(o));



// Shart operatorlari
/* 
let a=5;
let b=2;
if (a>b) {
console.log(` ${a} ${b} dan katta`)
}
else{
    console.log(`b`+` a`+" dan katta")
} */


//case operatorlari

/* let son=+prompt('Biror natural son kiriting: ');

switch(son){
 case 12:
     console.log("Kiritgan soningiz "+son+" ga teng");
     break;

    case 10:
        console.log("Kiritilgan son 10 ga teng:")
      break;
    case 5:
        console.log("Kiritgan son 5 ga teng:");
        break;

    default:
        console.log("Kiritgan "+son+" soningiz bizning ro'yxatda yo'q:")
        break;
} */

// +prompt
/* let a=+prompt("Biror son kiriting: ")

if (a==1) {
    console.log('Siz oltin medal ogansiz '+a+'-urin sohibi');
}
else if (a == 2) {
    console.log('Siz kumush medal ogansiz ' + a + '-urin sohibi');
}
else if (a == 3) {
    console.log('Siz bronza medal ogansiz ' + a + '-urin sohibi');
}
else {
    console.log('Siz musobaqa yutqazib quygansiz yaxshilab tayorlaning');
} */


/// Bular string tarkibidagilarni (' '), (" "), (` `) wular edi

/* console.log(`20+30=${20+30}`);
let a=`c/c++
java 
java script
python`;
console.log(a);

let b=" c++ \n java\n python\n java script"
console.log(b)

let c="Muhammad\tAli"
console.log(c) */




// Bular esa string tarkibidagilarni  gapdan harf qidirish uchun
let gap='Bu joyda boshqa gap ham bo\'lishi mumkin edi'; 
console.log(gap)
// indexOf number
console.log(gap.indexOf('joy')) // demak bu qilgan ishimizdan biz joy ni stringda nechanchi orindan bowlaniwini bilib oldik

//includes boolean
console.log(gap.includes('bu'))

// startswith bu gapda kiritganimiz bilan bowlaniw yoki bowlanmasligini tekwiradi
console.log(gap.startsWith("ha"))

//endsWith bu gapni ohiri nima bilan tugawini qidiradi boolean 
console.log(gap.endsWith("edi"))


// demak ascii kodlarini chiqarish string yordamida
//let topamiz='a';
//console.log(topamiz.codePointAt(0));

// for (let i = 65;  i <= 122 ; i++) {
//     console.log(String.fromCodePoint(i))
// }


