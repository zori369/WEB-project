const uploadForm=document.getElementById("svg_upload_form");
const inputFile = document.getElementById("actual-btn")

//Upload and place file in the editor
uploadForm.addEventListener("input", e => {
    e.preventDefault();

    const endpoint = "src/get-file-content.php";
    const formData = new FormData();
    const canvas = document.getElementById("edit_canvas");      

    
        formData.append("inputFile", inputFile.files[0]);
        
        fetch(endpoint, {
            method: "post", 
            body: formData
        }).then(response => {
            if(response.ok) {
                response.text().then(function (text) {
                    let svgContent = text;
                document.getElementById("edit_canvas").innerHTML = svgContent;
                console.log('file uploaded: ' + text);
                  });
        }
    }).catch(console.error);

});

function displayButton(){
    const buttons = document.getElementsByClassName("buttons__element");
    for (var k = 0; k<buttons.length; k++){
        var b = buttons[k];
        buttons[k].addEventListener('click', function(e) {
            console.log(e);
            buttons[k].nextElementSibling.classList.toggle("has-flag");
        })
    }
}

displayButton();

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}