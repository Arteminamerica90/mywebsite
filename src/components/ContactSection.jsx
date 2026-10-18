import React from 'react';
import ContactForm from './ContactForm';
import { Reveal } from './Reveal';

function ContactSection() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <Reveal animation="fade-in-right">
                    <h2 className="section-title">Готовы к <span className="gradient-text">росту?</span></h2>
                </Reveal>
                <div className="contact-container">
                    <Reveal animation="fade-in-bottom" className="contact-info">
                        <div>
                            <h3>Свяжитесь с нами</h3>
                            <p>Расскажите о задаче — обсудим, подходим ли мы друг другу, и согласуем следующий шаг.</p>
                            <div className="contact-details">
                                <div className="detail-item">
                                    <span className="detail-label">Email</span>
                                    <p>arteminamerica@mail.ru</p>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Контакт</span>
                                    <p>+7 915 033 1967</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="fade-in-bottom" delay={0.2}>
                        <ContactForm />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
