let input = document.getElementById("input").value
let demo = document.getElementById("demo")

document.getElementById("btn").addEventListener("click", function () {
    let input = document.getElementById("input").value

    timer = setInterval(function () {
        input--;

        document.getElementById("demo").innerHTML = `Countdown Time is : ${input}`;

        if (input === 0) {
            clearInterval(timer)
            document.getElementById("demo").innerHTML = `Time is:Finished`;
        }
       
    }, 1000);

})
