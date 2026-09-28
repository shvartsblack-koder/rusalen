import React, { useEffect } from 'react';
import { initCurriculumMap } from './curriculumEngine';

export default function CurriculumMap() {
  useEffect(() => {
    const dispose = initCurriculumMap();
    return dispose;
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-210px)] min-h-[620px] rounded-xl overflow-hidden border border-white/10 bg-[radial-gradient(ellipse_at_52%_42%,#142744_0%,#0a1628_48%,#07101d_100%)]">
      <div className="flex flex-wrap items-center gap-2 px-4 py-3 bg-[rgba(7,14,27,0.88)] border-b border-white/10">
        <button id="cmIsoBtn" className="cm-btn">Изометрия / 2D</button>
        <button id="cmResetBtn" className="cm-btn">Сброс</button>
        <select id="cmProgramSelect" className="cm-select max-w-[240px]" aria-label="Маршрут программы" />
        <input id="cmSearch" className="cm-select w-[180px]" placeholder="Найти модуль…" />
        <button id="cmCollapseBtn" className="cm-btn">Свернуть прочее</button>
        <button id="cmLabelsBtn" className="cm-btn active">Названия</button>
        <button id="cmBubblesBtn" className="cm-btn active">Программы</button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        <div id="cmStage" className="relative overflow-hidden flex-1 min-h-[380px] min-w-0">
          <canvas id="cmScene" />
          <div id="cmLegend" className="absolute left-3.5 top-3.5 flex flex-wrap gap-1.5 max-w-[75%] pointer-events-none" />
          <div className="absolute left-3.5 bottom-3.5 bg-[rgba(8,17,31,0.55)] border border-white/10 rounded-[10px] px-3 py-2.5 text-[11px] text-[#c7d2e3] pointer-events-none leading-relaxed">
            <b>Изометрия:</b> тянуть — вращение · колесо — масштаб · Shift+тянуть — сдвиг · клик по модулю — фокус кластера<br />
            <b>2D-сборка:</b> клик по программе — её связи и перезачёт · тянуть — сдвиг схемы<br />
            <b>Оси (3D):</b> X — способ работы · Y — фундамент → интеграция · Z — предметная специализация
          </div>
        </div>

        <aside className="h-[38vh] lg:h-auto lg:w-[340px] shrink-0 overflow-auto p-4 bg-[rgba(9,17,31,0.93)] border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#7f93af] mb-2">Выбранный модуль</div>
          <div id="cmNodeTitle" className="text-lg font-bold leading-tight mb-2">Нажмите на любой блок</div>
          <div id="cmNodeMeta" className="text-xs text-[#a9b8cd] leading-relaxed whitespace-pre-line">
            Карта интерактивна. Выберите модуль или большой пузырь программы, чтобы увидеть маршрут, связи и перезачёт.
          </div>

          <div className="cm-card">
            <h3>Программы / контексты</h3>
            <div id="cmProgramTags" className="flex flex-wrap gap-1.5">
              <span className="text-[11px] text-[#8fa2bd]">—</span>
            </div>
          </div>
          <div className="cm-card">
            <h3>Что нужно пройти раньше</h3>
            <ul id="cmPrereqList"><li>—</li></ul>
          </div>
          <div className="cm-card">
            <h3>Куда ведёт дальше</h3>
            <ul id="cmNextList"><li>—</li></ul>
          </div>
          <div className="cm-card">
            <h3>Перезачёт / вступительное испытание</h3>
            <div id="cmCreditInfo" className="text-[11px] text-[#8fa2bd] leading-relaxed">—</div>
          </div>
          <div className="cm-card">
            <h3>Мой маршрут</h3>
            <div className="text-[11px] text-[#8fa2bd] leading-relaxed">
              Можно отмечать уже освоенные модули. Статус хранится только в этом браузере.
            </div>
            <div className="h-2 bg-[#1e2b40] rounded-full overflow-hidden mt-2">
              <div id="cmProgressFill" className="h-full w-0" style={{ background: 'linear-gradient(90deg,#60a5fa,#4ade80)' }} />
            </div>
            <div id="cmProgressText" className="text-[11px] text-[#9eb0c8] mt-1.5">Выберите программу сверху.</div>
            <div className="flex gap-2 mt-2.5">
              <button id="cmToggleDoneBtn" className="cm-btn flex-1">Отметить освоенным</button>
              <button id="cmClearDoneBtn" className="cm-btn flex-1">Очистить</button>
            </div>
          </div>
          <div className="cm-card">
            <h3>Легенда связей</h3>
            <div className="text-[11px] text-[#8fa2bd] leading-relaxed">
              <b className="text-[#e5e7eb]">Сплошная:</b> обязательная последовательность<br />
              <b className="text-[#67e8f9]">Голубая:</b> общий модуль / переиспользуется<br />
              <b className="text-[#f9a8d4]">Розовая пунктирная:</b> профильная надстройка / bridge<br />
              <b className="text-[#94a3b8]">Серая точечная:</b> смысловая связь, не prerequisite<br />
              <b className="text-[#fde047]">Жёлтое кольцо:</b> теорию можно вынести на вступительное испытание<br />
              <span className="text-[#7f93af]">В 2D-сборке:</span><br />
              <b className="text-[#57d6a2]">Зелёная:</b> клиническая база — полный перезачёт<br />
              <b className="text-[#b885ff]">Фиолетовая:</b> метод → профильное применение<br />
              <b className="text-[#50d4e8]">Голубая:</b> общий учебный блок<br />
              <b className="text-[#7c91ad]">Серая:</b> частичный перезачёт
            </div>
          </div>
        </aside>
      </div>

      <div id="cmTooltip" className="fixed z-50 pointer-events-none bg-[#06101e] text-[#e8eef8] border border-white/[0.16] rounded-lg px-2.5 py-2 text-[11px] shadow-2xl max-w-[300px]" style={{ display: 'none' }} />
    </div>
  );
}