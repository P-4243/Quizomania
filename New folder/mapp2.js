const quizData = [{
  question: "What is the next prime number after 7?",
  a: "13",
  b: "11",
  c: "12",
  d: "14",
  correct: "b",
},
{
  question: " True or false? Opposite angles of a parallelogram are equal.",
  a: "True",
  b: "False",
  // c: "8",
  // d: "9",
  correct: "a",
},
{
  question: " 7 x 9 = ?",
  a: "56",
  b: "62",
  c: "63",
  d: "none of the above",
  correct: "c",
},
{
  question: "True or false? In an isosceles triangle all sides are unequal.",
  // a: "10",
  b: "False",
  c: "True",

  // d: "22",
  correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
  return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
  const data = quizData[index]
  const ans = getAnswer()
  if (ans === data.correct) {
      correct++;
  } else {
      incorrect++;
  }
  index++;
  loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
  (inputEl) => {
      if (inputEl.checked) {
          ans = inputEl.value;
      }
  }
)
return ans;
}

const reset = () => {
allInputs.forEach(
  (inputEl) => {
      inputEl.checked = false;
  }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
  <div class="col">
      <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
  </div>
  <div >
  <button type="submit" class="col2"><a href="index.html">Close</a></button>
  </div>
`
}
loadQuestion(index);