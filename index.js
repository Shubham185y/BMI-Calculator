function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
}

const count = document.querySelector(".actualage");
var age = 15;
count.innerHTML = age;

function plus() {
  age++;
  count.innerHTML = age;
}
function minus() {
  if (age < 2) {
    age = 1;
  } else {
    age = age - 1;
  }
  count.innerHTML = age;
}

const weightcount = document.querySelector(".actualweight");
var weight = 40;
weightcount.innerHTML = weight;

function weightplus() {
  weight++;
  weightcount.innerHTML = weight;
}
function weightminus() {
  if (weight < 3) {
    weight = 2;
  } else {
    weight = weight - 1;
  }
  weightcount.innerHTML = weight;
}

function showresult() {
  var lambai = parseInt(document.getElementById("height").value);
  var wajan = weight;
  let bmi = parseInt((wajan / ((lambai * lambai) / 10000)).toFixed(2));
  alert("BMI is : " + bmi);
}
