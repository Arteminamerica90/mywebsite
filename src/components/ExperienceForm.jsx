import React, { useState } from 'react';

const ExperienceForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: 'developer',
        experience: '',
        bio: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="experience-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ваше Имя / Никнейм" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <select 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange} 
                        className="form-select"
                        required
                    >
                        <option value="developer">Разработчик</option>
                        <option value="designer">Дизайнер</option>
                        <option value="marketer">Маркетолог</option>
                        <option value="manager">Продакт / Проджект</option>
                        <option value="founder">Ищу кофаундера</option>
                        <option value="other">Другое</option>
                    </select>
                </div>

                <div className="form-group">
                    <input 
                        type="number" 
                        name="experience" 
                        placeholder="Опыт работы (в годах)" 
                        value={formData.experience} 
                        onChange={handleChange} 
                        min="0"
                        max="50"
                        required 
                    />
                </div>

                <div className="form-group">
                    <textarea 
                        name="bio" 
                        placeholder="Кратко о вашем стеке технологий, ключевых навыках и что вы ищете..." 
                        value={formData.bio} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
                    Начать поиск проектов
                </button>
            </form>
        </div>
    );
};

export default ExperienceForm;
