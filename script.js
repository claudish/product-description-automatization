
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
    var paragraph = section.getElementsByClassName("paragraph")[0];
var p = document.createElement("p");
p.textContent = paragraph.value;
console.log(p.innerHTML);
var ul = document.createElement("ul");
 var paragraphs = paragraph.value.split("●");
  console.log(paragraphs)
  paragraphs.forEach(li => {
                   console.log(li)
                   if (li.length != 0) {
              var lielement = document.createElement("li");       
                  lielement.textContent = li;
ul.appendChild(lielement);
}


function addMore() {
    var sections = document.getElementById("sections");
    var section1Clone = document.getElementById("section-1").cloneNode(true);
    section1Clone.id = "section-" + ++sectionsCounter;
    

    sections.appendChild(section1Clone);
    var input = section1Clone.getElementsByTagName("input");

    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
}
