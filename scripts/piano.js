function playPiano(audioTagId, color) {
  document.getElementById(color).style.backgroundColor = '#FFFFFF';
  document.getElementById(audioTagId).play();
  //document.body.style.backgroundColor = color;
}

function restoreColor(color) {
    document.getElementById(color).style.backgroundColor = color;
}
