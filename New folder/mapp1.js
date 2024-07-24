const quizData = [{
  question: "What is 1+1?",
  a: "1",
  b: "2",
  c: "0",
  d: "4",
  correct: "b",
},
{
  question: "What is 15-7?",
  a: "8",
  b: "6",
  c: "7",
  d: "9",
  correct: "a",
},
{
  question: "8*9=?",
  a: "48",
  b: "72",
  c: "63",
  d: "none of the above",
  correct: "b",
},
{
  question: "30/15=?",
  a: "3",
  b: "2.5",
  c: "2",
  d: "4",
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