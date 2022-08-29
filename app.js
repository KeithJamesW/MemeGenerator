const memeForm = document.getElementById("memeGen");
const upperText = document.getElementById("upperText");
const lowerText = document.getElementById("lowerText");
const imageUrl = document.getElementById("imageURL");
const div = document.createElement("div");
let memeCanvas = document.querySelector(".memeCanvas");



function submitForm(event) {
    event.preventDefault();
    console.log("Submitted!", upperText.value, lowerText.value, imageUrl.value); 
    addMeme(imageUrl.value, upperText.value, lowerText.value);
   
        // const container = document.createElement("div");
        // container.innerHTML = "<img src ='${imageUrl.value}'/>";
        // document.getElementsByClassName("memeCanvas").appendChild(container);
    //   }
    event.target.reset();

}


function addMeme(imgUrl, upperText, lowerText) {
    console.log(memeCanvas);

    let memeDiv = document.createElement('div');
    memeDiv.classList.add("newMeme");
    
    let hUpper = document.createElement('h3');
    hUpper.classList.add("memeUpper")
    hUpper.innerText = upperText;
    memeDiv.appendChild(hUpper);
    console.log(hUpper);
    
    let hLower = document.createElement('h3');
    hLower.classList.add("memeLower")
    hLower.innerText = lowerText;
    memeDiv.appendChild(hLower);
    console.log(hLower);

    let img = document.createElement('img');
    img.classList.add("memeImg");
    img.src = imgUrl;
    memeDiv.appendChild(img);
    console.log(img);
    
    memeCanvas.appendChild(memeDiv);
}
memeForm.addEventListener("submit", submitForm);