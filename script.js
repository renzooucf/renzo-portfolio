/* ============================================
   PORTFOLIO SCRIPT – Renzo CF
   ============================================ */

/* ===== ANIMACIÓN DE TARJETAS DE PROYECTOS ===== */
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));

/* ===== ANIMACIÓN DE STORY CARDS ===== */
const storyCards = document.querySelectorAll('.story-cards .card');

const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.style.transitionDelay = `${index * 0.2}s`; // Efecto escalonado
        }
    });
}, { threshold: 0.2 });

storyCards.forEach(card => storyObserver.observe(card));

/* ===== ANIMACIÓN DE IMÁGENES DE HIGHLIGHTS ===== */
const highlightImages = document.querySelectorAll('.highlights-grid img');

const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.style.transitionDelay = `${index * 0.15}s`; // Efecto escalonado
        }
    });
}, { threshold: 0.2 });

highlightImages.forEach(img => highlightObserver.observe(img));

/* ===== INTERACCIÓN DEL BOTÓN "CONTACT ME" ===== */
const contactBtn = document.getElementById('contactBtn');

if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el mailto se ejecute de inmediato

        // Crear popup visual
        const popup = document.createElement('div');
        popup.textContent = "📬 Escríbeme a renzoo.cf@gmail.com";
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.right = '20px';
        popup.style.background = '#1a1a1a';
        popup.style.color = '#fff';
        popup.style.padding = '12px 18px';
        popup.style.borderRadius = '10px';
        popup.style.fontSize = '1rem';
        popup.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        popup.style.opacity = '0';
        popup.style.transition = 'opacity 0.4s ease';
        popup.style.zIndex = '9999';

        document.body.appendChild(popup);

        // Mostrar popup con animación
        setTimeout(() => popup.style.opacity = '1', 100);

        // Abrir correo después de 0.5s
        setTimeout(() => {
            window.location.href = 'mailto:renzoo.cf@gmail.com';
        }, 500);

        // Ocultar popup después de 3s
        setTimeout(() => {
            popup.style.opacity = '0';
            setTimeout(() => popup.remove(), 400);
        }, 3000);
    });
}

// ==== COPIAR CORREO AL PORTAPAPELES ====
document.getElementById("copyEmail").addEventListener("click", () => {
    const email = "renzoo.cf@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        // Crea un pequeño aviso temporal
        const tooltip = document.createElement("div");
        tooltip.textContent = "";
        tooltip.className = "tooltip";
        document.body.appendChild(tooltip);

        // Posición del tooltip cerca del mouse
        tooltip.style.position = "fixed";
        tooltip.style.top = event.clientY + "px";
        tooltip.style.left = event.clientX + "px";

        setTimeout(() => tooltip.remove(), 1500);
    });
});

