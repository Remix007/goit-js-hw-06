const validationInputRef = document.querySelector("#validation-input");
validationInputRef.addEventListener("blur", () => {
    const valueLength = validationInputRef.value.length;
  
    if(valueLength === 0) {
        validationInputRef.classList.remove("invalid");
        validationInputRef.classList.remove("valid"); 
    }else if(parseInt(validationInputRef.getAttribute("data-length")) === valueLength) {
        
        validationInputRef.classList.add("valid");
        validationInputRef.classList.remove("invalid"); 
    } else {
        validationInputRef.classList.add("invalid");
        validationInputRef.classList.remove("valid");
    }
})