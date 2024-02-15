let age = document.getElementById("age");
const male = document.getElementById("male");
const female = document.getElementById("female");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
const sumbit = document.getElementById("sumbit");
let finall = document.getElementById("finall");
let answer = document.getElementById("answer");
const gender = document.getElementById("sex");
sumbit.addEventListener("click", function () {
  let bmi = weight.value / ((height.value * height.value) / 10000).toFixed(2);
  finall.value = bmi;
  if (weight.value <= 0 || height.value <= 0 || age.value <= 0 ) {
    alert('compelete the details with correctly anwers');
  } else {
    finall.innerText = finall.value.toFixed(2);
    if (bmi < 18.5) {
      answer.innerText = "you are underweight";
    } else if (bmi > 18.5 && bmi < 24.5) {
      answer.innerText = "you are normal";
    } else if (bmi > 25) {
      answer.innerText = "you are overweight";
    }
  }
});
