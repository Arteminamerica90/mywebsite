import React, { useState } from 'react';
import { useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

const DUMMY_STARTUPS = [
    {
        id: 1,
        name: 'EcoTrack',
        category: 'GreenTech',
        description: 'Приложение для отслеживания углеродного следа пользователя и рекомендаций по экологичному образу жизни.',
        lookingFor: 'Ищем Senior React Native разработчика для лида мобильной команды.',
    },
    {
        id: 2,
        name: 'FinFlow',
        category: 'FinTech',
        description: 'B2B платформа для автоматизации финансового учета и прогнозирования кассовых разрывов с помощью ИИ.',
        lookingFor: 'Нужен маркетолог (B2B) с опытом вывода продуктов на рынки СНГ и Европы.',
    },
    {
        id: 3,
        name: 'MedMatch',
        category: 'HealthTech',
        description: 'Сервис поиска профильных врачей по сложным диагнозам на основе анализа медицинских карт.',
        lookingFor: 'Ищем Product Manager / Co-founder с экспертизой в HealthTech.',
    },
    {
        id: 4,
        name: 'GamerGuild',
        category: 'GameFi',
        description: 'Децентрализованная гильдия для геймеров с распределением прибыли от внутриигровых активов.',
        lookingFor: 'Ищем UI/UX дизайнера с любовью к геймдеву и Web3.',
    }
];

const TinderCard = ({ startup, removeCard, active }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
    
    // Background colors for the overlay based on swipe direction
    const likeOpacity = useTransform(x, [0, 100], [0, 1]);
    const nopeOpacity = useTransform(x, [0, -100], [0, 1]);

    const handleDragEnd = (event, info) => {
        if (info.offset.x > 100) {
            removeCard(startup.id, 'right');
        } else if (info.offset.x < -100) {
            removeCard(startup.id, 'left');
        }
    };

    return (
        <motion.div
            className="tinder-card"
            style={{ x, rotate, opacity, zIndex: active ? 10 : 1 }}
            drag={active ? "x" : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: active ? 1 : 0.95, opacity: 1 }}
            exit={{ x: x.get() > 0 ? 300 : -300, opacity: 0, transition: { duration: 0.2 } }}
            whileDrag={{ scale: 1.05 }}
        >
            <div className="tinder-card-image startup-card-visual" aria-hidden="true">
                <motion.div className="tinder-overlay like" style={{ opacity: likeOpacity }}>
                    LIKE
                </motion.div>
                <motion.div className="tinder-overlay nope" style={{ opacity: nopeOpacity }}>
                    NOPE
                </motion.div>
            </div>
            
            <div className="tinder-card-content">
                <span className="startup-category">{startup.category}</span>
                <h2>{startup.name}</h2>
                <p className="startup-desc">{startup.description}</p>
                
                <div className="startup-looking-for">
                    <strong>Кого ищем:</strong>
                    <p>{startup.lookingFor}</p>
                </div>
            </div>
        </motion.div>
    );
};

const TinderCards = () => {
    const [cards, setCards] = useState(DUMMY_STARTUPS);
    const [matches, setMatches] = useState([]);

    const removeCard = (id, direction) => {
        if (direction === 'right') {
            const likedStartup = cards.find(c => c.id === id);
            setMatches([...matches, likedStartup]);
        }
        setCards((prev) => prev.filter((card) => card.id !== id));
    };

    if (cards.length === 0) {
        return (
            <div className="tinder-end-screen">
                <h2>На сегодня стартапы закончились!</h2>
                <p>Вы лайкнули {matches.length} проектов.</p>
                {matches.length > 0 && (
                    <div className="matches-list">
                        <h3>Ваши отклики:</h3>
                        <ul>
                            {matches.map(m => <li key={m.id}>{m.name}</li>)}
                        </ul>
                    </div>
                )}
                <button className="btn-primary" onClick={() => { setCards(DUMMY_STARTUPS); setMatches([]); }}>Смотреть заново</button>
            </div>
        );
    }

    return (
        <div className="tinder-container">
            <p className="startup-demo-note">Демонстрация интерфейса: карточки вымышлены, данные никуда не отправляются, совпадения случайны.</p>
            <div className="tinder-card-stack">
                <AnimatePresence>
                    {cards.map((startup, index) => (
                        <TinderCard 
                            key={startup.id} 
                            startup={startup} 
                            active={index === cards.length - 1} 
                            removeCard={removeCard} 
                        />
                    ))}
                </AnimatePresence>
            </div>
            
            <div className="tinder-actions">
                <button 
                    className="swipe-btn nope-btn" 
                    onClick={() => removeCard(cards[cards.length - 1].id, 'left')}
                >
                    <X size={30} />
                </button>
                <button 
                    className="swipe-btn like-btn" 
                    onClick={() => removeCard(cards[cards.length - 1].id, 'right')}
                >
                    <Heart size={30} fill="currentColor" />
                </button>
            </div>
        </div>
    );
};

export default TinderCards;
