// Showcase ported from origin/colorswatch:src/components/ColorSwatch/story/ColorSwatch.stories.tsx
import * as React from "react";
import { ColorSwatch } from "@inventive-ui/components/ColorSwatch";
import { OpacitySwatch } from "@inventive-ui/components/ColorSwatch";
import { MixedSwatch } from "@inventive-ui/components/ColorSwatch";
import { AngularSwatch } from "@inventive-ui/components/ColorSwatch";

// ─── Showcase style tokens (dark-mode-aware) ──────────────────────────────────
const sc = {
  page:      "space-y-12 p-8 min-h-screen",
  section:   "space-y-6",
  sub:       "space-y-3",
  h1:        "text-4xl font-bold text-gray-900 dark:text-gray-50",
  h2:        "text-2xl font-bold text-gray-900 dark:text-gray-100",
  h3:        "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3",
  body:      "text-sm text-gray-600 dark:text-gray-400",
  subtitle:  "text-lg text-gray-600 dark:text-gray-400",
  cellLabel: "text-xs mt-2 text-gray-700 dark:text-gray-300",
  divider:   "pt-8 border-t-2 border-gray-300 dark:border-gray-600",
  row:       "flex gap-2 flex-wrap items-end",
  rowCenter: "flex gap-2 flex-wrap items-center",
  cell:      "text-center",
  code:      "bg-gray-100 dark:bg-gray-800 rounded px-1 text-xs font-mono",
  tableHead: "bg-gray-100 dark:bg-gray-800",
  tableTh:   "border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100 text-sm",
  tableTd:   "border border-gray-300 dark:border-gray-600 px-4 py-3",
  tableRow:  "border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm",
  focusRing: "ring-2 ring-offset-2 ring-brand-500 outline-none",
  darkPanel: "dark bg-neutral-900 p-8 rounded-lg flex items-center gap-12 border border-neutral-800 shadow-inner",
  darkCol:   "flex flex-col items-center gap-3",
  darkLabel: "text-neutral-400 text-xs font-medium uppercase tracking-wider",
};

// ─── Inline style presets for pseudo-state simulation ─────────────────────────
const STYLE_HOVER: React.CSSProperties = {
  filter: "brightness(1.1)",
  transform: "translateY(-1px)",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
};

const STYLE_PRESSED: React.CSSProperties = {
  filter: "brightness(0.9)",
  transform: "translateY(0px)",
};

// One-off custom style overrides — showcases that `style` fully replaces the
// component's internal styling, so any CSS can be layered on top.
const STYLE_GLASS: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,0.4)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
};

const STYLE_NEON: React.CSSProperties = {
  backgroundColor: "#0f172a",
  border: "1px solid #22d3ee",
  boxShadow: "0 0 12px #22d3ee, inset 0 0 8px #22d3ee",
};

const STYLE_NEO_BRUTALIST: React.CSSProperties = {
  backgroundColor: "#2DD4BF",
  border: "3px solid black",
  borderRadius: "0",
  boxShadow: "6px 6px 0px 0px black",
  transform: "translate(-2px, -2px)",
};

const STYLE_EMBOSS: React.CSSProperties = {
  backgroundColor: "#e5e7eb",
  boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.25), inset 2px 2px 4px rgba(255,255,255,0.7)",
  border: "none",
};

export default function ColorSwatchShowcase() {
  const globals: Record<string, any> = {};
    const themeColor = globals.themeColor || "brand";

    const [selectedSize,  setSelectedSize ] = React.useState<string | null>("base");
    const [selectedRatio, setSelectedRatio] = React.useState<string | null>("1:1");
    const [multiSelected, setMultiSelected] = React.useState<string[]>([]);

    const semanticColors = ["brand", "success", "danger", "warning", "info", "neutral"] as const;
    const namedColors    = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "cyan", "black", "white"] as const;
    const appearances    = ["strong", "soft", "dualTone", "onColor"] as const;
    const sizes          = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"] as const;
    const ratios         = ["1:1", "1:2", "2:1"] as const;

    return (
      <div className={sc.page}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="space-y-2">
          <h1 className={sc.h1}>ColorSwatch</h1>
          <p className={sc.subtitle}>
            Comprehensive visual reference · Active theme color:{" "}
            <code className={sc.code}>{themeColor}</code>
          </p>
        </div>

        {/* ── Theme Color ──────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Theme Color Integration</h2>
          <p className={sc.body}>
            When <code className={sc.code}>color</code> is empty the swatch inherits the Storybook{" "}
            <code className={sc.code}>themeColor</code> global. Change it in the toolbar above.
          </p>
          <div className={sc.rowCenter}>
            {appearances.map(ap => (
              <div key={ap} className={sc.cell}>
                {ap === "onColor" ? (
                  <div style={{ backgroundColor: "#0d9488", padding: "8px", borderRadius: "8px", display: "inline-flex" }}>
                    <ColorSwatch color={themeColor} size="base" appearance={ap} label={ap[0].toUpperCase()} />
                  </div>
                ) : (
                  <ColorSwatch color={themeColor} size="base" appearance={ap} label={ap[0].toUpperCase()} />
                )}
                <div className={sc.cellLabel}>{ap}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sizes ────────────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Sizes</h2>
          <p className={sc.body}>Click to select, click again to deselect.</p>
          <div className={sc.rowCenter}>
            {sizes.map(size => (
              <div key={size} className={sc.cell}>
                <ColorSwatch
                  color={themeColor}
                  label={size.toUpperCase()}
                  size={size}
                  selected={selectedSize === size}
                  onSelect={() => setSelectedSize(prev => prev === size ? null : size)}
                />
                <div className={sc.cellLabel}>{size}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ratios ───────────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Ratios</h2>
          <div className={sc.rowCenter}>
            {ratios.map(r => (
              <div key={r} className={sc.cell}>
                <ColorSwatch
                  color={themeColor}
                  label={r}
                  size="lg"
                  ratio={r}
                  selected={selectedRatio === r}
                  onSelect={() => setSelectedRatio(prev => prev === r ? null : r)}
                />
                <div className={sc.cellLabel}>{r === "1:1" ? "Square" : r === "1:2" ? "Portrait" : "Landscape"}</div>
              </div>
            ))}
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Ratio × Size matrix</p>
            <div className="overflow-x-auto">
              <table className="border-collapse">
                <thead>
                  <tr className={sc.tableHead}>
                    <th className={sc.tableTh}>Size</th>
                    {ratios.map(r => <th key={r} className={sc.tableTh}>{r}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {sizes.map(size => (
                    <tr key={size}>
                      <td className={sc.tableRow}>{size.toUpperCase()}</td>
                      {ratios.map(r => (
                        <td key={r} className={sc.tableTd}>
                          <div className="flex justify-center p-2">
                            <ColorSwatch color={themeColor} ratio={r} size={size} />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Radius Variants ──────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Radius Variants</h2>
          <p className={sc.body}>
            Border radius normally inherits the global theme's{" "}
            <code className={sc.code}>globalRadius</code>. The{" "}
            <code className={sc.code}>style</code> prop can override it per-instance.
          </p>
          <div className={sc.rowCenter}>
            {([
              ["None", "0px"],
              ["Sm", "4px"],
              ["Md", "8px"],
              ["Lg", "12px"],
              ["Full", "9999px"],
            ] as const).map(([lbl, radius]) => (
              <div key={lbl} className={sc.cell}>
                <ColorSwatch
                  color={themeColor}
                  size="lg"
                  label={lbl[0]}
                  style={{ borderRadius: radius }}
                />
                <div className={sc.cellLabel}>{lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Font Family Variants ─────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Font Family Variants</h2>
          <p className={sc.body}>Label typography inherits the global theme font.</p>
          <div className={sc.rowCenter}>
            {(["inter", "arial", "mono"] as const).map(font => (
              <div key={font} className={sc.cell}>
                <ColorSwatch
                  color={themeColor}
                  size="lg"
                  label="Aa"
                  className={`font-${font}`}
                />
                <div className={sc.cellLabel}>{font}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Polymorphic "as" ─────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Polymorphic Element (as)</h2>
          <p className={sc.body}>Renders as any element via the <code className={sc.code}>as</code> prop.</p>
          <div className={sc.rowCenter}>
            {(["button", "div", "span", "a"] as const).map(tag => (
              <div key={tag} className={sc.cell}>
                <ColorSwatch color={themeColor} size="lg" label={tag[0].toUpperCase()} as={tag} />
                <div className={sc.cellLabel}>&lt;{tag}&gt;</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── New Props: transparent & withShadow ──────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Transparent & Shadow</h2>

          <div className={sc.sub}>
            <div className={sc.rowCenter}>
              <div className={sc.cell}>
                <OpacitySwatch size="xl" color={themeColor} transparent />
                <div className={sc.cellLabel}>Transparent<br/>(gradient hidden)</div>
              </div>
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>
              withShadow — keeps light swatches visible on white backgrounds
            </p>
            <div className={sc.rowCenter}>
              {(["white", "#f5f5f5", "#fffbeb", "neutral"] as const).map(c => (
                <div key={c} className={sc.cell}>
                  <ColorSwatch color={c} size="xl" withShadow />
                  <div className={sc.cellLabel}>withShadow<br/>{c}</div>
                </div>
              ))}
              {(["white", "#f5f5f5"] as const).map(c => (
                <div key={`no-${c}`} className={sc.cell}>
                  <ColorSwatch color={c} size="xl" />
                  <div className={sc.cellLabel}>no shadow<br/>{c}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Color Palette ────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Color Palette</h2>

          <div className={sc.sub}>
            <p className={sc.h3}>Semantic colors</p>
            <div className={sc.rowCenter}>
              {semanticColors.map(color => (
                <div key={color} className={sc.cell}>
                  <ColorSwatch color={color} label={color[0].toUpperCase()} size="lg" />
                  <div className={sc.cellLabel}>{color}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Named palette</p>
            <div className={sc.rowCenter}>
              {namedColors.map(color => (
                <div key={color} className={sc.cell}>
                  <ColorSwatch color={color} label={color[0].toUpperCase()} size="lg" />
                  <div className={sc.cellLabel}>{color}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Semantic × Appearance grid</p>
            <div className="overflow-x-auto">
              <table className="border-collapse">
                <thead>
                  <tr className={sc.tableHead}>
                    <th className={sc.tableTh + " text-left"}>Color</th>
                    {appearances.map(a => <th key={a} className={sc.tableTh}>{a}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {semanticColors.map(color => (
                    <tr key={color}>
                      <td className={sc.tableRow + " capitalize"}>{color}</td>
                      {appearances.map(ap => (
                        <td key={ap} className={sc.tableTd}>
                          <div className="flex justify-center p-1">
                            <ColorSwatch color={color} appearance={ap} size="base" />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Labels ───────────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Labels</h2>
          <p className={sc.body}>Font size auto-scales with character count.</p>
          <div className={sc.rowCenter}>
            {(["A", "AB", "ABC", "ABCD", "Color", "Animal"] as const).map(lbl => (
              <div key={lbl} className={sc.cell}>
                <ColorSwatch color={themeColor} label={lbl} size="xl" />
                <div className={sc.cellLabel}>"{lbl}"</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Interaction States ───────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Interaction States</h2>

          <div className={sc.sub}>
            <p className={sc.h3}>Default · Selected · Disabled</p>
            <div className={sc.rowCenter}>
              {(["Default", "Selected", "Disabled", "Selected + Disabled"] as const).map((lbl, i) => (
                <div key={lbl} className={sc.cell}>
                  <ColorSwatch
                    color={themeColor}
                    label="A"
                    size="lg"
                    selected={i === 1 || i === 3}
                    disabled={i === 2 || i === 3}
                  />
                  <div className={sc.cellLabel}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Simulated pseudo-states — Hover · Pressed · Focus</p>
            <div className={sc.rowCenter}>
              <div className={sc.cell}>
                <ColorSwatch color={themeColor} label="A" size="lg" />
                <div className={sc.cellLabel}>Rest</div>
              </div>
              <div className={sc.cell}>
                <ColorSwatch color={themeColor} label="A" size="lg" style={STYLE_HOVER} />
                <div className={sc.cellLabel}>Hover</div>
              </div>
              <div className={sc.cell}>
                <ColorSwatch color={themeColor} label="A" size="lg" style={STYLE_PRESSED} />
                <div className={sc.cellLabel}>Pressed</div>
              </div>
              <div className={sc.cell}>
                <ColorSwatch color={themeColor} label="A" size="lg" className={sc.focusRing} />
                <div className={sc.cellLabel}>Focus</div>
              </div>
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>On a dark surface</p>
            <div className={sc.darkPanel}>
              <div className={sc.darkCol}>
                <span className={sc.darkLabel}>Default</span>
                <ColorSwatch color={themeColor} label="A" size="lg" />
              </div>
              <div className={sc.darkCol}>
                <span className={sc.darkLabel}>Selected</span>
                <ColorSwatch color={themeColor} label="A" size="lg" selected />
              </div>
              <div className={sc.darkCol}>
                <span className={sc.darkLabel}>withShadow</span>
                <ColorSwatch color="white" label="A" size="lg" withShadow />
              </div>
              <div className={sc.darkCol}>
                <span className={sc.darkLabel}>Disabled</span>
                <ColorSwatch color={themeColor} label="A" size="lg" disabled />
              </div>
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Multi-select — click freely, toggle on/off</p>
            <div className={sc.row}>
              {namedColors.map(color => (
                <ColorSwatch
                  key={color}
                  color={color}
                  label={color[0].toUpperCase()}
                  size="lg"
                  multiselect
                  selected={multiSelected.includes(color)}
                  onSelect={(c, isSel) =>
                    setMultiSelected(prev => isSel ? [...prev, c] : prev.filter(x => x !== c))
                  }
                />
              ))}
            </div>
            <p className={sc.body}>
              Selected: {multiSelected.length > 0 ? multiSelected.join(", ") : "none"}
            </p>
          </div>
        </section>

        {/* ── Advanced Variants ────────────────────────────────────────────── */}
        <div className={sc.divider}>
          <h1 className={sc.h1}>Advanced Variants</h1>
          <p className={`${sc.subtitle} mt-1`}>
            Gradient, multi-color, and angular swatch components. No border by design.
          </p>
        </div>

        {/* ── OpacitySwatch ────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>OpacitySwatch</h2>
          <p className={sc.body}>Checkerboard reveals transparency. Horizontal and vertical gradient directions.</p>

          <div className={sc.sub}>
            <p className={sc.h3}>Directions</p>
            <div className={sc.rowCenter}>
              <div className={sc.cell}>
                <OpacitySwatch color={themeColor} direction="horizontal" size="xl" />
                <div className={sc.cellLabel}>horizontal</div>
              </div>
              <div className={sc.cell}>
                <OpacitySwatch color={themeColor} direction="vertical" size="xl" ratio="1:2" />
                <div className={sc.cellLabel}>vertical (portrait)</div>
              </div>
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Semantic colors</p>
            <div className={sc.rowCenter}>
              {semanticColors.map(color => (
                <div key={color} className={sc.cell}>
                  <OpacitySwatch color={color} size="lg" />
                  <div className={sc.cellLabel}>{color}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Sizes</p>
            <div className={sc.rowCenter}>
              {sizes.map(size => (
                <div key={size} className={sc.cell}>
                  <OpacitySwatch color={themeColor} size={size} />
                  <div className={sc.cellLabel}>{size}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MixedSwatch ──────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>MixedSwatch</h2>
          <p className={sc.body}>Multiple colors in split, grid, horizontal, or vertical patterns.</p>

          <div className={sc.sub}>
            <p className={sc.h3}>Patterns</p>
            <div className={sc.rowCenter}>
              <div className={sc.cell}>
                <MixedSwatch colors={["red", "blue"]} pattern="split" size="xl" />
                <div className={sc.cellLabel}>split</div>
              </div>
              <div className={sc.cell}>
                <MixedSwatch colors={["red", "green", "blue", "yellow"]} pattern="grid" size="xl" />
                <div className={sc.cellLabel}>grid</div>
              </div>
              <div className={sc.cell}>
                <MixedSwatch colors={["red", "orange", "yellow"]} pattern="horizontal" size="xl" ratio="1:2" />
                <div className={sc.cellLabel}>horizontal</div>
              </div>
              <div className={sc.cell}>
                <MixedSwatch colors={["purple", "pink", "blue"]} pattern="vertical" size="xl" ratio="2:1" />
                <div className={sc.cellLabel}>vertical</div>
              </div>
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Color combinations (split)</p>
            <div className={sc.rowCenter}>
              {([["red", "orange"], ["green", "blue"], ["purple", "pink"], ["brand", "info"]] as [string, string][]).map(([a, b]) => (
                <div key={`${a}-${b}`} className={sc.cell}>
                  <MixedSwatch colors={[a, b]} pattern="split" size="lg" />
                  <div className={sc.cellLabel}>{a} + {b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Sizes</p>
            <div className={sc.rowCenter}>
              {sizes.map(size => (
                <div key={size} className={sc.cell}>
                  <MixedSwatch colors={["brand", "success"]} pattern="split" size={size} />
                  <div className={sc.cellLabel}>{size}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AngularSwatch ────────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>AngularSwatch</h2>
          <p className={sc.body}>Linear gradient rotated to any angle — Figma-style blending.</p>

          <div className={sc.sub}>
            <p className={sc.h3}>Rotation angles</p>
            <div className={sc.rowCenter}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                <div key={angle} className={sc.cell}>
                  <AngularSwatch color={themeColor} secondaryColor="neutral" angle={angle} size="lg" />
                  <div className={sc.cellLabel}>{angle}°</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Color combinations (45°)</p>
            <div className={sc.rowCenter}>
              {([["red", "orange"], ["green", "blue"], ["purple", "pink"], ["brand", "info"]] as [string, string][]).map(([a, b]) => (
                <div key={`${a}-${b}`} className={sc.cell}>
                  <AngularSwatch color={a} secondaryColor={b} angle={45} size="lg" />
                  <div className={sc.cellLabel}>{a} + {b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Single color auto-shading (45°)</p>
            <div className={sc.rowCenter}>
              {namedColors.slice(0, 6).map(color => (
                <div key={color} className={sc.cell}>
                  <AngularSwatch color={color} angle={45} size="lg" />
                  <div className={sc.cellLabel}>{color}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={sc.sub}>
            <p className={sc.h3}>Sizes</p>
            <div className={sc.rowCenter}>
              {sizes.map(size => (
                <div key={size} className={sc.cell}>
                  <AngularSwatch color={themeColor} secondaryColor="neutral" angle={45} size={size} />
                  <div className={sc.cellLabel}>{size}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Disabled State — All Variants ────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Disabled State — All Variants</h2>
          <p className={sc.body}>
            Disabled always renders neutral gray — none of the underlying colors leak through.
          </p>
          <div className={sc.rowCenter}>
            <div className={sc.cell}>
              <ColorSwatch color={themeColor} label="A" size="lg" disabled />
              <div className={sc.cellLabel}>ColorSwatch</div>
            </div>
            <div className={sc.cell}>
              <OpacitySwatch color={themeColor} size="lg" disabled />
              <div className={sc.cellLabel}>OpacitySwatch</div>
            </div>
            <div className={sc.cell}>
              <MixedSwatch colors={["red", "blue"]} pattern="split" size="lg" disabled />
              <div className={sc.cellLabel}>MixedSwatch</div>
            </div>
            <div className={sc.cell}>
              <AngularSwatch color={themeColor} secondaryColor="neutral" angle={45} size="lg" disabled />
              <div className={sc.cellLabel}>AngularSwatch</div>
            </div>
          </div>
        </section>

        {/* ── Custom Styling ───────────────────────────────────────────────── */}
        <section className={sc.section}>
          <h2 className={sc.h2}>Custom Styling</h2>
          <p className={sc.body}>
            The <code className={sc.code}>style</code> prop fully replaces the swatch's internal
            styling, so any one-off look can be layered on top.
          </p>
          <div className={sc.rowCenter}>
            <div className={sc.cell}>
              <ColorSwatch label="G" size="xl" style={STYLE_GLASS} />
              <div className={sc.cellLabel}>Glass</div>
            </div>
            <div className={sc.cell}>
              <ColorSwatch label="N" size="xl" style={STYLE_NEON} />
              <div className={sc.cellLabel}>Neon</div>
            </div>
            <div className={sc.cell}>
              <ColorSwatch label="B" size="xl" style={STYLE_NEO_BRUTALIST} />
              <div className={sc.cellLabel}>Neo-Brutalist</div>
            </div>
            <div className={sc.cell}>
              <ColorSwatch label="E" size="xl" style={STYLE_EMBOSS} />
              <div className={sc.cellLabel}>Emboss</div>
            </div>
          </div>
        </section>

      </div>
    );
}
