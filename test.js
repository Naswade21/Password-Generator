//Shortening mycode and testing if it works

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pOne = document.getElementById("p-one")
let pTwo = document.getElementById("p-two")
let toggleSymbol = document.getElementById("a-switch")
let toggleNumber = document.getElementById("b-switch")

function generateRandomWord(e){
    let password = "" //hold value generated
    for (i = 0; i < e; i++){
        let random = Math.floor(Math.random() * characters.length)
        password += characters[random]
    }
    return password
}

function activate(){
    pOne.textContent = generateRandomWord(15)
    pTwo.textContent = generateRandomWord(15)
}

function getClipText(text){ //to copy text and save it, just follow Clipboard API - > writeText() Method give IT A Promise!
    navigator.clipboard.writeText(pOne.textContent)
    console.log("1st password copied was a success!")
}

function getClipText2(text){
    navigator.clipboard.writeText(pTwo.textContent)
    console.log("2nd password copied was a success!")
}

toggleSymbol.addEventListener("change", function(){
    //MDN Docs String.prototpe.replace chapter and regualar expressions chapter -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
})



