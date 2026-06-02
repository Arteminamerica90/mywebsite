import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import { Reveal } from '../components/Reveal';
import { cases } from '../data/content';

function WorkPage() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div className="home">
            <Navbar />

            <section id="work" className="portfolio" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <Reveal animation="fade-in-right">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title" style={{ marginBottom: '1rem' }}>За нас говорят наши клиенты,<br /><span className="gradient-text">которых мы раскачали</span></h2>
                            <p className="lead" style={{ margin: '0 auto' }}>Кейсы, которыми мы гордимся. Реальные цифры и стратегии масштабирования.</p>
                        </div>
                    </Reveal>

                    <div className="portfolio-grid">
                        {cases.map((item, index) => (
                            <Link to={`/cases/${item.id}`} className="portfolio-card-link" key={index}>
                                <div className="portfolio-card reveal fade-in-bottom" style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className="portfolio-img-placeholder" style={{ 
                                        position: 'relative', 
                                        width: '100%', 
                                        height: '100%',
                                        backgroundColor: '#fff',
                                        overflow: 'hidden'
                                    }}>
                                        {item.img ? (
                                            <img 
                                                src={item.img} 
                                                alt={item.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} 
                                            />
                                        ) : null}
                                        <div className="portfolio-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)', padding: '2rem' }}>
                                            <span className="portfolio-category" style={{ color: 'var(--accent-color)', fontWeight: 700 }}>{item.category}</span>
                                            <h3 style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{item.title}</h3>
                                            <p style={{ 
                                                color: 'var(--accent-color)', 
                                                fontWeight: 900, 
                                                fontSize: '1.3rem',
                                                textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                                                marginTop: '0.5rem',
                                                lineHeight: '1.2'
                                            }}>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="create" className="create-section" style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <Reveal animation="fade-in-right">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Что Мы Создаем</h2>
                            <p className="lead" style={{ margin: '0 auto' }}>Создаем эффективные цифровые решения для реального роста вашего бизнеса.</p>
                        </div>
                    </Reveal>

                    <div className="create-grid">
                        {[
                            { 
                                icon: '🚀', 
                                title: 'SEO-продвижение', 
                                desc: 'Оптимизируем ваш сайт для улучшения его видимости в поисковых системах.',
                                extra: 'Мы проводим всесторонний анализ вашего сайта и оптимизируем его, чтобы сделать его более видимым для поисковых систем. Мы работаем над ключевыми словами, внутренней структурой сайта, оптимизацией контента и другими факторами для повышения вашего рейтинга в результатах поиска.'
                            },
                            { 
                                icon: '📱', 
                                title: 'Продвижение приложений', 
                                desc: 'Продвижение мобильных приложений — наша основная задача.',
                                extra: 'Мы продвигаем ваше мобильное приложение от ранних этапов медиапланирования до анализа и оптимизации трафика. Мы используем топовые in-app платформы, источники социального трафика, частные DSP, OEM-трафик, собственную аналитику и многое другое.'
                            },
                            { 
                                icon: '🌐', 
                                title: 'Контекстная реклама', 
                                desc: 'Создаем и оптимизируем рекламные кампании на различных платформах.',
                                extra: 'Мы создаем и оптимизируем кампании контекстной рекламы для привлечения целевой аудитории на таких платформах, как Google Ads. Мы подбираем ключевые слова, создаем убедительные объявления и оптимизируем ставки для максимизации вашей конверсии.'
                            },
                            { 
                                icon: '🔗', title: 'Программатик', 
                                desc: 'Работаем с ведущими программатик-источниками (CPC/CPM/CPI) для прорывного продвижения вашего продукта.',
                                extra: 'Мы сотрудничаем с ведущими программатик-источниками на рынке, работая по моделям CPC/CPM/CPI, чтобы вывести продвижение вашего продукта на новый уровень.'
                            },
                            { 
                                icon: '🎯', 
                                title: 'Ретаргетинг', 
                                desc: 'Удерживайте пользователей, повышайте RR и LTV, возвращая знакомую аудиторию к вашим продуктам.',
                                extra: 'Трафик ретаргетинга позволяет нам возвращать пользователей, которые ранее взаимодействовали с вашими продуктами, на ваш сайт или в мобильное приложение. Эта стратегия помогает удерживать пользователей, повышать показатели RR и LTV, а также расширять охват целевой аудитории.'
                            },
                            { 
                                icon: '📊', 
                                title: 'Разработка приложений', 
                                desc: 'Наша команда поможет вам во всем, что связано с разработкой мобильных приложений.',
                                extra: 'Наша команда экспертов поможет вам во всех аспектах разработки мобильных приложений: от расчета бюджета до финального дизайна и запуска в Google Play, App Store или альтернативных магазинах.'
                            },
                        ].map((item, index) => (
                            <Reveal animation="fade-in-bottom" delay={index * 0.1} key={index}>
                                <div className="create-card">
                                    <div className="create-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    
                                    <div className={`create-extra-content ${expandedIndex === index ? 'expanded' : ''}`}>
                                        <p>{item.extra}</p>
                                    </div>

                                    <button className="create-learn-more" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                                        <span>{expandedIndex === index ? '− Скрыть' : '+ Подробнее'}</span>
                                    </button>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />

            <footer className="footer">
                <div className="container footer-container">
                    <p>&copy; 2024 Media CPA-Partners. Все права защищены.</p>
                </div>
            </footer>
        </div>
    );
}

export default WorkPage;
