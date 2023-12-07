const quizlist = [
  {
    title: " Q.1) What is the full form of HTML?",
    a: "Hello To my Land.",
    b: "Hey To my Land.",
    c: "Hyper  Text  Markup Land.",
    d: "Hyper Text Markup Language.",
    ans: "fourth",
  },

  {
    title: " Q.2) What is the full form of CSS?",
    a: "Cat Styling sheet.",
    b: "Car Styling sheet.",
    c: "Cascading Styling sheet.",
    d: "Court Styling sheet.",
    ans: "third",
  },
  {
    title: " Q.3) What is the full form of HTTP?",
    a: "Hello To The Product.",
    b: "Hey To The Pencil.",
    c: "Hyper Text Transfer Protocol.",
    d: "Hyper Text Text Protocol.",
    ans: "third",
  },
  {
    title: " Q.4) What is the full form of JS?",
    a: "Java Science.",
    b: "Java Soft.",
    c: "Java Script.",
    d: "JavaScripts.",
    ans: "third",
  },

  {
    title: " Q.5) What is the function of console.log in JS?",
    a: "write something on web page.",
    b: "write something on browser.",
    c: "Both a & b.",
    d: "None of the above.",
    ans: "second",
  },

  {
    title: " Q.6) Name the three fundamental languages of web development?",
    a: "XML, java, python.",
    b: "Java, Javascript,Python.",
    c: "React, Redux, J-Queary.",
    d: "Javascript, CSS, HTML.",
    ans: "fourth",
  },

  {
    title: " Q.7) Is Java is also known as Javascript same?",
    a: "Absolutely Not.",
    b: "Yes.",
    c: "Fifty-Fifty.",
    d: "None of the above.",
    ans: "first",
  },

  {
    title: " Q.8) Where the React.js use in the following options",
    a: "Full Stack Development.",
    b: "Frontend development.",
    c: "Backend development.",
    d: "No, it is not use in the above options.",
    ans: "second",
  },

  {
    title: " Q.9) Node.js is basically for?",
    a: "Full stack Development.",
    b: "Frontend development.",
    c: "Backend development.",
    d: "No, it is not use in the above options.",
    ans: "third",
  },

  {
    title: " Q.10) Which of the following are the frameworks of CSS?",
    a: "Next/Express.",
    b: "Bootstrap.",
    c: "tailwind.",
    d: " Both b & c.",
    ans: "fourth",
  },
];

const question = document.querySelector(".question");

const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");
const submit = document.querySelector("#submit_btn");
const answers = document.querySelectorAll(".answer");
const next = document.getElementById("next");

let questionCount = 0;
let score = 0;

function loadQuestion() {
  question.innerHTML = quizlist[questionCount].title;
  option1.innerHTML = quizlist[questionCount].a;
  option2.innerHTML = quizlist[questionCount].b;
  option3.innerHTML = quizlist[questionCount].c;
  option4.innerHTML = quizlist[questionCount].d;
}
loadQuestion();

function getcheckAnswer() {
  var answerId;
  answers.forEach((item) => {
    if (item.checked) {
      item.checked = '';
      answerId = item.id;
    }
  });
  return answerId;
}

submit.addEventListener("click", () => {
  var Check_Answer = getcheckAnswer();
  console.log(Check_Answer);
  // checking the answers:
  if (Check_Answer === quizlist[questionCount].ans) {
    console.log(" Correct Answer.");
    score++;
    console.log(" Your score is = " + score);
  } else {
    console.log(" Wrong Answer.");
    console.log(" Your score is = " + score);
  }

  questionCount++;
  if (questionCount < quizlist.length) {
    loadQuestion(); // Its simply calling the above defined loadQuestion function.
  }

  if (questionCount == quizlist.length) 
  {
    var result = document.getElementById("showscore");
    var message = document.getElementById('msg');

    if(score <= (quizlist.length / 2))
    {
      result.style.display = "block";
      message.style.display = "block";
      message.style.color = "white";
      message.style.fontSize = "25px";
      message.style.fontWeight = "bold";
      result.innerHTML = "<h3> Your total score is = " + score + "/" + quizlist.length + "<br />"+
      "<button class='btn' onclick = 'location.reload()'>Restart</button> <br/>";
      message.innerText = "That's a very bad result. You have to work hard for achieving good marks.";
      submit.style.display = "none";
    }
    else
    {

      result.style.display = "block";
      result.innerHTML =
      "<h3> Your total score is = " + score + "/" + quizlist.length +
      "<br />" + " Absolutely bravo!!. Ma Sha Allah, Keep it up and be consistent. <br/> "+
      "<button class='btn' onclick = 'location.reload()'>Restart</button>";
       submit.style.display = "none";
    }
}



  
});

// function nextQuestion()
// {
//   questionCount++;
//   loadQuestion();
// }

// A function for getting an answer
// const getAnswer = () => {
//   let answerId;
//   answers.forEach((current_element) => {
//     if (current_element.checked) {
//       answerId = current_element.id;
//     }
//   });
//   //    yahan pa islia lagyaa hai ka hamain akhir mai wo id returm kra na ka hr dafa krta chla jai loop mai
//   if (answerId == quizlist[0].ans) {
//     console.log("Awesome, Your answer is right.");
//   } else {
//     console.log("Not a right answer.");
//   }
//   return answerId;
// };
// submit.addEventListener("click", () => {
//   const Check_Answer = getAnswer();
//   console.log(Check_Answer);
// });
