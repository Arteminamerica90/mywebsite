import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('admin_messages') || '[]');
        setMessages(savedMessages);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('admin_auth');
        navigate('/login');
    };

    const clearMessages = () => {
        localStorage.removeItem('admin_messages');
        setMessages([]);
    };

    return (
        <div className="admin-panel">
            <nav className="navbar">
                <div className="container nav-container">
                    <div className="logo">Admin Dashboard</div>
                    <div className="nav-btns" style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/" className="btn-secondary">На сайт</Link>
                        <button onClick={handleLogout} className="btn-primary">Выйти</button>
                    </div>
                </div>
            </nav>

            <div className="container admin-content">
                <div className="admin-header">
                    <h2>Входящие заявки</h2>
                    <button onClick={clearMessages} className="btn-secondary">Очистить все</button>
                </div>

                <div className="messages-list">
                    {messages.length === 0 ? (
                        <p className="no-messages">Заявок пока нет.</p>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} className="message-card fade-in">
                                <div className="message-header">
                                    <strong>{msg.name}</strong>
                                    <span className="message-date">{msg.date}</span>
                                </div>
                                <div className="message-email">{msg.email}</div>
                                <div className="message-body">{msg.message}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Admin;
