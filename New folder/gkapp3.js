const quizData = [{
  question: "Which Nobel Prize-winning scientist discovered the neutron?",
  a: "Niels Bohr",
  b: " James Chadwick",
  c: "Albert Einstein",
  d: "Enrico Fermi",
  correct: "b",
},
{
  question: "Who was the first woman to win a Nobel Prize?",
  a: "Rosalind Franklin",
  b: "Marie Curie",
  c: "Ada Lovelace",
  d: "Jane Goodall",
  correct: "b",
},
{
  question: "Which planet in our solar system has the most moons?",
  a: "Mars",
  b: " Earth",
  c: "Jupiter",
  d: "Saturn",
  correct: "c",
},
{
  question: "Who is known as the 'Missile Man of India'?",
  a: "Vikram Sarabhai",
  b: " Dr. A.P.J. Abdul Kalam",
  c: "Rakesh Sharma",
  d: " Homi J. Bhabha",
  correct: "b",
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