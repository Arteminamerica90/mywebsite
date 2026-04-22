import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

function ServiceDev() {
    return (
        <div className="service-page">
            <nav className="navbar">
                <div className="container nav-container">
                    <div className="logo">Media CPA-Partners</div>
                    <ul className="nav-links">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/services/audit">Аудит</Link></li>
                        <li><Link to="/services/dev">Разработка</Link></li>
                        <li><Link to="/services/analysis">Анализ</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="container service-content fade-in">
                <div className="service-header">
                    <h1>Разработка сайтов и приложений</h1>
                    <p className="lead">Создаем технологичные продукты, которые работают на ваш бизнес 24/7.</p>
                </div>

                <div className="service-grid-detailed">
                    <div className="audit-item">
                        <h3>Web-разработка</h3>
                        <p>От лендингов с высокой конверсией до сложных корпоративных порталов и e-commerce решений.</p>
                    </div>
                    <div className="audit-item">
                        <h3>Mobile Apps</h3>
                        <p>Разработка нативных и кроссплатформенных мобильных приложений (iOS / Android) с продуманным UX.</p>
                    </div>
                    <div className="audit-item">
                        <h3>Backend & API</h3>
                        <p>Проектирование надежной серверной части и интеграция с любыми внешними сервисами.</p>
                    </div>
                    <div className="audit-item">
                        <h3>Поддержка</h3>
                        <p>Не просто сдаем проект, а сопровождаем его, внедряем обновления и следим за стабильностью.</p>
                    </div>
                </div>
            </div>
            
            <ContactSection />
        </div>
    );
}

export default ServiceDev;
