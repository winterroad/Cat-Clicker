let counter = 0;
const cat = document.getElementById("cat");
const countDisplay = document.getElementById("clicks");

cat.addEventListener('click', countUp);

function countUp(){
  counter++;
  countDisplay.textContent = counter;
}
