function codeHover() {
  const code = document.querySelectorAll('.code');
  for (let i = 0; i < code.length; i += 1) {
    code[i].style.color = 'orange';
    code[i].style.transition = '0.3s';
  }
}
function codeOut() {
  const code = document.querySelectorAll('.code');
  for (let i = 0; i < code.length; i += 1) {
    code[i].style.color = '#303841';
  }
}
const projectTile = document.querySelectorAll('.project-tile');
for (let y = 0; y < projectTile.length; y += 1) {
  projectTile[y].addEventListener('mouseover', codeHover);
  projectTile[y].addEventListener('mouseout', codeOut);
}
