<?php

$svgContent = htmlspecialchars($_POST['svgContent']);

$tempSvgFile = fopen("../images/inputs/temp.svg", "w") or die("Unable to open file!");

fwrite($tempSvgFile, $svgContent);

fclose($tempSvgFile);

//delete file from temporary folder
/*$fileToDelete = glob('../images/inputs/*');
foreach($fileToDelete as $file){ 
  if(is_file($file)) {
    unlink($file); 
  }
}*/


?>