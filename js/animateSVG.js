const durationButton = document.getElementById("duration");

durationButton.addEventListener("change", e => {

    let duration = durationButton.value;
    let svgToEdit = document.getElementsByTagName("svg").item(0);

    let styleElement = document.getElementsByTagName("style").item(0);

    if(styleElement){
        console.log('yess')

        let styleContent = styleElement.innerHTML;
        let updatedStyle = styleContent.replace(/animation-duration:.*[0-9]s/g , `animation-duration: ${duration}s`);

        svgToEdit.removeChild(styleElement);
        svgToEdit.innerHTML += `<style> ${updatedStyle} </style>`;

    } else {
        console.log('sryy')
        svgToEdit.innerHTML += `<style> svg {animation-name: svg;animation-duration: ${duration}s;animation-iteration-count: infinite;}@keyframes svg { 0% { transform: rotate(0deg); }} </style>`;
    }
 
})

document.getElementById("add_rotate_selector_btn").addEventListener("click", e => {
    const rotateMenu = document.getElementById("rotate_menu");

    rotateMenu.innerHTML += "<div id='rotate_selector_form'>" + 
   "<div class='flex-row'>"  +
    "<label for='rotate_moment'>Moment in %: </label>" + 
       "<input type='number' id='rotate_moment' name='rotate_moment' min='0' max='100' value='0'>" +
    "</div>" + 
    "<div class='flex-row'>"+
        "<label for='rotate_slider'>Degrees: </label>" + 
        "<input type='number' min='0' max='360' value='0' id='rotate_degrees'>" + 
    "</div>" + 
    "<div>" + 
        "<button id='add_rotate_btn'>Add</button>" +
    "</div> </div>"

     document.getElementById("add_rotate_btn").addEventListener('click', e => {
        const moment = document.getElementById("rotate_moment").value;
        const degrees = document.getElementById("rotate_degrees").value;
        let svgToEdit = document.getElementsByTagName("svg").item(0);


        let styleElement = document.getElementsByTagName("style").item(0);
        
        if(styleElement){
             console.log('yess rot')
             
             let styleContent = styleElement.innerHTML;

             let sameMomentKeyFrame = `@keyframes svg {.*${moment}% `;
             let sameMomentExists = styleContent.match(new RegExp(sameMomentKeyFrame));

             let updatedStyle = '';
             if(sameMomentExists){
                let stringToReplace = styleContent.match(`${moment}% {[^}]+ } `);
                let replacement = `${moment}% { transform: rotate(${degrees}deg); } `;

                updatedStyle = styleContent.replace(stringToReplace, replacement).replaceAll('/', '');
             } else {
                 let keyFrames = styleContent.match(`@keyframes svg { .* }}`);
                 let kfString = JSON.stringify(keyFrames)

                 let updatedKeyFrames = `${kfString.substring(2, kfString.length -3)} ${moment}% {transform: rotate(${degrees}deg); }}`;

                 updatedStyle = styleContent.replace(keyFrames, updatedKeyFrames);
             }

             svgToEdit.removeChild(styleElement);
             svgToEdit.innerHTML += `<style> ${updatedStyle} </style>`; 
            
            } else {
                console.log('sryy rot')
                svgToEdit.innerHTML += `<style> svg {animation-name: svg;animation-duration: 0s;animation-iteration-count: infinite;}@keyframes svg { ${moment}% { transform: rotate(${degrees}deg); }} </style>`;
            }

     })

})

document.getElementById("add_skew_selector_btn").addEventListener("click", e => {
    const rotateMenu = document.getElementById("skew_menu");

    rotateMenu.innerHTML += "<div id='skew_selector_form'>" + 
   "<div class='flex-row'>"  +
    "<label for='skew_moment'>Moment in %: </label>" + 
       "<input type='number' id='skew_moment' name='skew_moment' min='0' max='100' value='0'>" +
    "</div>" + 
    "<div class='flex-row'>"+
        "<label for='skew_slider'>Degrees: </label>" + 
        "<input type='number' min='0' max='360' value='0' id='skew_degrees'>" + 
    "</div>" + 
    "<div>" + 
        "<button id='add_skew_btn'>Add</button>" +
    "</div> </div>"

     document.getElementById("add_skew_btn").addEventListener('click', e => {
        const moment = document.getElementById("skew_moment").value;
        const degrees = document.getElementById("skew_degrees").value;
        let svgToEdit = document.getElementsByTagName("svg").item(0);


        let styleElement = document.getElementsByTagName("style").item(0);
        
        if(styleElement){
             console.log('yess rot')
             
             let styleContent = styleElement.innerHTML;

             let sameMomentKeyFrame = `@keyframes svg {.*${moment}% `;
             let sameMomentExists = styleContent.match(new RegExp(sameMomentKeyFrame));

             let updatedStyle = '';
             if(sameMomentExists){
                 let stringToReplace = styleContent.match(`${moment}% {[^}]+ } `);
                 console.log(stringToReplace)
                 let replacement = `${moment}% { transform: skew(${degrees}deg); } `;
                 console.log('repl' + replacement)

                 updatedStyle = styleContent.replace(stringToReplace, replacement).replaceAll('/', '');
                 console.log(updatedStyle)
             } else {
                 let keyFrames = styleContent.match(`@keyframes svg { .* }}`);
                 let kfString = JSON.stringify(keyFrames)

                 let updatedKeyFrames = `${kfString.substring(2, kfString.length -3)} ${moment}% { transform: skew(${degrees}deg); }}`;

                 updatedStyle = styleContent.replace(keyFrames, updatedKeyFrames);
             }

             svgToEdit.removeChild(styleElement);
             svgToEdit.innerHTML += `<style> ${updatedStyle} </style>`; 
            
            } else {
                console.log('sryy rot')
                svgToEdit.innerHTML += `<style> svg {animation-name: svg;animation-duration: 0s;animation-iteration-count: infinite;}@keyframes svg { ${moment}% { transform: skew(${degrees}deg); }} </style>`;
            }

     })

})

document.getElementById("add_translate_selector_btn").addEventListener("click", e => {
    const rotateMenu = document.getElementById("translate_menu");

    rotateMenu.innerHTML += "<div id='translate_selector_form'>" +
    "<div class='flex-row'>"+ 
     "<label for='translate_moment'>Moment (%): </label>" +
        "<input type='number' id='translate_moment' name='skew_moment' min='0' max='100' value='0'>" +
     "</div>" +
     "<div class='flex-row'>" +
         "<label for='translate_slider'>From (%): </label>" +
         "<input type='number' min='0' max='100' value='0' id='translate_from'>"+
    "</div>" +
     "<div class='flex-row'>"+
        "<label for='translate_slider'>To (%): </label>"+
        "<input type='number' min='0' max='100' value='0' id='translate_to'>" +
    "</div>"+
     "<div>"+
         "<button id='add_translate_btn'>Add</button>" + 
     "</div></div>";

     document.getElementById("add_translate_btn").addEventListener('click', e => {
        const moment = document.getElementById("translate_moment").value;
        const from = document.getElementById("translate_from").value;
        const to = document.getElementById("translate_to").value;
        let svgToEdit = document.getElementsByTagName("svg").item(0);

        let styleElement = document.getElementsByTagName("style").item(0);
        
        if(styleElement){
             console.log('yess rot')
             
             let styleContent = styleElement.innerHTML;
             console.log(styleContent)
             let sameMomentKeyFrame = `@keyframes svg {.*${moment}% `;
             let sameMomentExists = styleContent.match(new RegExp(sameMomentKeyFrame));
             console.log('kffff' + sameMomentKeyFrame)

             let updatedStyle = '';
             if(sameMomentExists){
                 let stringToReplace = styleContent.match(`${moment}% {[^}]+ } `);
                 console.log(stringToReplace)
                 let replacement = `${moment}% { transform: translate(${from}%,${to}%); } `;
                 console.log('repl' + replacement)

                 updatedStyle = styleContent.replace(stringToReplace, replacement).replaceAll('/', '');
                 console.log(updatedStyle)
             } else {
                 let keyFrames = styleContent.match(`@keyframes svg { .* }}`);
                 let kfString = JSON.stringify(keyFrames)

                 let updatedKeyFrames = `${kfString.substring(2, kfString.length -3)} ${moment}% { transform: translate(${from}%,${to}%); }}`;

                 updatedStyle = styleContent.replace(keyFrames, updatedKeyFrames);
             }

             svgToEdit.removeChild(styleElement);
             svgToEdit.innerHTML += `<style> ${updatedStyle} </style>`; 
            
            } else {
                console.log('sryy rot')
                svgToEdit.innerHTML += `<style> svg {animation-name: svg;animation-duration: 0s;animation-iteration-count: infinite;}@keyframes svg { ${moment}% { transform: translate(${from}%,${to}%); }} </style>`;
            }

     })

})


