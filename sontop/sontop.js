function findNumber(params) {
    let enteredNum = document.getElementById('enteredNum').value;
    let randomNumber = Math.round(Math.random()*10);
    let outNumber = document.getElementById('out');
    let ourNum = document.getElementById('enterNum');
    outNumber.innerHTML="Komyuter tanlagan raqam: " + randomNumber;
    ourNum.innerHTML = "Siz tanlagan raqam: " + enteredNum;
}