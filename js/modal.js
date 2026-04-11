// Modal functionality for portfolio projects
function openModal(projectFolder) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImages = document.getElementById('modalImages');

    // Limpiar contenido anterior
    modalImages.innerHTML = '';

    // Definir los medios para cada proyecto
    const projectMedia = {
        'proyecto1': [
            { type: 'image', src: 'css/img/proyecto1/1.png' },
            { type: 'image', src: 'css/img/proyecto1/2.png' },
            { type: 'image', src: 'css/img/proyecto1/3.png' },
            { type: 'image', src: 'css/img/proyecto1/4.png' },
            { type: 'image', src: 'css/img/proyecto1/5.png' },
            { type: 'image', src: 'css/img/proyecto1/6.png' },
            { type: 'image', src: 'css/img/proyecto1/7.png' },
            { type: 'image', src: 'css/img/proyecto1/8.png' },
            { type: 'image', src: 'css/img/proyecto1/9.png' },
            { type: 'image', src: 'css/img/proyecto1/10.png' },
            { type: 'image', src: 'css/img/proyecto1/11.png' },
            { type: 'image', src: 'css/img/proyecto1/12.png' },
            { type: 'image', src: 'css/img/proyecto1/13.png' }
        ],
        'proyecto2': [
            { type: 'image', src: 'css/img/proyecto2/1.png' },
            { type: 'image', src: 'css/img/proyecto2/2.png' },
            { type: 'image', src: 'css/img/proyecto2/3.png' },
            { type: 'image', src: 'css/img/proyecto2/4.png' },
            { type: 'image', src: 'css/img/proyecto2/5.png' },
            { type: 'image', src: 'css/img/proyecto2/6.png' }
        ],
        'proyecto3': [
            { type: 'image', src: 'css/img/proyecto3/2.png' },
            { type: 'image', src: 'css/img/proyecto3/3.png' },
            { type: 'video', src: 'css/img/proyecto3/kermesseversionmovil.mp4' },
            { type: 'video', src: 'css/img/proyecto3/kermés mas corto.mp4' }
        ],
        'proyecto4': [
            { type: 'image', src: 'css/img/proyecto4/1.png' },
            { type: 'image', src: 'css/img/proyecto4/2.png' },
            { type: 'image', src: 'css/img/proyecto4/3.png' },
            { type: 'image', src: 'css/img/proyecto4/4.png' },
            { type: 'image', src: 'css/img/proyecto4/5.png' },
            { type: 'image', src: 'css/img/proyecto4/6.png' },
            { type: 'image', src: 'css/img/proyecto4/7.png' },
            { type: 'image', src: 'css/img/proyecto4/8.png' },
            { type: 'image', src: 'css/img/proyecto4/9.png' }
        ]
    };

    const projectTitles = {
        'proyecto1': 'Vectorización y Diseño Gráfico',
        'proyecto2': 'Identidad Visual - LuisCar Taller de Mecánica',
        'proyecto3': 'Diseño y Video Promocional - Kermés',
        'proyecto4': 'Branding y Papelería - Country Club de Bogotá'
    };

    modalTitle.textContent = projectTitles[projectFolder] || 'Proyecto';

    if (projectMedia[projectFolder]) {
        projectMedia[projectFolder].forEach(media => {
            if (media.type === 'image') {
                if (projectFolder === 'proyecto3' || projectFolder === 'proyecto4') {
                    const frame = document.createElement('div');
                    frame.className = 'modal-image-frame modal-image-frame-vertical';

                    const img = document.createElement('img');
                    img.src = media.src;
                    img.alt = 'Imagen del proyecto';
                    img.className = 'modal-media modal-image';

                    frame.appendChild(img);
                    modalImages.appendChild(frame);
                } else {
                    const img = document.createElement('img');
                    img.src = media.src;
                    img.alt = 'Imagen del proyecto';
                    img.className = 'modal-media modal-image';
                    modalImages.appendChild(img);
                }
            }

            if (media.type === 'video') {
                const frame = document.createElement('div');
                frame.className = 'modal-video-frame';

                const video = document.createElement('video');
                video.src = media.src;
                video.controls = true;
                video.preload = 'metadata';
                video.playsInline = true;
                video.className = 'modal-media modal-video';
                frame.appendChild(video);

                modalImages.appendChild(frame);
            }
        });
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Initialize modal functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio modal system initialized');
});