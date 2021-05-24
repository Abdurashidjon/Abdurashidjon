
   let randomNumber = Math.round(Math.random()*10);

function findNumber(params) {
    let enteredNum = document.getElementById('enteredNum').value;
 
    let outNumber = document.getElementById('out');
    let ourNum = document.getElementById('enterNum');
    let message=document.getElementById('msg')
    outNumber.innerHTML="Komyuter tanlagan raqam: " + randomNumber;
    ourNum.innerHTML = "Siz tanlagan raqam: " + enteredNum;
    if (randomNumber == enteredNum) {
        meesage.innerHTML="Siz topa oldingiz";
    }else if (randomNumber<enteredNum) {
        message.innerHTML="Kiritgan soningiz katta";
    }else{
           message.innerHTML="Siz kiritgan son kichik";
    }
}