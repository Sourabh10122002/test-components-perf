// Managed by iui. Do not edit manually.
import React from "react";
import { registerSlot, createEagerComponent, resolveComponentExport } from "@inventive-ui/framework/slots";

import type { AccordionProps } from "@inventive-ui/components/Accordion";
import type { AlertProps } from "@inventive-ui/components/Alert";
import type { AnchorProps } from "@inventive-ui/components/Anchor";
import type { AvatarGroupProps } from "@inventive-ui/components/Avatar";
import type { AvatarProps } from "@inventive-ui/components/Avatar";
import type { BadgeCornerProps } from "@inventive-ui/components/Badge";
import type { BadgeCounterProps } from "@inventive-ui/components/Badge";
import type { BadgeDotProps } from "@inventive-ui/components/Badge";
import type { BadgeLabelProps } from "@inventive-ui/components/Badge";
import type { BadgeProps } from "@inventive-ui/components/Badge";
import type { BadgeRibbonProps } from "@inventive-ui/components/Badge";
import type { BadgeStatusIndicatorProps } from "@inventive-ui/components/Badge";
import type { BreadcrumbProps } from "@inventive-ui/components/BreadCrumbs";
import type { ButtonMenuProps } from "@inventive-ui/components/Button";
import type { ButtonSplitProps } from "@inventive-ui/components/Button";
import type { CarouselProps } from "@inventive-ui/components/Carousel";
import type { CascaderProps } from "@inventive-ui/components/Cascader";
import type { CheckboxCardProps } from "@inventive-ui/components/Checkbox";
import type { CheckboxGroupProps } from "@inventive-ui/components/Checkbox";
import type { CheckboxProps } from "@inventive-ui/components/Checkbox";
import type { ColorPickerProps } from "@inventive-ui/components/ColorPicker";
import type { ColorSwatchProps } from "@inventive-ui/components/ColorSwatch";
import type { DatepickerProps } from "@inventive-ui/components/Datepicker";
import type { DividerProps } from "@inventive-ui/components/Divider";
import type { DrawerBodyProps } from "@inventive-ui/components/Drawer";
import type { DrawerFloatProps } from "@inventive-ui/components/Drawer";
import type { DrawerInlineProps } from "@inventive-ui/components/Drawer";
import type { DrawerOverlayProps } from "@inventive-ui/components/Drawer";
import type { DrawerProps } from "@inventive-ui/components/Drawer";
import type { DropdownProps } from "@inventive-ui/components";
import type { EmptystateProps } from "@inventive-ui/components/Emptystate";
import type { FieldProps } from "@inventive-ui/components/Field";
import type { GridboxProp } from "@inventive-ui/components/Gridbox";
import type { InfotipProps } from "@inventive-ui/components/Infotip";
import type { InlineMessageProps } from "@inventive-ui/components/InlineMessage";
import type { InputCardProps } from "@inventive-ui/components/Input";
import type { InputEmailProps } from "@inventive-ui/components/Input";
import type { InputNumberProps } from "@inventive-ui/components/Input";
import type { InputOtpProps } from "@inventive-ui/components/Input";
import type { InputPasswordProps } from "@inventive-ui/components/Input";
import type { InputProps } from "@inventive-ui/components/Input";
import type { InputRangeProps } from "@inventive-ui/components/Input";
import type { InputSearchProps } from "@inventive-ui/components/Input";
import type { InputTagProps } from "@inventive-ui/components/Input";
import type { InputTextProps } from "@inventive-ui/components/Input";
import type { InputUrlProps } from "@inventive-ui/components/Input";
import type { KbdProps } from "@inventive-ui/components/Kbd";
import type { ListItemProps } from "@inventive-ui/components/List";
import type { ListProps } from "@inventive-ui/components/List";
import type { ListboxItemProps } from "@inventive-ui/components/ListboxItem";
import type { ListboxProps } from "@inventive-ui/components/Listbox";
import type { MenuProps } from "@inventive-ui/components/Menu";
import type { ModalProps } from "@inventive-ui/components/Modal";
import type { PaginationProps } from "@inventive-ui/components/Pagination";
import type { PopoverProps } from "@inventive-ui/components/Popover";
import type { ProgressProps } from "@inventive-ui/components/Progress";
import type { RadioProps } from "@inventive-ui/components/Radio";
import type { RatingProps } from "@inventive-ui/components/Rating";
import type { ScrollAreaProps } from "@inventive-ui/components/ScrollArea";
import type { SegmentedControlProps } from "@inventive-ui/components/SegmentedControl";
import type { SelectProps } from "@inventive-ui/components";
import type { SideBarProps } from "@inventive-ui/components/SideBar";
import type { SliderProps } from "@inventive-ui/components/Slider";
import type { StepsProps } from "@inventive-ui/components/Steps";
import type { SwitchProps } from "@inventive-ui/components/Switch";
import type { TabsProps } from "@inventive-ui/components/Tabs";
import type { TagGroupProps } from "@inventive-ui/components/Tag";
import type { TagLinkProps } from "@inventive-ui/components/Tag";
import type { TagMenuProps } from "@inventive-ui/components/Tag";
import type { TagProps } from "@inventive-ui/components/Tag";
import type { TagSplitProps } from "@inventive-ui/components/Tag";
import type { TextAreaProps } from "@inventive-ui/components/Textarea";
import type { ToastProps } from "@inventive-ui/components/Toast";
import type { TransferProps } from "@inventive-ui/components/Transfer";
import type { TreeProps } from "@inventive-ui/components/Tree";
import type { tooltipProps } from "@inventive-ui/components/Tooltip";

type Comp1Slot = { type: "accordion" } & Omit<AccordionProps, "type">;
type Comp1SlotProps = Omit<Comp1Slot, "type">;
type Comp2Slot = { type: "alert" } & Omit<AlertProps, "type">;
type Comp2SlotProps = Omit<Comp2Slot, "type">;
type Comp3Slot = { type: "anchor" } & Omit<AnchorProps, "type">;
type Comp3SlotProps = Omit<Comp3Slot, "type">;
type Comp4Slot = { type: "avatar" } & Omit<AvatarProps, "type">;
type Comp4SlotProps = Omit<Comp4Slot, "type">;
type Comp5Slot = { type: "avatar-group" } & Omit<AvatarGroupProps, "type">;
type Comp5SlotProps = Omit<Comp5Slot, "type">;
type Comp6Slot = { type: "badge" } & Omit<BadgeProps, "type">;
type Comp6SlotProps = Omit<Comp6Slot, "type">;
type Comp7Slot = { type: "badge-corner" } & Omit<BadgeCornerProps, "type">;
type Comp7SlotProps = Omit<Comp7Slot, "type">;
type Comp8Slot = { type: "badge-counter" } & Omit<BadgeCounterProps, "type">;
type Comp8SlotProps = Omit<Comp8Slot, "type">;
type Comp9Slot = { type: "badge-dot" } & Omit<BadgeDotProps, "type">;
type Comp9SlotProps = Omit<Comp9Slot, "type">;
type Comp10Slot = { type: "badge-label" } & Omit<BadgeLabelProps, "type">;
type Comp10SlotProps = Omit<Comp10Slot, "type">;
type Comp11Slot = { type: "badge-ribbon" } & Omit<BadgeRibbonProps, "type">;
type Comp11SlotProps = Omit<Comp11Slot, "type">;
type Comp12Slot = { type: "badge-status-indicator" } & Omit<BadgeStatusIndicatorProps, "type">;
type Comp12SlotProps = Omit<Comp12Slot, "type">;
type Comp13Slot = { type: "breadcrumb" } & Omit<BreadcrumbProps, "type">;
type Comp13SlotProps = Omit<Comp13Slot, "type">;
type Comp14Slot = { type: "button-menu" } & Omit<ButtonMenuProps, "type">;
type Comp14SlotProps = Omit<Comp14Slot, "type">;
type Comp15Slot = { type: "button-split" } & Omit<ButtonSplitProps, "type">;
type Comp15SlotProps = Omit<Comp15Slot, "type">;
type Comp16Slot = { type: "carousel" } & Omit<CarouselProps, "type">;
type Comp16SlotProps = Omit<Comp16Slot, "type">;
type Comp17Slot = { type: "cascader" } & Omit<CascaderProps, "type">;
type Comp17SlotProps = Omit<Comp17Slot, "type">;
type Comp18Slot = { type: "checkbox" } & Omit<CheckboxProps, "type">;
type Comp18SlotProps = Omit<Comp18Slot, "type">;
type Comp19Slot = { type: "checkbox-card" } & Omit<CheckboxCardProps, "type">;
type Comp19SlotProps = Omit<Comp19Slot, "type">;
type Comp20Slot = { type: "checkbox-group" } & Omit<CheckboxGroupProps, "type">;
type Comp20SlotProps = Omit<Comp20Slot, "type">;
type Comp21Slot = { type: "color-picker" } & Omit<ColorPickerProps, "type">;
type Comp21SlotProps = Omit<Comp21Slot, "type">;
type Comp22Slot = { type: "color-swatch" } & Omit<ColorSwatchProps, "type">;
type Comp22SlotProps = Omit<Comp22Slot, "type">;
type Comp23Slot = { type: "datepicker" } & Omit<DatepickerProps, "type">;
type Comp23SlotProps = Omit<Comp23Slot, "type">;
type Comp24Slot = { type: "divider" } & Omit<DividerProps, "type">;
type Comp24SlotProps = Omit<Comp24Slot, "type">;
type Comp25Slot = { type: "drawer" } & Omit<DrawerProps, "type">;
type Comp25SlotProps = Omit<Comp25Slot, "type">;
type Comp26Slot = { type: "drawer-body" } & Omit<DrawerBodyProps, "type">;
type Comp26SlotProps = Omit<Comp26Slot, "type">;
type Comp27Slot = { type: "drawer-float" } & Omit<DrawerFloatProps, "type">;
type Comp27SlotProps = Omit<Comp27Slot, "type">;
type Comp28Slot = { type: "drawer-inline" } & Omit<DrawerInlineProps, "type">;
type Comp28SlotProps = Omit<Comp28Slot, "type">;
type Comp29Slot = { type: "drawer-overlay" } & Omit<DrawerOverlayProps, "type">;
type Comp29SlotProps = Omit<Comp29Slot, "type">;
type Comp30Slot = { type: "dropdown" } & Omit<DropdownProps, "type">;
type Comp30SlotProps = Omit<Comp30Slot, "type">;
type Comp31Slot = { type: "empty-state" } & Omit<EmptystateProps, "type">;
type Comp31SlotProps = Omit<Comp31Slot, "type">;
type Comp32Slot = { type: "field" } & Omit<FieldProps, "type">;
type Comp32SlotProps = Omit<Comp32Slot, "type">;
type Comp33Slot = { type: "gridbox" } & Omit<GridboxProp, "type">;
type Comp33SlotProps = Omit<Comp33Slot, "type">;
type Comp34Slot = { type: "infotip" } & Omit<InfotipProps, "type">;
type Comp34SlotProps = Omit<Comp34Slot, "type">;
type Comp35Slot = { type: "inline-message" } & Omit<InlineMessageProps, "type">;
type Comp35SlotProps = Omit<Comp35Slot, "type">;
type Comp36Slot = { type: "input" } & Omit<InputProps, "type">;
type Comp36SlotProps = Omit<Comp36Slot, "type">;
type Comp37Slot = { type: "input-card" } & Omit<InputCardProps, "type">;
type Comp37SlotProps = Omit<Comp37Slot, "type">;
type Comp38Slot = { type: "input-email" } & Omit<InputEmailProps, "type">;
type Comp38SlotProps = Omit<Comp38Slot, "type">;
type Comp39Slot = { type: "input-number" } & Omit<InputNumberProps, "type">;
type Comp39SlotProps = Omit<Comp39Slot, "type">;
type Comp40Slot = { type: "input-otp" } & Omit<InputOtpProps, "type">;
type Comp40SlotProps = Omit<Comp40Slot, "type">;
type Comp41Slot = { type: "input-password" } & Omit<InputPasswordProps, "type">;
type Comp41SlotProps = Omit<Comp41Slot, "type">;
type Comp42Slot = { type: "input-range" } & Omit<InputRangeProps, "type">;
type Comp42SlotProps = Omit<Comp42Slot, "type">;
type Comp43Slot = { type: "input-search" } & Omit<InputSearchProps, "type">;
type Comp43SlotProps = Omit<Comp43Slot, "type">;
type Comp44Slot = { type: "input-tag" } & Omit<InputTagProps, "type">;
type Comp44SlotProps = Omit<Comp44Slot, "type">;
type Comp45Slot = { type: "input-text" } & Omit<InputTextProps, "type">;
type Comp45SlotProps = Omit<Comp45Slot, "type">;
type Comp46Slot = { type: "input-url" } & Omit<InputUrlProps, "type">;
type Comp46SlotProps = Omit<Comp46Slot, "type">;
type Comp47Slot = { type: "kbd" } & Omit<KbdProps, "type">;
type Comp47SlotProps = Omit<Comp47Slot, "type">;
type Comp48Slot = { type: "list" } & Omit<ListProps, "type">;
type Comp48SlotProps = Omit<Comp48Slot, "type">;
type Comp49Slot = { type: "list-item" } & Omit<ListItemProps, "type">;
type Comp49SlotProps = Omit<Comp49Slot, "type">;
type Comp50Slot = { type: "listbox" } & Omit<ListboxProps, "type">;
type Comp50SlotProps = Omit<Comp50Slot, "type">;
type Comp51Slot = { type: "listbox-item" } & Omit<ListboxItemProps, "type">;
type Comp51SlotProps = Omit<Comp51Slot, "type">;
type Comp52Slot = { type: "menu" } & Omit<MenuProps, "type">;
type Comp52SlotProps = Omit<Comp52Slot, "type">;
type Comp53Slot = { type: "modal" } & Omit<ModalProps, "type">;
type Comp53SlotProps = Omit<Comp53Slot, "type">;
type Comp54Slot = { type: "pagination" } & Omit<PaginationProps, "type">;
type Comp54SlotProps = Omit<Comp54Slot, "type">;
type Comp55Slot = { type: "popover" } & Omit<PopoverProps, "type">;
type Comp55SlotProps = Omit<Comp55Slot, "type">;
type Comp56Slot = { type: "progress" } & Omit<ProgressProps, "type">;
type Comp56SlotProps = Omit<Comp56Slot, "type">;
type Comp57Slot = { type: "radio" } & Omit<RadioProps, "type">;
type Comp57SlotProps = Omit<Comp57Slot, "type">;
type Comp58Slot = { type: "rating" } & Omit<RatingProps, "type">;
type Comp58SlotProps = Omit<Comp58Slot, "type">;
type Comp59Slot = { type: "scroll-area" } & Omit<ScrollAreaProps, "type">;
type Comp59SlotProps = Omit<Comp59Slot, "type">;
type Comp60Slot = { type: "segmented-control" } & Omit<SegmentedControlProps, "type">;
type Comp60SlotProps = Omit<Comp60Slot, "type">;
type Comp61Slot = { type: "select" } & Omit<SelectProps, "type">;
type Comp61SlotProps = Omit<Comp61Slot, "type">;
type Comp62Slot = { type: "sidebar" } & Omit<SideBarProps, "type">;
type Comp62SlotProps = Omit<Comp62Slot, "type">;
type Comp63Slot = { type: "slider" } & Omit<SliderProps, "type">;
type Comp63SlotProps = Omit<Comp63Slot, "type">;
type Comp64Slot = { type: "steps" } & Omit<StepsProps, "type">;
type Comp64SlotProps = Omit<Comp64Slot, "type">;
type Comp65Slot = { type: "switch" } & Omit<SwitchProps, "type">;
type Comp65SlotProps = Omit<Comp65Slot, "type">;
type Comp66Slot = { type: "tabs" } & Omit<TabsProps, "type">;
type Comp66SlotProps = Omit<Comp66Slot, "type">;
type Comp67Slot = { type: "tag" } & Omit<TagProps, "type">;
type Comp67SlotProps = Omit<Comp67Slot, "type">;
type Comp68Slot = { type: "tag-group" } & Omit<TagGroupProps, "type">;
type Comp68SlotProps = Omit<Comp68Slot, "type">;
type Comp69Slot = { type: "tag-link" } & Omit<TagLinkProps, "type">;
type Comp69SlotProps = Omit<Comp69Slot, "type">;
type Comp70Slot = { type: "tag-menu" } & Omit<TagMenuProps, "type">;
type Comp70SlotProps = Omit<Comp70Slot, "type">;
type Comp71Slot = { type: "tag-split" } & Omit<TagSplitProps, "type">;
type Comp71SlotProps = Omit<Comp71Slot, "type">;
type Comp72Slot = { type: "textarea" } & Omit<TextAreaProps, "type">;
type Comp72SlotProps = Omit<Comp72Slot, "type">;
type Comp73Slot = { type: "toast" } & Omit<ToastProps, "type">;
type Comp73SlotProps = Omit<Comp73Slot, "type">;
type Comp74Slot = { type: "tooltip" } & Omit<tooltipProps, "type">;
type Comp74SlotProps = Omit<Comp74Slot, "type">;
type Comp75Slot = { type: "transfer" } & Omit<TransferProps, "type">;
type Comp75SlotProps = Omit<Comp75Slot, "type">;
type Comp76Slot = { type: "tree" } & Omit<TreeProps, "type">;
type Comp76SlotProps = Omit<Comp76Slot, "type">;

declare module "@inventive-ui/framework/slots" {
  interface SlotMap {
    "accordion": Comp1Slot;
    "alert": Comp2Slot;
    "anchor": Comp3Slot;
    "avatar": Comp4Slot;
    "avatar-group": Comp5Slot;
    "badge": Comp6Slot;
    "badge-corner": Comp7Slot;
    "badge-counter": Comp8Slot;
    "badge-dot": Comp9Slot;
    "badge-label": Comp10Slot;
    "badge-ribbon": Comp11Slot;
    "badge-status-indicator": Comp12Slot;
    "breadcrumb": Comp13Slot;
    "button-menu": Comp14Slot;
    "button-split": Comp15Slot;
    "carousel": Comp16Slot;
    "cascader": Comp17Slot;
    "checkbox": Comp18Slot;
    "checkbox-card": Comp19Slot;
    "checkbox-group": Comp20Slot;
    "color-picker": Comp21Slot;
    "color-swatch": Comp22Slot;
    "datepicker": Comp23Slot;
    "divider": Comp24Slot;
    "drawer": Comp25Slot;
    "drawer-body": Comp26Slot;
    "drawer-float": Comp27Slot;
    "drawer-inline": Comp28Slot;
    "drawer-overlay": Comp29Slot;
    "dropdown": Comp30Slot;
    "empty-state": Comp31Slot;
    "field": Comp32Slot;
    "gridbox": Comp33Slot;
    "infotip": Comp34Slot;
    "inline-message": Comp35Slot;
    "input": Comp36Slot;
    "input-card": Comp37Slot;
    "input-email": Comp38Slot;
    "input-number": Comp39Slot;
    "input-otp": Comp40Slot;
    "input-password": Comp41Slot;
    "input-range": Comp42Slot;
    "input-search": Comp43Slot;
    "input-tag": Comp44Slot;
    "input-text": Comp45Slot;
    "input-url": Comp46Slot;
    "kbd": Comp47Slot;
    "list": Comp48Slot;
    "list-item": Comp49Slot;
    "listbox": Comp50Slot;
    "listbox-item": Comp51Slot;
    "menu": Comp52Slot;
    "modal": Comp53Slot;
    "pagination": Comp54Slot;
    "popover": Comp55Slot;
    "progress": Comp56Slot;
    "radio": Comp57Slot;
    "rating": Comp58Slot;
    "scroll-area": Comp59Slot;
    "segmented-control": Comp60Slot;
    "select": Comp61Slot;
    "sidebar": Comp62Slot;
    "slider": Comp63Slot;
    "steps": Comp64Slot;
    "switch": Comp65Slot;
    "tabs": Comp66Slot;
    "tag": Comp67Slot;
    "tag-group": Comp68Slot;
    "tag-link": Comp69Slot;
    "tag-menu": Comp70Slot;
    "tag-split": Comp71Slot;
    "textarea": Comp72Slot;
    "toast": Comp73Slot;
    "tooltip": Comp74Slot;
    "transfer": Comp75Slot;
    "tree": Comp76Slot;
  }
}

const Comp1Renderer = createEagerComponent<Comp1SlotProps>(
  () => import("@inventive-ui/components/Accordion"),
  (mod) => resolveComponentExport(mod, "Accordion") as React.ComponentType<Comp1SlotProps>,
);

registerSlot("accordion", (slot) => {
  const { type, ...props } = slot;
  return <Comp1Renderer {...props} />;
});

const Comp2Renderer = createEagerComponent<Comp2SlotProps>(
  () => import("@inventive-ui/components/Alert"),
  (mod) => resolveComponentExport(mod, "Alert") as React.ComponentType<Comp2SlotProps>,
);

registerSlot("alert", (slot) => {
  const { type, ...props } = slot;
  return <Comp2Renderer {...props} />;
});

const Comp3Renderer = createEagerComponent<Comp3SlotProps>(
  () => import("@inventive-ui/components/Anchor"),
  (mod) => resolveComponentExport(mod, "Anchor") as React.ComponentType<Comp3SlotProps>,
);

registerSlot("anchor", (slot) => {
  const { type, ...props } = slot;
  return <Comp3Renderer {...props} />;
});

const Comp4Renderer = createEagerComponent<Comp4SlotProps>(
  () => import("@inventive-ui/components/Avatar"),
  (mod) => resolveComponentExport(mod, "Avatar") as React.ComponentType<Comp4SlotProps>,
);

registerSlot("avatar", (slot) => {
  const { type, ...props } = slot;
  return <Comp4Renderer {...props} />;
});

const Comp5Renderer = createEagerComponent<Comp5SlotProps>(
  () => import("@inventive-ui/components/Avatar"),
  (mod) => resolveComponentExport(mod, "AvatarGroup") as React.ComponentType<Comp5SlotProps>,
);

registerSlot("avatar-group", (slot) => {
  const { type, ...props } = slot;
  return <Comp5Renderer {...props} />;
});

const Comp6Renderer = createEagerComponent<Comp6SlotProps>(
  () => import("@inventive-ui/components/Badge"),
  (mod) => resolveComponentExport(mod, "Badge") as React.ComponentType<Comp6SlotProps>,
);

registerSlot("badge", (slot) => {
  const { type, ...props } = slot;
  return <Comp6Renderer {...props} />;
});

const Comp7Renderer = createEagerComponent<Comp7SlotProps>(
  () => import("@inventive-ui/components/Badge"),
  (mod) => resolveComponentExport(mod, "Badge", "Corner") as React.ComponentType<Comp7SlotProps>,
);

registerSlot("badge-corner", (slot) => {
  const { type, ...props } = slot;
  return <Comp7Renderer {...props} />;
});

const Comp8Renderer = createEagerComponent<Comp8SlotProps>(
  () => import("@inventive-ui/components/Badge"),
  (mod) => resolveComponentExport(mod, "Badge", "Counter") as React.ComponentType<Comp8SlotProps>,
);

registerSlot("badge-counter", (slot) => {
  const { type, ...props } = slot;
  return <Comp8Renderer {...props} />;
});

const Comp9Renderer = createEagerComponent<Comp9SlotProps>(
  () => import("@inventive-ui/components/Badge"),
  (mod) => resolveComponentExport(mod, "Badge", "Dot") as React.ComponentType<Comp9SlotProps>,
);

registerSlot("badge-dot", (slot) => {
  const { type, ...props } = slot;
  return <Comp9Renderer {...props} />;
});

const Comp10Renderer = createEagerComponent<Comp10SlotProps>(
  () => import("@inventive-ui/components/Badge"),
  (mod) => resolveComponentExport(mod, "Badge", "Label") as React.ComponentType<Comp10SlotProps>,
);

registerSlot("badge-label", (slot) => {
  const { type, ...props } = slot;
  return <Comp10Renderer {...props} />;
});

const Comp11Renderer = createEagerComponent<Comp11SlotProps>(
  () => import("@inventive-ui/components/Badge"),
  (mod) => resolveComponentExport(mod, "Badge", "Ribbon") as React.ComponentType<Comp11SlotProps>,
);

registerSlot("badge-ribbon", (slot) => {
  const { type, ...props } = slot;
  return <Comp11Renderer {...props} />;
});

const Comp12Renderer = createEagerComponent<Comp12SlotProps>(
  () => import("@inventive-ui/components/Badge"),
  (mod) => resolveComponentExport(mod, "Badge", "StatusIndicator") as React.ComponentType<Comp12SlotProps>,
);

registerSlot("badge-status-indicator", (slot) => {
  const { type, ...props } = slot;
  return <Comp12Renderer {...props} />;
});

const Comp13Renderer = createEagerComponent<Comp13SlotProps>(
  () => import("@inventive-ui/components/BreadCrumbs"),
  (mod) => resolveComponentExport(mod, "Breadcrumb") as React.ComponentType<Comp13SlotProps>,
);

registerSlot("breadcrumb", (slot) => {
  const { type, ...props } = slot;
  return <Comp13Renderer {...props} />;
});

const Comp14Renderer = createEagerComponent<Comp14SlotProps>(
  () => import("@inventive-ui/components/Button"),
  (mod) => resolveComponentExport(mod, "ButtonMenu") as React.ComponentType<Comp14SlotProps>,
);

registerSlot("button-menu", (slot) => {
  const { type, ...props } = slot;
  return <Comp14Renderer {...props} />;
});

const Comp15Renderer = createEagerComponent<Comp15SlotProps>(
  () => import("@inventive-ui/components/Button"),
  (mod) => resolveComponentExport(mod, "ButtonSplit") as React.ComponentType<Comp15SlotProps>,
);

registerSlot("button-split", (slot) => {
  const { type, ...props } = slot;
  return <Comp15Renderer {...props} />;
});

const Comp16Renderer = createEagerComponent<Comp16SlotProps>(
  () => import("@inventive-ui/components/Carousel"),
  (mod) => resolveComponentExport(mod, "Carousel") as React.ComponentType<Comp16SlotProps>,
);

registerSlot("carousel", (slot) => {
  const { type, ...props } = slot;
  return <Comp16Renderer {...props} />;
});

const Comp17Renderer = createEagerComponent<Comp17SlotProps>(
  () => import("@inventive-ui/components/Cascader"),
  (mod) => resolveComponentExport(mod, "Cascader") as React.ComponentType<Comp17SlotProps>,
);

registerSlot("cascader", (slot) => {
  const { type, ...props } = slot;
  return <Comp17Renderer {...props} />;
});

const Comp18Renderer = createEagerComponent<Comp18SlotProps>(
  () => import("@inventive-ui/components/Checkbox"),
  (mod) => resolveComponentExport(mod, "Checkbox") as React.ComponentType<Comp18SlotProps>,
);

registerSlot("checkbox", (slot) => {
  const { type, ...props } = slot;
  return <Comp18Renderer {...props} />;
});

const Comp19Renderer = createEagerComponent<Comp19SlotProps>(
  () => import("@inventive-ui/components/Checkbox"),
  (mod) => resolveComponentExport(mod, "CheckboxCard") as React.ComponentType<Comp19SlotProps>,
);

registerSlot("checkbox-card", (slot) => {
  const { type, ...props } = slot;
  return <Comp19Renderer {...props} />;
});

const Comp20Renderer = createEagerComponent<Comp20SlotProps>(
  () => import("@inventive-ui/components/Checkbox"),
  (mod) => resolveComponentExport(mod, "CheckboxGroup") as React.ComponentType<Comp20SlotProps>,
);

registerSlot("checkbox-group", (slot) => {
  const { type, ...props } = slot;
  return <Comp20Renderer {...props} />;
});

const Comp21Renderer = createEagerComponent<Comp21SlotProps>(
  () => import("@inventive-ui/components/ColorPicker"),
  (mod) => resolveComponentExport(mod, "ColorPicker") as React.ComponentType<Comp21SlotProps>,
);

registerSlot("color-picker", (slot) => {
  const { type, ...props } = slot;
  return <Comp21Renderer {...props} />;
});

const Comp22Renderer = createEagerComponent<Comp22SlotProps>(
  () => import("@inventive-ui/components/ColorSwatch"),
  (mod) => resolveComponentExport(mod, "ColorSwatch") as React.ComponentType<Comp22SlotProps>,
);

registerSlot("color-swatch", (slot) => {
  const { type, ...props } = slot;
  return <Comp22Renderer {...props} />;
});

const Comp23Renderer = createEagerComponent<Comp23SlotProps>(
  () => import("@inventive-ui/components/Datepicker"),
  (mod) => resolveComponentExport(mod, "Datepicker") as React.ComponentType<Comp23SlotProps>,
);

registerSlot("datepicker", (slot) => {
  const { type, ...props } = slot;
  return <Comp23Renderer {...props} />;
});

const Comp24Renderer = createEagerComponent<Comp24SlotProps>(
  () => import("@inventive-ui/components/Divider"),
  (mod) => resolveComponentExport(mod, "Divider") as React.ComponentType<Comp24SlotProps>,
);

registerSlot("divider", (slot) => {
  const { type, ...props } = slot;
  return <Comp24Renderer {...props} />;
});

const Comp25Renderer = createEagerComponent<Comp25SlotProps>(
  () => import("@inventive-ui/components/Drawer"),
  (mod) => resolveComponentExport(mod, "Drawer") as React.ComponentType<Comp25SlotProps>,
);

registerSlot("drawer", (slot) => {
  const { type, ...props } = slot;
  return <Comp25Renderer {...props} />;
});

const Comp26Renderer = createEagerComponent<Comp26SlotProps>(
  () => import("@inventive-ui/components/Drawer"),
  (mod) => resolveComponentExport(mod, "DrawerBody") as React.ComponentType<Comp26SlotProps>,
);

registerSlot("drawer-body", (slot) => {
  const { type, ...props } = slot;
  return <Comp26Renderer {...props} />;
});

const Comp27Renderer = createEagerComponent<Comp27SlotProps>(
  () => import("@inventive-ui/components/Drawer"),
  (mod) => resolveComponentExport(mod, "DrawerFloat") as React.ComponentType<Comp27SlotProps>,
);

registerSlot("drawer-float", (slot) => {
  const { type, ...props } = slot;
  return <Comp27Renderer {...props} />;
});

const Comp28Renderer = createEagerComponent<Comp28SlotProps>(
  () => import("@inventive-ui/components/Drawer"),
  (mod) => resolveComponentExport(mod, "DrawerInline") as React.ComponentType<Comp28SlotProps>,
);

registerSlot("drawer-inline", (slot) => {
  const { type, ...props } = slot;
  return <Comp28Renderer {...props} />;
});

const Comp29Renderer = createEagerComponent<Comp29SlotProps>(
  () => import("@inventive-ui/components/Drawer"),
  (mod) => resolveComponentExport(mod, "DrawerOverlay") as React.ComponentType<Comp29SlotProps>,
);

registerSlot("drawer-overlay", (slot) => {
  const { type, ...props } = slot;
  return <Comp29Renderer {...props} />;
});

const Comp30Renderer = createEagerComponent<Comp30SlotProps>(
  () => import("@inventive-ui/components"),
  (mod) => resolveComponentExport(mod, "Dropdown") as React.ComponentType<Comp30SlotProps>,
);

registerSlot("dropdown", (slot) => {
  const { type, ...props } = slot;
  return <Comp30Renderer {...props} />;
});

const Comp31Renderer = createEagerComponent<Comp31SlotProps>(
  () => import("@inventive-ui/components/Emptystate"),
  (mod) => resolveComponentExport(mod, "Emptystate") as React.ComponentType<Comp31SlotProps>,
);

registerSlot("empty-state", (slot) => {
  const { type, ...props } = slot;
  return <Comp31Renderer {...props} />;
});

const Comp32Renderer = createEagerComponent<Comp32SlotProps>(
  () => import("@inventive-ui/components/Field"),
  (mod) => resolveComponentExport(mod, "Field") as React.ComponentType<Comp32SlotProps>,
);

registerSlot("field", (slot) => {
  const { type, ...props } = slot;
  return <Comp32Renderer {...props} />;
});

const Comp33Renderer = createEagerComponent<Comp33SlotProps>(
  () => import("@inventive-ui/components/Gridbox"),
  (mod) => resolveComponentExport(mod, "Gridbox") as React.ComponentType<Comp33SlotProps>,
);

registerSlot("gridbox", (slot) => {
  const { type, ...props } = slot;
  return <Comp33Renderer {...props} />;
});

const Comp34Renderer = createEagerComponent<Comp34SlotProps>(
  () => import("@inventive-ui/components/Infotip"),
  (mod) => resolveComponentExport(mod, "Infotip") as React.ComponentType<Comp34SlotProps>,
);

registerSlot("infotip", (slot) => {
  const { type, ...props } = slot;
  return <Comp34Renderer {...props} />;
});

const Comp35Renderer = createEagerComponent<Comp35SlotProps>(
  () => import("@inventive-ui/components/InlineMessage"),
  (mod) => resolveComponentExport(mod, "InlineMessage") as React.ComponentType<Comp35SlotProps>,
);

registerSlot("inline-message", (slot) => {
  const { type, ...props } = slot;
  return <Comp35Renderer {...props} />;
});

const Comp36Renderer = createEagerComponent<Comp36SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Text") as React.ComponentType<Comp36SlotProps>,
);

registerSlot("input", (slot) => {
  const { type, ...props } = slot;
  return <Comp36Renderer {...props} />;
});

const Comp37Renderer = createEagerComponent<Comp37SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Card") as React.ComponentType<Comp37SlotProps>,
);

registerSlot("input-card", (slot) => {
  const { type, ...props } = slot;
  return <Comp37Renderer {...props} />;
});

const Comp38Renderer = createEagerComponent<Comp38SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Email") as React.ComponentType<Comp38SlotProps>,
);

registerSlot("input-email", (slot) => {
  const { type, ...props } = slot;
  return <Comp38Renderer {...props} />;
});

const Comp39Renderer = createEagerComponent<Comp39SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Number") as React.ComponentType<Comp39SlotProps>,
);

registerSlot("input-number", (slot) => {
  const { type, ...props } = slot;
  return <Comp39Renderer {...props} />;
});

const Comp40Renderer = createEagerComponent<Comp40SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "OTP") as React.ComponentType<Comp40SlotProps>,
);

registerSlot("input-otp", (slot) => {
  const { type, ...props } = slot;
  return <Comp40Renderer {...props} />;
});

const Comp41Renderer = createEagerComponent<Comp41SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Password") as React.ComponentType<Comp41SlotProps>,
);

registerSlot("input-password", (slot) => {
  const { type, ...props } = slot;
  return <Comp41Renderer {...props} />;
});

const Comp42Renderer = createEagerComponent<Comp42SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Range") as React.ComponentType<Comp42SlotProps>,
);

registerSlot("input-range", (slot) => {
  const { type, ...props } = slot;
  return <Comp42Renderer {...props} />;
});

const Comp43Renderer = createEagerComponent<Comp43SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Search") as React.ComponentType<Comp43SlotProps>,
);

registerSlot("input-search", (slot) => {
  const { type, ...props } = slot;
  return <Comp43Renderer {...props} />;
});

const Comp44Renderer = createEagerComponent<Comp44SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Tag") as React.ComponentType<Comp44SlotProps>,
);

registerSlot("input-tag", (slot) => {
  const { type, ...props } = slot;
  return <Comp44Renderer {...props} />;
});

const Comp45Renderer = createEagerComponent<Comp45SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Text") as React.ComponentType<Comp45SlotProps>,
);

registerSlot("input-text", (slot) => {
  const { type, ...props } = slot;
  return <Comp45Renderer {...props} />;
});

const Comp46Renderer = createEagerComponent<Comp46SlotProps>(
  () => import("@inventive-ui/components/Input"),
  (mod) => resolveComponentExport(mod, "Input", "Url") as React.ComponentType<Comp46SlotProps>,
);

registerSlot("input-url", (slot) => {
  const { type, ...props } = slot;
  return <Comp46Renderer {...props} />;
});

const Comp47Renderer = createEagerComponent<Comp47SlotProps>(
  () => import("@inventive-ui/components/Kbd"),
  (mod) => resolveComponentExport(mod, "Kbd") as React.ComponentType<Comp47SlotProps>,
);

registerSlot("kbd", (slot) => {
  const { type, ...props } = slot;
  return <Comp47Renderer {...props} />;
});

const Comp48Renderer = createEagerComponent<Comp48SlotProps>(
  () => import("@inventive-ui/components/List"),
  (mod) => resolveComponentExport(mod, "List") as React.ComponentType<Comp48SlotProps>,
);

registerSlot("list", (slot) => {
  const { type, ...props } = slot;
  return <Comp48Renderer {...props} />;
});

const Comp49Renderer = createEagerComponent<Comp49SlotProps>(
  () => import("@inventive-ui/components/List"),
  (mod) => resolveComponentExport(mod, "ListItem") as React.ComponentType<Comp49SlotProps>,
);

registerSlot("list-item", (slot) => {
  const { type, ...props } = slot;
  return <Comp49Renderer {...props} />;
});

const Comp50Renderer = createEagerComponent<Comp50SlotProps>(
  () => import("@inventive-ui/components/Listbox"),
  (mod) => resolveComponentExport(mod, "Listbox") as React.ComponentType<Comp50SlotProps>,
);

registerSlot("listbox", (slot) => {
  const { type, ...props } = slot;
  return <Comp50Renderer {...props} />;
});

const Comp51Renderer = createEagerComponent<Comp51SlotProps>(
  () => import("@inventive-ui/components/ListboxItem"),
  (mod) => resolveComponentExport(mod, "ListboxItem") as React.ComponentType<Comp51SlotProps>,
);

registerSlot("listbox-item", (slot) => {
  const { type, ...props } = slot;
  return <Comp51Renderer {...props} />;
});

const Comp52Renderer = createEagerComponent<Comp52SlotProps>(
  () => import("@inventive-ui/components/Menu"),
  (mod) => resolveComponentExport(mod, "Menu") as React.ComponentType<Comp52SlotProps>,
);

registerSlot("menu", (slot) => {
  const { type, ...props } = slot;
  return <Comp52Renderer {...props} />;
});

const Comp53Renderer = createEagerComponent<Comp53SlotProps>(
  () => import("@inventive-ui/components/Modal"),
  (mod) => resolveComponentExport(mod, "Modal") as React.ComponentType<Comp53SlotProps>,
);

registerSlot("modal", (slot) => {
  const { type, ...props } = slot;
  return <Comp53Renderer {...props} />;
});

const Comp54Renderer = createEagerComponent<Comp54SlotProps>(
  () => import("@inventive-ui/components/Pagination"),
  (mod) => resolveComponentExport(mod, "Pagination") as React.ComponentType<Comp54SlotProps>,
);

registerSlot("pagination", (slot) => {
  const { type, ...props } = slot;
  return <Comp54Renderer {...props} />;
});

const Comp55Renderer = createEagerComponent<Comp55SlotProps>(
  () => import("@inventive-ui/components/Popover"),
  (mod) => resolveComponentExport(mod, "Popover") as React.ComponentType<Comp55SlotProps>,
);

registerSlot("popover", (slot) => {
  const { type, ...props } = slot;
  return <Comp55Renderer {...props} />;
});

const Comp56Renderer = createEagerComponent<Comp56SlotProps>(
  () => import("@inventive-ui/components/Progress"),
  (mod) => resolveComponentExport(mod, "Progress") as React.ComponentType<Comp56SlotProps>,
);

registerSlot("progress", (slot) => {
  const { type, ...props } = slot;
  return <Comp56Renderer {...props} />;
});

const Comp57Renderer = createEagerComponent<Comp57SlotProps>(
  () => import("@inventive-ui/components/Radio"),
  (mod) => resolveComponentExport(mod, "Radio") as React.ComponentType<Comp57SlotProps>,
);

registerSlot("radio", (slot) => {
  const { type, ...props } = slot;
  return <Comp57Renderer {...props} />;
});

const Comp58Renderer = createEagerComponent<Comp58SlotProps>(
  () => import("@inventive-ui/components/Rating"),
  (mod) => resolveComponentExport(mod, "Rating") as React.ComponentType<Comp58SlotProps>,
);

registerSlot("rating", (slot) => {
  const { type, ...props } = slot;
  return <Comp58Renderer {...props} />;
});

const Comp59Renderer = createEagerComponent<Comp59SlotProps>(
  () => import("@inventive-ui/components/ScrollArea"),
  (mod) => resolveComponentExport(mod, "ScrollArea") as React.ComponentType<Comp59SlotProps>,
);

registerSlot("scroll-area", (slot) => {
  const { type, ...props } = slot;
  return <Comp59Renderer {...props} />;
});

const Comp60Renderer = createEagerComponent<Comp60SlotProps>(
  () => import("@inventive-ui/components/SegmentedControl"),
  (mod) => resolveComponentExport(mod, "SegmentedControl") as React.ComponentType<Comp60SlotProps>,
);

registerSlot("segmented-control", (slot) => {
  const { type, ...props } = slot;
  return <Comp60Renderer {...props} />;
});

const Comp61Renderer = createEagerComponent<Comp61SlotProps>(
  () => import("@inventive-ui/components"),
  (mod) => resolveComponentExport(mod, "Select") as React.ComponentType<Comp61SlotProps>,
);

registerSlot("select", (slot) => {
  const { type, ...props } = slot;
  return <Comp61Renderer {...props} />;
});

const Comp62Renderer = createEagerComponent<Comp62SlotProps>(
  () => import("@inventive-ui/components/SideBar"),
  (mod) => resolveComponentExport(mod, "SideBar") as React.ComponentType<Comp62SlotProps>,
);

registerSlot("sidebar", (slot) => {
  const { type, ...props } = slot;
  return <Comp62Renderer {...props} />;
});

const Comp63Renderer = createEagerComponent<Comp63SlotProps>(
  () => import("@inventive-ui/components/Slider"),
  (mod) => resolveComponentExport(mod, "Slider") as React.ComponentType<Comp63SlotProps>,
);

registerSlot("slider", (slot) => {
  const { type, ...props } = slot;
  return <Comp63Renderer {...props} />;
});

const Comp64Renderer = createEagerComponent<Comp64SlotProps>(
  () => import("@inventive-ui/components/Steps"),
  (mod) => resolveComponentExport(mod, "Steps") as React.ComponentType<Comp64SlotProps>,
);

registerSlot("steps", (slot) => {
  const { type, ...props } = slot;
  return <Comp64Renderer {...props} />;
});

const Comp65Renderer = createEagerComponent<Comp65SlotProps>(
  () => import("@inventive-ui/components/Switch"),
  (mod) => resolveComponentExport(mod, "Switch") as React.ComponentType<Comp65SlotProps>,
);

registerSlot("switch", (slot) => {
  const { type, ...props } = slot;
  return <Comp65Renderer {...props} />;
});

const Comp66Renderer = createEagerComponent<Comp66SlotProps>(
  () => import("@inventive-ui/components/Tabs"),
  (mod) => resolveComponentExport(mod, "Tabs") as React.ComponentType<Comp66SlotProps>,
);

registerSlot("tabs", (slot) => {
  const { type, ...props } = slot;
  return <Comp66Renderer {...props} />;
});

const Comp67Renderer = createEagerComponent<Comp67SlotProps>(
  () => import("@inventive-ui/components/Tag"),
  (mod) => resolveComponentExport(mod, "Tag") as React.ComponentType<Comp67SlotProps>,
);

registerSlot("tag", (slot) => {
  const { type, ...props } = slot;
  return <Comp67Renderer {...props} />;
});

const Comp68Renderer = createEagerComponent<Comp68SlotProps>(
  () => import("@inventive-ui/components/Tag"),
  (mod) => resolveComponentExport(mod, "TagGroup") as React.ComponentType<Comp68SlotProps>,
);

registerSlot("tag-group", (slot) => {
  const { type, ...props } = slot;
  return <Comp68Renderer {...props} />;
});

const Comp69Renderer = createEagerComponent<Comp69SlotProps>(
  () => import("@inventive-ui/components/Tag"),
  (mod) => resolveComponentExport(mod, "TagLink") as React.ComponentType<Comp69SlotProps>,
);

registerSlot("tag-link", (slot) => {
  const { type, ...props } = slot;
  return <Comp69Renderer {...props} />;
});

const Comp70Renderer = createEagerComponent<Comp70SlotProps>(
  () => import("@inventive-ui/components/Tag"),
  (mod) => resolveComponentExport(mod, "TagMenu") as React.ComponentType<Comp70SlotProps>,
);

registerSlot("tag-menu", (slot) => {
  const { type, ...props } = slot;
  return <Comp70Renderer {...props} />;
});

const Comp71Renderer = createEagerComponent<Comp71SlotProps>(
  () => import("@inventive-ui/components/Tag"),
  (mod) => resolveComponentExport(mod, "TagSplit") as React.ComponentType<Comp71SlotProps>,
);

registerSlot("tag-split", (slot) => {
  const { type, ...props } = slot;
  return <Comp71Renderer {...props} />;
});

const Comp72Renderer = createEagerComponent<Comp72SlotProps>(
  () => import("@inventive-ui/components/Textarea"),
  (mod) => resolveComponentExport(mod, "TextArea") as React.ComponentType<Comp72SlotProps>,
);

registerSlot("textarea", (slot) => {
  const { type, ...props } = slot;
  return <Comp72Renderer {...props} />;
});

const Comp73Renderer = createEagerComponent<Comp73SlotProps>(
  () => import("@inventive-ui/components/Toast"),
  (mod) => resolveComponentExport(mod, "Toast") as React.ComponentType<Comp73SlotProps>,
);

registerSlot("toast", (slot) => {
  const { type, ...props } = slot;
  return <Comp73Renderer {...props} />;
});

const Comp74Renderer = createEagerComponent<Comp74SlotProps>(
  () => import("@inventive-ui/components/Tooltip"),
  (mod) => resolveComponentExport(mod, "Tooltip") as React.ComponentType<Comp74SlotProps>,
);

registerSlot("tooltip", (slot) => {
  const { type, ...props } = slot;
  return <Comp74Renderer {...props} />;
});

const Comp75Renderer = createEagerComponent<Comp75SlotProps>(
  () => import("@inventive-ui/components/Transfer"),
  (mod) => resolveComponentExport(mod, "Transfer") as React.ComponentType<Comp75SlotProps>,
);

registerSlot("transfer", (slot) => {
  const { type, ...props } = slot;
  return <Comp75Renderer {...props} />;
});

const Comp76Renderer = createEagerComponent<Comp76SlotProps>(
  () => import("@inventive-ui/components/Tree"),
  (mod) => resolveComponentExport(mod, "Tree") as React.ComponentType<Comp76SlotProps>,
);

registerSlot("tree", (slot) => {
  const { type, ...props } = slot;
  return <Comp76Renderer {...props} />;
});

