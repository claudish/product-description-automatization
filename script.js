
document.addEventListener("DOMContentLoaded", function(event) {
 ClassicEditor
    .create(document.querySelector('.ckeditor'))
});
var sectionsCounter = 1;


function convertText() {
    document.getElementById("textarea").innerHTML = "";
    for (var i = 1; i <= sectionsCounter; i++) {
        var sec = document.getElementById("section-" + i);
        convertSection(sec);
    }
}

function convertSection(section) {
    var header = section.getElementsByClassName("header")[0];
    var h2 = document.createElement("h2");
    h2.textContent = header.value;
    console.log(h2.innerHTML);
    document.getElementById("textarea").innerHTML += h2.outerHTML;
    var paragraph = section.getElementsByClassName("ck-editor__editable")[0].ckeditorInstance;
    document.getElementById("textarea").innerHTML += paragraph.getData();
    var image = section.getElementsByClassName("image")[0];
    var img = document.createElement("img");
    img.src = image.value;
    document.getElementById("textarea").innerHTML += img.outerHTML;
}


function addMore() {
    var sections = document.getElementById("sections");
    var section1Clone = document.getElementById("section-1").cloneNode(true);
    section1Clone.id = "section-" + ++sectionsCounter;
    section1Clone.getElementsByClassName("ck")[0].remove();
    ClassicEditor.create(section1Clone.querySelector('.ckeditor'));
  
  sections.appendChild(section1Clone);
    var input = section1Clone.getElementsByTagName("input");
    
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";

}
