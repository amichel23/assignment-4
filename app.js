// // decalred the prices for the courses
const course1 = 4750;
const course2 = 3250;
const course3 = 1500;
const course4 = 4000;
const course5 = 3000;
const taxes = 0.065;
let total = [];
let result;
let practice;
let sum;

//grabbing input from checkbox to add too array and get total for classes
// having issues turning this into number to push into array (sum keeps showing undefined)
let checkMern = document.querySelector("input[name=mern]");
checkMern.addEventListener('change', function(){
    if (this.checked){
        let sum = mern();
        total.push(sum);
        console.log(sum);
    } else {
        console.log("mern not checked");
    }
});
let checkPython = document.querySelector("input[name=python]");
checkPython.addEventListener('change', function(){
    if (this.checked){
        total.push(python());
    } else {
        console.log("python not checked");
    }
});
let checkSql = document.querySelector("input[name=sql]");
checkSql.addEventListener('change', function(){
    if (this.checked){
        sql();
    } else {
        console.log("sql not checked");
    }
});
let checkJava = document.querySelector("input[name=java]");
checkJava.addEventListener('change', function(){
    if (this.checked){
        java();
    } else {
        console.log("java not checked");
    }
});
let checkOther = document.querySelector("input[name=other]");
checkOther.addEventListener('change', function(){
    if (this.checked){
        others();
    } else {
        console.log("other not checked");
    }
});
let submitButton = document.querySelector("input[type=submit]");
submitButton.addEventListener('click', function(){
    console.log('submit button was clicked.');
});
console.log(total);






// switch(practice){
//     case mern:
//         mern();
//     break;
//     case python:
//         python();
//     break;
//     case sql:
//         sql();
//     break;
//     case java:
//         java();
//     break;
//     case others:
//         others();
//     default:
//         console.log(practice);
        // };    






//functions to calcualte taxes for course

function mern(){
    result = Number((course1 * taxes) + course1);
    console.log(Number(result));
}

function python(){
    result = ((course2 * taxes) + course2);
    console.log(result);
}

function sql(){
    result = ((course3 * taxes) + course3);
    console.log(result);
}

function java(){
    result = ((course4 * taxes) + course4);
    console.log(result);
}

function others(){
    result = ((course5 * taxes) + course5);
    console.log(result);
}

//discount

// document.addEventListener('click', function(){
//     console.log("does this work at least?");
// });