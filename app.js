// // decalred the prices for the courses
const course1 = 4750;
const course2 = 3250;
const course3 = 1500;
const course4 = 4000;
const course5 = 3000;
const taxes = 0.065;
let total = [];
let courses = [];
let result;
let practice;
let sum = 0;

//math for courses and tax

const mern = Number((course1 * taxes) + course1);
const python = Number((course2 * taxes) + course2);
const sql = Number((course3 * taxes) + course3);
const java = Number((course4 * taxes) + course4);
const other = Number((course5 * taxes) + course5);

//dom

const submit = document.getElementById('root');
const costResult = document.getElementById('result');
const courseResult = document.getElementById('course-list');


console.log(mern, python, sql, java, other);
console.log(total);

let checkMern = document.querySelector("input[name=mern]");
checkMern.addEventListener('change', function(){
    if (this.checked){
        let sum = mern
        total.push(mern);
        courses.push('mern ');
        console.log(mern);
    } else {
        console.log("mern not checked");
    }
});
let checkPython = document.querySelector("input[name=python]");
checkPython.addEventListener('change', function(){
    if (this.checked){
        let sum = python
        total.push(python);
        courses.push('python ');
        console.log(python);
    } else {
        console.log("python not checked");
    }
});
let checkSql = document.querySelector("input[name=sql]");
checkSql.addEventListener('change', function(){
    if (this.checked){
        let sum = sql
        total.push(sql);
        courses.push('sql ');
        console.log(sql);
    } else {
        console.log("sql not checked");
    }
});
let checkJava = document.querySelector("input[name=java]");
checkJava.addEventListener('change', function(){
    if (this.checked){
        let sum = java
        total.push(java);
        courses.push('Java ');
        console.log(java);
    } else {
        console.log("java not checked");
    }
});
let checkOther = document.querySelector("input[name=other]");
checkOther.addEventListener('change', function(){
    if (this.checked){
        let sum = other
        total.push(other);
        courses.push('Other Courses ');
        console.log(other);
    } else {
        console.log("other not checked");
    }
});
  function processForm(){
   let totalArr = (total[0 + 1 + 2 + 3 + 4]);
   const errText = 'INVALID_OPERAND';
   for (let i = 0; i < total.length; i++){
       sum += total[i];
       submit.addEventListener('submit',
       console.log(sum));
       console.log(courses);
       

   };
   costResult.innerText = (sum === errText) ? `ERROR - ${sum}` : `Your total is  ${sum}`;
   courseResult.innerText = (courses === errText) ? `ERROR - ${courses}` : `Your courses are  ${courses}`;

   };     

   




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

// function mern(){
//     result = Number((course1 * taxes) + course1);
//     console.log(Number(result));
// }

// function python(){
//     result = ((course2 * taxes) + course2);
//     console.log(result);
// }

// function sql(){
//     result = ((course3 * taxes) + course3);
//     console.log(result);
// }

// function java(){
//     result = ((course4 * taxes) + course4);
//     console.log(result);
// }

// function others(){
//     result = ((course5 * taxes) + course5);
//     console.log(result);
// }

//discount

// document.addEventListener('click', function(){
//     console.log("does this work at least?");
// });