<?php
//save file to temp directory 
$targetPath = "../images/inputs/" . basename($_FILES["inputFile"]["name"]);
move_uploaded_file($_FILES["inputFile"]["tmp_name"], $targetPath);

//append file to html 
$fileContents = file_get_contents($targetPath);
echo $fileContents;

//delete file from temporary folder
$fileToDelete = glob('../images/inputs/*');
foreach($fileToDelete as $file){ 
  if(is_file($file)) {
    unlink($file); 
  }
}
?>