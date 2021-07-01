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
                canvas.innerHTML = svgContent;
                console.log('file uploaded: ' + text);
                  });
        }
    }).catch(console.error);

});

