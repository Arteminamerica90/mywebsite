import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import { Reveal } from '../components/Reveal';


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

            <div className="container service-content" style={{ paddingTop: '100px' }}>
                <Reveal animation="fade-in-right">
                    <div className="service-header">
                        <h1>Аудит вашего приложения</h1>
                        <p className="lead">Найдем точки роста и устраним ошибки, которые мешают вам масштабироваться.</p>
                    </div>
                </Reveal>


                <div className="service-grid-detailed">
                    <Reveal animation="fade-in-bottom" delay={0.1}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>1. Технический аудит</h3>
                            <div>
                                {`Проверяем стабильность работы, скорость загрузки и наличие багов, которые влияют на удержание пользователей (Retention).`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.2}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>2. Аудит ASO</h3>
                            <div>
                                {`Анализируем видимость приложения в App Store и Google Play. Оптимизируем ключевые слова, скриншоты и описание для роста органики.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.3}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>3. Маркетинговый аудит</h3>
                            <div>
                                {`Изучаем ваши текущие рекламные кампании. Находим «дыры» в бюджете и предлагаем стратегии по снижению стоимости установки (CPI).`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.4}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>4. Анализ воронки</h3>
                            <div>
                                {`Проходим путь пользователя от клика по рекламе до покупки. Находим этапы, на которых вы теряете деньги.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>

            <ContactSection />
        </div>
    );
}

export default ServiceAudit;
