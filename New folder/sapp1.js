const quizData = [{
  question: "We breathe with the help of our ________ .?",
  a: "Heart",
  b: "Lungs",
  c: "Pancreas",
  d: "Muscles",
  correct: "b",
},
{
  question: " The covers of the eyes are called __________ .?",
  a: "Eyelids",
  b: "Nostrils",
  c: "Nails",
  d: "Hair",
  correct: "a",
},
{
  question: " The young one of a sheep is called a _______ .?",
  a: "Puppy",
  b: "Calf",
  c: "Lamb",
  d: "none of the above",
  correct: "c",
},
{
  question: "A frog is a ___________ .?",
  a: "Reptile",
  b: "Bird",
  c: "Amphibian",
  d: "22",
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