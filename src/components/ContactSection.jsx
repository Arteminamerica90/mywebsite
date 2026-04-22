import React from 'react';
import ContactForm from './ContactForm';

function ContactSection() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Готовы к <span className="gradient-text">росту?</span></h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Свяжитесь с нами</h3>
                        <p>Оставьте заявку, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта.</p>
                        <div className="contact-details">
                            <div className="detail-item">
                                <span>✉️</span>
                                <p>arteminamerica@mail.ru</p>
                            </div>
                            <div className="detail-item">
                                <span>📞</span>
                                <p>+7 915 033 1967</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
