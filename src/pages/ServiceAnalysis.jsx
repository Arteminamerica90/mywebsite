import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

function ServiceAnalysis() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="service-page">
            <Navbar />

            <div className="container service-content fade-in" style={{ paddingTop: '100px' }}>
                <div className="service-header">
                    <h1>Конкурентный анализ</h1>
                    <p className="lead">Узнайте, что делают ваши конкуренты, и сделайте это лучше.</p>
                </div>

                <div className="service-grid-detailed">
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <h3>Шпионаж за креативами</h3>
                        <p>Покажем, какие рекламные объявления крутят ваши конкуренты в Facebook, TikTok и Google прямо сейчас.</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <h3>Анализ воронок</h3>
                        <p>Разберем путь пользователя конкурента: от рекламного клика до финальной покупки или подписки.</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <h3>Источники трафика</h3>
                        <p>Выявим, из каких стран и каналов конкуренты получают самый качественный трафик.</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
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
