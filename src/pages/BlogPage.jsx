import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { Reveal } from '../components/Reveal';
import { blogPosts } from '../data/content';

function BlogPage() {
    return (
        <div className="home">
            <Navbar />
            
            <section id="blog" className="blog" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <Reveal animation="fade-in-right">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Наш <span className="gradient-text">Блог</span></h2>
                            <p className="lead" style={{ margin: '0 auto' }}>Делимся опытом, кейсами и инсайтами из мира мобильного маркетинга и арбитража трафика.</p>
                        </div>
                    </Reveal>

                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <div className="blog-card reveal fade-in-bottom" key={post.id} style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="blog-date">{post.date}</div>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                                <Link to={`/blog/${post.id}`} className="read-more">Читать далее →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
            
            <Footer />
        </div>
    );
}

export default BlogPage;
