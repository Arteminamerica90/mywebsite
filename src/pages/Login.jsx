import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Reveal } from '../components/Reveal';


function Login() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState('login'); // login, forgot, verify, reset
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const savedPassword = localStorage.getItem('admin_password') || 'admin1234';
        if (password === savedPassword) {
            localStorage.setItem('admin_auth', 'true');
            navigate('/admin');
        } else {
            setError('Неверный пароль');
        }
    };

    const handleRequestCode = async () => {
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        setResetCode(code);
        setStatus('sending');
        try {
            await axios.post('/api/contact', {
                name: 'Система безопасности',
                email: 'system@mediacpa.com',
                message: `Код для смены пароля: ${code}`
            });
            setStatus('verify');
        } catch (err) {
            setError('Ошибка сети. Но ваш код (для теста): ' + code);
            setStatus('verify');
        }
    };

    const handleVerifyCode = (e) => {
        e.preventDefault();
        if (inputCode === resetCode) {
            setStatus('reset');
            setError('');
        } else {
            setError('Неверный код из Telegram');
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (newPassword.length < 4) {
            setError('Пароль слишком короткий');
            return;
        }
        localStorage.setItem('admin_password', newPassword);
        setStatus('login');
        setError('Пароль успешно изменен! Теперь войдите с новым паролем.');
    };

    return (
        <div className="login-page">
            <div className="container login-container">
                <Reveal animation="fade-in-bottom">
                    <div className="login-card">
                        <div className="logo">Media CPA-Partners</div>

                        {status === 'login' && (
                            <>
                                <h2>Вход в админ-панель</h2>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            placeholder="Введите пароль"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <p className={error.includes('успешно') ? "success-msg" : "error-msg"}>{error}</p>}
                                    <button type="submit" className="btn-primary">Войти</button>
                                </form>
                                <div className="login-footer">
                                    <button onClick={() => setStatus('forgot')} className="btn-link">Забыли пароль?</button>
                                </div>
                            </>
                        )}

                        {status === 'forgot' && (
                            <>
                                <h2>Восстановление</h2>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--muted-text)' }}>
                                    Мы отправим код подтверждения в ваш Telegram-бот.
                                </p>
                                <button onClick={handleRequestCode} className="btn-primary">Получить код</button>
                                <div className="login-footer">
                                    <button onClick={() => setStatus('login')} className="btn-link">Назад</button>
                                </div>
                            </>
                        )}

                        {status === 'sending' && <p>Отправка кода в Telegram...</p>}

                        {status === 'verify' && (
                            <>
                                <h2>Введите код</h2>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--muted-text)' }}>
                                    Код отправлен в Telegram.
                                </p>
                                <form onSubmit={handleVerifyCode}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Код из 4 цифр"
                                            value={inputCode}
                                            onChange={(e) => setInputCode(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <p className="error-msg">{error}</p>}
                                    <button type="submit" className="btn-primary">Проверить код</button>
                                </form>
                            </>
                        )}

                        {status === 'reset' && (
                            <>
                                <h2>Новый пароль</h2>
                                <form onSubmit={handleResetPassword}>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            placeholder="Придумайте новый пароль"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <p className="error-msg">{error}</p>}
                                    <button type="submit" className="btn-primary">Сохранить пароль</button>
                                </form>
                            </>
                        )}
                    </div>
                </Reveal>

            </div>
        </div>
    );
}

export default Login;
