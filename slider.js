let slideIndex = 1;
showSlides(slideIndex);

// Control de siguiente/anterior
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Control de puntos (dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Si n es mayor que el número de diapositivas (al presionar 'siguiente' en la última)
  if (n > slides.length) {
    slideIndex = 1
  }
  
  // Si n es menor que 1 (al presionar 'anterior' en la primera)
  if (n < 1) {
    slideIndex = slides.length
  }
  
  // Ocultar todas las diapositivas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Quitar la clase 'active' de todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Mostrar la diapositiva actual y marcar el punto como activo
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// =================================================================
//  (OPCIONAL) Código para auto-reproducción automática
// =================================================================

/*
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Ocultar todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    
    // Quitar la clase 'active' de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Mostrar la diapositiva actual y marcar el punto como activo
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    // Cambia de imagen cada 5 segundos (5000 milisegundos)
    setTimeout(autoShowSlides, 5000); 
}

// Descomenta la siguiente línea para activar la auto-reproducción
// autoShowSlides();
*/