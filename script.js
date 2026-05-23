/*
    SCRIPT EDITORIAL - BEYOU
    Funcionalidades: Scroll Reveal, Form Handling e Header Dinâmico
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. REVELAÇÃO AO ROLAR (INTERSECTION OBSERVER)
    // Cria um efeito de entrada elegante para as seções
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));


    // 2. HEADER DINÂMICO
    // O header diminui levemente ao rolar para manter o foco no conteúdo
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = '#1A1A1A';
        }
    });


    // 3. ENVIO DO FORMULÁRIO (SIMULAÇÃO)
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[name="name"]').value;
            
            // Feedback visual elegante
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = "ENVIANDO...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`MENSAGEM RECEBIDA, ${name.toUpperCase()}. ENTRAREMOS EM CONTATO EM BREVE.`);
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // 4. MENU MOBILE SIMPLES
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // Para um estilo experimental, poderíamos expandir um menu full-screen
            // Mas para iniciantes, manteremos a lógica de toggle
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#1A1A1A';
            navLinks.style.padding = '20px';
        });
    }

});
