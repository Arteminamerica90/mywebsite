import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { Reveal } from '../components/Reveal';
import { cases } from '../data/content';
import { stripIcons } from '../utils/stripIcons';

function WorkPage() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div className="home">
            <Navbar />

            <section id="work" className="portfolio" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <Reveal animation="fade-in-right">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Практика роста<br /><span className="gradient-text">цифровых продуктов</span></h1>
                            <p className="lead" style={{ margin: '0 auto' }}>Примеры задач, подходов и измеримых результатов. Конкретный эффект зависит от продукта, рынка, бюджета и множества других факторов.</p>
                        </div>
                    </Reveal>

                    <div className="case-disclaimer">Упоминания проектов приведены как описание профессионального опыта. Товарные знаки и материалы принадлежат их правообладателям; это не означает партнёрства или одобрения. Перед публикацией каждого кейса необходимо подтвердить права и согласовать раскрытие данных.</div>

                    <Reveal animation="fade-in-bottom">
                        <section className="about-artem" aria-labelledby="about-artem-title">
                            <h2 id="about-artem-title">Обо мне</h2>
                            <p>Меня зовут Артём Меньшиков. Я работаю с ростом цифровых продуктов: соединяю маркетинговую стратегию, аналитику, креативы и продуктовые эксперименты, чтобы команды принимали решения на данных, а не на обещаниях.</p>
                            <a href="https://www.linkedin.com/in/artem-menshikov-6171a041/" target="_blank" rel="noreferrer">Профиль Артёма в LinkedIn →</a>
                        </section>
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

            <ContactSection />

            <Footer />
        </div>
    );
}

export default WorkPage;
