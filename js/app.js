let allButton = document.getElementById('all');
let cakesButton = document.getElementById('cakes');
let cupcakesButton = document.getElementById('cupcakes');
let sweetsButton = document.getElementById('sweets');

/*---images---*/
let cakesImg = document.querySelectorAll('.cakes');
let cupcakesImg = document.querySelectorAll('.cupcakes');
let sweetsImg = document.querySelectorAll('.sweets');
let allImg = document.querySelectorAll('.all');


//when i click on cakes button, i want only the cake images to appear, the other ones to disappear
function showCakes() {
  let i;
  for (i = 0; i < cakesImg.length; i++) { //this loop lets the computer know that it's not just the first element with the class of 'cake' that  I want. I want the whole array of it. 
    cakesImg[i].style.display = "block";
  }
  
   for (i = 0; i < cupcakesImg.length; i++) {
    cupcakesImg[i].style.display = "none";
  }
  
    for (i = 0; i < sweetsImg.length; i++) {
    sweetsImg[i].style.display = "none";
  }
  
}

//when I click the cakes button the following function will be executed.
cakesButton.addEventListener("click", showCakes);

function showCupcakes() {
   let i;
  for (i = 0; i < cupcakesImg.length; i++) {
    cupcakesImg[i].style.display = "block";
  }
  
   for (i = 0; i < cakesImg.length; i++) {
    cakesImg[i].style.display = "none";
  }
  
    for (i = 0; i < sweetsImg.length; i++) {
    sweetsImg[i].style.display = "none";
  }
}

cupcakesButton.addEventListener("click", showCupcakes);

function showSweets() {
    let i;
  for (i = 0; i < sweetsImg.length; i++) {
    sweetsImg[i].style.display = "block";
  }
  
   for (i = 0; i < cakesImg.length; i++) {
    cakesImg[i].style.display = "none";
  }
  
    for (i = 0; i < cupcakesImg.length; i++) {
    cupcakesImg[i].style.display = "none";
  }
}

sweetsButton.addEventListener("click", showSweets);


function showAll(){
  let i;
  for(i=0; i < allImg.length; i++){
    allImg[i].style.display = "block";
  }
}

allButton.addEventListener('click', showAll);
