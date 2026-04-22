import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">Media CPA-Partners</Link>
                <ul className="nav-links">
                    <li><Link to="/services/audit">Аудит</Link></li>
                    <li><Link to="/services/dev">Разработка</Link></li>
                    <li><Link to="/services/analysis">Анализ</Link></li>
                    <li><a href="/#blog">Блог</a></li>
                    <li><a href="/#services">Услуги</a></li>
                    <li><a href="/#work">Кейсы</a></li>
                    <li><a href="/#contact">Контакты</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
