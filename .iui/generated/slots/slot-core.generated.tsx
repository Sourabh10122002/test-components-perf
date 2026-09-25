// Managed by iui. Do not edit manually.
import React from "react";
import { registerSlot, createEagerComponent, resolveComponentExport } from "@inventive-ui/framework/slots";

import type { ButtonProps } from "@inventive-ui/components/Button";
import type { LabelFloatProps } from "@inventive-ui/components/Label";
import type { LabelProps } from "@inventive-ui/components/Label";
import type { LinkProps } from "@inventive-ui/components/Link";
import type { TextProps } from "@inventive-ui/components/Text";

type Comp1Slot = { type: "button" } & Omit<ButtonProps, "type">;
type Comp1SlotProps = Omit<Comp1Slot, "type">;
type Comp2Slot = { type: "label" } & Omit<LabelProps, "type">;
type Comp2SlotProps = Omit<Comp2Slot, "type">;
type Comp3Slot = { type: "label-float" } & Omit<LabelFloatProps, "type">;
type Comp3SlotProps = Omit<Comp3Slot, "type">;
type Comp4Slot = { type: "link" } & Omit<LinkProps, "type">;
type Comp4SlotProps = Omit<Comp4Slot, "type">;
type Comp5Slot = { type: "text" } & Omit<TextProps, "type">;
type Comp5SlotProps = Omit<Comp5Slot, "type">;

declare module "@inventive-ui/framework/slots" {
  interface SlotMap {
    "button": Comp1Slot;
    "label": Comp2Slot;
    "label-float": Comp3Slot;
    "link": Comp4Slot;
    "text": Comp5Slot;
  }
}

const Comp1Renderer = createEagerComponent<Comp1SlotProps>(
  () => import("@inventive-ui/components/Button"),
  (mod) => resolveComponentExport(mod, "Button") as React.ComponentType<Comp1SlotProps>,
  { prefetch: true },
);

registerSlot("button", (slot) => {
  const { type, ...props } = slot;
  return <Comp1Renderer {...props} />;
});

const Comp2Renderer = createEagerComponent<Comp2SlotProps>(
  () => import("@inventive-ui/components/Label"),
  (mod) => resolveComponentExport(mod, "Label") as React.ComponentType<Comp2SlotProps>,
  { prefetch: true },
);

registerSlot("label", (slot) => {
  const { type, ...props } = slot;
  return <Comp2Renderer {...props} />;
});

const Comp3Renderer = createEagerComponent<Comp3SlotProps>(
  () => import("@inventive-ui/components/Label"),
  (mod) => resolveComponentExport(mod, "Label", "Float") as React.ComponentType<Comp3SlotProps>,
  { prefetch: true },
);

registerSlot("label-float", (slot) => {
  const { type, ...props } = slot;
  return <Comp3Renderer {...props} />;
});

const Comp4Renderer = createEagerComponent<Comp4SlotProps>(
  () => import("@inventive-ui/components/Link"),
  (mod) => resolveComponentExport(mod, "Link") as React.ComponentType<Comp4SlotProps>,
  { prefetch: true },
);

registerSlot("link", (slot) => {
  const { type, ...props } = slot;
  return <Comp4Renderer {...props} />;
});

const Comp5Renderer = createEagerComponent<Comp5SlotProps>(
  () => import("@inventive-ui/components/Text"),
  (mod) => resolveComponentExport(mod, "Text") as React.ComponentType<Comp5SlotProps>,
  { prefetch: true },
);

registerSlot("text", (slot) => {
  const { type, ...props } = slot;
  return <Comp5Renderer {...props} />;
});

