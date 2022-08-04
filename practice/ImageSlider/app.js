function switchImage(direction){
  console.log('ss');
}

function clickableArrows(){
  const arrows = document.getElementsByClassName('arrow');
  for (let i = 0; i< arrows.length; i++){
    arrows[i].addEventListener('click', switchImage());
  }
}

function countImages(){
  
}