const Calculator = {
    //this displays 0 on screen
    Display_Value: '0',
    //this will hold the first operand for any expressions and for now set to null
    First_Operand: null,
    //this checks wheter or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator, for now set to null
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //we are checking to see if second operand is true and set display value to key clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites the display value if the current value is 0 other wise it adds on to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
//this section handles decimal points
function Input_Decimal(dot) {
    //this ensures that accidental clicking of the decimal point
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that ifd the display value does not contain a decimal, we want to add one
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator} = Calculator
    //this will translate input and store the result in Calculator.first_operand
    const Value_of_Input = parseFloat(Display_Value);
    //this updates operator pending from input
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the perform calculation object and the function that matches
        // operator is executed
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//this function updates the screen with contents of Display Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element
    const { target } = event;
    //if the element that was clicked on is not a button
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Decimal(target.value);
    Update_Display();
})
