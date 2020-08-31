document.addEventListener("DOMContentLoaded", function(event) {
    ClassicEditor.create(document.querySelector('.ckeditor'))
});
var sectionsCounter = 1;
var sectionsIndexes = [1];

function convertText() {
    document.getElementById("textarea").innerHTML = `<style>
.panel-description {
        
		overflow-x: hidden;
    }
.desc-items1 {
        max-width: 1181px;
		margin:auto;
    }
    
    .desc-items1 * {
        box-sizing: border-box !important;
        margin-left: 0px;
        margin-right: 0px;
    }
    
    .desc-items1 p,
    li {
        font-size: 16px;
    }
    
    .desc-items1 img {
        max-width: 900px;
		max-height: 900px;
        border-radius: 30px;
    }
    
    .desc-items1 .image1 img {
        max-width: 900px;
		max-height: 900px;
        border-radius: 0px;
    }
    
    .desc-items1 i {
        font-size: 10px;
    }
    
    .desc-items1 h2 {
        font-size: 24px;
    }
    
    .videoWrapper {
        position: relative;
        padding-bottom: 56.25%;
        /* 16:9 */
        padding-top: 25px;
        height: 0;
        
    }
    
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    .desc-items1 iframe {
        border-radius: 30px !important;
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
    }
    
        @media only screen and (max-width: 1000px) {
        .desc-items1 img {
            max-width: 100%;
        }
         
    
    }
</style>\n`; 
    document.getElementById("textarea").innerHTML += `<div class="desc-items1">`;
    for (var i = 1; i <= sectionsIndexes.length; i++) {
        
    }
  sectionsIndexes.forEach(e => {
    var sec = document.getElementById("section-" + e);
        convertSection(sec);
  })
    document.getElementById("textarea").innerHTML += `</div>`;
}

function convertSection(section) {
    document.getElementById("textarea").innerHTML += `<div class="row">`;
    document.getElementById("textarea").innerHTML += `<div class="text1 col-sm-12 text-justify">`;
    var header = section.getElementsByClassName("header")[0];
    var h2 = document.createElement("h2");
    h2.style = "text-align: center;"
    h2.textContent = header.value;
  if (header.value) {
    document.getElementById("textarea").innerHTML += h2.outerHTML;
  }
    
    var paragraph = section.getElementsByClassName("ck-editor__editable")[0].ckeditorInstance;
    document.getElementById("textarea").innerHTML += paragraph.getData()
      .replace("<p", "<p style='text-align:justify'")
      .replace("<ul>", "<p style='text-align:justify'><ul>")
      .replace("</ul>", "</ul></p>")
    ;
    document.getElementById("textarea").innerHTML += `</div>`; // close text1 col-sm-12 text-justify
  
  
    var image = section.getElementsByClassName("image")[0];
    var img = document.createElement("img");
    img.src = image.value;
     if (image.value) {
          document.getElementById("textarea").innerHTML += `<div class="row">`;
  document.getElementById("textarea").innerHTML += `<div class="image col-sm-12 text-center" style="text-align: center;">`;
       document.getElementById("textarea").innerHTML;
   document.getElementById("textarea").innerHTML += `</div>`; // close image row
    document.getElementById("textarea").innerHTML += `</div>`; // close image col-sm-12 text-center
     }
    document.getElementById("textarea").innerHTML += `</div>`; // close row
 
  var image = section.getElementsByClassName("image")[0];
    var img = document.createElement("img");
    img.src = image.value;
if (image.value.includes("youtube.com")) {
  document.getElementById("textarea").innerHTML += `<div class="row">`;
document.getElementById("textarea").innerHTML += `<iframe width="900" height="506" src="${image.value}" frameborder="0" allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`;
document.getElementById("textarea").innerHTML += `</iframe>`; // close iframe
    document.getElementById("textarea").innerHTML += `</div>`; // close div
} else {
  
  
     if (image.value) {
          document.getElementById("textarea").innerHTML += `<div class="row">`;
  document.getElementById("textarea").innerHTML += `<div class="image col-sm-12 text-center" style="text-align: center;">`;
       document.getElementById("textarea").innerHTML += image.value;
   document.getElementById("textarea").innerHTML += `</div>`; // close image row
    document.getElementById("textarea").innerHTML += `</div>`; // close image col-sm-12 text-center
     }
    document.getElementById("textarea").innerHTML += `</div>`; // close row
}
}
function addMore() {
    var sections = document.getElementById("sections");
    var section1Clone = document.getElementById("section-1").cloneNode(true);
    section1Clone.id = "section-" + ++sectionsCounter;
    sectionsIndexes.push(sectionsCounter);
    section1Clone.getElementsByClassName("ck")[0].remove();
    ClassicEditor.create(section1Clone.querySelector('.ckeditor'));
    
  var bt = document.createElement("button");
  bt.textContent = "Delete section";
  bt.type = "button"
  bt.onclick = () => remove(sectionsCounter);
  console.log(sectionsCounter);
  section1Clone.appendChild(bt); 
  
  sections.appendChild(section1Clone);
    var input = section1Clone.getElementsByTagName("input");
    
    input[0].value = "";
    input[1].value = "";  
    input[2].value = "";

}

function remove(id) {
    var sections = document.getElementById("sections");
    
    var sectionToDelete = document.getElementById("section-" + id)
    sectionToDelete.remove();
    sectionsCounter--;
    sectionsIndexes = sectionsIndexes.filter(item => item !== value)

}
