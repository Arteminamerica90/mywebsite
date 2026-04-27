import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

function Home() {
    const cases = [
        { id: "hfwl", title: "Home Fitness", desc: "40х рост подписок через SKAN и Web2App", category: "Health & Fitness", img: "/hfwl.png" },
        { id: "betterme", title: "BetterMe", desc: "Масштабирование Health & Fitness приложения", category: "Health & Fitness" },
        { id: "fitness30", title: "30-Day Fitness", desc: "Оптимизация CPA и рост установок", category: "Fitness Challenge", img: "/fitness30.png" },
        { id: "joom", title: "Joom", desc: "Глобальный маркетинг для маркетплейса", category: "E-commerce" },
        { id: "calm", title: "Calm", desc: "Привлечение осознанной аудитории", category: "Mental Health" },
        { id: "delivery", title: "Delivery Club", desc: "Лидерство на рынке доставки еды", category: "Food Delivery" },
        { id: "fiton", title: "FitOn", desc: "Взрывной рост фитнес-сообщества", category: "Fitness platform" },
    ];

    const blogPosts = [
        { id: 'app-advertising', date: '23 Апр 2024', title: 'Как рекламировать с помощью приложения', desc: '3 ключевых инструмента внутреннего маркетинга: пуши, email-сбор и иконка как рекламный баннер.' },
        { id: 'promotion-structure', date: '15 Апр 2024', title: 'Структура продвижения приложений', desc: 'Разбираем комплексную систему продвижения от стратегии до аналитики.' },
        { id: 'creatives', date: '12 Апр 2024', title: 'Креативы для продвижения приложений', desc: 'Что заставляет людей кликать? Секреты UGC и эмоциональных триггеров.' },
        { id: 'starting-growth', date: '10 Апр 2024', title: 'С чего начинать развитие приложений', desc: 'Первые шаги: MVP, поиск Product-Market Fit и сбор фидбека.' },
        { id: 'app-marketing', date: '08 Апр 2024', title: 'Маркетинг приложений', desc: 'Глубокая стратегия удержания (Retention) и работа с виральностью.' },
        { id: 'push-notifications', date: '05 Апр 2024', title: 'Пуши для развития приложений', desc: 'Как правильно использовать уведомления, чтобы возвращать пользователей.' },
    ];

    return (
        <div className="home">
            <Navbar />

            <section id="work" className="portfolio" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <h2 className="section-title">За нас говорят наши клиенты,<br /><span className="gradient-text">которых мы раскачали</span></h2>
                    <div className="portfolio-grid">
                        {cases.map((item, index) => (
                            <Link to={`/cases/${item.id}`} className="portfolio-card-link" key={index}>
                                <div className="portfolio-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="portfolio-img-placeholder" style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#fff' }}>
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
                                            <p style={{ color: '#eee', textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className="services">
                <div className="container">
                    <h2 className="section-title">Наша экспертиза</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">✦</div>
                            <h3>Аудит приложения</h3>
                            <p>Глубокий анализ вашего продукта, выявление ошибок и поиск скрытых возможностей для роста.</p>
                            <Link to="/services/audit" className="read-more">Подробнее →</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">⚡</div>
                            <h3>Разработка</h3>
                            <p>Создаем быстрые, адаптивные сайты и мобильные приложения на острие технологий.</p>
                            <Link to="/services/dev" className="read-more">Подробнее →</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">◈</div>
                            <h3>Конкурентный анализ</h3>
                            <p>Узнайте стратегии и креативы конкурентов. Будьте на шаг впереди рынка.</p>
                            <Link to="/services/analysis" className="read-more">Подробнее →</Link>
                        </div>
                    </div>
                </div>
            </section>


            <section id="blog" className="blog">
                <div className="container">
                    <h2 className="section-title">Наш <span className="gradient-text">Блог</span></h2>
                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <div className="blog-card fade-in" key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="blog-date">{post.date}</div>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                                <Link to={`/blog/${post.id}`} className="read-more">Читать далее →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />

            <footer className="footer">
                <div className="container footer-container">
                    <p>&copy; 2024 Media CPA-Partners. Все права защищены.</p>
                    <div className="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
