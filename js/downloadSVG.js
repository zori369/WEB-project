const downloadButton = document.getElementById("download_btn");

downloadButton.addEventListener("click", e => {

  console.log(document.getElementById('edit_canvas').innerHTML)
  const svgContent = document.getElementById('edit_canvas').innerHTML

const endpoint = "src/download-svg.php";
  const formData = new FormData();
  
      formData.append("svgContent", svgContent);
      
      fetch(endpoint, {
          method: "post", 
          body: formData
      }).then(response => {
        console.log(response)
          /*if(response.ok) {
              response.text().then(function (text) {
                  let svgContent = text;
              canvas.innerHTML = svgContent;
              console.log('file uploaded: ' + text);
                });
      }*/
  }
  ).catch(console.error);

  /*var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", fileName);
  a.click();
*/
});
