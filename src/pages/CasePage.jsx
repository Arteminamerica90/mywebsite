import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import CaseStats from '../components/CaseStats';
import FitonStats from '../components/FitonStats';
import DeliveryStats from '../components/DeliveryStats';
import CalmStats from '../components/CalmStats';
import { Reveal } from '../components/Reveal';
import { CountUp } from '../components/CountUp';


const cases = {
    'betterme': {
        title: 'BetterMe',
        category: 'Здоровье и Фитнес',
        tag: 'Кейс: User Acquisition',
        tagline: 'Walking for Weight Loss & Running for Weight Loss',
        image: '/betterme.png',
        intro: 'BetterMe — один из самых быстрорастущих Health & Fitness продуктов на глобальном рынке.\n\nНаша команда подключилась на этапе масштабирования и выстроила полноценную UA-машину с нуля.',
        sections: [
            {
                title: '🎯 Задача',
                text: 'Масштабировать объёмы установок на iOS и Web-воронках по офферам "Walking for Weight Loss" и "Running for Weight Loss" с сохранением метрик выше рыночных — ROAS, IPM, CTR и Retention D1/D7.'
            },
            {
                title: '⚡ Что мы сделали',
                text: 'Провели полную диагностику существующих воронок и рекламных кабинетов. Сформировали креативную стратегию на базе конкурентного анализа и данных по рынку Health & Fitness.'
            },
            {
                title: '🎨 Креативы',
                text: 'Разработано и запущено около 250 рекламных креативов с метриками стабильно выше среднерыночных. Использовались все форматы:\n• UGC-контент (видеоотзывы реальных пользователей)\n• Нативные видео-ролики без брендинга\n• Прямые предложения с визуализацией результата\n• Динамические баннеры с персонализацией\n\nПомимо этого, создано около 100 тестовых баннеров для A/B-тестирования гипотез в Facebook Ads, Google UAC и TikTok Ads.'
            },
            {
                title: '📱 Воронки',
                text: 'Тестировали и оптимизировали полный спектр воронок:\n• iOS-воронка (App Store)\n• Web-воронка (лендинг + онбординг + подписка)\n• Гибридная воронка (Web-to-App)\n\nНа каждом этапе фиксировали конверсии и итерировали креативы отдельно под каждый тип трафика.'
            },
            {
                title: '📊 Результат',
                text: 'Достигнуты показатели IPM и CTR выше среднерыночных на обоих офферах. Обеспечен стабильный рост объёмов при сохранении целевого ROAS. Выстроена масштабируемая система UA с чёткими процессами тестирования и аналитики.'
            }
        ]
    },
    'fitness30': {
        title: '30-Day Fitness',
        category: 'Фитнес-челлендж',
        tag: 'БОЛЕЕ $1 277 000 ПОКУПОК ПО CPA-МОДЕЛИ',
        tagline: 'Оптимизация CPA и взрывной рост установок',
        image: '/fitness30.png',
        intro: 'Фитнес-приложение с вирусной механикой 30-дневных челленджей.\n\nНаша задача заключалась в масштабном привлечении качественного трафика через агрессивное тестирование креативных гипотез.',
        sections: [
            {
                title: '📊 Результат',
                content: [
                    <>• Более <CountUp end={1277000} prefix="$" /> покупок.</>,
                    'Достигнут стабильный рост объема при сохранении целевой стоимости привлечения.'
                ]
            },
            {
                title: '🌍 География (ГЕО)',
                content: [
                    'Рекламные кампании охватывали Весь мир (Worldwide), за исключением стран Азии.',
                    'Это позволило сфокусироваться на наиболее релевантных рынках с высокой покупательской способностью.'
                ]
            },
            {
                title: '🎨 Подходы и Креативы',
                content: [
                    <>Протестировано более <CountUp end={1050} suffix="+" /> уникальных креативов.</>,
                    <>На производство рекламных материалов было инвестировано <CountUp end={40000} prefix="$" />.</>,
                    'Масштабное производство позволило найти десятки работающих связок для разных сегментов.'
                ]
            },
            {
                title: '👥 Аудитория',
                content: [
                    'Распределение аудитории по полу:',
                    <>• Женщины — <CountUp end={91} suffix="%" /></>,
                    <>• Мужчины — <CountUp end={9} suffix="%" /></>
                ]
            },
            {
                title: '📈 Стратегия маркетинга',
                content: [
                    'Основной упор был сделан на связку «поиск креативов → аудитория».',
                    'Благодаря огромному объему тестируемого контента, нам удалось эффективно освоить выделенный бюджет и вывести проект на плановую окупаемость.'
                ]
            }
        ]
    },
    'joom': {
        title: 'Joom',
        category: 'Электронная коммерция',
        tag: 'БОЛЕЕ $450 000 ПОКУПОК',
        tagline: 'Масштабирование глобального маркетплейса',
        image: '/joom.png',
        intro: 'Joom — один из крупнейших международных маркетплейсов.\n\nМы выстраивали систему User Acquisition с фокусом на поиск работающих креативных связок и их последующее масштабирование на широкую аудиторию.',
        sections: [
            {
                title: '📊 Результат',
                content: [
                    <>• Более <CountUp end={450000} prefix="$" /> первых покупок (first purchases).</>,
                    <>• Ежедневный рекламный бюджет был успешно масштабирован до <CountUp end={450000} prefix="$" />.</>
                ]
            },
            {
                title: '🌍 География (ГЕО)',
                content: [
                    'Работа велась на рынках СНГ и Латинской Америки (Latam).',
                    'Локализация подходов под каждый регион стала ключом к успеху.'
                ]
            },
            {
                title: '🎨 Подходы и Креативы',
                content: [
                    <>Протестировано более <CountUp end={250} suffix="+" /> уникальных креативных концепций.</>,
                    'Основной фокус был сделан на видео-форматы и демонстрацию товаров в реальной жизни.'
                ]
            },
            {
                title: '👥 Аудитория',
                content: [
                    'Распределение покупателей по полу:',
                    <>• Женщины — <CountUp end={86} suffix="%" /></>,
                    <>• Мужчины — <CountUp end={14} suffix="%" /></>,
                    'Это позволило максимально точно настроить таргетинг и рекламные месседжи.'
                ]
            },
            {
                title: '📈 Стратегия и Путь к успеху',
                content: [
                    'Мы сосредоточились на связке «поиск креативов → аудитория».',
                    <>Начало было непростым: первые <CountUp end={10000} prefix="$" /> были отлиты с ROI -50%.</>,
                    'Однако, благодаря непрерывным тестам, ситуация начала выправляться, пока проект не вышел на плановые показатели.'
                ]
            }
        ]
    },
    'calm': {
        title: 'Calm',
        category: 'Ментальное здоровье',
        tag: 'Кейс: Niche Audience',
        tagline: 'Привлечение осознанной аудитории',
        image: '/calm.png',
        intro: 'Calm — мировой лидер в категории Mental Health. Специфика продукта требовала особого подхода к коммуникации в рекламе.',
        sections: []
    },
    'delivery': {
        title: 'Delivery Club',
        category: 'Доставка еды',
        tag: 'Кейс: Market Leadership',
        tagline: 'Лидерство на рынке доставки еды',
        image: '/delivery.png',
        intro: 'Delivery Club — один из лидеров рынка доставки еды в России. Работали над укреплением позиций и привлечением новой аудитории.',
        sections: []
    },
    'fiton': {
        title: 'FitOn',
        category: 'Фитнес-платформа',
        tag: '50 000+ ПОКУПАТЕЛЕЙ',
        tagline: 'Взрывной рост фитнес-сообщества',
        image: '/fiton.png',
        intro: 'FitOn — фитнес-платформа с элементами социальной сети. Задача — вырастить активное сообщество вокруг приложения.',
        sections: []
    },
    'hfwl': {
        title: 'Home Fitness for Weight Loss',
        category: 'Здоровье и Фитнес',
        tag: '12 500+ ПОДПИСОК',
        tagline: 'Масштабирование iOS & Web2App',
        image: '/hfwl.png',
        intro: 'Кейс по глобальному привлечению пользователей. Период: Ноябрь 2021г. — Апрель 2022г.',
        sections: [
            {
                title: '📊 Результаты в цифрах',
                text: '• 12 500+ новых подписок (iOS, Web2App, Web2Web)\n• 100+ уникальных креативов протестировано'
            },
            {
                title: '🎯 Задачи',
                text: '• Кратно увеличить количество новых пользователей.\n• Обеспечить стабильный рост платных подписок.'
            },
            {
                title: '🌍 География и Платформы',
                text: 'ГЕО: Весь мир (Worldwide).\nПлатформа: iOS (Web2App).\n\nТоп-5 ГЕО:\n🇺🇸 США (14,22%), 🇫🇷 Франция (6%), 🇩🇪 Германия (4,6%), 🇮🇹 Италия (4,2%), 🇨🇦 Канада (4,1%).'
            },
            {
                title: '👥 Целевая аудитория',
                text: 'Основной сегмент: Женщины, 21-54 года.\nПроцентное распределение вовлеченности:\n• Мужчины — 92%\n• Женщины — 8%'
            }
        ]
    }
};

function CasePage() {
    const { id } = useParams();
    const caseData = cases[id];

    if (!caseData) {
        return (
            <div className="blog-post-page">
                <Navbar />
                <div className="container post-content" style={{ paddingTop: '120px', textAlign: 'center' }}>
                    <Reveal animation="fade-in-right">
                        <h1>Кейс не найден</h1>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.2}>
                        <Link to="/" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>На главную</Link>
                    </Reveal>
                </div>

            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <Navbar />

            <div className="container post-content" style={{ paddingTop: '120px' }}>
                <Reveal animation="fade-in-right">
                    <div className="post-header">
                        <div className="case-header-badges" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <span className="case-badge-tag" style={{ fontWeight: 800, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center', lineHeight: 1.1 }}>
                                {caseData.tag}
                            </span>
                            <span className="case-badge-category" style={{ 
                                display: 'inline-block', 
                                background: 'rgba(139,92,246,0.15)', 
                                color: 'var(--accent-color)', 
                                padding: '0.5rem 1.5rem', 
                                borderRadius: '50px', 
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                letterSpacing: '2px',
                                textAlign: 'center'
                            }}>
                                {caseData.category}
                            </span>
                        </div>
                        
                        {caseData.image && (
                            <div style={{ margin: '2rem auto', textAlign: 'center' }}>
                                <img 
                                    src={caseData.image} 
                                    alt={caseData.title} 
                                    style={{ width: '100%', maxWidth: '300px', borderRadius: '24px' }} 
                                />
                            </div>
                        )}

                        <h1>{caseData.title}</h1>
                        <p style={{ fontSize: '1.3rem', color: 'var(--accent-color)', fontWeight: 600, marginTop: '0.5rem' }}>{caseData.tagline}</p>
                    </div>
                </Reveal>

                <Reveal animation="fade-in-bottom" delay={0.2}>
                    <div className="post-body" style={{ marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.25rem', borderLeft: '3px solid var(--accent-color)', paddingLeft: '1.5rem', color: '#fff', fontStyle: 'italic', whiteSpace: 'pre-line' }}>
                            {caseData.intro}
                        </p>
                    </div>
                </Reveal>


                {id === 'hfwl' ? (
                    <Reveal animation="fade-in-bottom" delay={0.3}>
                        <CaseStats />
                    </Reveal>
                ) : id === 'fiton' ? (
                    <Reveal animation="fade-in-bottom" delay={0.3}>
                        <FitonStats />
                    </Reveal>
                ) : id === 'delivery' ? (
                    <Reveal animation="fade-in-bottom" delay={0.3}>
                        <DeliveryStats />
                    </Reveal>
                ) : id === 'calm' ? (
                    <Reveal animation="fade-in-bottom" delay={0.3}>
                        <CalmStats />
                    </Reveal>
                ) : (
                    <div className="service-grid-detailed" style={{ marginBottom: '4rem' }}>
                        {caseData.sections.map((section, i) => (
                            <div key={i} className="audit-item">
                                <Reveal animation="fade-in-right" delay={i * 0.1}>
                                    <h3>{section.title}</h3>
                                </Reveal>
                                <div>
                                    {section.content ? (
                                        section.content.map((item, j) => (
                                            <Reveal animation="fade-in-bottom" delay={(i * 0.2) + (j * 0.1)} key={j}>
                                                <p style={{ color: 'var(--muted-text)', marginBottom: '1rem' }}>{item}</p>
                                            </Reveal>
                                        ))
                                    ) : (
                                        section.text.split('\n').map((block, j) => {
                                            if (!block.trim()) return null;
                                            const sentences = block.split(/(?<=[.!?])\s+(?=[A-ZА-Я])/);
                                            return sentences.map((sentence, k) => (
                                                <Reveal animation="fade-in-bottom" delay={(i * 0.2) + (k * 0.1)} key={`${j}-${k}`}>
                                                    <p style={{ 
                                                        color: sentence.trim().startsWith('•') ? '#fff' : 'var(--muted-text)', 
                                                        marginBottom: '1rem', 
                                                        paddingLeft: sentence.trim().startsWith('•') ? '0.5rem' : 0 
                                                    }}>
                                                        {sentence.trim()}
                                                    </p>
                                                </Reveal>
                                            ));
                                        })
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}


                <Reveal animation="fade-in-bottom" delay={0.5}>
                    <div className="post-footer">
                        <Link to="/" className="btn-secondary">← Все кейсы</Link>
                    </div>
                </Reveal>
            </div>


            <ContactSection />
        </div>
    );
}

export default CasePage;
