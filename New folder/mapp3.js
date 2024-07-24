const quizData = [{
  question: "A rectangular box has a length of 5cm and a width of 3cm.What is the area of the box ?",
  a: "8cm",
  b: "15cm",
  c: "(15cm)^2",
  d: "24cm",
  correct: "c",
},
{
  question: " What is the least common multiple (LCM) of 4 and 6?",
  a: "8",
  b: "10",
  c: "12",
  d: "14",
  correct: "c",
},
{
  question: "  What is 25% of 200 ?",
  a: "25",
  b: "50",
  c: "75",
  d: "100",
  correct: "b",
},
{
  question: "If x+3=7 , what is x??",
  a: "1",
  b: "3",
  c: "2",
  d: "4",
  correct: "d",
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