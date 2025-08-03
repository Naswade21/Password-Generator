const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pOne = document.getElementById("p-one")
let pTwo = document.getElementById("p-two")


function generateRandom(){
   let random = Math.floor(Math.random()*characters.length)
   let ran = characters[random]
   return ran 
}

function fifteenWord(){
    let wordA = generateRandom()
    let wordB = generateRandom()
    let wordC = generateRandom()
    let wordD = generateRandom()
    let wordE = generateRandom()
    let wordF = generateRandom()
    let wordG = generateRandom()
    let wordH = generateRandom()
    let wordI = generateRandom()
    let wordJ = generateRandom()
    let wordK = generateRandom()
    let wordL = generateRandom()
    let wordM = generateRandom()
    let wordN = generateRandom()
    let wordO = generateRandom()

    let wordAA = generateRandom()
    let wordBB = generateRandom()
    let wordCC = generateRandom()
    let wordDD = generateRandom()
    let wordEE = generateRandom()
    let wordFF = generateRandom()
    let wordGG = generateRandom()
    let wordHH = generateRandom()
    let wordII = generateRandom()
    let wordJJ = generateRandom()
    let wordKK = generateRandom()
    let wordLL = generateRandom()
    let wordMM = generateRandom()
    let wordNN = generateRandom()
    let wordOO = generateRandom()

    pOne.textContent = wordA + wordB + wordC + wordD + wordE + wordF + wordG + wordH + wordI
    + wordJ + wordK + wordL + wordM + wordN + wordO
    pTwo.textContent = wordAA + wordBB + wordCC + wordDD + wordEE + wordFF + wordGG + wordHH + wordII
    + wordJJ + wordKK + wordLL + wordMM + wordNN + wordOO
}

function activate(){
  fifteenWord()
}