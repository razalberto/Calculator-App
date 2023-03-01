let result = document.getElementById("result");

let digits = new Set([1,2,3,4,5,6,7,8,9,0]);
let signs = new Set(['+','-','/','*'])


let buttons = document.querySelectorAll(".print");

buttons.forEach(element => element.addEventListener("click", function(){
  
  let existingResult = result.textContent;

  let allNumbers = existingResult.split('/').join(',').split('*').join(',').split('+').join(',').split('-').join(',').split(',');
  let lastNumber = allNumbers[allNumbers.length - 1];
  
  if(existingResult == "" && signs.has(element.value)){

    result.textContent = "";

  }
  else if(existingResult == "0" && element.value != "." && digits.has(parseInt(element.value))){
    
    result.textContent = element.value;
  
  }
  else if(signs.has(existingResult.charAt(existingResult.length - 1)) && signs.has(element.value)){
    
    result.textContent = result.textContent.replace(/.$/,element.value);
  
  }
  else if(digits.has(parseInt(existingResult.charAt(existingResult.length - 1))) != true && existingResult.charAt(existingResult.length - 1) != "." && element.value == "."){
    
    result.textContent = existingResult + "0.";
  
  }
  else if(existingResult.charAt(existingResult.length - 1) == "." && element.value == "."){

  }
  else if(new Set(lastNumber).has(".") && element.value == "."){

  }
  else{
    
    result.textContent = existingResult + element.value;
  
  }

}));

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function(){

  result.textContent = "";

});

let deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function(){

  if(result.textContent != ""){

    result.textContent = result.textContent.slice(0, -1);

  }

})

let equalButton = document.getElementById("equalsign");

equalButton.addEventListener("click", function(){
  let existingResult = result.textContent;
  
  if(signs.has(existingResult.charAt(existingResult.length - 1)) || existingResult.charAt(existingResult.length - 1) == "."){  
    
    alert("Invalid operation! Check your syntax!")
  
  }
  else{
    
    result.textContent = eval(result.textContent);
  
  }
  
})










