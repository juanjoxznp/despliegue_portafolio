const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  });



  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  // Agrega un controlador de eventos para cada enlace
  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Previene el comportamiento predeterminado del enlace

      const targetId = link.getAttribute('href').substring(1); // Obtiene el ID del objetivo
      const targetElement = document.getElementById(targetId); // Obtiene el elemento objetivo

      if (targetElement) {
        // Calcula la distancia hasta el elemento objetivo
        const offset = targetElement.getBoundingClientRect().top;
        
        // Duración de la animación (en milisegundos)
        const duration = 1000;

        // Posición inicial
        const start = window.pageYOffset;
        
        // Calcula el tiempo inicial
        let startTime = null;

        // Función de animación
        function scrollAnimation(currentTime) {
          if (startTime === null) {
            startTime = currentTime;
          }

          const timeElapsed = currentTime - startTime;
          const scrollAmount = Math.easeInOutQuad(timeElapsed, start, offset, duration);

          window.scrollTo(0, scrollAmount);

          if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
          }
        }

        // Función para aplicar una función de aceleración suave
        Math.easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        // Inicia la animación
        requestAnimationFrame(scrollAnimation);
      }
    });
  });


  