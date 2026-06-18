import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ExperienceForm from '../components/ExperienceForm';
import TinderCards from '../components/TinderCards';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Reveal } from '../components/Reveal';

function StartupsPage() {
    const [hasFilledForm, setHasFilledForm] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleFormSubmit = (data) => {
        setUserData(data);
        setHasFilledForm(true);
    };

    return (
        <div className="blog-post-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <div className="container post-content" style={{ paddingTop: '120px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Reveal animation="fade-in-bottom">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 className="section-title" style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>
                            {hasFilledForm ? 'Найди свой стартап' : 'Присоединяйся к стартапам'}
                        </h1>
                        <p className="lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            {hasFilledForm 
                                ? 'Свайпай вправо, если проект тебе интересен, или влево, чтобы пропустить.' 
                                : 'Расскажи немного о себе, чтобы мы могли подобрать наиболее подходящие проекты для твоего профиля.'}
                        </p>
                    </div>
                </Reveal>

                {!hasFilledForm ? (
                    <Reveal animation="fade-in-bottom" delay={0.2}>
                        <ExperienceForm onSubmit={handleFormSubmit} />
                    </Reveal>
                ) : (
                    <Reveal animation="fade-in-bottom" delay={0.2}>
                        <TinderCards userData={userData} />
                    </Reveal>
                )}
            </div>

            <ContactSection />
            <Footer />
        </div>
    );
}

export default StartupsPage;
