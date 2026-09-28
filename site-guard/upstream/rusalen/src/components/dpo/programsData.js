import { ANNOUNCEMENTS } from './announcements';

export const MAX_HOURS = 320;

export const DOC_TYPE_LABELS = {
  qualification: 'Повышение квалификации',
  retraining: 'Профпереподготовка',
};

export const PROGRAMS = [
  {
    id: 'psychiatry-for-psychologists',
    status: 'open',
    title: 'Психиатрия для психологов',
    subtitle: 'Основы системно-функционального мышления',
    description:
      'Учитесь собирать и описывать данные о состоянии человека, сопоставлять клинические гипотезы, замечать основания для обращения к врачу и выбирать следующий профессиональный шаг.',
    audience:
      'Студенты психологических направлений и психологи, которым нужен более ясный подход к разбору случая.',
    accents: 'Клиническое мышление • работа со случаем • междисциплинарная работа',
    hours: 72,
    docTypes: ['qualification'],
    hasCertificate: true,
    price: 29900,
    path: '/psychiatry-for-psychologists',
  },
  ...ANNOUNCEMENTS.map((item, i) => ({
    id: `announcement-${i}`,
    status: 'announced',
    hours: null,
    docTypes: [],
    hasCertificate: null,
    price: null,
    path: null,
    ...item,
  })),
];