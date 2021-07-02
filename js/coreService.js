const tagOptions = ['rect', 'circle', 'path', 'line', 'polygon'];

document.getElementById("save_btn").addEventListener("click" , e => {

    const formData = new FormData();
    const svg = {}
    const tags = []

    const svgContent = document.getElementById('edit_canvas').innerHTML;
    const style = document.getElementsByTagName("style").item(0)

    let styleContent = '';

    if(style) {
        styleContent = style.innerHTML
    } 

    svg["style"] = styleContent;

    let svgAttributes = svgContent.match(/<svg .*>/g)
    let attrString = JSON.stringify(svgAttributes);

    svg["attributes"] = attrString.substring(6, attrString.length -3);
    formData.append("svg", svg);

    let tagsTemp = [];

    const fullSvgObject = document.getElementsByTagName("svg").item(0);

    //get rectanlges
    const rects = fullSvgObject.getElementsByTagName("rect");

    for(let i = 0; i < rects.length; i++){
        tagsTemp[i] = rects.item(i);
    }

    //get circles
    const circles = fullSvgObject.getElementsByTagName("circle");

    for(let i = 0; i < circles.length; i++){
        tagsTemp.push(circles.item(i));
    }

    //get paths
    const paths = fullSvgObject.getElementsByTagName("path");

    for(let i = 0; i < paths.length; i++){
        tagsTemp.push(paths.item(i));
    }

    //get lines
    const lines = fullSvgObject.getElementsByTagName("line");

    for(let i = 0; i < lines.length; i++){
        tagsTemp.push(lines.item(i));
    }

    //get polygons
    const polygons = fullSvgObject.getElementsByTagName("polygons");

    for(let i = 0; i < polygons.length; i++){
        tagsTemp.push(polygons.item(i));
    }


    tagsTemp.forEach(tag => {
        let tagObj = {};

        let tagName = tag.tagName;

        let tmpAttrs = '';
        let attributes = tag.attributes;

        for(let i = 0; i < attributes.length; i ++) {
            let str = `${attributes[i].nodeName}=\"${attributes[i].value}\"`
            tmpAttrs = tmpAttrs + str + ' ';
        }

        tagObj["name"] = tagName;
        tagObj["attributes"] = tmpAttrs;

        tags.push(tagObj);
    })

    /*const url = '';
    var data = {}
    data["svg"] = svg;
    data["tags"] = tags;

    console.log(data)
    
    var json = JSON.stringify(data);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
*/
})