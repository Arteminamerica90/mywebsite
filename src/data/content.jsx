import { CountUp } from '../components/CountUp';
import React from 'react';

export const cases = [
    { id: "hfwl", title: "Home Fitness", desc: <><CountUp end={12500} suffix="+" /> подписок (iOS, Web2App, Web2Web)</>, category: "Health & Fitness", img: "/hfwl.png" },
    { id: "fiton", title: "FitOn", desc: "Взрывной рост фитнес-сообщества", category: "Fitness platform", img: "/fiton.png" },
    { id: "betterme", title: "BetterMe", desc: "Масштабирование Health & Fitness приложения", category: "Health & Fitness", img: "/betterme.png" },
    { id: "fitness30", title: "30-Day Fitness", desc: <><CountUp end={1277000} prefix="$" /> покупок (Worldwide except Asia)</>, category: "Fitness Challenge", img: "/fitness30.png" },
    { id: "joom", title: "Joom", desc: <><CountUp end={450000} suffix="+" /> первых покупок (CIS, Latam)</>, category: "E-commerce", img: "/joom.png" },
    { id: "calm", title: "Calm", desc: "Привлечение осознанной аудитории", category: "Mental Health", img: "/calm.png" },
    { id: "delivery", title: "Delivery Club", desc: "Лидерство на рынке доставки еды", category: "Food Delivery", img: "/delivery.png" },
];

export const blogPosts = [
    { id: 'app-advertising', date: '23 Апр 2024', title: 'Как рекламировать с помощью приложения', desc: '3 ключевых инструмента внутреннего маркетинга.\nПуши, email-сбор и иконка как рекламный баннер.' },
    { id: 'promotion-structure', date: '15 Апр 2024', title: 'Структура продвижения приложений', desc: 'Разбираем комплексную систему продвижения.\nОт стратегии до аналитики.' },
    { id: 'creatives', date: '12 Апр 2024', title: 'Креативы для продвижения приложений', desc: 'Что заставляет людей кликать?\nСекреты UGC и эмоциональных триггеров.' },
    { id: 'starting-growth', date: '10 Апр 2024', title: 'С чего начинать развитие приложений', desc: 'Первые шаги: MVP.\nПоиск Product-Market Fit и сбор фидбека.' },
    { id: 'app-marketing', date: '08 Апр 2024', title: 'Маркетинг приложений', desc: 'Глубокая стратегия удержания (Retention).\nРабота с виральностью.' },
    { id: 'push-notifications', date: '05 Апр 2024', title: 'Пуши для развития приложений', desc: 'Как правильно использовать уведомления.\nВозвращаем пользователей в приложение.' },
];
