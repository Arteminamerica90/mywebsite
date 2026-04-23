import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CourseLogin() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Check if email is registered as course subscriber
        const subscribers = JSON.parse(localStorage.getItem('course_subscribers') || '[]');
        const found = subscribers.find(s => s.email.toLowerCase() === email.toLowerCase().trim());

        if (found) {
            localStorage.setItem('course_auth', JSON.stringify({ email: found.email, name: found.name }));
            navigate('/course/dashboard');
        } else {
            setError('Email не найден. Убедитесь, что вы зарегистрировались на курс, или свяжитесь с нами.');
        }
    };

    return (
        <div className="service-page">
            <Navbar />
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
                <div className="login-card" style={{ maxWidth: '420px', width: '100%' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎓</div>
                    <div className="logo" style={{ marginBottom: '0.5rem' }}>Media CPA-Partners</div>
                    <h2 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Личный кабинет курса</h2>
                    <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem', marginBottom: '2rem' }}>Введите email, на который вы регистрировались</p>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="email"
                            placeholder="Ваш email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '1.2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', color: '#fff', fontSize: '1rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                        />
                        {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: 0 }}>{error}</p>}
                        <button type="submit" className="btn-primary">Войти</button>
                    </form>

                    <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                        <Link to="/course" style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>← Ещё не купили курс? Записаться</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseLogin;
