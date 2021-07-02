const generalButton = document.getElementById("general_btn");
const rotateButton = document.getElementById("rotate_btn");
const skewButton = document.getElementById("skew_btn");
const translateButton = document.getElementById("translate_btn");

const generalCloseButton = document.getElementById("general_close");
const rotateCloseButton = document.getElementById("rotate_close");
const skewCloseButton = document.getElementById("skew_close");
const translateCloseButton = document.getElementById("translate_close");




generalButton.addEventListener("click", e => {
    document.getElementById("general_modal").style.display = "block";
})
generalCloseButton.addEventListener("click", e => {
    document.getElementById("general_modal").style.display = "none";
})

rotateButton.addEventListener("click", e => {
    document.getElementById("rotate_modal").style.display = "block";
})
rotateCloseButton.addEventListener("click", e => {
    document.getElementById("rotate_modal").style.display = "none";
})

skewButton.addEventListener("click", e => {
    document.getElementById("skew_modal").style.display = "block";
})
skewCloseButton.addEventListener("click", e => {
    document.getElementById("skew_modal").style.display = "none";
})

translateButton.addEventListener("click", e => {
    document.getElementById("translate_modal").style.display = "block";
})
translateCloseButton.addEventListener("click", e => {
    document.getElementById("translate_modal").style.display = "none";
})




// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }