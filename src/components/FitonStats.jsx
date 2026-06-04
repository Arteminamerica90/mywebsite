import React from 'react';
import './CaseStats.css';
import { CountUp } from './CountUp';

const FitonStats = () => {
  return (
    <div className="case-stats-grid">
      {/* Card 1: Results */}
      <div className="stat-card">
        <div className="stat-header">
          <h3 className="stat-title"><CountUp end={150000} suffix="+" /> Покупателей</h3>
          <div className="badge">Fitness Platform</div>
        </div>
        <div className="stat-content">
          <ul className="stat-list">
            <li>iOS</li>
            <li><CountUp end={180} suffix="+" /> уникальных креативов протестировано</li>
          </ul>
        </div>
      </div>

      {/* Card 2: Tasks */}
      <div className="stat-card highlighted">
        <div className="stat-header">
          <span className="stat-icon">🎯</span>
          <h3 className="stat-title" style={{ fontSize: '2rem' }}>Задачи</h3>
        </div>
        <div className="stat-content">
          <ul className="stat-list">
            <li>Привлечение платных пользователей.</li>
          </ul>
        </div>
      </div>

      {/* Card 3: Geography */}
      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-icon">🌍</span>
          <h3 className="stat-title" style={{ fontSize: '2rem' }}>География</h3>
        </div>
        <div className="stat-content">
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="stat-label">Платформа: <span className="stat-value">iOS</span></span>
          </div>
          <span className="stat-label">Топ-5 ГЕО:</span>
          <div className="stat-list" style={{ marginTop: '0.5rem' }}>
            <div className="geo-item">🇺🇸 США (<CountUp end={38} suffix="%" />)</div>
            <div className="geo-item">🇬🇧 Великобритания (<CountUp end={13} suffix="%" />)</div>
            <div className="geo-item">🇨🇦 Канада (<CountUp end={10} suffix="%" />)</div>
            <div className="geo-item">🇦🇺 Австралия (<CountUp end={8} suffix="%" />)</div>
            <div className="geo-item">🇩🇪 Германия (<CountUp end={7} suffix="%" />)</div>
          </div>
        </div>
      </div>

      {/* Card 4: Audience */}
      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-icon">👥</span>
          <h3 className="stat-title" style={{ fontSize: '2rem' }}>Аудитория</h3>
        </div>
        <div className="stat-content">
          <p className="stat-label" style={{ marginBottom: '1.5rem' }}>
            Сегмент: <span className="stat-value">Люди с активным образом жизни, 18-45 лет</span>
          </p>
          <span className="stat-label">Вовлеченность:</span>
          <ul className="stat-list" style={{ marginTop: '0.5rem' }}>
            <li>Женщины — <span className="stat-value"><CountUp end={85} suffix="%" /></span></li>
            <li>Мужчины — <span className="stat-value"><CountUp end={15} suffix="%" /></span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FitonStats;
