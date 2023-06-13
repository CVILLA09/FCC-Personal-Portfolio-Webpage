const projectTile = document.querySelectorAll(".project-tile");

for (var y = 0; y < projectTile.length; y++) {
    projectTile[y].addEventListener("mouseover", codeHover);
    projectTile[y].addEventListener("mouseout", codeOut);
}

function codeHover() {
    let code = document.querySelectorAll(".code");
    
    for (var i = 0; i < code.length; i++) {
        code[i].style.color = "orange";
        code[i].style.transition = "0.3s";
    }
}

function codeOut() {
    let code = document.querySelectorAll(".code");
    
    for (var i = 0; i < code.length; i++) {
        code[i].style.color = "#303841";
    }
}