const uploadForm = document.getElementById("svg_uplaod_form")
const inputFile = document.getElementById("input_file")

//Preview file name
uploadForm.addEventListener("input", e => {
    e.preventDefault();

    const fileFullPath = inputFile.value;

    if (fileFullPath) {
        var startIndex = (fileFullPath.indexOf('\\') >= 0 ? fileFullPath.lastIndexOf('\\') : fileFullPath.lastIndexOf('/'));
        var fileName = fileFullPath.substring(startIndex);
        if (fileName.indexOf('\\') === 0 || fileName.indexOf('/') === 0) {
            fileName = fileName.substring(1);
        }
        document.getElementById("edit_canvas").innerHTML = `<span class="loaded_input"> ${fileName} </p>`;    
    }
});

//Upload and place file in the editor
uploadForm.addEventListener("submit", e => {
    e.preventDefault();

    const endpoint = "src/upload-file.php";
    const formData = new FormData();
    const canvas = document.getElementById("edit_canvas");      

    if(inputFile.files[0].type != "image/svg+xml") {
        console.log('You should upload .svg file!')
        canvas.innerHTML = '<span class="error"> Please upload a SVG file!</span>';

    } else {      
        formData.append("inputFile", inputFile.files[0]);
        
        fetch(endpoint, {
            method: "post", 
            body: formData
        }).then(response => {
            if(response.ok) {
                console.log('file uploaded: ' + inputFile.files[0]);
                loadFileInEditor(canvas, inputFile.files[0]);
       
        }
    }).catch(console.error);

}});

const loadFileInEditor = (canvas, file) => {   
    canvas.innerHTML = '<object id="svg_to_edit"> </object>';

    var objectElement = document.getElementById("svg_to_edit");
    objectElement.data = URL.createObjectURL(file);
    objectElement.onload = e => URL.revokeObjectURL(objectElement.data);

    console.log(document.getElementById("svg_to_edit").value)
}