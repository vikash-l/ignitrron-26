import { useState } from 'react';
import { EventPage } from './pages/EventPage';
import { legacyCodeRescueEvent } from './data/legacy-code-rescue';
import { placeholderEvent } from './data/placeholder-event';
import type { EventConfig, SectionConfig } from './data/event.types';
import { SlidersHorizontal, Eye, RefreshCw, Database } from 'lucide-react';

export function App() {
  const [currentEvent, setCurrentEvent] = useState<EventConfig>(legacyCodeRescueEvent);
  const [showConfigControl, setShowConfigControl] = useState(false);

  const toggleSection = (sectionKey: keyof SectionConfig) => {
    setCurrentEvent((prev) => {
      const currentSections = prev.sections || {};
      return {
        ...prev,
        sections: {
          ...currentSections,
          [sectionKey]: !currentSections[sectionKey],
        },
      };
    });
  };

  const loadLegacyEvent = () => {
    setCurrentEvent(legacyCodeRescueEvent);
  };

  const loadPlaceholderEvent = () => {
    setCurrentEvent(placeholderEvent);
  };

  return (
    <div className="relative">
      {/* Dev Floating Section & Data Control Bar */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowConfigControl(!showConfigControl)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-highlight)] text-xs font-mono font-semibold text-[var(--badge-text)] shadow-2xl hover:bg-[var(--bg-surface-hover)] focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
          title="Toggle Master Section & Event Data Controller"
        >
          <SlidersHorizontal className="w-4 h-4 text-[var(--badge-text)]" />
          <span>SYSTEM CONTROLLER</span>
        </button>

        {showConfigControl && (
          <div className="absolute bottom-14 right-0 w-80 p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-highlight)] shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto text-xs font-mono">
            {/* Event Switcher */}
            <div className="space-y-2 border-b border-[var(--border-color)] pb-3">
              <div className="font-bold text-xs text-[var(--text-main)] flex items-center gap-2">
                <Database className="w-4 h-4 text-[var(--badge-text)]" />
                <span>LOAD EVENT CONFIG</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={loadLegacyEvent}
                  className={`p-2 rounded-lg text-left border text-[11px] font-semibold transition-colors cursor-pointer ${
                    currentEvent.id === legacyCodeRescueEvent.id
                      ? 'bg-[var(--accent-primary-light)] border-[var(--badge-border)] text-[var(--badge-text)]'
                      : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  LEGACY RESCUE
                </button>
                <button
                  onClick={loadPlaceholderEvent}
                  className={`p-2 rounded-lg text-left border text-[11px] font-semibold transition-colors cursor-pointer ${
                    currentEvent.id === placeholderEvent.id
                      ? 'bg-[var(--accent-primary-light)] border-[var(--badge-border)] text-[var(--badge-text)]'
                      : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  PLACEHOLDER
                </button>
              </div>
            </div>

            {/* Section Visibility Toggles */}
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <div className="font-bold text-xs text-[var(--text-main)] flex items-center gap-2">
                <Eye className="w-4 h-4 text-[var(--badge-text)]" />
                <span>SECTION VISIBILITY</span>
              </div>
              <button
                onClick={loadLegacyEvent}
                className="p-1 text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
                title="Reset Section Toggles"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1.5">
              {Object.keys(placeholderEvent.sections || {}).map((key) => {
                const sectionKey = key as keyof SectionConfig;
                const isEnabled = Boolean(currentEvent.sections?.[sectionKey]);

                return (
                  <label
                    key={key}
                    className="flex items-center justify-between p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-highlight)] cursor-pointer"
                  >
                    <span className="capitalize text-[var(--text-main)]">{key}</span>
                    <input
                      type="checkbox"
                      checked={isEnabled}
                      onChange={() => toggleSection(sectionKey)}
                      className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-slate-900 border-slate-700 cursor-pointer"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Reusable Master Event Page */}
      <EventPage event={currentEvent} />
    </div>
  );
}

export default App;
