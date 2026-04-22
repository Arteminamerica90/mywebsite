import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

function ServiceAnalysis() {
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
                    <h1>Конкурентный анализ</h1>
                    <p className="lead">Узнайте, что делают ваши конкуренты, и сделайте это лучше.</p>
                </div>

                <div className="service-grid-detailed">
                    <div className="audit-item">
                        <h3>Шпионаж за креативами</h3>
                        <p>Покажем, какие рекламные объявления крутят ваши конкуренты в Facebook, TikTok и Google прямо сейчас.</p>
                    </div>
                    <div className="audit-item">
                        <h3>Анализ воронок</h3>
                        <p>Разберем путь пользователя конкурента: от рекламного клика до финальной покупки или подписки.</p>
                    </div>
                    <div className="audit-item">
                        <h3>Источники трафика</h3>
                        <p>Выявим, из каких стран и каналов конкуренты получают самый качественный трафик.</p>
                    </div>
                    <div className="audit-item">
                        <h3>Стратегия обгона</h3>
                        <p>На основе данных составим план, как перехватить аудиторию и предложить ей более выгодные условия.</p>
                    </div>
                </div>
            </div>

            <ContactSection />
        </div>
    );
}

export default ServiceAnalysis;
