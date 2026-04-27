import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function CoursePage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const modules = [
        { num: '01', title: 'Мышление уровня CMO', desc: 'Как думают топ-маркетологи мировых компаний. Фреймворки принятия решений, которых не дают в MBA.' },
        { num: '02', title: 'Growth-маркетинг на практике', desc: 'Реальные механики роста: от вирусных петель до data-driven Product-Led Growth. Никаких теорий — только работающие схемы.' },
        { num: '03', title: 'Управление командой роста', desc: 'Как собрать, выстроить и мотивировать Growth-команду. KPI, которые двигают бизнес, а не просто красиво выглядят в отчёте.' },
        { num: '04', title: 'Медиамикс и бюджетирование', desc: 'Как perераспределять бюджет между каналами в реальном времени. Математика, стоящая за ROAS, LTV и unit-экономикой.' },
        { num: '05', title: 'Управление продуктом через маркетинг', desc: 'Как влиять на roadmap продукта данными из рекламы. Методология Jobs-to-be-Done в применении к UA.' },
        { num: '06', title: 'Сессии с практиком', desc: 'Разбор ваших реальных кейсов с экспертами. Ваш рост — это не знания, это применённые знания.' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Save course subscriber locally
            const subscribers = JSON.parse(localStorage.getItem('course_subscribers') || '[]');
            const newSub = { name, email, phone, date: new Date().toLocaleString(), id: Date.now() };
            localStorage.setItem('course_subscribers', JSON.stringify([newSub, ...subscribers]));

            // Also save to main admin messages
            const adminMessages = JSON.parse(localStorage.getItem('admin_messages') || '[]');
            localStorage.setItem('admin_messages', JSON.stringify([{
                ...newSub,
                contact: phone,
                message: `🎓 КУРС CMO: Заявка на курс "Как повысить свою экспертизу" — 99 000 руб.`
            }, ...adminMessages]));

            await axios.post('/api/contact', {
                name,
                email,
                contact: phone,
                message: `🎓 КУРС CMO: Заявка на курс "Как повысить свою экспертизу" — 99 000 руб.`
            });

            setStatus('success');
        } catch (err) {
            setStatus('success'); // save locally at minimum
        }
    };

    const handleCourseLogin = () => {
        navigate('/course/login');
    };

    return (
        <div className="service-page">
            <Navbar />

            {/* Hero */}
            <div style={{ paddingTop: '100px', background: 'linear-gradient(180deg, rgba(139,92,246,0.08) 0%, transparent 100%)', paddingBottom: '5rem' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
                    <div className="badge">🎓 Закрытый курс</div>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: 1.15, margin: '1rem 0' }}>
                        Как повысить свою экспертизу<br />
                        <span className="gradient-text">до уровня CMO</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-text)', maxWidth: '620px', margin: '0 auto 2rem' }}>
                        Курс для маркетологов, которым недостаточно классических инструментов. Для тех, кто хочет думать и действовать на уровне Chief Marketing Officer.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid var(--accent-color)', borderRadius: '12px', padding: '0.6rem 1.2rem', fontSize: '0.9rem', fontWeight: 600 }}>🕐 6 модулей</div>
                        <div style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid var(--accent-color)', borderRadius: '12px', padding: '0.6rem 1.2rem', fontSize: '0.9rem', fontWeight: 600 }}>👥 Закрытое сообщество</div>
                        <div style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid var(--accent-color)', borderRadius: '12px', padding: '0.6rem 1.2rem', fontSize: '0.9rem', fontWeight: 600 }}>🔁 Доступ навсегда</div>
                    </div>
                </div>
            </div>

            {/* Modules */}
            <div className="container" style={{ padding: '4rem 0' }}>
                <h2 className="section-title" style={{ marginBottom: '3rem' }}>Программа курса</h2>
                <div className="service-grid-detailed">
                    {modules.map((m, i) => (
                        <div key={i} className="audit-item" style={{ position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '3rem', fontWeight: 800, color: 'rgba(139,92,246,0.1)', lineHeight: 1 }}>{m.num}</div>
                            <h3 style={{ color: 'var(--accent-color)' }}>{m.title}</h3>
                            <p style={{ color: 'var(--muted-text)' }}>{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* For whom */}
            <div style={{ background: 'var(--secondary-color)', padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title">Для кого этот курс</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2rem', textAlign: 'left' }}>
                        {[
                            ['🚀', 'Вы уже работаете в маркетинге 3+ лет и хотите выйти на следующий уровень'],
                            ['📊', 'Вам мало стандартных воронок — вы хотите понимать систему целиком'],
                            ['💡', 'Вы хотите говорить с CEO и инвесторами на языке цифр и роста'],
                            ['🌍', 'Вы работаете с продуктами, которые нацелены на global-рынки'],
                        ].map(([icon, text], i) => (
                            <div key={i} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                                <p style={{ color: 'var(--muted-text)', margin: 0, fontSize: '0.95rem' }}>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Price + Form */}
            <div className="container" style={{ padding: '5rem 0', maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(10,10,12,0.5) 100%)', border: '1px solid var(--glass-border)', borderRadius: '32px', padding: '3rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>99 000 <span style={{ fontSize: '1.5rem', color: 'var(--muted-text)' }}>руб.</span></div>
                    <p style={{ color: 'var(--muted-text)', marginBottom: '2rem' }}>Единовременная оплата — доступ к материалам навсегда, включая все обновления курса.</p>

                    {status === 'success' ? (
                        <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', borderRadius: '16px', padding: '2rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                            <p style={{ color: '#10b981', fontWeight: 600, marginBottom: '0.5rem' }}>Заявка принята!</p>
                            <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>Мы свяжемся с вами в ближайшее время для оплаты и получения доступа.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ width: '100%', padding: '1.2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', color: '#fff', fontSize: '1rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                            />
                            <input
                                type="text"
                                placeholder="Ваш телефон"
                                required
                                value={phone}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^\d+() ]/g, '');
                                    setPhone(value);
                                }}
                                style={{ width: '100%', padding: '1.2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', color: '#fff', fontSize: '1rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                            />
                            <input
                                type="email"
                                placeholder="Email для получения доступа"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', padding: '1.2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', color: '#fff', fontSize: '1rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                            />
                            <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                {status === 'sending' ? 'Отправка...' : '🎓 Записаться на курс — 99 000 руб.'}
                            </button>
                            <p style={{ color: 'var(--muted-text)', fontSize: '0.8rem' }}>После заявки мы вышлем реквизиты для оплаты и доступ к закрытому разделу</p>
                        </form>
                    )}

                    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                        <p style={{ color: 'var(--muted-text)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Уже есть доступ к курсу?</p>
                        <button onClick={handleCourseLogin} className="btn-secondary" style={{ fontSize: '0.9rem' }}>Войти в личный кабинет</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePage;
