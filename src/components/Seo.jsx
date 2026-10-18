import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages = {
  '/': ['Кейсы и экспертиза', 'Практическая работа с ростом цифровых продуктов: аудит, аналитика, user acquisition и SEO.'],
  '/work': ['Кейсы и экспертиза', 'Практическая работа с ростом цифровых продуктов: аудит, аналитика, user acquisition и SEO.'],
  '/blog': ['Блог о росте продуктов', 'Заметки об аналитике, маркетинге и развитии цифровых продуктов.'],
  '/course': ['Курс для маркетологов', 'Информация о программе курса. Условия участия предоставляются до оплаты.'],
  '/privacy': ['Политика конфиденциальности', 'Как adcparium обрабатывает персональные данные посетителей сайта.'],
  '/terms': ['Условия использования', 'Условия использования сайта adcparium.'],
  '/cookies': ['Файлы cookie и localStorage', 'Информация о технологиях хранения данных на сайте adcparium.'],
};

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pages[pathname] || ['adcparium — рост цифровых продуктов', 'Консалтинг и практическая работа с цифровыми продуктами.'];
    document.title = `${title} | adcparium`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute('content', description);
    document.documentElement.lang = 'ru';
  }, [pathname]);
  return null;
}
