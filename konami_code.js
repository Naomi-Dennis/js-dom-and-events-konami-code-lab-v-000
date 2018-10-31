const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let entered_code = []


function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener("keydown", (e) =>{
    let currentIndex = entered_code.length
    let currentKey = code[currentIndex]
    let capturedKey =  parseInt(e.which || e.detail);
  
  console.log(capturedKey)
    if(  capturedKey == currentKey){
      entered_code.push(capturedKey)
       if(entered_code.join("") == code.join("")){
           alert("Colonel, this is Snake, can you hear me?")
      }
    }
    else{
      entered_code = []
    }
  })
}


init()