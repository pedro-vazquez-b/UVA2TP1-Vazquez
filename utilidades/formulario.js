document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.noValidate = true;

  form.addEventListener('submit', e => {
    e.preventDefault();

    ['nombre','email','asunto','mensaje'].forEach(name => {
      form.elements[name].setCustomValidity('');
    });

    const nombre  = form.elements['nombre'].value.trim();
    const email   = form.elements['email'].value.trim();
    const asunto  = form.elements['asunto'].value.trim();
    const mensaje = form.elements['mensaje'].value.trim();

    if (!nombre) {
      form.elements['nombre'].setCustomValidity('Por favor ingresa tu nombre');
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      form.elements['email'].setCustomValidity('Por favor ingresa tu correo electrónico');
    } else if (!emailRe.test(email)) {
      form.elements['email'].setCustomValidity('Por favor ingresa un correo válido');
    }

    if (!asunto) {
      form.elements['asunto'].setCustomValidity('Por favor ingresa el asunto');
    }

    if (!mensaje) {
      form.elements['mensaje'].setCustomValidity('Por favor ingresa el mensaje');
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert(`Gracias por su contacto, ${nombre}.\nEn breve le estaré respondiendo.`);
    form.reset();
  });
});