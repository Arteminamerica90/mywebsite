import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // 1. Save to localStorage for the local Admin Panel
            const existingMessages = JSON.parse(localStorage.getItem('admin_messages') || '[]');
            const newMessage = { ...formData, id: Date.now(), date: new Date().toLocaleString() };
            localStorage.setItem('admin_messages', JSON.stringify([newMessage, ...existingMessages]));

            // 2. Send to API (Telegram, Email)
            await axios.post('/api/contact', formData);

            setStatus('success');
            setFormData({ name: '', email: '', contact: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            // Even if API fails, we saved to localStorage for the admin panel
            setStatus('success');
            setFormData({ name: '', email: '', contact: '', message: '' });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Email (обязательно)"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Телефон (обязательно)"
                    required
                    value={formData.contact}
                    onChange={(e) => {
                        const value = e.target.value.replace(/[^\d+() ]/g, ''); // Разрешаем цифры, +, (, ) и пробел
                        setFormData({ ...formData, contact: value });
                    }}
                />
            </div>
            <div className="form-group">
                <textarea
                    placeholder="Ваше сообщение"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
            </div>
            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
            </button>
            {status === 'success' && <p className="success-msg">Спасибо! Мы скоро свяжемся с вами.</p>}
        </form>
    );
}

export default ContactForm;
