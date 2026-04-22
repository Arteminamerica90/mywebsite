import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

function ServiceAudit() {
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
                    <h1>Аудит вашего приложения</h1>
                    <p className="lead">Найдем точки роста и устраним ошибки, которые мешают вам масштабироваться.</p>
                </div>

                <div className="service-grid-detailed">
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <h3>1. Технический аудит</h3>
                        <p>Проверяем стабильность работы, скорость загрузки и наличие багов, которые влияют на удержание пользователей (Retention).</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <h3>2. Аудит ASO</h3>
                        <p>Анализируем видимость приложения в App Store и Google Play. Оптимизируем ключевые слова, скриншоты и описание для роста органики.</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <h3>3. Маркетинговый аудит</h3>
                        <p>Изучаем ваши текущие рекламные кампании. Находим «дыры» в бюджете и предлагаем стратегии по снижению стоимости установки (CPI).</p>
                    </div>
                    <div className="audit-item clickable-card" onClick={scrollToContact}>
                        <h3>4. Анализ воронки</h3>
                        <p>Проходим путь пользователя от клика по рекламе до покупки. Находим этапы, на которых вы теряете деньги.</p>
                    </div>
                </div>
            </div>

            <ContactSection />
        </div>
    );
}

export default ServiceAudit;
