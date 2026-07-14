let btnAnalysis = document.getElementById("btnAnalysis")

btnAnalysis.addEventListener("click", function () {

    let text = document.getElementById("text").value;

    let characterCount = text.length;

    let words = text.trim().split("");

    let wordCount = 0;

    if (text.trim() !== "") {
        wordCount = words.length;
    }

    document.getElementById("character").innerHTML = characterCount;
    document.getElementById("words").innerHTML = wordCount;

    let frequency = {};

    for (let i = 0; i < words.length; i++) {

        let word = words[i].toLowerCase();

        if (frequency[word]) {

            frequency[word]++;

        } else {

            frequency[word] = 1;

        }

    }

    let result = "";

    for (let key in frequency) {

        result += key + " : " + frequency[key] + "<br>";

    }

    document.getElementById("frequency").innerHTML = result;


})

