let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");

for(list of lists){
  list.addEventListener("dragstart",function(e){
    let selected = e.target;

    rightbox.addEventListener("dragover",function(e){
      e.preventDefault();
    });
    rightbox.addEventListener("drop",function(e){
      rightbox.appendChild(selected);
      selected = null;
    })
  }
)
}

let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", function () {
  leftbox.appendChild(rightbox.firstChild);
});

// Append the reset button to the document
document.body.appendChild(resetButton);
