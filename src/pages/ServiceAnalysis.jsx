import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import { Reveal } from '../components/Reveal';


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

            <div className="container service-content" style={{ paddingTop: '100px' }}>
                <Reveal animation="fade-in-right">
                    <div className="service-header">
                        <h1>Конкурентный анализ</h1>
                        <p className="lead">Узнайте, что делают ваши конкуренты, и сделайте это лучше.</p>
                    </div>
                </Reveal>


                <div className="service-grid-detailed">
                    <Reveal animation="fade-in-bottom" delay={0.1}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>Шпионаж за креативами</h3>
                            <div>
                                {`Покажем, какие рекламные объявления крутят ваши конкуренты в Facebook, TikTok и Google прямо сейчас.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.2}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>Анализ воронок</h3>
                            <div>
                                {`Разберем путь пользователя конкурента: от рекламного клика до финальной покупки или подписки.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.3}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>Источники трафика</h3>
                            <div>
                                {`Выявим, из каких стран и каналов конкуренты получают самый качественный трафик.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.4}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>Стратегия обгона</h3>
                            <div>
                                {`На основе данных составим план, как перехватить аудиторию и предложить ей более выгодные условия.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>

            <ContactSection />
        </div>
    );
}

export default ServiceAnalysis;
