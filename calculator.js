// function add(val1, val2)
// {
//     let num1 = Number(val1);
//     let num2 = Number(val2);
//     result = num1 + num2;
//     console.log("Input Values");
//     console.log(typeof num1);
//     console.log(typeof num2);
//     console.log("Result");
//     console.log(result);

//     // document DOM
//     let resultElement = document.getElementById('result');
//     console.log(resultElement);
//     resultElement.innerText = `The result of addition is ${result}`;
//     resultElement.style = 'color:red';
// }

// function multiply(val1, val2)
// {
//     let num1 = Number(val1);
//     let num2 = Number(val2);
//     result = num1 * num2;
//     console.log("Input Values");
//     console.log(typeof num1);
//     console.log(typeof num2);
//     console.log("Result");
//     console.log(result);

//     // document DOM
//     let resultElement = document.getElementById('result');
//     console.log(resultElement);
//     resultElement.innerText = `The result of multiplication is ${result}`;
// }

function addHTMLElement()
{
    let num1 = Number(document.getElementById('input1').value);
    let num2 = Number(document.getElementById('input2').value);

    // let num1 = Number(val1);
    // let num2 = Number(val2);
    result = num1 + num2;
    console.log("Input Values");
    console.log(typeof num1);
    console.log(typeof num2);
    console.log("Result");
    console.log(result);

    // document DOM
    let resultElement = document.getElementById('result');
    console.log(resultElement);
    resultElement.innerText = `The result of addition is ${result}`;
    resultElement.style = 'color:red';
}

function calculate(val1, val2)
{
    let num1 = Number(val1);
    let num2 = Number(val2);
    let result = 0;
    const errText = 'INVALID_OPERAND';

    // Operand Input
    // Based on my Operand - Decide what I should do
    // Addition or Subtraction or Multiplication or Division

    // document DOM
    let operand = document.getElementById('input3').value;

    if (operand === '+')
    {
        result = add(num1, num2);
    } else if (operand === '-')
    {
        result = subtract(num1, num2);
    } else if (operand === '*')
    {
        result = multiply(num1, num2);
    } else if (operand === '/')
    {
        result = division(num1, num2);
    } else
    {
        result = errText;
    }

    // document DOM
    let resultElement = document.getElementById('result');
    resultElement.innerText = (result === errText) ? `ERROR - ${result}` : `The result is ${result}`;
    resultElement.style = (result === errText) ? 'color:red' : 'color:blue';
}

function add(val1 , val2)
{
    return val1 + val2;
}

function multiply(val1 , val2)
{
    return val1 * val2;
}

function subtract(val1 , val2)
{
    return val1 - val2;
}

function division(val1 , val2)
{
    return val1 / val2;
}