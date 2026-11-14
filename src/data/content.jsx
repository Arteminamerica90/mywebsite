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
