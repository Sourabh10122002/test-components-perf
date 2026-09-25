// Story helper types copied from origin/button:src/components/Button/types.ts and slot/types.ts — not exported by installed v0.0.35
import type React from "react";
import type { Slot } from "@inventive-ui/framework";

export type ButtonMenuState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export type BadgeSlot = Slot | React.ReactElement;


// Base slot interface
export interface BaseSlot {
  type: string;
}

// Shared props for all slots
export interface CommonSlotProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
}

// Logo slot (Brand from @inventive-ui/logos)
export interface LogoSlot extends BaseSlot {
  type: "logo";
  name: string;
  width?: number;
  height?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
}

// Color Logo slot (Logo from @inventive-ui/color-logos)
export interface ColorLogoSlot extends BaseSlot, CommonSlotProps {
  type: "color-logo";
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

// Emoji slot (Emoji from @inventive-ui/emoji)
export interface EmojiSlot extends BaseSlot {
  type: "emoji";
  name: string;
  skinColor?: "light" | "medium-light" | "medium" | "medium-dark" | "dark";
  emojiFamily?: "noto" | "apple" | "google" | "twitter" | "facebook";
  size?: "small" | "medium" | "large" | "xlarge";
  className?: string;
}
