import React from 'react';
import './CaseStats.css';
import { CountUp } from './CountUp';

const CaseStats = () => {
  return (
    <div className="case-stats-grid">
      {/* Card 1: Results */}
      <div className="stat-card">
        <div className="stat-header">
          <h3 className="stat-title"><CountUp end={12500} suffix="+" /> Подписок</h3>
          <div className="badge">Health & Fitness</div>
        </div>
        <div className="stat-content">
          <ul className="stat-list">
            <li>iOS, Web2App, Web2Web</li>
            <li><CountUp end={100} suffix="+" /> уникальных креативов протестировано</li>
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
            <li>Кратно увеличить количество новых пользователей.</li>
            <li>Обеспечить стабильный рост платных подписок.</li>
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
            <span className="stat-label">Платформа: <span className="stat-value">iOS (Web2App)</span></span>
          </div>
          <span className="stat-label">Топ-5 ГЕО:</span>
          <div className="stat-list" style={{ marginTop: '0.5rem' }}>
            <div className="geo-item">🇺🇸 США (<CountUp end={14.22} decimals={2} suffix="%" />)</div>
            <div className="geo-item">🇫🇷 Франция (<CountUp end={6} suffix="%" />)</div>
            <div className="geo-item">🇩🇪 Германия (<CountUp end={4.6} decimals={1} suffix="%" />)</div>
            <div className="geo-item">🇮🇹 Италия (<CountUp end={4.2} decimals={1} suffix="%" />)</div>
            <div className="geo-item">🇨🇦 Канада (<CountUp end={4.1} decimals={1} suffix="%" />)</div>
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
            Сегмент: <span className="stat-value">Женщины, 21-54 года</span>
          </p>
          <span className="stat-label">Вовлеченность:</span>
          <ul className="stat-list" style={{ marginTop: '0.5rem' }}>
            <li>Мужчины — <span className="stat-value"><CountUp end={92} suffix="%" /></span></li>
            <li>Женщины — <span className="stat-value"><CountUp end={8} suffix="%" /></span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStats;
