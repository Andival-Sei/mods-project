// Импорты стилей
import '../styles/main.scss';

// Импорт SpeedInsights
import { SpeedInsights } from "@vercel/speed-insights";

// Импорты модулей
// import './modules/example';

// Основной код
document.addEventListener('DOMContentLoaded', () => {
  console.log('Приложение запущено!');
  
  // Инициализация SpeedInsights
  new SpeedInsights();
  
  // Здесь будет основной код приложения
}); 