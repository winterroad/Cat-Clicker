let counter;
const cats = document.getElementById("catBox");
const cat1 = document.getElementById("catname1");
const cat2 = document.getElementById("catname2");
const countDisplay1 = document.getElementById("clicks1");
const countDisplay2 = document.getElementById("clicks2");


nameTheCats("Jack", "Bauer");

cats.addEventListener('click', countUp);

function nameTheCats(catname1, catname2){
    cat1.textContent = catname1;
    cat2.textContent = catname2;
}

function countUp(e){
    if(e.target.id == "cat1") {
      counter = Number(countDisplay1.textContent);
      counter++;
      countDisplay1.textContent = counter;
    } else if(e.target.id == "cat2"){
        counter = Number(countDisplay2.textContent);
        counter++;
        countDisplay2.textContent = counter;
      }
}
