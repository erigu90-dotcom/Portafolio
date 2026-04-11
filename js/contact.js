(function() {
    // 1. Inicialización (Solo una vez)
    emailjs.init("VFrIDJ1H4sJ4LF03y");
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const btn = document.querySelector('.contact-submit');

    // Si el formulario no existe en la página, no ejecutamos nada para evitar errores
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 2. Verificación del Honeypot (Seguridad Anti-Bot)
        const honey = document.getElementById('honeypot').value;
        if (honey) {
            console.log("Bot detectado, deteniendo envío.");
            return; 
        }

        // 3. Feedback visual: Bloqueamos botón para evitar spam
        const originalText = btn.innerText;
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        const serviceID = 'service_6y407ls';
        const templateID = 'template_axmn3ll';

        // 4. Envío a través de EmailJS
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // ÉXITO
                btn.innerText = '¡Mensaje Enviado!';
                btn.style.backgroundColor = '#28a745'; // Verde
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = ''; 
                }, 3000);
                
            }, (err) => {
                // ERROR
                btn.innerText = 'Error al enviar';
                btn.style.backgroundColor = '#dc3545'; // Rojo
                console.error("Error de EmailJS:", err);
                btn.disabled = false;
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);
            });
    });
});