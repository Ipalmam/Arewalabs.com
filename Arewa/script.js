document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Modo Oscuro
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const iconSun = document.getElementById('theme-icon-sun');
    const iconMoon = document.getElementById('theme-icon-moon');

    // Función para actualizar los iconos
    function updateThemeIcons(isDark) {
        if (isDark) {
            iconSun.classList.remove('hidden');
            iconMoon.classList.add('hidden');
        } else {
            iconSun.classList.add('hidden');
            iconMoon.classList.remove('hidden');
        }
    }

    // Cargar la preferencia del sistema o la guardada
    let isDarkMode = localStorage.getItem('theme') === 'dark' || 
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
    updateThemeIcons(isDarkMode);


    // Toggle al hacer click
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        updateThemeIcons(isDarkMode);
    });

    // 2. Lógica del Menú Móvil (Hamburguesa)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Ocultar el menú móvil por defecto
    mobileMenu.classList.add('hidden');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Nota: El código para los dropdowns en móvil es un poco más complejo y lo podemos hacer después de probar la versión de escritorio.
});