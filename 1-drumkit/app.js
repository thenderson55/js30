
keyObj = {
  '65': 'audio65',
  '83': 'audio85',
  '68': 'audio68',
  '70': 'audio70',
  '71': 'audio71',
  '72': 'audio72',
  '74': 'audio74',
  '75': 'audio75',
  '76': 'audio77'
}

function keyDown(key){
  keyPress = document.getElementById(key);
  keyPress.style.backgroundColor = "rgba(255,0,0,0.6)";
  keyPress.style.height = '80px';
  keyPress.style.width ='80px';
  document.getElementById(keyObj[key]).play();
}

function keyUp(key){
  keyPress = document.getElementById(key);
  keyPress.style.backgroundColor = "rgba(30, 52, 142, 0.1)";
  keyPress.style.height = '75px';
  keyPress.style.width ='75px';
  document.getElementById(keyObj[key]).pause();
}


document.addEventListener('keydown', function(event) {
  keyDown(event.keyCode.toString())
});

document.addEventListener('keyup', function(event) {
  keyUp(event.keyCode.toString())
});