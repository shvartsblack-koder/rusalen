// Данные 3D-карты образовательных маршрутов РУСАЛЕН
// Приведены в соответствие с матрицей v11 (см. src/components/dpo/matrixData.js):
// программы P01–P10, области (кластеры) и роли required/choice.
// ПФК — отдельный самостоятельный блок (область ПФК, программа P05).

export const C = {
  core: '#60a5fa', med: '#2dd4bf', pt: '#c084fc', pfc: '#4ade80', stress: '#fbbf24',
  sex: '#f472b6', add: '#fb923c', stand: '#94a3b8', club: '#cbd5e1',
};

// Короткие имена программ (как в матрице)
const P01 = 'Клинические аспекты в деятельности психолога';
const P02 = 'КПТ';
const P03 = 'Гипноз';
const P04 = 'Трансперсональная психотерапия';
const P05 = 'ПФК';
const P06 = 'Последствия стресса и психотравмы';
const P07 = 'Сексология';
const P08 = 'Аддиктология';
const P09 = 'Психообразование для клиники психиатрии';
const P10 = 'Метакогнитивный тренинг для пограничной психиатрии и клиники неврозов';
const P11 = 'Метакогнитивный тренинг для большой психиатрии';
// Единый кластер P09–P11 (3D и 2D синхронизированы)
const PSY_CLUSTER = 'ПРОГРАММЫ ДЛЯ ВНЕДРЕНИЯ В КЛИНИКО-ПСИХОЛОГИЧЕСКУЮ РАБОТУ В ПСИХИАТРИИ';

export const nodes = [];
export const edges = [];
function N(id, label, x, y, z, group, programs = [], opts = {}) {
  nodes.push({
    id, label, x, y, z, group, programs,
    exam: !!opts.exam, shared: !!opts.shared, note: opts.note || '',
    type: opts.type || 'module',
  });
}
function E(a, b, type = 'req') { edges.push({ a, b, type }); }

// ===== КЛИНИЧЕСКИЕ АСПЕКТЫ: общая база (M01–M08) =====
N('psyphys', 'Психофизиология: активность, ТФС и системное понимание человека', 0, 0, 0, 'core', [P01, P05, P06, P07, P08], { exam: true, shared: true, note: 'Фундаментальный модуль. Изучается один раз и используется в разных маршрутах.' });
N('science', 'Научное, критическое и психотерапевтическое мышление', -105, 5, 40, 'core', [P01, P02, P03, P04, P05, P06, P07, P08], { exam: true, shared: true, note: 'Общий модуль всех психотерапевтических и прикладных программ.' });
N('ethics', 'Этика и профессиональные границы', 105, 5, 40, 'core', [P01, P02, P03, P04, P05, P06, P07, P08], { exam: true, shared: true });
N('interview', 'Клиническое интервью', 0, 35, -110, 'core', [P01, P02, P03, P04, P05, P06, P07, P08], { exam: true, shared: true, note: 'Теоретическая часть может подтверждаться отдельно; практический навык требует демонстрации.' });
N('psychiatry', 'Психиатрия для психологов', -125, 150, -35, 'med', [P01, P06, P07, P08], { exam: true, shared: true });
N('neurology', 'Неврология для психологов', 0, 165, -10, 'med', [P01, P06, P07, P08], { exam: true, shared: true });
N('endocrine', 'Эндокринология для психологов', 125, 150, -35, 'med', [P01, P06, P07, P08], { exam: true, shared: true });
N('ddx', 'Дифференциальная диагностика и интегральная формулировка случая', 0, 285, 0, 'med', [P01, P06, P07, P08], { shared: true, note: 'Единый интегративный модуль: проверка альтернативных гипотез, синтез данных интервью и медицинской базы.' });
E('psyphys', 'psychiatry', 'assoc'); E('psyphys', 'neurology', 'assoc'); E('psyphys', 'endocrine', 'assoc');
E('psychiatry', 'ddx'); E('neurology', 'ddx'); E('endocrine', 'ddx'); E('interview', 'ddx'); E('science', 'ddx', 'assoc'); E('psyphys', 'ddx', 'assoc');

// ===== ПСИХОТЕРАПИЯ (M10–M12, M14–M16) =====
N('cbt1', 'КПТ I: основы КПТ', -500, 155, 30, 'pt', [P02], { exam: true, note: 'Базовый модуль КПТ: основы, модель и концептуализация.' });
N('cbt2', 'КПТ II: волны и направления КПТ психотерапии', -590, 235, 30, 'pt', [P02], { note: 'Обзор волн и направлений КПТ. После этого открываются прикладные специализации.' });
N('hyptherapy', 'Психотерапевтический гипноз', -505, 270, -155, 'pt', [P03]);
N('trbase', 'Трансперсональная психотерапия', -360, 245, 185, 'pt', [P04], { note: 'Объединённый модуль: основы, изменённые состояния сознания и интеграция опыта.' });
N('breath', 'Дыхательные практики', -105, 315, 255, 'pt', [P04, P05], { shared: true, note: 'Общий модуль ПФК и трансперсональной психотерапии.' });
N('holo', 'Холотропное дыхание', -360, 405, 255, 'pt', [P04]);
E('science', 'cbt1'); E('cbt1', 'cbt2'); E('science', 'hypbase', 'assoc'); E('hypbase', 'hyptherapy'); E('science', 'trbase'); E('trbase', 'breath', 'shared'); E('trbase', 'holo'); E('breath', 'holo');

// ===== ОБЩИЕ МОДУЛИ (M13) =====
N('hypbase', 'Основы гипноза', -420, 175, -135, 'pt', [P03, P05], { exam: true, shared: true, note: 'Один базовый модуль. Далее расходится на психотерапевтическое и психофизиологическое применение.' });

// ===== ПФК — отдельный блок (M17–M24, программа P05) =====
N('pfctheory', 'Теория психофизиологической коррекции', 380, 90, 0, 'pfc', [P05]);
N('pfcassess', 'Функциональная оценка состояния и выбор мишеней', 455, 175, 0, 'pfc', [P05]);
N('bfb', 'Биологическая обратная связь (БОС)', 560, 250, -110, 'pfc', [P05]);
N('auto', 'Аутогенные практики', 610, 260, 15, 'pfc', [P05]);
N('body', 'Телесные, двигательные и кинезиологические методы', 550, 250, 145, 'pfc', [P05]);
N('hyppfc', 'Гипноз как психофизиологическая коррекция', 455, 325, -120, 'pfc', [P05]);
N('pfcint', 'Интеграция методов ПФК', 520, 415, 30, 'pfc', [P05]);
N('pfcpractice', 'Практикум ПФК', 430, 510, 20, 'pfc', [P05]);
E('psyphys', 'pfctheory'); E('pfctheory', 'pfcassess'); E('pfcassess', 'bfb'); E('pfcassess', 'auto'); E('pfcassess', 'body'); E('breath', 'pfcassess', 'shared'); E('hypbase', 'hyppfc', 'shared'); E('pfcassess', 'hyppfc'); E('bfb', 'pfcint'); E('auto', 'pfcint'); E('body', 'pfcint'); E('breath', 'pfcint', 'shared'); E('hyppfc', 'pfcint'); E('pfcint', 'pfcpractice');

// ===== ПОСЛЕДСТВИЯ СТРЕССА И ПСИХОТРАВМЫ (M25–M35, M36–M38, M68) =====
N('str1', 'Стресс и адаптация', -120, 120, 510, 'stress', [P06]);
N('str2', 'Острые последствия стрессовых воздействий', -30, 195, 560, 'stress', [P06]);
N('str3', 'Хронический и накопленный стресс', 100, 190, 555, 'stress', [P06]);
N('str4', 'Психологическая травма', -145, 275, 620, 'stress', [P06]);
N('str5', 'Ранняя и довербальная травма', 45, 285, 650, 'stress', [P06]);
N('strint', 'Интервью при последствиях стресса', -120, 365, 560, 'stress', [P06]);
N('strddx', 'Дифференциальная диагностика стресс-ассоциированных состояний', 40, 385, 575, 'stress', [P06]);
N('strhelp', 'Консультативная помощь при последствиях стресса', 150, 340, 620, 'stress', [P06]);
N('strprev', 'Профилактика хронизации', -55, 465, 650, 'stress', [P06]);
N('strrec', 'Восстановление и ресурсы', 110, 465, 610, 'stress', [P06]);
N('strcase', 'Интеграция стрессового случая', 30, 555, 600, 'stress', [P06]);
N('cbtstr', 'КПТ при последствиях стресса', -260, 440, 500, 'stress', [P06, P02], { type: 'bridge' });
N('hypstr', 'Гипноз при последствиях стресса', -340, 500, 440, 'stress', [P06, P03], { type: 'bridge' });
N('trstr', 'Трансперсональная психотерапия при последствиях стресса и психотравмы', -420, 470, 450, 'stress', [P06, P04], { type: 'bridge' });
N('pfcstr', 'ПФК при стрессовой дизрегуляции', 300, 465, 505, 'stress', [P06, P05], { type: 'bridge' });
E('psyphys', 'str1', 'shared'); E('str1', 'str2'); E('str1', 'str3'); E('str2', 'str4'); E('str3', 'str4'); E('str4', 'str5');
E('interview', 'strint', 'bridge'); E('ddx', 'strddx', 'bridge'); E('str4', 'strint'); E('str4', 'strddx'); E('strint', 'strhelp'); E('strddx', 'strhelp');
E('strhelp', 'strprev'); E('strprev', 'strrec'); E('strrec', 'strcase');
E('cbt2', 'cbtstr', 'bridge'); E('str4', 'cbtstr', 'bridge');
E('hyptherapy', 'hypstr', 'bridge'); E('str4', 'hypstr', 'bridge');
E('trbase', 'trstr', 'bridge'); E('str4', 'trstr', 'bridge');
E('pfcint', 'pfcstr', 'bridge'); E('str3', 'pfcstr', 'bridge');
E('cbtstr', 'strcase', 'assoc'); E('hypstr', 'strcase', 'assoc'); E('trstr', 'strcase', 'assoc'); E('pfcstr', 'strcase', 'assoc');

// ===== СЕКСОЛОГИЯ (M39–M47, M48–M50, M69) =====
N('sex1', 'Психология сексуальности и сексуальное здоровье', -100, 120, -520, 'sex', [P07]);
N('sex2', 'Психофизиология сексуальности', 35, 190, -570, 'sex', [P07]);
N('sexrel', 'Отношения и сексуальность пары', -110, 275, -615, 'sex', [P07]);
N('sextr', 'Сексуальная травма', 70, 275, -640, 'sex', [P07]);
N('sexcons', 'Психологическое консультирование в сексологии', 0, 365, -610, 'sex', [P07]);
N('sexmed', 'Медицинские аспекты сексологии', -60, 300, -500, 'sex', [P07]);
N('sexint', 'Тонкости интервью в сексологии', 225, 255, -510, 'sex', [P07]);
N('sexddx', 'Дифференциальная диагностика в сексологии', 0, 450, -565, 'sex', [P07]);
N('sexcase', 'Интеграция сексологического случая', 0, 550, -590, 'sex', [P07]);
N('cbtsex', 'КПТ в сексологии', -270, 455, -500, 'sex', [P07, P02], { type: 'bridge' });
N('hypsex', 'Гипноз в сексологической практике', -345, 510, -430, 'sex', [P07, P03], { type: 'bridge' });
N('trsex', 'Трансперсональная психотерапия в сексологии', -420, 480, -450, 'sex', [P07, P04], { type: 'bridge' });
N('pfcsex', 'ПФК в сексологии', 300, 475, -500, 'sex', [P07, P05], { type: 'bridge' });
E('psyphys', 'sex1', 'shared'); E('sex1', 'sex2'); E('sex1', 'sexrel'); E('sex1', 'sextr'); E('sexrel', 'sexcons'); E('sextr', 'sexcons');
E('psychiatry', 'sexmed', 'bridge'); E('neurology', 'sexmed', 'bridge'); E('endocrine', 'sexmed', 'bridge');
E('interview', 'sexint', 'bridge'); E('ddx', 'sexddx', 'bridge');
E('sexmed', 'sexddx'); E('sexint', 'sexddx'); E('sexcons', 'sexddx'); E('sexddx', 'sexcase');
E('cbt2', 'cbtsex', 'bridge'); E('sexcons', 'cbtsex', 'bridge');
E('hyptherapy', 'hypsex', 'bridge'); E('sexcons', 'hypsex', 'bridge');
E('trbase', 'trsex', 'bridge'); E('sexcons', 'trsex', 'bridge');
E('pfcint', 'pfcsex', 'bridge'); E('sex2', 'pfcsex', 'bridge');
E('cbtsex', 'sexcase', 'assoc'); E('hypsex', 'sexcase', 'assoc'); E('trsex', 'sexcase', 'assoc'); E('pfcsex', 'sexcase', 'assoc');

// ===== АДДИКТОЛОГИЯ (M51–M52, M56–M59, M61–M64, M67, M70–M71) =====
N('add1', 'Теории зависимости и аддиктивного поведения', -70, -180, 80, 'add', [P08]);
N('addtypes', 'Химические и нехимические зависимости', -120, -265, 125, 'add', [P08]);
N('add6', 'Мотивация и изменение поведения', -190, -430, 90, 'add', [P08]);
N('add8', 'Профилактика рецидива', 155, -430, 70, 'add', [P08]);
N('add9', 'Семья, реабилитация и социальное восстановление', 0, -535, 65, 'add', [P08]);
N('addint', 'Интервью при зависимом поведении', 300, -250, 35, 'add', [P08]);
N('addddx', 'Дифференциальная диагностика зависимостей', 0, -610, 0, 'add', [P08]);
N('cbtadd', 'КПТ в аддиктологии', -300, -565, 120, 'add', [P08, P02], { type: 'bridge' });
N('hypadd', 'Гипноз в аддиктологии', -390, -610, 120, 'add', [P08, P03], { type: 'bridge' });
N('tradd', 'Трансперсональная психотерапия в аддиктологии', -450, -545, 160, 'add', [P08, P04], { type: 'bridge' });
N('pfcadd', 'ПФК в аддиктологии', 300, -570, 100, 'add', [P08, P05], { type: 'bridge' });
N('addcase', 'Интеграция аддиктологического случая', 0, -700, 0, 'add', [P08]);
E('psyphys', 'add1', 'shared'); E('add1', 'addtypes'); E('addtypes', 'add6'); E('add6', 'add8'); E('add6', 'add9'); E('add8', 'add9');
E('interview', 'addint', 'bridge'); E('ddx', 'addddx', 'bridge');
E('addint', 'addddx'); E('addtypes', 'addddx'); E('add9', 'addddx'); E('addddx', 'addcase');
E('cbt2', 'cbtadd', 'bridge'); E('add6', 'cbtadd', 'bridge');
E('hyptherapy', 'hypadd', 'bridge'); E('add6', 'hypadd', 'bridge');
E('trbase', 'tradd', 'bridge'); E('add6', 'tradd', 'bridge');
E('pfcint', 'pfcadd', 'bridge'); E('add6', 'pfcadd', 'bridge');
E('cbtadd', 'addcase', 'assoc'); E('hypadd', 'addcase', 'assoc'); E('tradd', 'addcase', 'assoc'); E('pfcadd', 'addcase', 'assoc');

// ===== ОТДЕЛЬНЫЕ ПРОГРАММЫ (P09, P10) =====
N('psychoed', 'Психообразование для клиники психиатрии', -10, -210, -440, 'stand', [P09], { note: 'Программа для клинического психолога: психообразование в практике психиатрии.' });
N('mct', 'Метакогнитивный тренинг для пограничной психиатрии и клиники неврозов', 170, -220, -440, 'stand', [P10], { note: 'Программа для применения в пограничной психиатрии и клинике неврозов, стационарно и амбулаторно.' });
N('mct2', 'Метакогнитивный тренинг для большой психиатрии', 290, -150, -440, 'stand', [P11], { note: 'Программа для применения в большой психиатрии, стационарно и амбулаторно.' });

// ===== ПРОФЕССИОНАЛЬНАЯ СРЕДА =====
N('club', 'Клуб / практика / супервизия / интервизия / case labs / вебинары', 0, -80, 780, 'club', ['Клуб'], { type: 'environment', note: 'Поперечная профессиональная среда вокруг всей системы. Не равна формальному учебному модулю.' });
E('ddx', 'club', 'assoc'); E('pfcpractice', 'club', 'assoc'); E('strcase', 'club', 'assoc'); E('sexcase', 'club', 'assoc'); E('addcase', 'club', 'assoc');

// ===== Программы (роли из матрицы: required + choice) =====
export const programs = {
  'Все программы': null,
  [P01]: ['psyphys', 'science', 'ethics', 'interview', 'psychiatry', 'neurology', 'endocrine', 'ddx'],
  'КПТ': ['science', 'ethics', 'interview', 'cbt1', 'cbt2', 'cbtstr', 'cbtsex', 'cbtadd'],
  'Гипноз': ['science', 'ethics', 'interview', 'hypbase', 'hyptherapy', 'hypstr', 'hypsex', 'hypadd'],
  'Трансперсональная психотерапия': ['science', 'ethics', 'interview', 'trbase', 'breath', 'holo', 'trstr', 'trsex', 'tradd'],
  'ПФК': ['psyphys', 'science', 'ethics', 'interview', 'hypbase', 'breath', 'pfctheory', 'pfcassess', 'bfb', 'auto', 'body', 'hyppfc', 'pfcint', 'pfcpractice', 'pfcstr', 'pfcsex', 'pfcadd'],
  'Последствия стресса и психотравмы': ['psyphys', 'science', 'ethics', 'interview', 'psychiatry', 'neurology', 'endocrine', 'ddx', 'str1', 'str2', 'str3', 'str4', 'str5', 'strint', 'strddx', 'strhelp', 'strprev', 'strrec', 'strcase', 'cbtstr', 'hypstr', 'trstr', 'pfcstr'],
  'Сексология': ['psyphys', 'science', 'ethics', 'interview', 'psychiatry', 'neurology', 'endocrine', 'ddx', 'sex1', 'sex2', 'sexrel', 'sextr', 'sexcons', 'sexmed', 'sexint', 'sexddx', 'sexcase', 'cbtsex', 'hypsex', 'trsex', 'pfcsex'],
  'Аддиктология': ['psyphys', 'science', 'ethics', 'interview', 'psychiatry', 'neurology', 'endocrine', 'ddx', 'add1', 'addtypes', 'add6', 'add8', 'add9', 'addint', 'addddx', 'addcase', 'cbtadd', 'hypadd', 'tradd', 'pfcadd'],
  [P09]: ['psychoed'],
  [P10]: ['mct'],
  [P11]: ['mct2'],
  'Клуб': ['club'],
};

export const programColors = {
  [P01]: C.core, 'КПТ': C.pt, 'Гипноз': '#a78bfa', 'Трансперсональная психотерапия': '#d8b4fe',
  'ПФК': C.pfc, 'Последствия стресса и психотравмы': C.stress, 'Сексология': C.sex, 'Аддиктология': C.add,
  [P09]: '#94a3b8', [P10]: '#64748b', [P11]: '#64748b', 'Клуб': C.club,
};

// Кластеры = области матрицы; ПФК — отдельный блок
export const bubbles = [
  { name: 'КЛИНИЧЕСКИЕ АСПЕКТЫ', x: 0, y: 210, z: 0, r: 265, color: C.core, programs: [P01] },
  { name: 'ПСИХОТЕРАПИЯ', x: -660, y: 300, z: 40, r: 285, color: C.pt, programs: ['КПТ', 'Гипноз', 'Трансперсональная психотерапия'] },
  { name: 'ПФК', x: 660, y: 320, z: 40, r: 285, color: C.pfc, programs: ['ПФК'] },
  { name: 'ПОСЛЕДСТВИЯ СТРЕССА И ПСИХОТРАВМЫ', x: 0, y: 420, z: 860, r: 310, color: C.stress, programs: ['Последствия стресса и психотравмы'] },
  { name: 'СЕКСОЛОГИЯ', x: 0, y: 420, z: -860, r: 310, color: C.sex, programs: ['Сексология'] },
  { name: 'АДДИКТОЛОГИЯ', x: 0, y: -560, z: 120, r: 330, color: C.add, programs: ['Аддиктология'] },
  { name: PSY_CLUSTER, x: 220, y: -220, z: -700, r: 260, color: '#94a3b8', programs: [P09, P10, P11] },
];

export const programToBubble = {
  [P01]: 'КЛИНИЧЕСКИЕ АСПЕКТЫ',
  'КПТ': 'ПСИХОТЕРАПИЯ',
  'Гипноз': 'ПСИХОТЕРАПИЯ',
  'Трансперсональная психотерапия': 'ПСИХОТЕРАПИЯ',
  'ПФК': 'ПФК',
  'Последствия стресса и психотравмы': 'ПОСЛЕДСТВИЯ СТРЕССА И ПСИХОТРАВМЫ',
  'Сексология': 'СЕКСОЛОГИЯ',
  'Аддиктология': 'АДДИКТОЛОГИЯ',
  [P09]: PSY_CLUSTER,
  [P10]: PSY_CLUSTER,
  [P11]: PSY_CLUSTER,
  'Клуб': null,
};

export const subclusters = [];