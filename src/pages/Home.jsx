import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

function Home() {
    const cases = [
        { id: "betterme", title: "BetterMe", desc: "Масштабирование Health & Fitness приложения", category: "Health & Fitness" },
        { id: "fitness30", title: "30-Day Fitness", desc: "Оптимизация CPA и рост установок", category: "Fitness Challenge" },
        { id: "joom", title: "Joom", desc: "Глобальный маркетинг для маркетплейса", category: "E-commerce" },
        { id: "calm", title: "Calm", desc: "Привлечение осознанной аудитории", category: "Mental Health" },
        { id: "delivery", title: "Delivery Club", desc: "Лидерство на рынке доставки еды", category: "Food Delivery" },
        { id: "fiton", title: "FitOn", desc: "Взрывной рост фитнес-сообщества", category: "Fitness platform" },
    ];

    const blogPosts = [
        { id: 'promotion-structure', date: '15 Апр 2024', title: 'Структура продвижения приложений', desc: 'Разбираем комплексную систему продвижения от стратегии до аналитики.' },
        { id: 'creatives', date: '12 Апр 2024', title: 'Креативы для продвижения приложений', desc: 'Что заставляет людей кликать? Секреты UGC и эмоциональных триггеров.' },
        { id: 'starting-growth', date: '10 Апр 2024', title: 'С чего начинать развитие приложений', desc: 'Первые шаги: MVP, поиск Product-Market Fit и сбор фидбека.' },
        { id: 'app-marketing', date: '08 Апр 2024', title: 'Маркетинг приложений', desc: 'Глубокая стратегия удержания (Retention) и работа с виральностью.' },
        { id: 'push-notifications', date: '05 Апр 2024', title: 'Пуши для развития приложений', desc: 'Как правильно использовать уведомления, чтобы возвращать пользователей.' },
        { id: 'analytics-system', date: '03 Апр 2024', title: 'Аналитика и система анализа', desc: 'Как выстроить прозрачную систему и видеть реальные цифры вашего бизнеса.' },
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
                                    <div className="portfolio-img-placeholder">
                                        <div className="portfolio-overlay">
                                            <span className="portfolio-category">{item.category}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
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
