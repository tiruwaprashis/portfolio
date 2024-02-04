// Todo: Make M+ M- and MC functional
let string = "";
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    try{
    if(e.target.innerHTML == '='){
      string = eval(string);
      string = string.toString();//use result string for another operation
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = "";
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'DE'){
      if (inputField.value == string) {
        string = string.slice(0,-1);
        document.querySelector('input').value = string;
      }
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
    } catch (error) {
        inputField.value = 'Syntax error';
        setTimeout(() => {
            inputField.value = "";
          }, 1000); // Clear the error message after 1 second
          string = "";
    
    }
  })
})
