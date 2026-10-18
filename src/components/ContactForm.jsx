import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '', consent: false });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await axios.post('/api/contact', formData);

            setStatus('success');
            setFormData({ name: '', email: '', contact: '', message: '', consent: false });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
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
            <label className="consent-label">
                <input type="checkbox" required checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} />
                <span>Я согласен(на) на обработку моих данных для ответа на заявку согласно <a href="/privacy">политике конфиденциальности</a>.</span>
            </label>
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
            {status === 'error' && <p className="error-msg">Не удалось отправить заявку. Напишите нам напрямую: arteminamerica@mail.ru.</p>}
        </form>
    );
}

export default ContactForm;
