import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import { useReveal } from '../hooks/useReveal';
import { CountUp } from '../components/CountUp';
import { Reveal } from '../components/Reveal';
import { stripIcons } from '../utils/stripIcons';


function Home() {
    useReveal();
    const cases = [

        { id: "hfwl", title: "Home Fitness", desc: <><CountUp end={12500} suffix="+" /> подписок (iOS, Web2App, Web2Web)</>, category: "Health & Fitness", img: "/hfwl.png" },
        { id: "fiton", title: "FitOn", desc: "Взрывной рост фитнес-сообщества", category: "Fitness platform", img: "/fiton.png" },
        { id: "betterme", title: "BetterMe", desc: "Масштабирование Health & Fitness приложения", category: "Health & Fitness", img: "/betterme.png" },
        { id: "fitness30", title: "30-Day Fitness", desc: <><CountUp end={1277000} prefix="$" /> покупок (Worldwide except Asia)</>, category: "Fitness Challenge", img: "/fitness30.png" },
        { id: "joom", title: "Joom", desc: <><CountUp end={450000} suffix="+" /> первых покупок (CIS, Latam)</>, category: "E-commerce", img: "/joom.png" },
        { id: "calm", title: "Calm", desc: "Привлечение осознанной аудитории", category: "Mental Health", img: "/calm.png" },
        { id: "delivery", title: "Delivery Club", desc: "Лидерство на рынке доставки еды", category: "Food Delivery", img: "/delivery.png" },
    ];

    const blogPosts = [
        { id: 'app-advertising', date: '23 Апр 2024', title: 'Как рекламировать с помощью приложения', desc: '3 ключевых инструмента внутреннего маркетинга.\nПуши, email-сбор и иконка как рекламный баннер.' },
        { id: 'promotion-structure', date: '15 Апр 2024', title: 'Структура продвижения приложений', desc: 'Разбираем комплексную систему продвижения.\nОт стратегии до аналитики.' },
        { id: 'creatives', date: '12 Апр 2024', title: 'Креативы для продвижения приложений', desc: 'Что заставляет людей кликать?\nСекреты UGC и эмоциональных триггеров.' },
        { id: 'starting-growth', date: '10 Апр 2024', title: 'С чего начинать развитие приложений', desc: 'Первые шаги: MVP.\nПоиск Product-Market Fit и сбор фидбека.' },
        { id: 'app-marketing', date: '08 Апр 2024', title: 'Маркетинг приложений', desc: 'Глубокая стратегия удержания (Retention).\nРабота с виральностью.' },
        { id: 'push-notifications', date: '05 Апр 2024', title: 'Пуши для развития приложений', desc: 'Как правильно использовать уведомления.\nВозвращаем пользователей в приложение.' },
    ];

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
                                    <div className="portfolio-img-container">
                                        {item.img && (
                                            <img 
                                                src={item.img} 
                                                alt={item.title} 
                                            />
                                        )}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="portfolio-category">{item.category}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="blog" className="blog" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <Reveal animation="fade-in-right">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Наш <span className="gradient-text">Блог</span></h2>
                            <p className="lead" style={{ margin: '0 auto' }}>Делимся опытом, кейсами и инсайтами из мира мобильного маркетинга и арбитража трафика.</p>
                        </div>
                    </Reveal>

                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <div className="blog-card reveal fade-in-bottom" key={post.id} style={{ transitionDelay: `${index * 0.1}s` }}>

                                <div className="blog-date">{post.date}</div>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                                <Link to={`/blog/${post.id}`} className="read-more">Читать далее →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="create" className="create-section" style={{ paddingTop: '10rem' }}>
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
                                title: 'SEO-продвижение', 
                                desc: 'Оптимизируем ваш сайт для улучшения его видимости в поисковых системах.',
                                extra: 'Мы проводим всесторонний анализ вашего сайта и оптимизируем его, чтобы сделать его более видимым для поисковых систем. Мы работаем над ключевыми словами, внутренней структурой сайта, оптимизацией контента и другими факторами для повышения вашего рейтинга в результатах поиска.'
                            },
                            { 
                                title: 'Продвижение приложений', 
                                desc: 'Продвижение мобильных приложений — наша основная задача.',
                                extra: 'Мы продвигаем ваше мобильное приложение от ранних этапов медиапланирования до анализа и оптимизации трафика. Мы используем топовые in-app платформы, источники социального трафика, частные DSP, OEM-трафик, собственную аналитику и многое другое.'
                            },
                            { 
                                title: 'Контекстная реклама', 
                                desc: 'Создаем и оптимизируем рекламные кампании на различных платформах.',
                                extra: 'Мы создаем и оптимизируем кампании контекстной рекламы для привлечения целевой аудитории на таких платформах, как Google Ads. Мы подбираем ключевые слова, создаем убедительные объявления и оптимизируем ставки для максимизации вашей конверсии.'
                            },
                            { 
                                title: 'Программатик', 
                                desc: 'Работаем с ведущими программатик-источниками (CPC/CPM/CPI) для прорывного продвижения вашего продукта.',
                                extra: 'Мы сотрудничаем с ведущими программатик-источниками на рынке, работая по моделям CPC/CPM/CPI, чтобы вывести продвижение вашего продукта на новый уровень.'
                            },
                            { 
                                title: 'Ретаргетинг', 
                                desc: 'Удерживайте пользователей, повышайте RR и LTV, возвращая знакомую аудиторию к вашим продуктам.',
                                extra: 'Трафик ретаргетинга позволяет нам возвращать пользователей, которые ранее взаимодействовали с вашими продуктами, на ваш сайт или в мобильное приложение. Эта стратегия помогает удерживать пользователей, повышать показатели RR и LTV, а также расширять охват целевой аудитории.'
                            },
                            { 
                                title: 'Разработка приложений', 
                                desc: 'Наша команда поможет вам во всем, что связано с разработкой мобильных приложений.',
                                extra: 'Наша команда экспертов поможет вам во всех аспектах разработки мобильных приложений: от расчета бюджета до финального дизайна и запуска в Google Play, App Store или альтернативных магазинах.'
                            },
                        ].map((item, index) => (
                            <Reveal animation="fade-in-bottom" delay={index * 0.1} key={index}>
                                <div className="create-card">
                                    <h3>{stripIcons(item.title)}</h3>
                                    <p>{stripIcons(item.desc)}</p>
                                    
                                    <div className={`create-extra-content ${expandedIndex === index ? 'expanded' : ''}`}>
                                        <p>{stripIcons(item.extra)}</p>
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



            <section id="services" className="services">
                <div className="container">
                    <Reveal animation="fade-in-right">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Наша экспертиза</h2>
                            <p className="lead" style={{ margin: '0 auto' }}>Комплексный подход к развитию вашего продукта на каждом этапе жизненного цикла.</p>
                        </div>
                    </Reveal>
                    <div className="services-grid">
                        <div className="service-card reveal fade-in-bottom">

                            <h3>Аудит приложения</h3>
                            <p>Глубокий анализ вашего продукта, выявление ошибок и поиск скрытых возможностей для роста.</p>
                            <Link to="/services/audit" className="read-more">Подробнее →</Link>
                        </div>
                        <div className="service-card reveal fade-in-bottom">
                            <h3>Разработка</h3>
                            <p>Создаем быстрые, адаптивные сайты и мобильные приложения на острие технологий.</p>
                            <Link to="/services/dev" className="read-more">Подробнее →</Link>
                        </div>
                        <div className="service-card reveal fade-in-bottom">
                            <h3>Конкурентный анализ</h3>
                            <p>Узнайте стратегии и креативы конкурентов. Будьте на шаг впереди рынка.</p>
                            <Link to="/services/analysis" className="read-more">Подробнее →</Link>
                        </div>
                    </div>
                </div>
            </section>




            <ContactSection />

            <Footer />
        </div>
    );
}

export default Home;
