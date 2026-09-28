// ─── Component Configuration ─────────────────────────────────────────────────
//
// Default component presets for your Inventive UI project.
// Customize variants, appearances, and slot assignments below.
// Entries are rebuilt from the published component registry.
//
// Docs: https://inventiveui.com/docs/configuration

import type { KbdProps } from "@inventive-ui/components/Kbd";
import type { TagProps } from "@inventive-ui/components/Tag";
import type { RadioProps } from "@inventive-ui/components/Radio";
import type { LinkProps } from "@inventive-ui/components/Link";
import type { TextProps } from "@inventive-ui/components/Text";
import type { LabelProps } from "@inventive-ui/components/Label";
import type { ButtonProps } from "@inventive-ui/components/Button";
import type { CheckboxProps } from "@inventive-ui/components/Checkbox";
import type { SwitchProps } from "@inventive-ui/components/Switch";
import type { DividerProps } from "@inventive-ui/components/Divider";
import type { InlineMessageProps } from "@inventive-ui/components/InlineMessage";
import type { tooltipProps } from "@inventive-ui/components/Tooltip";
import type { EmptystateProps } from "@inventive-ui/components/Emptystate";
import type { ScrollAreaProps } from "@inventive-ui/components/ScrollArea";
import type { InfoTipProps } from "@inventive-ui/components/InfoTip";
import type { InputProps } from "@inventive-ui/components/Input";
import type { AlertProps } from "@inventive-ui/components/Alert";
import type { AnchorProps } from "@inventive-ui/components/Anchor";
import type { BreadcrumbProps } from "@inventive-ui/components/BreadCrumbs";
import type { DropdownProps } from "@inventive-ui/components/Dropdown";
import type { PopoverProps } from "@inventive-ui/components/Popover";
import type { SegmentedControlProps } from "@inventive-ui/components/SegmentedControl";
import type { SelectProps } from "@inventive-ui/components/Select";
import type { TabsProps } from "@inventive-ui/components/Tabs";
import type { AccordionProps } from "@inventive-ui/components/Accordion";
import type { AvatarProps } from "@inventive-ui/components/Avatar";
import type { BadgeProps } from "@inventive-ui/components/Badge";
import type { CarouselProps } from "@inventive-ui/components/Carousel";
import type { CascaderProps } from "@inventive-ui/components/Cascader";
import type { ColorPickerProps } from "@inventive-ui/components/ColorPicker";
import type { ColorSwatchProps } from "@inventive-ui/components/ColorSwatch";
import type { DatepickerProps } from "@inventive-ui/components/Datepicker";
import type { DrawerProps } from "@inventive-ui/components/Drawer";
import type { FieldProps } from "@inventive-ui/components/Field";
import type { ListProps } from "@inventive-ui/components/List";
import type { ListboxProps } from "@inventive-ui/components/Listbox";
import type { ListboxItemProps } from "@inventive-ui/components/ListboxItem";
import type { MenuProps } from "@inventive-ui/components/Menu";
import type { ModalProps } from "@inventive-ui/components/Modal";
import type { PaginationProps } from "@inventive-ui/components/Pagination";
import type { ProgressProps } from "@inventive-ui/components/Progress";
import type { RatingProps } from "@inventive-ui/components/Rating";
import type { SideBarProps } from "@inventive-ui/components/SideBar";
import type { SliderProps } from "@inventive-ui/components/Slider";
import type { StepsProps } from "@inventive-ui/components/Steps";
import type { TextAreaProps } from "@inventive-ui/components/Textarea";
import type { ToastProps } from "@inventive-ui/components/Toast";
import type { TransferProps } from "@inventive-ui/components/Transfer";
import type { TreeProps } from "@inventive-ui/components/Tree";

type ComponentConfigMap = {
  Kbd: { default: Partial<KbdProps> };
  Tag: { default: Partial<TagProps> };
  Radio: { default: Partial<RadioProps> };
  Link: { default: Partial<LinkProps> };
  Text: { default: Partial<TextProps> };
  Label: { default: Partial<LabelProps> };
  Button: { default: Partial<ButtonProps> };
  Checkbox: { default: Partial<CheckboxProps> };
  Switch: { default: Partial<SwitchProps> };
  Divider: { default: Partial<DividerProps> };
  InlineMessage: { default: Partial<InlineMessageProps> };
  Tooltip: { default: Partial<tooltipProps> };
  Emptystate: { default: Partial<EmptystateProps> };
  ScrollArea: { default: Partial<ScrollAreaProps> };
  InfoTip: { default: Partial<InfoTipProps> };
  Input: { default: Partial<InputProps> };
  Alert: { default: Partial<AlertProps> };
  Anchor: { default: Partial<AnchorProps> };
  BreadCrumbs: { default: Partial<BreadcrumbProps> };
  Dropdown: { default: Partial<DropdownProps> };
  Popover: { default: Partial<PopoverProps> };
  SegmentedControl: { default: Partial<SegmentedControlProps> };
  Select: { default: Partial<SelectProps> };
  Tabs: { default: Partial<TabsProps> };
  Accordion: { default: Partial<AccordionProps> };
  Avatar: { default: Partial<AvatarProps> };
  Badge: { default: Partial<BadgeProps> };
  Carousel: { default: Partial<CarouselProps> };
  Cascader: { default: Partial<CascaderProps> };
  ColorPicker: { default: Partial<ColorPickerProps> };
  ColorSwatch: { default: Partial<ColorSwatchProps> };
  Datepicker: { default: Partial<DatepickerProps> };
  Drawer: { default: Partial<DrawerProps> };
  Field: { default: Partial<FieldProps> };
  Gridbox: { default: Record<string, unknown> };
  List: { default: Partial<ListProps> };
  Listbox: { default: Partial<ListboxProps> };
  ListboxItem: { default: Partial<ListboxItemProps> };
  Menu: { default: Partial<MenuProps> };
  Modal: { default: Partial<ModalProps> };
  Pagination: { default: Partial<PaginationProps> };
  Progress: { default: Partial<ProgressProps> };
  Rating: { default: Partial<RatingProps> };
  SideBar: { default: Partial<SideBarProps> };
  Slider: { default: Partial<SliderProps> };
  Steps: { default: Partial<StepsProps> };
  Textarea: { default: Partial<TextAreaProps> };
  Toast: { default: Partial<ToastProps> };
  Transfer: { default: Partial<TransferProps> };
  Tree: { default: Partial<TreeProps> };
};

export const componentConfig: ComponentConfigMap = {
  Kbd: {
    default: {

    },
  },

  Tag: {
    default: {

    },
  },

  Radio: {
    default: {

    },
  },

  Link: {
    default: {

    },
  },

  Text: {
    default: {},
  },

  Label: {
    default: {},
  },

  Button: {
    default: {

    },
  },

  Checkbox: {
    default: {

    },
  },

  Switch: {
    default: {

    },
  },

  Divider: {
    default: {

    },
  },

  InlineMessage: {
    default: {

    },
  },

  Tooltip: {
    default: {

    },
  },

  Emptystate: {
    default: {

    },
  },

  ScrollArea: {
    default: {

    },
  },

  InfoTip: {
    default: {

    },
  },

  Input: {
    default: {

    },
  },

  Alert: {
    default: {

    },
  },

  Anchor: {
    default: {

    },
  },

  BreadCrumbs: {
    default: {

    },
  },

  Dropdown: {
    default: {

    },
  },

  Popover: {
    default: {

    },
  },

  SegmentedControl: {
    default: {

    },
  },

  Select: {
    default: {

    },
  },

  Tabs: {
    default: {

    },
  },

  Accordion: {
    default: {},
  },

  Avatar: {
    default: {},
  },

  Badge: {
    default: {},
  },

  Carousel: {
    default: {},
  },

  Cascader: {
    default: {},
  },

  ColorPicker: {
    default: {},
  },

  ColorSwatch: {
    default: {},
  },

  Datepicker: {
    default: {},
  },

  Drawer: {
    default: {},
  },

  Field: {
    default: {},
  },

  Gridbox: {
    default: {

    },
  },

  List: {
    default: {},
  },

  Listbox: {
    default: {},
  },

  ListboxItem: {
    default: {},
  },

  Menu: {
    default: {},
  },

  Modal: {
    default: {},
  },

  Pagination: {
    default: {},
  },

  Progress: {
    default: {},
  },

  Rating: {
    default: {},
  },

  SideBar: {
    default: {},
  },

  Slider: {
    default: {},
  },

  Steps: {
    default: {},
  },

  Textarea: {
    default: {},
  },

  Toast: {
    default: {},
  },

  Transfer: {
    default: {},
  },

  Tree: {
    default: {},
  },

};
