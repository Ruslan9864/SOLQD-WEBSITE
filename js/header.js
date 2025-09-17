// Единый хеддер для всех страниц
function createHeader(currentPage = '') {
    return `
    <header class="header" id="header">
        <div class="container">
            <div class="header__content">
                <a href="${getBasePath()}" class="header__logo" aria-label="SolQD - главная страница">
                    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="0" y="28" font-family="Inter" font-size="24" font-weight="700" fill="#0BA470">SolQD</text>
                    </svg>
                </a>
                
                <nav class="header__nav" id="header-nav">
                    <ul class="header__menu">
                        <li class="header__item">
                            <a href="${getBasePath()}tech/" class="header__link ${currentPage === 'tech' ? 'header__link--active' : ''}">Технологии</a>
                            <ul class="header__submenu">
                                <li><a href="${getBasePath()}tech/qdots/">Квантовые точки</a></li>
                                <li><a href="${getBasePath()}tech/materials/">Материалы</a></li>
                                <li><a href="${getBasePath()}tech/focus/">Направления</a></li>
                                <li><a href="${getBasePath()}tech/buy/">Купить материалы</a></li>
                            </ul>
                        </li>
                        <li class="header__item">
                            <a href="${getBasePath()}products/" class="header__link ${currentPage === 'products' ? 'header__link--active' : ''}">Продукты</a>
                            <ul class="header__submenu">
                                <li><a href="${getBasePath()}products/solar-windows/">Солнечные окна</a></li>
                                <li><a href="${getBasePath()}products/greenhouse-films/">Тепличные плёнки</a></li>
                            </ul>
                        </li>
                        <li class="header__item">
                            <a href="${getBasePath()}company/" class="header__link ${currentPage === 'company' ? 'header__link--active' : ''}">Компания</a>
                            <ul class="header__submenu">
                                <li><a href="${getBasePath()}company/mission/">Миссия и ценности</a></li>
                                <li><a href="${getBasePath()}company/team/">Команда</a></li>
                                <li><a href="${getBasePath()}company/partners/">Партнёры</a></li>
                                <li><a href="${getBasePath()}company/samarkand/">Самарканд</a></li>
                                <li><a href="${getBasePath()}company/careers/">Вакансии</a></li>
                            </ul>
                        </li>
                        <li class="header__item">
                            <a href="${getBasePath()}cases/" class="header__link ${currentPage === 'cases' ? 'header__link--active' : ''}">Кейсы</a>
                        </li>
                        <li class="header__item">
                            <a href="${getBasePath()}news/" class="header__link ${currentPage === 'news' ? 'header__link--active' : ''}">Новости</a>
                        </li>
                        <li class="header__item">
                            <a href="${getBasePath()}contacts/" class="header__link ${currentPage === 'contacts' ? 'header__link--active' : ''}">Контакты</a>
                        </li>
                    </ul>
                </nav>
                
                <button class="header__burger" id="header-burger" aria-label="Открыть меню" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>`;
}

function createMobileMenu() {
    return `
    <div class="mobile-menu" id="mobile-menu">
        <button class="mobile-menu__close" id="mobile-menu-close" aria-label="Закрыть меню">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        
        <nav class="mobile-menu__nav">
            <ul class="mobile-menu__list">
                <li class="mobile-menu__item">
                    <a href="${getBasePath()}tech/" class="mobile-menu__link">Технологии</a>
                    <ul class="mobile-menu__submenu">
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}tech/qdots/" class="mobile-menu__link">Квантовые точки</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}tech/materials/" class="mobile-menu__link">Материалы</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}tech/focus/" class="mobile-menu__link">Направления</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}tech/buy/" class="mobile-menu__link">Купить материалы</a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-menu__item">
                    <a href="${getBasePath()}products/" class="mobile-menu__link">Продукты</a>
                    <ul class="mobile-menu__submenu">
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}products/solar-windows/" class="mobile-menu__link">Солнечные окна</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}products/greenhouse-films/" class="mobile-menu__link">Тепличные плёнки</a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-menu__item">
                    <a href="${getBasePath()}company/" class="mobile-menu__link">Компания</a>
                    <ul class="mobile-menu__submenu">
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}company/mission/" class="mobile-menu__link">Миссия и ценности</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}company/team/" class="mobile-menu__link">Команда</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}company/partners/" class="mobile-menu__link">Партнёры</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}company/samarkand/" class="mobile-menu__link">Самарканд</a>
                        </li>
                        <li class="mobile-menu__item">
                            <a href="${getBasePath()}company/careers/" class="mobile-menu__link">Вакансии</a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-menu__item">
                    <a href="${getBasePath()}cases/" class="mobile-menu__link">Кейсы</a>
                </li>
                <li class="mobile-menu__item">
                    <a href="${getBasePath()}news/" class="mobile-menu__link">Новости</a>
                </li>
                <li class="mobile-menu__item">
                    <a href="${getBasePath()}contacts/" class="mobile-menu__link">Контакты</a>
                </li>
            </ul>
        </nav>
    </div>`;
}

function createFooter() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__section">
                    <h3 class="footer__title">Технологии</h3>
                    <ul class="footer__menu">
                        <li><a href="${getBasePath()}tech/qdots/">Квантовые точки</a></li>
                        <li><a href="${getBasePath()}tech/materials/">Материалы</a></li>
                        <li><a href="${getBasePath()}tech/focus/">Направления</a></li>
                        <li><a href="${getBasePath()}tech/buy/">Купить материалы</a></li>
                    </ul>
                </div>
                
                <div class="footer__section">
                    <h3 class="footer__title">Продукты</h3>
                    <ul class="footer__menu">
                        <li><a href="${getBasePath()}products/solar-windows/">Солнечные окна</a></li>
                        <li><a href="${getBasePath()}products/greenhouse-films/">Тепличные плёнки</a></li>
                    </ul>
                </div>
                
                <div class="footer__section">
                    <h3 class="footer__title">Компания</h3>
                    <ul class="footer__menu">
                        <li><a href="${getBasePath()}company/mission/">Миссия и ценности</a></li>
                        <li><a href="${getBasePath()}company/team/">Команда</a></li>
                        <li><a href="${getBasePath()}company/partners/">Партнёры</a></li>
                        <li><a href="${getBasePath()}company/samarkand/">Самарканд</a></li>
                        <li><a href="${getBasePath()}company/careers/">Вакансии</a></li>
                    </ul>
                </div>
                
                <div class="footer__section">
                    <h3 class="footer__title">Контакты</h3>
                    <div class="footer__contact">
                        <p>Самарканд, Узбекистан</p>
                        <p><a href="mailto:info@solqd.uz">info@solqd.uz</a></p>
                        <p><a href="tel:+998901234567">+998 (90) 123-45-67</a></p>
                    </div>
                    
                    <div class="footer__social">
                        <a href="https://instagram.com/solqd" aria-label="Instagram SolQD" class="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2" fill="none"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2" fill="none"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </a>
                        <a href="https://t.me/solqd" aria-label="Telegram SolQD" class="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.198 3.148H2.802C1.806 3.148 1 3.954 1 4.95v14.1c0 .996.806 1.802 1.802 1.802h18.396c.996 0 1.802-.806 1.802-1.802V4.95c0-.996-.806-1.802-1.802-1.802z" stroke="currentColor" stroke-width="2" fill="none"/>
                                <path d="M8 12l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/company/solqd" aria-label="LinkedIn SolQD" class="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2" fill="none"/>
                                <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2" fill="none"/>
                                <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
                            </svg>
                        </a>
                        <a href="https://youtube.com/@solqd" aria-label="YouTube SolQD" class="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" stroke-width="2" fill="none"/>
                                <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" stroke="currentColor" stroke-width="2" fill="none"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="footer__bottom">
                <p class="footer__copyright">© 2025 SolQD. Все права защищены.</p>
                <a href="${getBasePath()}privacy/" class="footer__privacy">Политика конфиденциальности</a>
            </div>
        </div>
    </footer>`;
}

function getBasePath() {
    // Определяем базовый путь в зависимости от глубины вложенности
    const path = window.location.pathname;
    const depth = path.split('/').length - 2; // -2 потому что последний элемент пустой
    
    if (depth === 0) {
        return './'; // Главная страница
    } else if (depth === 1) {
        return '../'; // Страницы первого уровня (tech/, products/, etc.)
    } else if (depth === 2) {
        return '../../'; // Страницы второго уровня (tech/qdots/, products/solar-windows/, etc.)
    } else {
        return './'; // Fallback
    }
}

// Экспорт функций для использования в других файлах
window.createHeader = createHeader;
window.createMobileMenu = createMobileMenu;
window.createFooter = createFooter;
window.getBasePath = getBasePath;
