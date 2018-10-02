const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let entered_code = []
function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener("keydown", checkKonami)
}
function checkKonami(e){
    let currentIndex = entered_code.length
    let currentKey = code[currentIndex]
   
    if(e.which == currentKey){
      entered_code.push(e.which)
       if(entered_code.join("") == code.join("")){
           window.alert("Colonel, this is Snake, can you hear me?")
      }
    }
    else{
     
      entered_code = []
    }
}