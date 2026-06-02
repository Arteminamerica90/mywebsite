import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import { Reveal } from '../components/Reveal';
import { CountUp } from '../components/CountUp';


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

            <div className="container service-content" style={{ paddingTop: '100px' }}>
                <Reveal animation="fade-in-right">
                    <div className="service-header">
                        <h1>Разработка сайтов и приложений</h1>
                        <p className="lead">Создаем технологичные продукты, которые работают на ваш бизнес 24/7.</p>
                    </div>
                </Reveal>


                <div className="service-grid-detailed">
                    <Reveal animation="fade-in-bottom" delay={0.1}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <div className="price-tag">от <CountUp end={1999} /> руб/час</div>
                            <h3>Web-разработка</h3>
                            <div>
                                {`От лендингов с высокой конверсией до сложных корпоративных порталов и e-commerce решений.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.2}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <div className="price-tag">от <CountUp end={1999} /> руб/час</div>
                            <h3>Mobile Apps</h3>
                            <div>
                                {`Разработка нативных и кроссплатформенных мобильных приложений (iOS / Android) с продуманным UX.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.3}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <div className="price-tag">от <CountUp end={1999} /> руб/час</div>
                            <h3>Backend & API</h3>
                            <div>
                                {`Проектирование надежной серверной части и интеграция с любыми внешними сервисами.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.4}>
                        <div className="audit-item clickable-card" onClick={scrollToContact}>
                            <h3>Поддержка</h3>
                            <div>
                                {`Не просто сдаем проект, а сопровождаем его, внедряем обновления и следим за стабильностью.`.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/).map((s, j) => <p key={j} style={{marginBottom: '0.8rem'}}>{s}</p>)}
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>
            
            <ContactSection />
        </div>
    );
}

export default ServiceDev;
