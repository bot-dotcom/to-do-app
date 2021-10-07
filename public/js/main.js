// Coloring tasks on index page
let elements = document.getElementsByClassName('status');

for (i = 0; i < elements.length; i++) {
  previousElement = elements[i].previousElementSibling;
  if (elements[i].innerHTML == 'Canceled') {    
    elements[i].classList.add("text-danger");
    previousElement.classList.add("text-danger");
  }
  else if (elements[i].innerHTML == 'Completed') {
    elements[i].classList.add("text-success");
    previousElement.classList.add("text-success");
  }
  else {
    elements[i].classList.add("text-primary");
    previousElement.classList.add("text-primary");   
  }
};