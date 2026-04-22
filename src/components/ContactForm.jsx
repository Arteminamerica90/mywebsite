import React, { useState, useRef } from 'react';
import axios from 'axios';
import { upload } from '@vercel/blob/client';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '' });
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const inputFileRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
            setError('Файл слишком большой. Максимальный размер 10 МБ.');
            setFile(null);
            if (inputFileRef.current) inputFileRef.current.value = '';
        } else {
            setError('');
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setError('');

        try {
            let fileUrl = '';

            // 1. Upload to Vercel Blob if file is selected
            if (file) {
                try {
                    const newBlob = await upload(file.name, file, {
                        access: 'public',
                        handleUploadUrl: '/api/upload',
                    });
                    fileUrl = newBlob.url;
                } catch (err) {
                    console.error('Blob upload failed:', err);
                    throw new Error('Ошибка при загрузке файла. Попробуйте еще раз.');
                }
            }

            // 2. Save to localStorage for the local Admin Panel
            const existingMessages = JSON.parse(localStorage.getItem('admin_messages') || '[]');
            const newMessage = { 
                ...formData, 
                id: Date.now(), 
                date: new Date().toLocaleString(),
                fileUrl: fileUrl 
            };
            localStorage.setItem('admin_messages', JSON.stringify([newMessage, ...existingMessages]));

            // 3. Send to API (Telegram, Email)
            await axios.post('/api/contact', { ...formData, fileUrl });

            setStatus('success');
            setFormData({ name: '', email: '', contact: '', message: '' });
            setFile(null);
            if (inputFileRef.current) inputFileRef.current.value = '';
        } catch (err) {
            console.error('Error sending message:', err);
            setError(err.message || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
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
                        const value = e.target.value.replace(/[^\d+() ]/g, ''); 
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
            
            <div className="form-group file-input-group">
                <label htmlFor="file-upload" className="file-label">
                    <span>📎</span> {file ? file.name : 'Прикрепить файл (ТЗ, скриншот...)'}
                </label>
                <input
                    id="file-upload"
                    type="file"
                    ref={inputFileRef}
                    onChange={handleFileChange}
                    style={{ position: 'absolute', opacity: 0, width: 0 }}
                />
                {error && <p className="error-msg" style={{ color: '#ff4d4d', fontSize: '0.8rem', marginTop: '5px' }}>{error}</p>}
            </div>

            <button type="submit" className="btn-primary" disabled={status === 'sending' || !!error}>
                {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
            </button>
            {status === 'success' && <p className="success-msg">Спасибо! Мы скоро свяжемся с вами.</p>}
        </form>
    );
}

export default ContactForm;
