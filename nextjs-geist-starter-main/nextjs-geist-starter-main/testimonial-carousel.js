document.addEventListener('DOMContentLoaded', () => {
  const testimonials = [
    {
      text: "Gracias a StartCheck, transformé mi idea en un proyecto exitoso. Su análisis detallado y enfoque de validación son invaluables. Recomiendo sus servicios a cualquiera que busque certezas antes de lanzarse al mercado.",
      author: "Carla Mendoza",
      image: "https://i.imgur.com/mWuYoOQ.png",
    },
    {
      text: "StartCheck me ayudó a validar mi idea rápidamente y con confianza. La plataforma es fácil de usar y el soporte es excelente.",
      author: "Luis Fernández",
      image: "https://i.imgur.com/anotherImage.png",
    },
  ];

  let current = 0;

  const testimonialText = document.querySelector('.testimonial-text');
  const testimonialAuthor = document.querySelector('.author');
  const testimonialImage = document.querySelector('.success-image img');
  const dots = document.querySelectorAll('.dot');

  function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.textContent = `- ${testimonials[index].author}`;
    testimonialImage.src = testimonials[index].image;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  document.querySelector('.arrow.left').addEventListener('click', () => {
    current = (current === 0) ? testimonials.length - 1 : current - 1;
    updateTestimonial(current);
  });

  document.querySelector('.arrow.right').addEventListener('click', () => {
    current = (current === testimonials.length - 1) ? 0 : current + 1;
    updateTestimonial(current);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      updateTestimonial(current);
    });
  });

  updateTestimonial(current);
});
