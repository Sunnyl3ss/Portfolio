const resumeData = {
  aboutPoints: [
    'Создание пользовательских интерфейсов и адаптивная вёрстка.',
    'Разработка серверной логики на PHP: обработка форм, регистрация, авторизация и оформление заказов.',
    'Работа с MySQL и MariaDB: SQL-запросы, проектирование таблиц и связей, взаимодействие через PDO.'
  ],
  skills: [
    {
      title: 'Языки и технологии',
      items: ['PHP', 'Python', 'JavaScript', 'Dart', 'HTML5', 'CSS3', 'SQL']
    },
    {
      title: 'Фреймворки и архитектура',
      items: ['Laravel', 'React', 'Vue.js', 'Flutter', 'MVC — архитектура']
    },
    {
      title: 'Базы данных и серверная логика',
      items: [
        'MySQL', 'MariaDB', 'PDO', 'SQL-запросы',
        'Проектирование таблиц и связей', 'Обработка форм',
        'Регистрация и авторизация', 'Оформление заказов'
      ]
    },
    {
      title: 'Интерфейсы и системное окружение',
      items: [
        'Пользовательские интерфейсы', 'Адаптивная вёрстка',
        'Linux', 'Apache', 'Docker', 'Git', 'Локальные сети'
      ]
    },
    {
      title: 'Дополнительные компетенции',
      items: [
        'Сбор и согласование требований', 'Документирование',
        'Основы информационной безопасности', 'знание законов РФ в сфере IT'
      ]
    }
  ],
  education: [
    {
      date: '2023 — 2027',
      type: 'СРЕДНЕЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ',
      title: 'Тульский экономический колледж',
      description: 'Государственное профессиональное образовательное учреждение Тульской области «Тульский экономический колледж».',
      details: ['Специалист по информационным системам', '09.02.07']
    },
    {
      date: '2023',
      type: 'ДОПОЛНИТЕЛЬНОЕ ОБУЧЕНИЕ',
      title: '«Разработка на Python»',
      description: 'НОЧУ ВО «Московский финансово-промышленный университет Синергия», программа «Код Будущего».',
      details: ['Объём программы', '151 час']
    }
  ],
  achievements: [
    {
      year: '2026',
      label: 'II МЕСТО · РЕГИОНАЛЬНЫЙ ЧЕМПИОНАТ',
      title: 'Чемпионат «Профессионалы»',
      description: 'Второе место в региональном чемпионате профессионального мастерства по компетенции «Веб-технологии».'
    },
    {
      year: '2026',
      label: 'ПОБЕДИТЕЛЬ · РЕГИОНАЛЬНАЯ ОЛИМПИАДА',
      title: '«Информатика и вычислительная техника»',
      description: 'Победа в олимпиаде профессионального мастерства среди студентов СПО Тульской области.'
    },
    {
      year: '2024/2025',
      label: 'УЧАСТНИК · ВСЕРОССИЙСКИЙ УРОВЕНЬ',
      title: 'X олимпиада «Актион Студенты»',
      description: 'Участие во Всероссийской студенческой олимпиаде 2024/2025 года по направлению IT.'
    },
    {
      year: 'LINUX',
      label: 'ПРАКТИЧЕСКИЙ ОПЫТ · LINUX',
      title: 'Настройка Apache для PHP-проектов',
      description: 'Настраивал веб-сервер Apache и рабочее окружение для PHP-проектов в Linux.'
    }
  ],
  qualities: ['Самостоятельность', 'Ответственность', 'Уравновешенность', 'Работа в команде']
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const renderAboutPoints = () => {
  const list = document.querySelector('#about-points');
  if (!list) return;

  resumeData.aboutPoints.forEach((text) => {
    list.append(createElement('li', 'about-points__item', text));
  });
};

const renderSkills = () => {
  const container = document.querySelector('#skills-groups');
  if (!container) return;

  resumeData.skills.forEach((group, index) => {
    const article = createElement('article', 'skill-group');
    article.dataset.reveal = '';

    const head = createElement('div', 'skill-group__head');
    head.append(
      createElement('span', '', String(index + 1).padStart(2, '0')),
      createElement('h3', '', group.title),
      createElement('i', '', '↗')
    );

    const list = createElement('ul', 'skill-tags');
    list.setAttribute('aria-label', group.title);

    group.items.forEach((item) => {
      list.append(createElement('li', 'skill-tags__item', item));
    });

    article.append(head, list);
    container.append(article);
  });
};

const renderEducation = () => {
  const list = document.querySelector('#education-list');
  if (!list) return;

  resumeData.education.forEach((item) => {
    const entry = createElement('li', 'timeline-item');
    entry.dataset.reveal = '';

    const date = createElement('div', 'timeline-item__date', item.date);
    const marker = createElement('div', 'timeline-item__marker');
    marker.append(createElement('span', ''));

    const content = createElement('div', 'timeline-item__content');
    content.append(
      createElement('span', 'timeline-item__type', item.type),
      createElement('h3', '', item.title),
      createElement('p', '', item.description)
    );

    const footer = createElement('div', 'timeline-item__footer');
    item.details.forEach((detail) => footer.append(createElement('span', '', detail)));
    content.append(footer);
    entry.append(date, marker, content);
    list.append(entry);
  });
};

const renderAchievements = () => {
  const list = document.querySelector('#achievement-list');
  if (!list) return;

  resumeData.achievements.forEach((item) => {
    const entry = createElement('li', 'achievement-card');
    entry.dataset.reveal = '';

    const body = createElement('div', 'achievement-card__body');
    body.append(
      createElement('span', 'achievement-card__label', item.label),
      createElement('h3', '', item.title),
      createElement('p', '', item.description)
    );

    entry.append(
      createElement('div', 'achievement-card__year', item.year),
      body,
      createElement('div', 'achievement-card__icon', '↗')
    );
    list.append(entry);
  });
};

const renderQualities = () => {
  const list = document.querySelector('#qualities-list');
  if (!list) return;

  resumeData.qualities.forEach((quality) => {
    list.append(createElement('li', 'qualities__item', quality));
  });
};

renderAboutPoints();
renderSkills();
renderEducation();
renderAchievements();
renderQualities();

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Открыть меню');
      navigation.classList.remove('is-open');
    });
  });
}

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.navigation a[href^="#"]');
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}

const toast = document.querySelector('.toast');
let toastTimeout;
const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
};

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast('Адрес электронной почты скопирован');
    } catch {
      const field = createElement('textarea');
      field.value = value;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      showToast(copied ? 'Адрес электронной почты скопирован' : 'Не удалось скопировать адрес');
    }
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
