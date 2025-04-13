// Импорты стилей
import '../styles/main.scss';

// Импорт аналитики Vercel
import { SpeedInsights } from "@vercel/speed-insights";
import { Analytics } from "@vercel/analytics";

// Импорты модулей
// import './modules/example';

// Основной код
document.addEventListener('DOMContentLoaded', () => {
  console.log('Приложение запущено!');
  
  // Инициализация аналитики Vercel
  new SpeedInsights();
  new Analytics();
  
  // Здесь будет основной код приложения
}); 