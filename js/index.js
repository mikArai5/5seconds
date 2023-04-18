const parallax = document.querySelectorAll(".para");
const section = document.querySelectorAll(".kv__images");

parallax[0].classList.add('block');

document.addEventListener("scroll", function () {
  for (let i = 0; i < section.length; i++) {
    
    const getElementDistanceTop = section[i].getBoundingClientRect().top;
    
    const getElementDistanceBottom = section[i].getBoundingClientRect().bottom;

    if (getElementDistanceTop < window.innerHeight) {
      parallax[i].classList.add('block');
    }
    
    if (getElementDistanceTop < 0 && getElementDistanceBottom > 0) {
      parallax[i].classList.add("active");
    } else { 
      parallax[i].classList.remove("active");
    }
  }
});