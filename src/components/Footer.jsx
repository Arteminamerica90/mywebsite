import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer" style={{ padding: '4rem 0', backgroundColor: '#0F1218', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container footer-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                
                <div className="footer-nav" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/services/analysis" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.3s' }}>Анализ</Link>
                    <Link to="/blog" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.3s' }}>Блог</Link>
                    <Link to="/work" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.3s' }}>Кейсы</Link>
                    <Link to="/career" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.3s' }}>Карьера</Link>
                    <Link to="/startups" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.3s' }}>Стартапы</Link>
                    <a href="/#contact" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.3s' }}>Контакты</a>
                </div>

                <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: '#8B5CF6' }}>Twitter</a>
                    <a href="#" style={{ color: '#8B5CF6' }}>LinkedIn</a>
                    <a href="#" style={{ color: '#8B5CF6' }}>Instagram</a>
                </div>

                <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>&copy; {new Date().getFullYear()} Media CPA-Partners. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;
