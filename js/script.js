document.addEventListener("DOMContentLoaded", function () {
  let calculatorInput = document.querySelector(".calculatorInput");
  let inputValue;
  let tipBtns = document.querySelectorAll(".percentage-button");
  let customBtn = document.querySelector(".custom-btn");
  let tipAmount = document.querySelector(".tip-amount");
  let numbOfPeople = document.querySelector(".numbOfPeople");
  let totalAmount = document.querySelector(".total-amount");
  let numbOfPeopleValue = 1;
  let selectedButton = null;
  let totalTip = 0;
  let timeoutId;
  let errMsg = document.querySelector(".cantBeAZero");
  let resetBtn = document.querySelector(".reset-button");



  calculatorInput.addEventListener("input", function () {
    resetBtn.classList.remove("bg-teal-700", "text-opacity-20");
    resetBtn.classList.add("bg-strongCyan");
    inputValue = calculatorInput.value;
  });

  customBtn.addEventListener("input", function () {
     if(selectedButton) {
    selectedButton.classList.remove("bg-strongCyan", "text-veryDarkCyan");
    selectedButton.classList.add("bg-veryDarkCyan", "text-white");
     }// Change the color of the previously selected button back to verydark
    
      inputValue = parseFloat(calculatorInput.value);
    let customValue = parseFloat(customBtn.value);
    totalTip = (inputValue * customValue) / 100; // Calculate the total tip based on the custom input value
  });

  tipBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        // If there's a previously selected button, remove the "selected" classes from it
        if (selectedButton) {
            selectedButton.classList.add("bg-veryDarkCyan", "text-white");
            selectedButton.classList.remove("bg-strongCyan", "text-veryDarkCyan");
        }

        // Add the "selected" classes to the clicked button
        btn.classList.remove("bg-strongCyan", "text-veryDarkCyan");
        btn.classList.add("bg-veryDarkCyan", "text-white");

        // Update selectedButton to refer to the clicked button
        selectedButton = btn;

        inputValue = parseFloat(calculatorInput.value);
        let btnValue = parseFloat(btn.value);
        totalTip = (inputValue * btnValue) / 100;
    });
});


numbOfPeople.addEventListener("focus", function () {
    if (selectedButton) {
        selectedButton.classList.remove("bg-veryDarkCyan", "text-white");
        selectedButton.classList.add("bg-strongCyan", "text-veryDarkCyan");
    }
});
  numbOfPeople.addEventListener("input", function () {
  
    clearTimeout(timeoutId); // Clear the previous timeout

    timeoutId = setTimeout(function () {
      
      if (numbOfPeople.value === "") {
        
        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
        return;
      }
      numbOfPeopleValue = parseFloat(numbOfPeople.value); 
      if (numbOfPeopleValue === 0) {
        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
        numbOfPeople.classList.remove(
          "border-veryLightGrayishCyan",
          "hover:border-strongCyan",
          "focus:border-strongCyan"
        ); // Remove the old border classes
        numbOfPeople.classList.add("border-orange-600");
         return errMsg.style.display = "block";
      } else {
        let tipPerPerson = totalTip / numbOfPeopleValue; 
        numbOfPeople.classList.add(
          "border-veryLightGrayishCyan",
          "hover:border-strongCyan",
          "focus:border-strongCyan"
        ); // Remove the old border classes
        numbOfPeople.classList.remove("border-orange-600"); //
       
        errMsg.style.display = "none";
        tipAmount.textContent = "$" + tipPerPerson.toFixed(2); 
        let total = tipPerPerson + inputValue / numbOfPeopleValue; 
        totalAmount.textContent = "$" + total.toFixed(2); 
       
      }
    }, 500); // Wait 500 milliseconds before performing the calculations and updating the display
  });

//   calculatorInput.addEventListener("input", function () {
//      resetBtn.classList.remove("bg-[teal-700]", "text-opacity-20");
//     resetBtn.classList.add("bg-[strongCyan]");
    
//     inputValue = calculatorInput.value;
// });

resetBtn.addEventListener("click", function () {
    if (selectedButton) {
        selectedButton.classList.add("bg-veryDarkCyan", "text-white");
        selectedButton.classList.remove("bg-strongCyan", "text-veryDarkCyan");
    }
    resetBtn.classList.remove("bg-strongCyan");
    resetBtn.classList.add("bg-teal-700", "text-opacity-20");
    calculatorInput.value = "";
    customBtn.value = "";
    numbOfPeople.value = "";
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    inputValue = 0;
    totalTip = 0;
    numbOfPeopleValue = 1;
    selectedButton = null;
    
    
    errMsg.style.display = "none";
    numbOfPeople.classList.remove(
      "border-veryLightGrayishCyan",
      "hover:border-strongCyan",
      "focus:border-strongCyan"
    );
    numbOfPeople.classList.remove("border-orange-600");
});
});
