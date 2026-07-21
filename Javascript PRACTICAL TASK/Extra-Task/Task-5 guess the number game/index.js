let result = document.getElementById("result")
let attempts = document.getElementById("attempts")

let random = Math.floor(Math.random() * 100 + 1);

let guess = 0;

document.getElementById("btn").addEventListener("click", function () {
    let num = Number(document.getElementById("num").value);

    if (num == random) {
        document.getElementById("result").innerHTML = `CONGRATULATIONS!!! YOU GUESSED NUMBER IS RIGHT IN ${guess} ATTEMPTS`;
        alert("CONGRATULATIONS!!! YOU GUESSED NUMBER IS RIGHT IN " + guess + " GUESS ");
    }

    else if (num > random) {
        guess++;
        document.getElementById("result").innerHTML = `Number is: Too Low`;
    }
    else {
        guess++;
         document.getElementById("result").innerHTML = `Number is: Too High`;
    }

    document.getElementById("attempts").innerHTML = `Attempts is: ${guess}`;
})

