let photos = [];


let photoUrl = document.getElementById("photoUrl");
let gallery = document.getElementById("gallery");

document.getElementById("addBtn").addEventListener("click", function () {

    let url = photoUrl.value;

    photos.push(url);

    displayPhotos();

    photoUrl.value = "";

});


function displayPhotos() {

    gallery.innerHTML = "";

    photos.forEach(function (photo, index) {

        gallery.innerHTML += `

        <div style="display:inline-block; margin:10px;">

            <img
                src="${photo}"
                width="150"
                height="150"
                onclick="showPhoto('${photo}')"
            >

            <br><br>

            <button onclick="deletePhoto(${index})">
                Delete
            </button>

        </div>

        `;

    });

}

function showPhoto(photo) {

    document.getElementById("modal").style.display = "block";

    document.getElementById("bigImage").src = photo;

}


document.getElementById("closeBtn").addEventListener("click", function () {

    document.getElementById("modal").style.display = "none";

});


function deletePhoto(index) {

    photos.splice(index, 1);

    displayPhotos();

}