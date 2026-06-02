import React from 'react';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import { Reveal } from '../components/Reveal';

function CareerPage() {
    return (
        <div className="service-page">
            <Navbar />

            <div className="container service-content" style={{ paddingTop: '120px', minHeight: '40vh' }}>
                <Reveal animation="fade-in-right">
                    <div className="service-header" style={{ textAlign: 'center' }}>
                        <h1>Карьера</h1>
                        <p className="lead" style={{ marginTop: '2rem' }}>В данный момент мы не ищем новых сотрудников.</p>
                        <p style={{ color: 'var(--muted-text)', marginTop: '1rem' }}>Но вы всегда можете оставить свои контакты, и мы свяжемся с вами, когда появятся открытые позиции.</p>
                    </div>
                </Reveal>
            </div>

            <ContactSection />
        </div>
    );
}

export default CareerPage;
