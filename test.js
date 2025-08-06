//Shortening mycode and testing if it works

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pOne = document.getElementById("p-one")
let pTwo = document.getElementById("p-two")
let toggleSymbol = document.getElementById("a-switch")
let toggleNumber = document.getElementById("b-switch")
let noNumArray = characters.map(function removeNum(arr){
    return arr.replace(/[0-9]/g, "") 
   })
let noSymArray = characters.map(function removeSym(arr){
    return arr.replace(/[^a-zA-Z0-9]/g, "")
   })
let noSymNumArray = characters.map(function removeSymNum(arr){
    return arr.replace(/[^a-z]/i, "")
   })


function generateRandomWord(e){
    let password = "" //hold value generated
    if(toggleNumber.checked === true && toggleSymbol.checked === true){ //AND or OR goes first in if else statements
        for (i = 0; i < e; i++){
            noSymNumArray = noSymNumArray.filter(Boolean)
            let noSymNumRandom = Math.floor(Math.random()*noSymNumArray.length)
            password += noSymNumArray[noSymNumRandom]
        } console.log("Both are checked")
    } else if (toggleSymbol.checked === true){
         noSymArray = noSymArray.filter(Boolean)
        for (i = 0; i < e; i++){
            let noSymRandom = Math.floor(Math.random()*noSymArray.length)
            password += noSymArray[noSymRandom]
        } console.log("Remove Symbols is checked")
    } else if (toggleNumber.checked === true){
        noNumArray = noNumArray.filter(Boolean) //Boolean constructor turns values empty strings into falsy values and the filter method removes it
        for (i = 0; i < e; i++){
            let noNumRandom = Math.floor(Math.random()*noNumArray.length)
            password += noNumArray[noNumRandom]
        } console.log("Remove Numbers is checked")
    } else {
       for (i = 0; i < e; i++){
        let random = Math.floor(Math.random() * characters.length)
       password += characters[random]
   } console.log("Both aren't checked")
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






