import React from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';

const servicePages = {
    'appstore': {
        icon: '📱',
        title: 'Публикация в AppStore',
        subtitle: 'Запустим ваше приложение в App Store и Google Play быстро и правильно',
        sections: [
            { title: '📋 Подготовка и аудит', text: 'Проверяем готовность приложения к публикации по чек-листу Apple и Google: иконки, скриншоты, описания, метаданные, политика конфиденциальности.' },
            { title: '🔑 ASO-оптимизация', text: 'Подбираем ключевые слова, пишем конверсионные описания на нужных языках, оформляем страницу в сторе так, чтобы она максимально конвертировала входящий трафик.' },
            { title: '🚀 Публикация и сопровождение', text: 'Берём на себя весь процесс подачи на ревью, общение с саппортом Apple/Google при возникновении вопросов и прохождение повторных ревью.' },
            { title: '📊 Результат', text: 'Приложение опубликовано без реджектов в максимально короткие сроки. Страница в сторе оптимизирована для роста органических установок.' }
        ]
    },
    'app-sales': {
        icon: '📈',
        title: 'Усиление продаж через приложение',
        subtitle: 'Выстраиваем систему User Acquisition и монетизации для вашего мобильного приложения',
        sections: [
            { title: '🎯 Аудит воронки', text: 'Анализируем текущие метрики: CPI, ROAS, Retention, LTV. Выявляем слабые места в воронке от клика на рекламу до первой покупки внутри приложения.' },
            { title: '🎨 Производство креативов', text: 'Разрабатываем рекламные материалы: UGC-видео, нативные ролики, статичные баннеры. Сотни гипотез — один работающий набор.' },
            { title: '⚡ Запуск и масштабирование', text: 'Запускаем кампании в Facebook Ads, Google UAC, Apple Search Ads, TikTok. Масштабируем то, что работает, отключаем то, что не работает.' },
            { title: '📊 Прозрачная аналитика', text: 'Настраиваем MMP (AppsFlyer / Adjust), сводная дашборд, еженедельные отчёты. Вы всегда знаете, откуда пришёл каждый пользователь и сколько он принёс.' }
        ]
    },
    'web-sales': {
        icon: '🌐',
        title: 'Усиление через веб-сайт',
        subtitle: 'Привлекаем целевой трафик на ваш сайт и превращаем посетителей в покупателей',
        sections: [
            { title: '🔍 Аудит конверсии', text: 'Анализируем текущий сайт, посадочные страницы и воронку. Находим точки, где теряются потенциальные клиенты.' },
            { title: '📱 Web-воронки', text: 'Разрабатываем и тестируем выcококонверсионные лендинги под каждый сегмент аудитории и рекламный канал.' },
            { title: '🌐 Трафик и медиабаинг', text: 'Привлекаем трафик через Facebook Ads, Google Ads, programmatic-сети. Оптимизируем ставки и аудитории для снижения стоимости лида.' },
            { title: '📊 ROI-ориентированный подход', text: 'Фокус не на кликах, а на реальных продажах. Отслеживаем сквозную аналитику от первого клика до закрытой сделки.' }
        ]
    },
    'hr': {
        icon: '👥',
        title: 'HR / Поиск талантов',
        subtitle: 'Находим лучших специалистов для вашей Growth-команды',
        sections: [
            { title: '🎯 Подбор профифи', text: 'Ищем опытных UA-менеджеров, аналитиков, дизайнеров и разработчиков, специализирующихся на мобильном росте.' },
            { title: '🔍 Глубокий скрининг', text: 'Проводим технические и софт-скилл интервью. Проверяем реальные кейсы и навыки работы с инструментами (MMP, Ads Managers).' },
            { title: '📈 Формирование команд', text: 'Помогаем выстроить структуру отдела маркетинга с нуля или усилить существующую команду ключевыми игроками.' },
            { title: '🤝 Сопровождение', text: 'Помогаем с онбордингом и адаптацией новых сотрудников в первые месяцы работы для достижения максимального результата.' }
        ]
    }
};

function GeneralServicePage({ serviceId }) {
    const service = servicePages[serviceId];

    if (!service) return null;

    return (
        <div className="service-page">
            <Navbar />
            <div className="container service-content fade-in" style={{ paddingTop: '100px' }}>
                <div className="service-header">
                    <div className="badge">{service.icon} Услуга</div>
                    <h1>{service.title}</h1>
                    <p className="lead">{service.subtitle}</p>
                </div>
                <div className="service-grid-detailed">
                    {service.sections.map((section, i) => (
                        <div key={i} className="audit-item clickable-card" onClick={() => {
                            const el = document.getElementById('contact');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <h3>{section.title}</h3>
                            <p>{section.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ContactSection />
        </div>
    );
}

export function AppStorePage() { return <GeneralServicePage serviceId="appstore" />; }
export function AppSalesPage() { return <GeneralServicePage serviceId="app-sales" />; }
export function WebSalesPage() { return <GeneralServicePage serviceId="web-sales" />; }
export function HrPage() { return <GeneralServicePage serviceId="hr" />; }
