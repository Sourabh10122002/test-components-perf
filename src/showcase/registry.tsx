import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export type ShowcaseEntry = {
  name: string
  Example: LazyExoticComponent<ComponentType>
}

// Every file in ./examples is one showcase page, named after the file.
const modules = import.meta.glob<{ default: ComponentType }>('./examples/*.tsx')

export const COMPONENT_NAMES = [
  'Kbd', 'Tag', 'Radio', 'Link', 'Text', 'Label', 'Button', 'CheckBox', 'Switch', 'Divider',
  'InlineMessage', 'Tooltip', 'EmptyState', 'ScrollArea', 'InfoTip', 'Input', 'Alert', 'Anchor',
  'Breadcrumb', 'Dropdown', 'Popover', 'SegmentedControl', 'Select', 'Tabs', 'Accordion', 'Avatar',
  'Badge', 'Carousel', 'Cascader', 'ColorPicker', 'ColorSwatch', 'Datepicker', 'Drawer', 'Field',
  'Gridbox', 'List', 'Listbox', 'ListboxItem', 'Menu', 'Modal', 'Pagination', 'Progress', 'Rating',
  'SideBar', 'Slider', 'Steps', 'TextArea', 'Toast', 'Transfer', 'Tree',
]

export const entries: ShowcaseEntry[] = COMPONENT_NAMES.map((name) => {
  const load = modules[`./examples/${name}.tsx`]
  return {
    name,
    Example: lazy(load ?? (async () => ({ default: () => <p className="sc-muted">No example yet.</p> }))),
  }
})
