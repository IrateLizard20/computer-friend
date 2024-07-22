//Return to Main Page

var backButton = document.getElementById('back');

function goBack() {
  window.open("/website/","_self")
}

backButton.addEventListener('click', goBack);

//Slider to Face

var imageNumber = 0;

var imageName = 0;

var face = document.getElementById('face');

var output = document.getElementById('output');

var slider = document.getElementById('input').oninput = function(){

  imageNumber = 6 + +this.value;
  imageName = "faces/face" + imageNumber + ".png";
  output.innerHTML = this.value + " Happiness";
  face.src = imageName
};

//Name

const nameInput = document.getElementById('textbox');
const inputButton = document.getElementById('button1');
const companionName = document.getElementById('name');

function setName() {
  companionName.innerHTML = "Name: " + nameInput.value;
  nameInput.value = "";
}

inputButton.addEventListener('click', setName);

//Background Image

document.querySelector("#img").addEventListener("change", (e) => {
  const files = e.target.files;
  const output = document.querySelector("#background");

  for(let i = 0;i <files.length;i++){
      const picReader = new FileReader();
      picReader.addEventListener("load", function(event){
          const picFile = event.target;
          const div = document.createElement("div");
          div.id = 'div'
          div.innerHTML = `<img src="${picFile.result}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; user-drag: none; user-select: none; pointer-events: none;"/>`;
          output.appendChild(div);
      })
      picReader.readAsDataURL(files[i]);
  }

})

const resetButton = document.getElementById('button2');

function resetBackground() {
  div.remove();
}

resetButton.addEventListener('click',resetBackground);

//Modes

var modeChange = document.getElementById('mode-change');

function changeMode() {
  var modeVal = document.getElementsByName('mode');

  var bodyCursor = document.getElementById('body');

  for (i = 0; i < modeVal.length; i++) {
    if (modeVal[i].checked)
      var modeNum = modeVal[i].value;
  }

  if (modeNum < 2) {
    document.getElementById('mode').innerHTML = "Move Mode";
    document.getElementById('disabled').id = "mydiv";
    bodyCursor.style.cursor = "default";
  }

  else {
    document.getElementById('mode').innerHTML = "Pet Mode";
    document.getElementById('mydiv').id = "disabled";
    bodyCursor.style.cursor = "grab";
  }

}

modeChange.addEventListener('click',changeMode);

//Make the DIV element draggagle:

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}