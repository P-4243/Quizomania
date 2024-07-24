const quizData = [{
  question: "What type of electromagnetic radiation has the shortest wavelength?",
  a: "X-rays",
  b: " Ultraviolet rays",
  c: "Visible light",
  d: " Gamma rays",
  correct: "d",
},
{
  question: "What is the pH level of pure water?",
  a: "5",
  b: "6",
  c: "7",
  d: "8",
  correct: "c",
},
{
  question: "Who proposed the theory of general relativity?",
  a: "Isaac Newton",
  b: "Niels Bohr",
  c: "Albert Einstein",
  d: "Galileo Galilei",
  correct: "c",
},
{
  question: "What is the function of ribosomes in a cell?",
  a: "Energy production",
  b: " Protein synthesis",
  c: "Lipid production",
  d: "DNA replication",
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