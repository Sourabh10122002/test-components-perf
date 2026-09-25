// @ts-nocheck
// Ported from origin/colorpicker:src/components/ColorPicker/story/ColorPicker.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/colorpicker:src/components/ColorPicker/story/ColorPicker.stories.tsx
import React from "react";
import { ColorPicker } from "@inventive-ui/components/ColorPicker";
import { ColorSwatch } from "@inventive-ui/components/ColorSwatch";



export default function ColorPickerShowcase() {
    const [color1, setColor1] = React.useState('#975FF2');
    const [color2, setColor2] = React.useState('#3B82F6');
    const [color3, setColor3] = React.useState('#EF4444');

    return (
      <div className="space-y-12 p-8 bg-gray-50 min-h-screen">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">ColorPicker Component Showcase</h1>
          <p className="text-lg text-gray-600">
            Comprehensive visual reference of all color picker variants, modes, and features
          </p>
        </div>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Size Variants</h2>
            <p className="text-sm text-gray-600">Different sizes for various layout needs</p>
          </div>
          <div className="flex gap-8 items-start flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <ColorPicker size="sm" value={color1} onChange={setColor1} />
              <div className="text-sm font-medium">Small</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColorPicker size="md" value={color1} onChange={setColor1} />
              <div className="text-sm font-medium">Medium (Default)</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColorPicker size="lg" value={color1} onChange={setColor1} />
              <div className="text-sm font-medium">Large</div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Gradient View Modes</h2>
            <p className="text-sm text-gray-600">Three different color selection interfaces</p>
          </div>
          <div className="flex gap-6 items-start flex-wrap">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Solid Gradient</div>
              <ColorPicker.Gradient
                hue={270} saturation={50} lightness={50}
                onChange={() => {}} size="md" viewMode="solid"
              />
              <div className="text-xs text-gray-500">Continuous gradient picker</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Grid View</div>
              <ColorPicker.Gradient
                hue={270} saturation={50} lightness={50}
                onChange={() => {}} size="md" viewMode="grid"
              />
              <div className="text-xs text-gray-500">Discrete color swatches</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Circle View</div>
              <ColorPicker.Gradient
                hue={270} saturation={50} lightness={50}
                onChange={() => {}} onCircleChange={() => {}}
                size="md" viewMode="circle"
              />
              <div className="text-xs text-gray-500">Radial hue selector</div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Layout Orientations</h2>
            <p className="text-sm text-gray-600">Vertical and horizontal layouts for different use cases</p>
          </div>
          <div className="flex gap-8 items-start">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Vertical (Default)</div>
              <ColorPicker orientation="vertical" value={color2} onChange={setColor2} size="md" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Horizontal</div>
              <ColorPicker orientation="horizontal" value={color3} onChange={setColor3} size="md" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Display Variants</h2>
            <p className="text-sm text-gray-600">Control which sections are visible</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Default (All Features)</div>
              <ColorPicker variant="default" size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Hide Theme Colors</div>
              <ColorPicker variant="hideThemeColors" size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Show Color Shades</div>
              <ColorPicker variant="showColorShades" size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Hide Recent Colors</div>
              <ColorPicker variant="hideRecentColors" size="sm" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Advanced Features</h2>
            <p className="text-sm text-gray-600">Additional functionality options</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">With Alpha/Opacity</div>
              <ColorPicker showAlpha={true} size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">With Contrast Ratio</div>
              <ColorPicker showContrast={true} size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">With Color Preview</div>
              <ColorPicker showSelectedColorPreview={true} size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Without View Mode Toggle</div>
              <ColorPicker showViewModes={false} size="sm" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Color Swatch Variants</h2>
            <p className="text-sm text-gray-600">Customizable swatch displays</p>
          </div>
          <div className="flex gap-8 items-start flex-wrap">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Filled Swatches</div>
              <ColorPicker swatchVariant="filled" size="md" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Outlined Swatches</div>
              <ColorPicker swatchVariant="filled + outline" size="md" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">With Labels</div>
              <ColorPicker swatchVariant="filled" swatchLabel="A" size="md" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Color Swatch Component (standalone)</h2>
            <p className="text-sm text-gray-600">The ColorSwatch component used directly</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <ColorSwatch color="#975FF2" size="base" variant="solid" />
            <ColorSwatch color="#3B82F6" size="base" variant="solid-outline" />
            <ColorSwatch color="#EF4444" size="base" variant="outline" />
            <ColorSwatch color="success"  size="base" variant="solid" />
            <ColorSwatch color="warning"  size="base" variant="solid" />
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Color Format Support</h2>
            <p className="text-sm text-gray-600">Multiple color representation formats</p>
          </div>
          <div className="flex gap-6 items-start">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">HEX Format (Default)</div>
              <ColorPicker format="hex" size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">RGB Format</div>
              <ColorPicker format="rgb" size="sm" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Component States</h2>
            <p className="text-sm text-gray-600">Different interaction states</p>
          </div>
          <div className="flex gap-6 items-start">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Enabled</div>
              <ColorPicker disabled={false} size="sm" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Disabled</div>
              <ColorPicker disabled={true} size="sm" />
            </div>
          </div>
        </section>
      </div>
    );
}
