function Calculator() {
    let newline = "\r\n"
    let newLine = "\r\n"
    let msg = "Your Input is Incorrect."
    msg += newLine;

    let firstInput = parseInt(prompt("Enter your first number!"));
    let operator = prompt("Enter an operator!    e.g + - / * % ")
    let secondInput = parseInt(prompt("Enter your second number!"));
    
    if (operator === "+") {
        let addition = firstInput+secondInput;
        alert(`Your answer is ${addition}`)
        alert('You have performed ADDITION Operation. NB: MESSI is the REAL GOAT')
        
    } else if (operator === "-") {
        let subtraction = firstInput-secondInput;
        alert(`Your answer is ${subtraction}`)
        alert('You have performed SUBTRACTION Operation. NB: MESSI is the Best in Football History')

    } else if (operator === "/") {
        let division = firstInput/secondInput;
        alert(`Your answer is ${division}`)
        alert('You have performed DIVISION Operation. NB: MESSI is the only player with Most Record in Football history!')

    } else if (operator === "*") {     
        let multiplication = firstInput*secondInput;
        alert(`Your answer is ${multiplication}`)
        alert('You have performed MULTIPLICATION Operation.  NB: MESSI is the REAL GOAT!!! Please perform the Modulus Opertaion to get the last message.')
       
        
    } else if (operator === "%") {
        let modulus = firstInput%secondInput;
        alert(`Your answer is ${modulus}`)
        alert('You have performed MODULUS Operation.  NB: Now that you know MESSI is the REAL GOAT, kindly give me the full marks.... Thank You! lols')
    } else {
        alert(msg);
    }
} 

Calculator()