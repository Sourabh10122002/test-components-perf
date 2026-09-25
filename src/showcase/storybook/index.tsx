/**
 * Local stand-in for the components repo's `.storybook` showcase helpers
 * (showcase-globals.jsx, story-globals.js, storybook-theme.js,
 * storybook-color-options.ts, showcase-parameters.ts) so Showcase / Overview
 * stories can render here unchanged. Toolbar globals don't exist in this app,
 * so every story gets Storybook's defaults; mode follows the app's theme switch.
 */
import type { ReactNode } from 'react'
import { availableColorPalettes, cn, mapFont, themeManager } from '@inventive-ui/framework'
import themeConfig from '../../../iui.config'

export { LazySection } from './LazySection'
export { ShowcaseSkeleton } from './ShowcaseSkeleton'

type Globals = Record<string, unknown>

/** Mirrors STORYBOOK_DEFAULT_GLOBALS in .storybook/storybook-theme.js. */
export const STORYBOOK_DEFAULT_GLOBALS = {
  mode: 'system',
  direction: 'ltr',
  themeColor: 'brand',
  globalRadius: 'md',
  globalSpacing: 'standard',
  globalFont: 'inter',
}

export const SHOWCASE_STORY_PARAMETERS = {
  controls: { disable: true },
  a11y: { disable: true },
  layout: 'fullscreen',
}

export const SHOWCASE_CONTAINER_CLASS =
  'box-border w-full max-w-full min-w-0 space-y-12 overflow-x-hidden p-8 min-h-screen'
export const SHOWCASE_INNER_CLASS = 'w-full max-w-full min-w-0 space-y-12'
export const SHOWCASE_ROW_CLASS = 'flex w-full max-w-full min-w-0 flex-wrap items-center gap-4'
export const SHOWCASE_SCROLL_X_CLASS = 'w-full max-w-full overflow-x-auto'
export const SHOWCASE_PALETTE_GRID_CLASS =
  'grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
export const SHOWCASE_HEADER_WRAP_CLASS =
  'space-y-2 border-b border-neutral-200 dark:border-neutral-700 pb-6'
export const SHOWCASE_TITLE_CLASS =
  'text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight'
export const SHOWCASE_SUBTITLE_CLASS = 'text-lg text-neutral-600 dark:text-neutral-400'
export const SHOWCASE_SECTION_CLASS = 'space-y-4'
export const SHOWCASE_SECTION_TITLE_CLASS =
  'text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1'
export const SHOWCASE_SECTION_DESC_CLASS = 'text-sm text-neutral-600 dark:text-neutral-400'

/** @deprecated kept for stories that still import it */
export const SHOWCASE_GLOBALS_LOCK = {}

function resolveGlobals(globals: Globals = {}): Record<string, string> {
  const resolved: Record<string, unknown> = { ...STORYBOOK_DEFAULT_GLOBALS, ...globals }
  if (resolved.color != null && globals.themeColor == null) resolved.themeColor = resolved.color
  if (resolved.radius != null && globals.globalRadius == null) resolved.globalRadius = resolved.radius
  if (resolved.spacing != null && globals.globalSpacing == null) resolved.globalSpacing = resolved.spacing
  if (resolved.font != null && globals.globalFont == null) resolved.globalFont = resolved.font
  return resolved as Record<string, string>
}

function currentMode(): 'light' | 'dark' {
  try {
    return themeManager.getState().mode
  } catch {
    return 'light'
  }
}

export function getShowcaseTheme(globals: Globals = {}) {
  const g = resolveGlobals(globals)
  const layoutProps = { radius: g.globalRadius, spacing: g.globalSpacing, font: g.globalFont }
  const mode = currentMode()
  return {
    mode,
    resolvedMode: mode,
    direction: g.direction as 'ltr' | 'rtl',
    color: g.themeColor,
    radius: g.globalRadius,
    spacing: g.globalSpacing,
    font: g.globalFont,
    fontClass: mapFont(g.globalFont),
    layoutProps,
    componentProps: { color: g.themeColor, ...layoutProps },
  }
}

export function showcaseColor(globals?: Globals) {
  return getShowcaseTheme(globals).color
}

export function mergeShowcaseArgs<T extends Record<string, unknown>>(args: T = {} as T, globals: Globals = {}) {
  const theme = getShowcaseTheme(globals)
  return {
    ...args,
    color: theme.color,
    radius: theme.radius,
    spacing: theme.spacing,
    font: theme.font,
    fontFamily: args.fontFamily == null || args.fontFamily === '' ? theme.font : args.fontFamily,
  }
}

export function mergeStoryArgs<T extends Record<string, unknown>>(args: T = {} as T, globals: Globals = {}) {
  const g = resolveGlobals(globals)
  return { ...args, color: g.themeColor, radius: g.globalRadius, spacing: g.globalSpacing, font: g.globalFont }
}

export function getStoryColor(args: { color?: string } | undefined, globals: Globals = {}, _parameters = {}, fallback = 'brand') {
  return resolveGlobals(globals).themeColor ?? args?.color ?? fallback
}

export function ShowcaseScrollRegion({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={cn(SHOWCASE_SCROLL_X_CLASS, className)}>{children}</div>
}

export function ShowcaseShell({ globals, className, children }: { globals?: Globals; className?: string; children?: ReactNode }) {
  const theme = getShowcaseTheme(globals)
  return (
    <div className={cn('w-full max-w-full min-w-0', className, theme.fontClass)} dir={theme.direction}>
      {children}
    </div>
  )
}

// --- storybook-color-options.ts ---
function sortAccentKeys(keys: string[]) {
  return [...keys].sort((a, b) => {
    const na = Number(a.match(/\d+/)?.[0] ?? 0)
    const nb = Number(b.match(/\d+/)?.[0] ?? 0)
    const aNum = /^accent-\d+$/.test(a)
    const bNum = /^accent-\d+$/.test(b)
    if (aNum && bNum) return na - nb || a.localeCompare(b)
    if (aNum) return 1
    if (bNum) return -1
    return a.localeCompare(b)
  })
}

const accentKeys = () => sortAccentKeys(Object.keys(themeConfig.theme?.colors?.accent ?? {}))

export const getStorybookCustomAccentColorKeys = () => accentKeys().filter((k) => !/^accent-\d+$/.test(k))
export const getStorybookAccentColorKeys = () => accentKeys()
export const getStorybookAccentPaletteColors = () => {
  const keys = accentKeys()
  return [...keys, ...['white', 'black'].filter((k) => !keys.includes(k))]
}
export const getStorybookColorOptions = () => {
  const keys = accentKeys()
  const custom = keys.filter((k) => !/^accent-\d+$/.test(k))
  const numbered = keys.filter((k) => /^accent-\d+$/.test(k))
  return [
    ...(availableColorPalettes as readonly string[]),
    ...[...custom, ...numbered].filter((k) => !(availableColorPalettes as readonly string[]).includes(k)),
  ]
}
export const storybookAccentColorKeys = getStorybookAccentColorKeys()
export const storybookColorOptions = getStorybookColorOptions()

/** Minimal stand-ins for Storybook story context used by render functions. */
export const STORY_CONTEXT = { globals: {}, args: {}, parameters: {} } as const
