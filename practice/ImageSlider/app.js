function image (src, imageNO){
  return {
    src,
    imageNO
  }
}

const imageList = preloadImages();

function switchImage(){

  let imageFrame = document.getElementById('imageFrame');
  let currentImage = document.getElementById('currentImage');
  let newImage = document.createElement('img')
  let currentImageNO = currentImage.getAttribute('imageno');

  if(Number(currentImageNO) === imageList.length -1) return console.error('End of list');

  console.log(imageList[Number(currentImageNO)+1].src);

  newImage = document.createElement('img');
  newImage.setAttribute('src',`${imageList[Number(currentImageNO)+1].src}`);
  newImage.setAttribute('id','currentImage');
  newImage.setAttribute('imageno',`${imageList[Number(currentImageNO)+1].imageNO}`);
 
  imageFrame.replaceChildren(newImage);
}

function clickableArrows(){
  const arrows = document.getElementsByClassName('arrow');
  for (let i = 0; i< arrows.length; i++){
    arrows[i].addEventListener('click', switchImage);
    
  }
}

function createSlider(images){
  let length = images.length;
  let imageCounter = document.getElementsByClassName('imageCounter'); 
 

  for (i = 0; i < length; i++){
    let dot = document.createElement('span')
    dot.setAttribute('class','dot')
    imageCounter[0].appendChild(dot);
  }

}

createSlider(imageList);

function preloadImages(){
  const images = [];

  for (let i = 0; i < 8; i++){
    let stockImage = image('./Image.jpeg', i);
    images.push(stockImage);
  }

  return images;
}

function populateImageFrame(){
  let imageFrame = document.getElementById('imageFrame');

  firstImage = document.createElement('img');
  firstImage.setAttribute('src',`${imageList[0].src}`);
  firstImage.setAttribute('id','currentImage');
  firstImage.setAttribute('imageno',`${imageList[0].imageNO}`);

  imageFrame.appendChild(firstImage);
}

populateImageFrame();
clickableArrows();
