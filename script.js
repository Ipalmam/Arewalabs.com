document.addEventListener('DOMContentLoaded', () => {
    // =================================================================
    // 1. LÓGICA DE RUTAS (INTELIGENCIA LOCAL)
    // =================================================================
    // Detectamos si la URL actual contiene "/apps/" para saber si estamos en una subcarpeta
    const isInApps = window.location.href.includes('/apps/');
    // Si estamos en apps, usamos '../' para salir. Si no, usamos './' para quedarnos.
    const p = isInApps ? '../' : './'; 
    // =================================================================
    // 2. DEFINICIÓN DEL NAVBAR (Usando la variable ${p})
    // =================================================================
    const navbarHTML = `
    <nav class="fixed w-full z-50 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"> 
            <div class="flex items-center justify-between h-12 bg-gray-900 dark:bg-gray-900 shadow-xl rounded-full px-4 py-1 border border-gray-700 relative z-50">
                <a href="${p}index.html" class="flex-shrink-0">
                    <h1 class="text-lg font-black text-blue-400">AREWA<span class="text-accent-game text-[#F97316]">LABS</span></h1>
                </a>
                <div class="sm:hidden ml-auto flex items-center space-x-2">
                    <button id="theme-toggle-mobile" class="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                        <svg id="theme-icon-sun-mobile" class="hidden w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg id="theme-icon-moon-mobile" class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </button>
                    <button id="mobile-menu-button" class="text-gray-300 hover:text-white focus:outline-none p-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div class="hidden sm:flex items-center space-x-2 ml-auto"> 
                    <div class="flex items-center space-x-1.5">
                        <a href="${p}index.html" class="menu-item-capsule">Home</a> 
                        <div class="relative group">
                            <button class="menu-item-capsule flex items-center">
                                Social Labs <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="dropdown-content left-0 w-48 shadow-xl ring-1 ring-black ring-opacity-5">
                                <a href="${p}social-labs.html" class="dropdown-link">¿Por qué Social Labs?</a>
                                <a href="${p}apps/keyah.html" class="dropdown-link">Keyah</a>
                                <a href="${p}apps/machi-ai.html" class="dropdown-link">Machi-AI</a>
                            </div>
                        </div>
                        <div class="relative group">
                            <button class="menu-item-capsule flex items-center">
                                Game Studio <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="dropdown-content left-0 w-48 shadow-xl ring-1 ring-black ring-opacity-5">
                                <a href="${p}game-studio.html" class="dropdown-link">Nuestra Filosofía</a>
                                <a href="${p}apps/escuadron.html" class="dropdown-link">Escuadron 201</a>
                                <a href="${p}apps/guerrilla.html" class="dropdown-link">Guerrilla Lights Out</a>
                                <a href="${p}apps/4-chalanes.html" class="dropdown-link">4 Chalanes</a>
                            </div>
                        </div>
                        <a href="${p}servicios.html" class="menu-item-capsule">Servicios</a>
                        <a href="${p}blog.html" class="menu-item-capsule">Blog</a>
                        <a href="${p}embajador.html" class="menu-item-capsule">Embajador</a>
                        <a href="${p}contact.html" class="menu-item-capsule">Contacto</a>
                        <a href="${p}about.html" class="text-sm px-3 py-1.5 rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 ml-1">About</a>
                    </div>
                    <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 flex-shrink-0 ml-2">
                        <svg id="theme-icon-sun" class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg id="theme-icon-moon" class="hidden w-5 h-5 text-gray-500 dark:text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" class="hidden sm:hidden mt-2 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-2xl animate-fade-in-down origin-top">
                <div class="flex flex-col space-y-1">
                    <a href="${p}index.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Home</a>
                    <div class="mt-2 px-3 text-xs font-bold text-blue-400 uppercase tracking-wider">Social Labs</div>
                    <a href="${p}social-labs.html" class="block pl-6 py-2 text-sm text-gray-400 hover:text-white">¿Por qué Social Labs?</a>
                    <a href="${p}apps/keyah.html" class="block pl-6 py-2 text-sm text-gray-400 hover:text-white">Keyah</a>
                    <a href="${p}apps/machi-ai.html" class="block pl-6 py-2 text-sm text-gray-400 hover:text-white">Machi-AI</a>
                    <div class="mt-2 px-3 text-xs font-bold text-orange-500 uppercase tracking-wider">Game Studio</div>
                    <a href="${p}game-studio.html" class="block pl-6 py-2 text-sm text-gray-400 hover:text-white">Filosofía</a>
                    <a href="${p}apps/escuadron.html" class="block pl-6 py-2 text-sm text-gray-400 hover:text-white">Escuadrón 201</a>
                    <a href="${p}apps/guerrilla.html" class="block pl-6 py-2 text-sm text-gray-400 hover:text-white">Guerrilla Lights Out</a>
                    <div class="border-t border-gray-700 my-2"></div>
                    <a href="${p}servicios.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Servicios</a>
                    <a href="${p}blog.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Blog</a>
                    <a href="${p}contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Contacto</a>
                    <a href="${p}about.html" class="block mt-2 text-center px-3 py-2 rounded-full font-bold bg-blue-600 text-white">About</a>
                </div>
            </div>
        </div>
    </nav>
    `;
    // =================================================================
    // 3. DEFINICIÓN DEL FOOTER (Usando la variable ${p})
    // =================================================================
    const footerHTML = `
    <footer class="bg-gray-900 border-t border-gray-800 pt-12 pb-8 mt-16">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
                <div class="col-span-2 md:col-span-2">
                    <h1 class="text-2xl font-black text-blue-400 mb-3">AREWA<span class="text-accent-game">LABS</span></h1>
                    <p class="text-slate-400 text-sm max-w-sm">
                        Tecnología con propósito. Creando soluciones de código y juegos con impacto social y narrativo.
                    </p>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-white mb-4">Recursos</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${p}servicios.html" class="text-slate-400 hover:text-accent-social transition-colors">Consultoría</a></li>
                        <li><a href="${p}blog.html" class="text-slate-400 hover:text-accent-social transition-colors">Blog & Research</a></li>
                        <li><a href="${p}embajador.html" class="text-slate-400 hover:text-accent-social transition-colors">Programa Embajador</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-white mb-4">El Estudio</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${p}about.html" class="text-slate-400 hover:text-accent-social transition-colors">Acerca de Arewa</a></li>
                        <li><a href="${p}contact.html" class="text-slate-400 hover:text-accent-social transition-colors">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-white mb-4">PILARES</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${p}social-labs.html" class="text-slate-400 hover:text-accent-social transition-colors">Social Labs (Apps)</a></li>
                        <li><a href="${p}game-studio.html" class="text-slate-400 hover:text-accent-game transition-colors">Game Studio</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-8 text-center text-slate-500 text-xs">
                &copy; <span id="current-year"></span> Arewa Labs. Todos los derechos reservados. | 
                <a href="${p}legal.html" class="hover:text-white transition-colors">Aviso Legal & Privacidad</a>
            </div>
        </div>
    </footer>
    `;
    // =================================================================
    // 4. INYECCIÓN
    // =================================================================
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
    // =================================================================
    // 5. INICIAR LÓGICA (TOGGLES Y CLICKS)
    // =================================================================
    initAppLogic();
});
function initAppLogic() {
    // Año automático
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    // Menú Móvil
    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    // Modo Oscuro
    const htmlElement = document.documentElement;
    const toggleDesktop = document.getElementById('theme-toggle');
    const toggleMobile = document.getElementById('theme-toggle-mobile');
    const sunDesktop = document.getElementById('theme-icon-sun');
    const moonDesktop = document.getElementById('theme-icon-moon');
    const sunMobile = document.getElementById('theme-icon-sun-mobile');
    const moonMobile = document.getElementById('theme-icon-moon-mobile');
    function updateIcons(isDark) {
        if(sunDesktop && moonDesktop) {
            if (isDark) { sunDesktop.classList.remove('hidden'); moonDesktop.classList.add('hidden'); }
            else { sunDesktop.classList.add('hidden'); moonDesktop.classList.remove('hidden'); }
        }
        if(sunMobile && moonMobile) {
            if (isDark) { sunMobile.classList.remove('hidden'); moonMobile.classList.add('hidden'); }
            else { sunMobile.classList.add('hidden'); moonMobile.classList.remove('hidden'); }
        }
    }
    let isDarkMode = localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDarkMode) htmlElement.classList.add('dark');
    else htmlElement.classList.remove('dark');
    updateIcons(isDarkMode);
    const toggleTheme = () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        updateIcons(isDarkMode);
    };
    if (toggleDesktop) toggleDesktop.addEventListener('click', toggleTheme);
    if (toggleMobile) toggleMobile.addEventListener('click', toggleTheme);
}