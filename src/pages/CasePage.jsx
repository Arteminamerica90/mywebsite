import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';

const cases = {
    'betterme': {
        title: 'BetterMe',
        category: 'Health & Fitness',
        tag: 'Кейс: User Acquisition',
        tagline: 'Walking for Weight Loss & Running for Weight Loss',
        intro: 'BetterMe — один из самых быстрорастущих Health & Fitness продуктов на глобальном рынке. Наша команда подключилась на этапе масштабирования и выстроила полноценную UA-машину с нуля.',
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
        category: 'Fitness Challenge',
        tag: 'Кейс: CPA Optimization',
        tagline: 'Оптимизация CPA и взрывной рост установок',
        image: '/fitness30.png',
        intro: 'Фитнес-приложение с вирусной механикой 30-дневных челленджей. Наша задача — снизить стоимость установки и увеличить объём качественного трафика.',
        sections: [
            {
                title: '🎯 Задача',
                text: 'Снизить стоимость установки (CPI) на 30% при сохранении качества аудитории (Retention D1 > 40%).'
            },
            {
                title: '📊 Результат',
                text: 'Оптимизировали воронку и добились снижения CPI при стабильном качестве трафика. Подготовьтесь к детальному кейсу — материал в разработке.'
            }
        ]
    },
    'joom': {
        title: 'Joom',
        category: 'E-commerce',
        tag: 'Кейс: Global UA',
        tagline: 'Глобальный маркетинг для маркетплейса',
        intro: 'Joom — международный маркетплейс с аудиторией в десятках стран. Выстраивали User Acquisition на нескольких рынках одновременно.',
        sections: [
            {
                title: '🌍 Масштаб',
                text: 'Работа велась параллельно в нескольких гео: Европа, Латинская Америка, Азия. Детальный кейс в разработке.'
            }
        ]
    },
    'calm': {
        title: 'Calm',
        category: 'Mental Health',
        tag: 'Кейс: Niche Audience',
        tagline: 'Привлечение осознанной аудитории',
        intro: 'Calm — мировой лидер в категории Mental Health. Специфика продукта требовала особого подхода к коммуникации в рекламе.',
        sections: [
            {
                title: '🧘 Специфика',
                text: 'Создавали нативные и ненавязчивые рекламные форматы, которые органично вписываются в ленту и не нарушают «медитативное» восприятие продукта. Детальный кейс в разработке.'
            }
        ]
    },
    'delivery': {
        title: 'Delivery Club',
        category: 'Food Delivery',
        tag: 'Кейс: Market Leadership',
        tagline: 'Лидерство на рынке доставки еды',
        intro: 'Delivery Club — один из лидеров рынка доставки еды в России. Работали над укреплением позиций и привлечением новой аудитории.',
        sections: [
            {
                title: '🚀 Задача',
                text: 'Удержание лидерских позиций в условиях высокой конкуренции со стороны Яндекс.Еды и Самоката. Детальный кейс в разработке.'
            }
        ]
    },
    'fiton': {
        title: 'FitOn',
        category: 'Fitness platform',
        tag: 'Кейс: Community Growth',
        tagline: 'Взрывной рост фитнес-сообщества',
        intro: 'FitOn — фитнес-платформа с элементами социальной сети. Задача — вырастить активное сообщество вокруг приложения.',
        sections: [
            {
                title: '👥 Подход',
                text: 'Использовали механики виральности и реферальные программы для органического роста. Детальный кейс в разработке.'
            }
        ]
    },
    'hfwl': {
        title: 'Home Fitness for Weight Loss',
        category: 'Health & Fitness',
        tag: 'Кейс: 40x SKAN Scaling',
        tagline: 'Масштабирование подписок в эпоху приватности',
        image: '/hfwl.png',
        intro: 'Home Fitness for Weight Loss — это пример того, как команда AdSolo смогла не просто адаптироваться к изменениям iOS (ATT/SKAN), но и превратить их в преимущество, обеспечив взрывной рост подписок.',
        sections: [
            {
                title: '🎯 Задача',
                text: 'Увеличить объём подписок на платформе iOS в условиях ограниченной атрибуции SKAdNetwork. Основной вызов — сохранение и рост ROAS при 10-кратном увеличении рекламного бюджета.'
            },
            {
                title: '⚡ Стратегия AdSolo',
                text: 'Мы внедрили комплексный подход:\n• Web2App воронки для обхода ограничений атрибуции\n• Глубокая интеграция с продуктовой командой для оптимизации онбординга\n• Фокус на Tier-1 рынки (преимущественно США) с целевой аудиторией (женщины 21-55 лет)'
            },
            {
                title: '🎨 Креативный цех',
                text: 'За 6 месяцев было создано и протестировано более 200 уникальных креативов. Мы отошли от классических "мотивационных" роликов в сторону эмоционального сторителлинга и демонстрации конкретных промежуточных результатов, что дало значительный прирост в конверсии клика в покупку.'
            },
            {
                title: '📊 Результаты',
                text: '• В 40 раз вырос объем подписок через SKAN-трафик за 6 месяцев\n• В 10 раз увеличен общий рекламный бюджет при сохранении целевых показателей окупаемости\n• Выстроена полностью прозрачная система закупки трафика, устойчивая к изменениям политик конфиденциальности Apple'
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
                <div className="container post-content fade-in" style={{ paddingTop: '120px', textAlign: 'center' }}>
                    <h1>Кейс не найден</h1>
                    <Link to="/" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>На главную</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <Navbar />

            <div className="container post-content fade-in" style={{ paddingTop: '120px' }}>
                <div className="post-header">
                    <span className="post-date">{caseData.tag}</span>
                    <span style={{ display: 'inline-block', background: 'rgba(139,92,246,0.15)', color: 'var(--accent-color)', padding: '0.3rem 0.9rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', marginLeft: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{caseData.category}</span>
                    
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

                <div className="post-body" style={{ marginBottom: '3rem' }}>
                    <p style={{ fontSize: '1.25rem', borderLeft: '3px solid var(--accent-color)', paddingLeft: '1.5rem', color: '#fff', fontStyle: 'italic' }}>
                        {caseData.intro}
                    </p>
                </div>

                <div className="service-grid-detailed" style={{ marginBottom: '4rem' }}>
                    {caseData.sections.map((section, i) => (
                        <div key={i} className="audit-item">
                            <h3>{section.title}</h3>
                            <div>
                                {section.text.split('\n').map((line, j) => (
                                    <p key={j} style={{ color: line.startsWith('•') ? '#fff' : 'var(--muted-text)', marginBottom: '0.5rem', paddingLeft: line.startsWith('•') ? '0.5rem' : 0 }}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="post-footer">
                    <Link to="/" className="btn-secondary">← Все кейсы</Link>
                </div>
            </div>

            <ContactSection />
        </div>
    );
}

export default CasePage;
