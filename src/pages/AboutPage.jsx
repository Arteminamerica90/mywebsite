import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { Reveal } from '../components/Reveal';
import { CountUp } from '../components/CountUp';
import { cases } from '../data/content';
import { CaseDetail } from './CasePage';

const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const achievements = [
    { value: <CountUp end={12500} suffix="+" />, label: 'подписок привлечено', note: 'Home Fitness, iOS / Web2App / Web2Web' },
    { value: <CountUp end={1277000} prefix="$" />, label: 'покупок в кейсе', note: '30-Day Fitness, worldwide кроме Азии' },
    { value: <CountUp end={450000} suffix="+" />, label: 'первых покупок', note: 'Joom, CIS и LatAm' },
    { value: <CountUp end={100} suffix="+" />, label: 'креативов протестировано', note: 'гипотезы до масштабирования' },
];

const directions = [
    {
        title: 'Стратегия роста',
        text: 'Позиционирование, выбор рынков и каналов, юнит-экономика. Определяем, что масштабировать, в каком порядке и с каким бюджетом.',
        items: [
            { name: 'Консультация', price: '3 000 ₽' },
            { name: 'Стратегия роста', price: '30 000 ₽' },
            { name: 'Позиционирование', price: '30 000 ₽' },
            { name: 'Выбор рынков', price: '15 000 ₽' },
            { name: 'Выбор каналов сбыта', price: '15 000 ₽' },
            { name: 'Прорабатывание юнит-экономики', price: '15 000 ₽' },
            { name: 'Определяем, что масштабировать', price: '10 000 ₽' },
            { name: 'В каком порядке', price: '10 000 ₽' },
            { name: 'И с каким бюджетом', price: '20 000 ₽' },
        ],
    },
    {
        title: 'User acquisition',
        text: 'Платные каналы, структура бюджета, работа на стабильный CPI. iOS, Android и веб-источники, Web2App и Web2Web.',
        items: [
            { name: 'Настройка User acquisition — Meta (App Campaign)', price: '10 000 ₽' },
            { name: 'Платные каналы', price: '10 000 ₽' },
            { name: 'Структура бюджета', price: '10 000 ₽' },
            { name: 'Настройка мобильной рекламы (iOS, Android)', price: '10 000 ₽' },
            { name: 'Настройка с веб-источников', price: null },
            { name: 'Web2App', price: '100 000 ₽' },
            { name: 'Web2Web', price: '100 000 ₽' },
            { name: 'Подключение рекламы', price: '30 000 ₽' },
            { name: 'Усиление продаж через приложение', price: 'индивидуально' },
            { name: 'Усиление продаж через веб-сайт', price: 'индивидуально' },
        ],
    },
    {
        title: 'Аналитика',
        text: 'События и воронки, когортный анализ, A/B-тесты, атрибуция. Отделяем корреляцию от причины и не спорим с цифрами.',
        items: [
            { name: 'Глубокая аналитика', price: '30 000 ₽' },
            { name: 'Настройка событий в Метрике', price: '20 000 ₽' },
            { name: 'Настройка воронки', price: '100 000 ₽' },
            { name: 'Когортный анализ', price: '30 000 ₽' },
            { name: 'A/B-тестирование', price: '10 000 ₽' },
            { name: 'Выстраивание мобильной и веб-атрибуции', price: '100 000 ₽' },
        ],
    },
    {
        title: 'Креативы и эксперименты',
        text: 'UGC и визуальные концепции, продуктовые гипотезы. Сначала дешёвый тест, потом масштабирование — не наоборот.',
        items: [
            { name: 'Видеомонтаж одного видео-креатива на 15 секунд', price: '4 000 ₽' },
            { name: 'Написание сюжета одного видео-креатива', price: '2 000 ₽' },
            { name: 'UGC видео креатив (под клиентский отзыв)', price: '15 000 ₽' },
            { name: 'Написание сюжета одного видео-креатива (под UGC креатив)', price: '2 000 ₽' },
            { name: 'Продакшен 1 баннера', price: '2 000 ₽' },
            { name: 'Написание сюжета одного баннера', price: '2 000 ₽' },
            { name: 'Производство 1 AI модели', price: '50 000 ₽' },
            { name: 'Производство 1 кинематографического креатива', price: '200 000 ₽' },
        ],
    },
    {
        title: 'Публикации и платежи',
        text: 'Готовим и публикуем приложение в сторах, подключаем приём платежей.',
        items: [
            { name: 'Публикация в App Store', price: '20 000 ₽' },
            { name: 'Публикация в Android', price: '20 000 ₽' },
            { name: 'Подключение платежных решений', price: '40 000 ₽' },
            { name: 'ASO-аудит: базовая подготовка семантики', price: 'от 6 000 ₽' },
            { name: 'ASO-аудит: комплексный аудит одной платформы с рекомендациями', price: 'от 14 990 ₽' },
        ],
    },
    {
        title: 'HR / Поиск талантов',
        text: 'Подбор специалистов и команд под задачи маркетинга и роста продукта.',
        items: [
            { name: 'Конкурентный анализ', price: 'индивидуально' },
        ],
    },
];


const heroTags = [
    { label: 'Партнёрский маркетинг', top: '6%', left: '0%', d: '0s' },
    { label: 'SMM', top: '26%', right: '6%', d: '-3s' },
    { label: 'SEO', top: '52%', left: '2%', d: '-5s' },
    { label: 'In-app ads', top: '64%', right: '3%', d: '-2s' },
    { label: 'Programmatic ads', bottom: '2%', left: '26%', d: '-7s' },
    { label: 'Цифровой маркетинг', top: '0%', right: '2%', d: '-1s', sm: true },
    { label: 'Медиапланирование', top: '14%', left: '4%', d: '-4s' },
    { label: 'Управление партнерскими программами', top: '20%', right: '0%', d: '-6s', sm: true },
    { label: 'Специалист по маркетингу', top: '34%', left: '0%', d: '-2s', sm: true },
    { label: 'Маркетинг, ориентированный на результат', top: '2%', left: '22%', d: '-8s', sm: true },
    { label: 'Маркетинг роста', top: '48%', left: '8%', d: '-1s' },
    { label: 'Привлечение пользователей — UA', top: '74%', left: '0%', d: '-4s', sm: true },
    { label: 'Менеджер влияния', top: '58%', right: '6%', d: '-5s' },
    { label: 'Создатель влияния', bottom: '16%', left: '2%', d: '-2s' },
    { label: 'Web2App', bottom: '4%', right: '8%', d: '-6s' },
    { label: 'W2A', top: '10%', right: '18%', d: '-3s' },
    { label: 'Web2Web', top: '40%', right: '16%', d: '-8s' },
    { label: 'W2W', top: '70%', right: '20%', d: '-1s' },
];

function ClientCard({ item, duplicate, onSelect, isActive }) {
    const handleClick = (e) => {
        if (onSelect) {
            e.preventDefault();
            onSelect(item);
        }
    };

    return (
        <a href={`/cases/${item.id}`} onClick={handleClick} className={`client-card ${isActive ? 'client-card-active' : ''}`} tabIndex={duplicate ? -1 : 0} aria-hidden={duplicate} aria-pressed={isActive ? 'true' : 'false'}>
            {item.img && (
                <span className="client-card-logo">
                    <img src={item.img} alt="" />
                </span>
            )}
            <span className="client-card-body">
                <span className="client-card-cat">{item.category}</span>
                <span className="client-card-title">{item.title}</span>
                <span className="client-card-desc">{item.desc}</span>
            </span>
        </a>
    );
}

function AboutPage() {
    const clients = [...cases, ...cases];
    const [activeCase, setActiveCase] = useState(null);
    const openScrollY = useRef(0);
    const panelRef = useRef(null);
    const marqueeRef = useRef(null);

    const scrollToMarquee = () => {
        // Ждём кадр-два, чтобы React успел удалить панель из DOM: иначе
        // smooth-скролл считается по ещё высокому layout и упирается в кламп
        // по нижней границе страницы — бегущая строка встаёт у верхнего края.
        requestAnimationFrame(() => requestAnimationFrame(() => {
            marqueeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }));
    };

    const handleSelect = (item) => {
        if (activeCase?.id === item.id) {
            setActiveCase(null);
            scrollToMarquee();
            return;
        }
        openScrollY.current = window.scrollY;
        setActiveCase(item);
    };

    // Панель с кейсом закрывается, когда кейс «дочитан»: пользователь
    // прокрутил страницу вниз так, что нижняя граница кейса ушла выше
    // нижнего края экрана. Первые полторы секунды после открытия и
    // начале чтения панель не закрывается — чтобы случайный скролл
    // сразу после клика её не сворачивал. После закрытия экран плавно
    // возвращается к бегущей строке.
    useEffect(() => {
        if (!activeCase) return;
        const openedAt = Date.now();
        openScrollY.current = window.scrollY;
        const onScroll = () => {
            if (Date.now() - openedAt < 1500) return;
            const el = panelRef.current;
            if (!el) return;
            const bottom = el.getBoundingClientRect().bottom;
            const scrolled = window.scrollY - openScrollY.current;
            if (bottom < window.innerHeight - 40 && scrolled > 240) {
                setActiveCase(null);
                scrollToMarquee();
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [activeCase]);

    return (
        <div className="service-page">
            <Navbar />

            <section className="about-hero">
                <div className="about-hero-tags" aria-hidden="true">
                    {heroTags.map((t, i) => (
                        <span
                            key={t.label}
                            className={`about-hero-tag ${t.sm ? 'hero-tag-sm' : ''} ${i >= 5 ? 'hero-tag-secondary' : ''}`}
                            style={{ top: t.top, left: t.left, right: t.right, bottom: t.bottom, animationDelay: t.d }}
                        >
                            {t.label}
                        </span>
                    ))}
                </div>
                <img className="about-photo" src="/artem-menshikov.jpg" alt="Артём Меньшиков" width="200" height="200" />
                <h1>Артём Меньшиков</h1>
                <p className="about-hero-role">Занимаюсь ростом цифровых продуктов — приложений и онлайн-сервисов. Разбираюсь, где продукт теряет деньги и пользователей, провожу оптимизацию и проверяю идеи на тестах. Провожу консультации с партнерами для крупных компаний: Mail, Playrix, Verv и др.</p>
                <div className="about-hero-actions">
                    <a className="about-btn about-btn-primary" href="#contact" onClick={scrollToContact}>Написать мне</a>
                </div>
            </section>

            <section className="about-verticals" id="about-projects" aria-label="Проекты">
                <div className="marquee" ref={marqueeRef}>
                    <div className={`marquee-track ${activeCase ? 'marquee-track-paused' : ''}`}>
                        {clients.map((item, i) => (
                            <ClientCard item={item} duplicate={i >= cases.length} key={`a-${i}`} onSelect={handleSelect} isActive={activeCase?.id === item.id} />
                        ))}
                    </div>
                </div>
                <div ref={panelRef} className={`about-marquee-panel ${activeCase ? 'about-marquee-panel-open' : ''}`}>
                    {activeCase && (
                        <div className="about-marquee-panel-inner">
                            <div className="about-marquee-panel-box">
                                <div className="container">
                                    <CaseDetail id={activeCase.id} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="about-block">
                <div className="container">
                    <Reveal animation="fade-in-bottom">
                        <h2 className="about-block-title">Что в цифрах</h2>
                        <div className="about-stats">
                            {achievements.map((a) => (
                                <div className="about-stat" key={a.label}>
                                    <div className="about-stat-value">{a.value}</div>
                                    <div className="about-stat-label">{a.label}</div>
                                    <div className="about-stat-note">{a.note}</div>
                                </div>
                            ))}
                        </div>
                        <div className="about-top">
                            <div className="about-top-badge">#1</div>
                            <div>
                                <h3>30 Day Fitness Challenge — первое место в Top Charts</h3>
                                <p>Приложение поднялось в топ категории Health &amp; Fitness в App Store и держало позицию в первой тройке общих чартов Free Apps.</p>
                            </div>
                        </div>
                        <figure className="about-proof about-proof-post">
                            <img src="/30day-top-charts-linkedin.png" alt="Пост в LinkedIn о первом месте 30 Day Fitness Challenge по загрузкам в США и скриншот Top Charts Free Apps" loading="lazy" width="846" height="1316" />
                            <figcaption>Пост в LinkedIn: 30 Day Fitness — #1 по загрузкам в США и #5 в мире. Ниже — Top Charts Free Apps, где приложение занимает первое место.</figcaption>
                        </figure>
                        <figure className="about-proof">
                            <Link to="/cases/fitness30" className="about-proof-link" aria-label="Открыть кейс 30-Day Fitness">
                                <img src="/top-charts-30day.jpg" alt="30 Day Fitness Challenge — первое место в Top Charts Free Apps" loading="lazy" />
                            </Link>
                            <figcaption>Скриншот Top Charts: 30 Day Fitness Challenge на первом месте в категории Health &amp; Fitness</figcaption>
                        </figure>
                    </Reveal>
                </div>
            </section>

            <section className="about-block">
                <div className="container">
                    <Reveal animation="fade-in-bottom">
                        <div className="about-geo">
                            <h3>География</h3>
                            <p>Работал с продуктами на разных рынках — СНГ, Европа, Северная и Южная Америка: от первых покупок в новых гео до масштабирования на больших объёмах.</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="about-block">
                <div className="container">
                    <Reveal animation="fade-in-bottom">
                        <h2 className="about-block-title">Чем занимаюсь</h2>
                        <div className="about-directions">
                            {directions.map((d, i) => (
                                <div className="about-direction" key={d.title}>
                                    <div className="about-direction-index">{String(i + 1).padStart(2, '0')}</div>
                                    <div>
                                        <h3>{d.title}</h3>
                                        <p>{d.text}</p>
                                        <ul className="about-price-list">
                                            {d.items.map((it) => (
                                                <li key={it.name}>
                                                    <span className="about-price-name">{it.name}</span>
                                                    {it.price && <span className="about-price-value">{it.price}</span>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </div>
    );
}

export default AboutPage;