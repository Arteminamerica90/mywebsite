import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

function ServiceDev() {
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
                    <h1>Разработка сайтов и приложений</h1>
                    <p className="lead">Создаем технологичные продукты, которые работают на ваш бизнес 24/7.</p>
                </div>

                <div className="service-grid-detailed">
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <div className="price-tag">от 1999 руб/час</div>
                        <h3>Web-разработка</h3>
                        <p>От лендингов с высокой конверсией до сложных корпоративных порталов и e-commerce решений.</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <div className="price-tag">от 1999 руб/час</div>
                        <h3>Mobile Apps</h3>
                        <p>Разработка нативных и кроссплатформенных мобильных приложений (iOS / Android) с продуманным UX.</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <div className="price-tag">от 1999 руб/час</div>
                        <h3>Backend & API</h3>
                        <p>Проектирование надежной серверной части и интеграция с любыми внешними сервисами.</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
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
