window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var fixedElement = document.getElementById('fixedElement');
  
  if (scrollPosition > 50) { // Change this value based on where you want the change to occur
      fixedElement.style.top = '0%'; // Change the position when scrolled down
  } else {
      fixedElement.style.top = '7.8%'; // Reset the position when scrolled up

  }
});