let btn = document.getElementById("btn");


btn.addEventListener("click", createForm);


function createForm() {

    let form = document.getElementById("myForm");


    form.innerHTML = "";

    let number = Number(prompt("How many fields do you want?"));

    for (let i = 1; i <= number; i++) {

        let type = prompt("Enter field type (text / checkbox)");

        let label = document.createElement("label");

        label.innerHTML = "Field " + i + " : ";

        let input = document.createElement("input");

        input.type = type;


        let br = document.createElement("br");

        form.appendChild(label);

        form.appendChild(input);

        form.appendChild(br);

        form.appendChild(br);

    }

}