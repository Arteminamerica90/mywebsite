import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const courseModules = [
    {
        num: '01',
        title: 'Мышление уровня CMO',
        locked: false,
        lessons: [
            { title: 'Введение: Разрыв между маркетологом и CMO', duration: '18 мин' },
            { title: 'Фреймворк принятия решений в условиях неопределённости', duration: '24 мин' },
            { title: 'Как читать бизнес-метрики глазами CMO', duration: '31 мин' },
        ]
    },
    {
        num: '02',
        title: 'Growth-маркетинг на практике',
        locked: false,
        lessons: [
            { title: 'Вирусные петли: механика и примеры', duration: '22 мин' },
            { title: 'Product-Led Growth: когда продукт сам продаёт', duration: '28 мин' },
            { title: 'Построение Growth-экспериментов', duration: '35 мин' },
        ]
    },
    {
        num: '03',
        title: 'Управление командой роста',
        locked: true,
        lessons: [
            { title: 'Структура Growth-команды в разных стадиях компании', duration: '20 мин' },
            { title: 'KPI, которые двигают результат', duration: '26 мин' },
            { title: 'Найм: какие люди нужны в UA-команду', duration: '19 мин' },
        ]
    },
    {
        num: '04',
        title: 'Медиамикс и бюджетирование',
        locked: true,
        lessons: [
            { title: 'Математика ROAS, LTV, unit-экономика', duration: '33 мин' },
            { title: 'Перераспределение бюджета в реальном времени', duration: '27 мин' },
        ]
    },
    {
        num: '05',
        title: 'Управление продуктом через маркетинг',
        locked: true,
        lessons: [
            { title: 'Jobs-to-be-Done в применении к UA', duration: '21 мин' },
            { title: 'Как влиять на roadmap данными из рекламы', duration: '25 мин' },
        ]
    },
    {
        num: '06',
        title: 'Разбор кейсов с экспертом',
        locked: true,
        lessons: [
            { title: 'Живая сессия: разбор вашего кейса', duration: 'Запись' },
            { title: 'Q&A сессия с ответами на вопросы курса', duration: 'Запись' },
        ]
    },
];

function CourseDashboard() {
    const navigate = useNavigate();
    const courseAuth = JSON.parse(localStorage.getItem('course_auth') || 'null');

    useEffect(() => {
        if (!courseAuth) {
            navigate('/course/login');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('course_auth');
        navigate('/course');
    };

    if (!courseAuth) return null;

    return (
        <div className="service-page">
            <Navbar />
            <div className="container" style={{ paddingTop: '110px', paddingBottom: '5rem', maxWidth: '900px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '0.3rem' }}>🎓 Личный кабинет курса</p>
                        <h1 style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>Добро пожаловать, {courseAuth.name}!</h1>
                        <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>{courseAuth.email}</p>
                    </div>
                    <button onClick={handleLogout} className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>Выйти</button>
                </div>

                {/* Progress */}
                <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '1.5rem 2rem', marginBottom: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-color)' }}>2/6</div>
                        <div style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>Модулей доступно</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>0%</div>
                        <div style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>Прогресс</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>14</div>
                        <div style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>Уроков в курсе</div>
                    </div>
                </div>

                {/* Modules */}
                <h2 style={{ marginBottom: '2rem' }}>Программа курса</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {courseModules.map((mod, i) => (
                        <div key={i} style={{ background: 'var(--glass-bg)', border: `1px solid ${mod.locked ? 'var(--glass-border)' : 'var(--accent-color)'}`, borderRadius: '20px', overflow: 'hidden', opacity: mod.locked ? 0.6 : 1 }}>
                            <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'rgba(139,92,246,0.3)' }}>{mod.num}</div>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: '1.1rem', color: mod.locked ? 'var(--muted-text)' : '#fff' }}>{mod.title}</h3>
                                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--muted-text)' }}>{mod.lessons.length} урока</p>
                                    </div>
                                </div>
                                <div style={{ fontSize: '1.2rem' }}>{mod.locked ? '🔒' : '▶️'}</div>
                            </div>
                            {!mod.locked && (
                                <div style={{ borderTop: '1px solid var(--glass-border)', padding: '0.5rem 2rem 1.5rem' }}>
                                    {mod.lessons.map((lesson, j) => (
                                        <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 0', borderBottom: j < mod.lessons.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                                            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 700, flexShrink: 0 }}>{j + 1}</div>
                                                <span style={{ fontSize: '0.9rem' }}>{lesson.title}</span>
                                            </div>
                                            <span style={{ color: 'var(--muted-text)', fontSize: '0.8rem', flexShrink: 0 }}>{lesson.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(139,92,246,0.08)', border: '1px solid var(--glass-border)', borderRadius: '20px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--muted-text)', marginBottom: '1rem' }}>Остальные модули откроются после получения оплаты. Если вы уже оплатили — напишите нам.</p>
                    <a href="/#contact" className="btn-primary" style={{ fontSize: '0.9rem' }}>Написать в поддержку</a>
                </div>
            </div>
        </div>
    );
}

export default CourseDashboard;
