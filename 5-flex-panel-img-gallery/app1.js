var panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open')
}

function toggleActive(e){
  // many transitions ending so need to pick one
  // can see them by looking at the event property name
  // console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// when the transitioning is done the 'transitionend' event will fire
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));