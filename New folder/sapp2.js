const quizData = [{
  question: "What is the powerhouse of the cell?",
  a: "Nucleus",
  b: " Mitochondria",
  c: " Ribosome",
  d: "Endoplasmic Reticulum",
  correct: "b",
},
{
  question: " What is the SI unit of electric current?",
  a: "Volts",
  b: "Ohm",
  c: "Ampere",
  d: "Watt",
  correct: "c",
},
{
  question: " What is the chemical formula for table salt?",
  a: "Na2CO3",
  b: "KCl",
  c: "NaCl",
  d: "MgSO4",
  correct: "c",
},
{
  question: "Which type of bond involves the sharing of electron pairs between atoms?",
  a: " Ionic bond",
  b: "Hydrogen bond",
  c: " Covalent bond",
  d: "Metallic bond",
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