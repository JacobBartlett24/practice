const button = document.getElementById('hideButton');

function enableDropdown(){
  const elements = document.getElementsByClassName('navbarItem')
  console.log(elements)

  for(var i = 0; i<elements.length; i++){
    if(elements[i].classList.contains('hidden')){
      elements[i].classList.remove('hidden')
      button.innerText = 'HIDE'
    }else{
      elements[i].classList.add('hidden');
      button.innerText = 'SHOW'
    }
  }
}

button.addEventListener("click", enableDropdown);