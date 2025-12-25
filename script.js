document.addEventListener('DOMContentLoaded', () => {
    // =================================================================
    // 1. LÓGICA DE RUTAS Y DETECCIÓN DE IDIOMA
    // =================================================================
    const currentHref = window.location.href;
    const isSubfolder = currentHref.includes('/apps/') || currentHref.includes('/blog/');
    const isEnglish = currentHref.includes('/en/');
    
    // Variable de ruta base (p)
    const p = isSubfolder ? '../' : './'; 

    // Lógica para el Switch de Idioma
    // Si estoy en /es/vistas.html me manda a /en/vistas.html y viceversa
    const toggleLangPath = isEnglish 
        ? currentHref.replace('/en/', '/es/') 
        : currentHref.replace('/es/', '/en/');

    // =================================================================
    // 2. NAVBAR GLOBAL (Con Selector de Idioma Integrado)
    // =================================================================
    const navbarHTML = `
    <nav class="fixed w-full z-50 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"> 
            <div class="flex items-center justify-between h-12 bg-gray-900 dark:bg-gray-900 shadow-xl rounded-full px-4 py-1 border border-gray-700 relative z-50">
                <a href="${p}index.html" class="flex-shrink-0">
                    <h1 class="text-lg font-black text-blue-400">AREWA<span class="text-accent-game text-[#F97316]">LABS</span></h1>
                </a>
                
                <div class="sm:hidden ml-auto flex items-center space-x-2">
                    <a href="${toggleLangPath}" class="text-[10px] font-bold px-2 py-1 rounded bg-gray-800 text-accent-social border border-gray-700">
                        ${isEnglish ? 'ESPAÑOL' : 'ENGLISH'}
                    </a>
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
                                <a href="${p}social-labs.html" class="dropdown-link">Social Labs?</a>
                                <a href="${p}apps/keyah.html" class="dropdown-link">Keyah</a>
                                <a href="${p}apps/machi-ai.html" class="dropdown-link">Machi-AI</a>
                            </div>
                        </div>

                        <div class="relative group">
                            <button class="menu-item-capsule flex items-center">
                                Game Studio <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="dropdown-content left-0 w-48 shadow-xl ring-1 ring-black ring-opacity-5">
                                <a href="${p}game-studio.html" class="dropdown-link">Filosofía</a>
                                <a href="${p}apps/escuadron.html" class="dropdown-link">Escuadron 201</a>
                                <a href="${p}apps/guerrilla.html" class="dropdown-link">Guerrilla</a>
                                <a href="${p}apps/4-chalanes.html" class="dropdown-link">4 Chalanes</a>
                            </div>
                        </div>

                        <a href="${p}servicios.html" class="menu-item-capsule">Servicios</a>
                        <a href="${p}blog.html" class="menu-item-capsule">Blog</a>
                        <a href="${p}contact.html" class="menu-item-capsule">Contacto</a>
                        <a href="${p}about.html" class="text-sm px-3 py-1.5 rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 ml-1">About</a>
                        
                        <a href="${toggleLangPath}" class="ml-2 text-[10px] font-bold px-2 py-1 rounded border border-gray-700 text-gray-400 hover:text-accent-social hover:border-accent-social transition-all">
                            ${isEnglish ? 'ES' : 'EN'}
                        </a>
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
    // 3. FOOTER GLOBAL (Traducción básica si está en inglés)
    // =================================================================
    const footerHTML = `
    <footer class="bg-gray-900 border-t border-gray-800 pt-12 pb-8 mt-16">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
                <div class="col-span-2 md:col-span-2">
                    <h1 class="text-2xl font-black text-blue-400 mb-3">AREWA<span class="text-accent-game">LABS</span></h1>
                    <p class="text-slate-400 text-sm max-w-sm mb-4">
                        ${isEnglish ? 'Tech with purpose. Creating code solutions and games with social impact.' : 'Tecnología con propósito. Creando soluciones de código y juegos con impacto social.'}
                    </p>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-white mb-4">${isEnglish ? 'Resources' : 'Recursos'}</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${p}blog.html" class="text-slate-400 hover:text-accent-social transition-colors">Blog & Research</a></li>
                        <li><a href="https://discord.gg/6S9CpsDpCu" target="_blank" class="text-slate-400 hover:text-[#5865F2] transition-colors font-bold">Discord</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-white mb-4">${isEnglish ? 'Studio' : 'El Estudio'}</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${p}about.html" class="text-slate-400 hover:text-accent-social transition-colors">About</a></li>
                        <li><a href="${p}contact.html" class="text-slate-400 hover:text-accent-social transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-white mb-4">PILARES</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${p}social-labs.html" class="text-slate-400 hover:text-accent-social transition-colors">Social Labs</a></li>
                        <li><a href="${p}game-studio.html" class="text-slate-400 hover:text-accent-game transition-colors">Game Studio</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-8 text-center text-slate-500 text-xs">
                &copy; <span id="current-year"></span> Arewa Labs. | 
                <a href="${p}legal.html" class="hover:text-white transition-colors">${isEnglish ? 'Privacy & Legal' : 'Aviso Legal & Privacidad'}</a>
            </div>
        </div>
    </footer>
    `;

    // INYECCIÓN
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    initAppLogic();
});

function initAppLogic() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

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
        htmlElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateIcons(isDarkMode);
    };

    if (toggleDesktop) toggleDesktop.addEventListener('click', toggleTheme);
    if (toggleMobile) toggleMobile.addEventListener('click', toggleTheme);
}