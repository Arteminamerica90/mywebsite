import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">Media CPA-Partners</Link>
                <ul className="nav-links">
                    <li
                        className="nav-dropdown-wrapper"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <a href="/#services" className="nav-dropdown-trigger">
                            Услуги <span className="dropdown-arrow">▾</span>
                        </a>
                        {servicesOpen && (
                            <ul className="nav-dropdown-menu">
                                <li>
                                    <Link to="/services/appstore">📱 Публикация в AppStore</Link>
                                </li>
                                <li>
                                    <Link to="/services/app-sales">📈 Усиление продаж через приложение</Link>
                                </li>
                                <li>
                                    <Link to="/services/web-sales">🌐 Усиление через веб-сайт</Link>
                                </li>
                                <li>
                                    <Link to="/services/hr">👥 HR / Поиск талантов</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/services/audit">Аудит</Link></li>
                    <li><Link to="/services/dev">Разработка</Link></li>
                    <li><Link to="/course">🎓 Курс</Link></li>
                    <li
                        className="nav-dropdown-wrapper"
                        onMouseEnter={() => setAboutOpen(true)}
                        onMouseLeave={() => setAboutOpen(false)}
                    >
                        <a href="#" className="nav-dropdown-trigger" onClick={(e) => e.preventDefault()}>
                            О нас <span className="dropdown-arrow">▾</span>
                        </a>
                        {aboutOpen && (
                            <ul className="nav-dropdown-menu">
                                <li><Link to="/services/analysis">Анализ</Link></li>
                                <li><Link to="/blog">Блог</Link></li>
                                <li><Link to="/work">Кейсы</Link></li>
                                <li><Link to="/career">Карьера</Link></li>
                                <li><Link to="/startups">🚀 Стартапы</Link></li>
                                <li><a href="/#contact">Контакты</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

