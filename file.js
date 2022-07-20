const Red = document.getElementById('Red');

Red.addEventListener('click', function onClick() {
  Red.style.backgroundColor = 'red';
  Red.style.color = 'black';
  Green.style.backgroundColor = 'red';
  Green.style.color = 'black';
  Yellow.style.backgroundColor = 'red';
  Yellow.style.color = 'black';
  
});

const Green = document.getElementById('Green');

Green.addEventListener('click', function onClick() {
  Red.style.backgroundColor = 'Green';
  Red.style.color = 'black';
  Green.style.backgroundColor = 'Green';
  Green.style.color = 'black';
  Yellow.style.backgroundColor = 'Green';
  Yellow.style.color = 'black';
  
});

const Yellow = document.getElementById('Yellow');

Yellow.addEventListener('click', function onClick() {
  Red.style.backgroundColor = 'Yellow';
  Red.style.color = 'black';
  Green.style.backgroundColor = 'Yellow';
  Green.style.color = 'black';
  Yellow.style.backgroundColor = 'Yellow';
  Yellow.style.color = 'black';
  
  
});
