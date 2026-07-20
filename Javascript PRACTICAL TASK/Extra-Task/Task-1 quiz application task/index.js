let quizData = [

    {
        question: "Whis language used for web Development?",
        options: ["C++", "Java", "HTML", "Fluter"],
        answer: 2
    },

    {
        question: "Who is the father of C and C++?",
        options: ["Dennis Jams", "Dennis Ritchie", "Charse bhabej", "Dennis Plifsh"],
        answer: 1
    },

    {
        question: "React.js: State Management ?",
        options: ["useState()", "useMemo()", "useEffect()", "useCallback()"],
        answer: 0
    },

    {
        question: "Which of the following is primarily used in React to improve application performance and optimize the rendering process?",
        options: ["Real Dom", "Virtul Dom", "Shadow Dom", "useState"],
        answer: 1
    },

    {
        question: "Which of the following cyber threats relies heavily on psychological manipulation and deceptive communication to trick users into providing sensitive information like passwords or bank details?",
        options: ["DDoS Attack", " SQL Injection", "Cross-Site Scripting", "Phishing"],
        answer: 3
    }

]

console.log(quizData)

let currentQuestion = 0

let score = 0;

function loadQuestion() {

    document.getElementById("question").innerText = quizData[currentQuestion].question;

    document.getElementById("op1").innerText = quizData[currentQuestion].options[0];

    document.getElementById("op2").innerText = quizData[currentQuestion].options[1];

    document.getElementById("op3").innerText = quizData[currentQuestion].options[2];

    document.getElementById("op4").innerText = quizData[currentQuestion].options[3];

}

loadQuestion();

document.getElementById("btnSub").addEventListener("click", function (quizData) {

    let answer = document.getElementsByName("answer");

    let selected = -1;

    for (let i = 0; i < answer.length; i++)

        if (answer[i].checked) {
            selected = Number(answer[i].value);
        }

    if (selected == -1) {
        alert("Please Select Answer")
    }

    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion()
        for (let i = 0; i < answer.length; i++) {
            answer[i].checked = false;
        }
    }

    else {
        document.body.innerHTML = `
        <h1>Quiz Finished</h1>
        <h2>Quiz Score : ${score}/${quizData.length}</h2>
        `
    }
    loadQuestion();

})



loadQuestion();

