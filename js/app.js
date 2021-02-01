let allButton = document.getElementById('all');
let cakesButton = document.getElementById('cakes');
let cupcakesButton = document.getElementById('cupcakes');
let sweetsButton = document.getElementById('sweets');

/*---images---*/
/*FROM W3 SCHOOLS ----> "The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object. The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.You can use the length property of the NodeList object to determine the number of elements that matches the specified selector, then you can loop through all elements and extract the info you want."*/

let cakesImg = document.querySelectorAll('.cakes');
let cupcakesImg = document.querySelectorAll('.cupcakes');
let sweetsImg = document.querySelectorAll('.sweets');
let allImg = document.querySelectorAll('.all');


//when I click on cakes button, I want only the cake images to appear, the other ones to disappear
function showCakes() {
  let i;
  for (i = 0; i < cakesImg.length; i++) { //this loop lets the computer know that it's not just the first element with the class of 'cake' that  I want. I want the whole collection of nodes. 
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


//cupcakes function 
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

//when I click on cupcakes button the above function will excecute
cupcakesButton.addEventListener("click", showCupcakes);


//sweets function 
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

//when I click on sweets button the above function will excecute
sweetsButton.addEventListener("click", showSweets);


//this function will show all items when All button is clicked 
function showAll(){
  let i;
  for(i=0; i < allImg.length; i++){
    allImg[i].style.display = "block";
  }
}

allButton.addEventListener('click', showAll);
