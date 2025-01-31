
//take input, check if it is a valid input (all numbers) and check what operator is selected and calculate the output

function stealInputAndCalc() {
    // Get the input value
    let firstVal = parseInt(document.getElementById("inputOne").value);
    let secondVal = parseInt(document.getElementById("inputTwo").value);
    let opSelector = document.getElementById("opSelector").value;
    // Display the input value
    let outputlol = document.getElementById("output");

    if (!isNaN(firstVal) && !isNaN(secondVal)) {
        if (opSelector === "+" ) {
            outputlol.innerText = firstVal + secondVal;
        } 
        else if (opSelector === "-" ) {
            outputlol.innerText = firstVal - secondVal;
        } 
        else if (opSelector === "*" ) {
            outputlol.innerText = firstVal * secondVal;
        } 
        else {
            if (secondVal === 0) {
                outputlol.innerText = "Don't even think about it.";
            } else {
                outputlol.innerText = firstVal / secondVal;
            }
        }
    } else {
        outputlol.innerText = "Please enter a valid number!";
    }
}
function setActive() {
    const outputCont = document.getElementById("outputCont");
    outputCont.classList.add("active");

}

function clicky() {
    setActive();
    stealInputAndCalc();
}
document.getElementById("submit").addEventListener("click", clicky);
