import { Suspense, useEffect, useMemo, useState } from 'react'
import { useThemeMode } from '@inventive-ui/framework'
import { entries } from './showcase/registry'
import { ErrorBoundary } from './showcase/ErrorBoundary'
import './App.css'

const fromHash = () => decodeURIComponent(window.location.hash.slice(1))

function App() {
  const [active, setActive] = useState(() => fromHash() || entries[0].name)
  const [query, setQuery] = useState('')
  const { isDark, updateTheme } = useThemeMode()

  useEffect(() => {
    const onHash = () => setActive(fromHash() || entries[0].name)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const filtered = useMemo(
    () => entries.filter((e) => e.name.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  )
  const current = entries.find((e) => e.name === active) ?? entries[0]
  const { Example } = current

  return (
    <div className="sc-layout">
      <aside className="sc-sidebar">
        <div className="sc-brand">
          Inventive UI <span className="sc-count">{entries.length}</span>
        </div>
        <div className="sc-theme" role="radiogroup" aria-label="Theme">
          {(['light', 'dark'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              role="radio"
              aria-checked={isDark === (mode === 'dark')}
              className={isDark === (mode === 'dark') ? 'sc-theme-option is-active' : 'sc-theme-option'}
              onClick={() => updateTheme({ mode })}
            >
              {mode === 'light' ? '☀ Light' : '☾ Dark'}
            </button>
          ))}
        </div>
        <input
          className="sc-search"
          type="search"
          placeholder="Search components"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <nav className="sc-nav">
          {filtered.map((e) => (
            <a
              key={e.name}
              href={`#${e.name}`}
              className={e.name === current.name ? 'sc-nav-item is-active' : 'sc-nav-item'}
            >
              {e.name}
            </a>
          ))}
          {filtered.length === 0 && <p className="sc-muted">No matches</p>}
        </nav>
      </aside>

      <main className="sc-main">
        <header className="sc-header">
          <h1>{current.name}</h1>
        </header>
        <ErrorBoundary key={current.name}>
          <Suspense fallback={<p className="sc-muted">Loading…</p>}>
            <Example />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default App
