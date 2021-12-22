function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  const bmi = weight / (((height / 100) * height) / 100);
  alert(`I am ${bmi}`);

  if (bmi < 18.5) {
    alert(`you're under weight`);
  } else if (bmi < 24.9) {
    alert(`healthy weight`);
  } else if (bmi < 29.9) {
    alert(`over weight`);
  } else {
    alert(`over Obsity`);
  }

  // are going to write the code here before the curly braces 👇🏻
}
/*
Bolean operation 
> 
< 
== 
!= 
>= 
<= 

LHS * RHS
5 < 8
__ * __ 
*/

if (age > 19 && age < 24) {
  alert(`youre bmi ${bmi} and youre Underweight`);
}
if (age > 25 < 34) {
  alert(`youre bmi ${bmi} and youre Healthy`);
}

if (age > 35 < 44) {
  alert(`youre bmi ${bmi} and youre overweight`);
}
if (age > 45 > 54) {
  alert(`youre bmi ${bmi} and youre obsity`);
}
if (age > 55 > 64) {
  alert(`youre bmi ${bmi} `);
} else {
  alert(`youre bmi ${bmi} and you're just old`);
}
