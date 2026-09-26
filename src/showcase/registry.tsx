import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export type ShowcaseEntry = {
  name: string
  Example: LazyExoticComponent<ComponentType>
}

// Every file in ./examples is one showcase page, named after the file.
const modules = import.meta.glob<{ default: ComponentType }>('./examples/*.tsx')

export const COMPONENT_NAMES = [
  'Accordion', 'Alert', 'Anchor', 'Avatar', 'Badge', 'Breadcrumb', 'Button', 'Carousel', 'Cascader',
  'CheckBox', 'ColorPicker', 'ColorSwatch', 'Datepicker', 'Divider', 'Drawer', 'Dropdown', 'EmptyState',
  'Field', 'Gridbox', 'InfoTip', 'InlineMessage', 'Input', 'Kbd', 'Label', 'Link', 'List', 'Listbox',
  'ListboxItem', 'Menu', 'Modal', 'Pagination', 'Popover', 'Progress', 'Radio', 'Rating', 'ScrollArea',
  'SegmentedControl', 'Select', 'SideBar', 'Slider', 'Steps', 'Switch', 'Tabs', 'Tag', 'Text',
  'TextArea', 'Toast', 'Tooltip', 'Transfer', 'Tree',
]

export const entries: ShowcaseEntry[] = COMPONENT_NAMES.map((name) => {
  const load = modules[`./examples/${name}.tsx`]
  return {
    name,
    Example: lazy(load ?? (async () => ({ default: () => <p className="sc-muted">No example yet.</p> }))),
  }
})
