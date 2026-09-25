// Copied from origin/input:src/components/Input/slot/slot-controls.ts (Storybook slot-control story helpers; not exported by the package).
// Only change: the @storybook/react ArgTypes type import is replaced with a local alias.
type ArgTypes = Record<string, any>;

export interface SlotControlConfig {
  category: string;
  enabledTypes?: (
    | "icon"
    | "flag"
    | "loader"
    | "rafiki"
    | "file-type"
    | "avatar"
    | "badge-dot"
    | "badge-status-indicator"
    | "badge-counter"
    | "label"
    | "badge-label"
    | "badge-ribbon"
    | "badge-corner"
    | "logo"
    | "color-logo"
    | "emoji"
    | "radio-button"
    | "checkbox"
    | "button"
    | "progress"
    | "indeterminate-progress"
    | "circular-progress"
    | "inline-message"
    | "link"
    | "color-swatch"
    | "kbd"
    | "text"
    | "dropdown"
  )[];
  defaultType?:
    | "none"
    | "icon"
    | "flag"
    | "loader"
    | "rafiki"
    | "file-type"
    | "avatar"
    | "badge-dot"
    | "badge-status-indicator"
    | "badge-counter"
    | "label"
    | "badge-label"
    | "badge-ribbon"
    | "badge-corner"
    | "logo"
    | "color-logo"
    | "emoji"
    | "radio-button"
    | "checkbox"
    | "button"
    | "progress"
    | "indeterminate-progress"
    | "circular-progress"
    | "inline-message"
    | "link"
    | "kbd"
    | "text"
    | "dropdown";

  defaultIcon?: {
    size?: string;
    library?: "material-icons" | "material-symbols" | "lucide" | "phosphor";
    name?: string;
    style?: string;
    filled?: boolean;
    strokeWidth?: number;
    weight?: number;
    grade?: number;
    useVariableFont?: boolean;
    opticalSize?: number;
  };
  defaultFlag?: {
    code?: string;
    shape?: "rectangle" | "square" | "circle";
    size?: string;
  };
  defaultLoader?: {
    name?: string;
    size?: string;
    color?: string;
    strokeWidth?: number | string;
  };
  defaultRafiki?: {
    name?: string;
    width?: number;
    height?: number;
  };
  defaultFileType?: {
    extension?: string;
    size?: string;
  };
  defaultAvatar?: {
    name?: string;
    src?: string;
    size?: "xs" | "sm" | "base" | "lg";
    color?: string;
    shape?: "circle" | "square";
    variant?: "filled" | "filled+outlined" | "outlined";
    appearance?: "strong" | "subtle" | "onColor";
  };
  defaultBadgeDot?: {
    variant?: "solid" | "solid-outline" | "outline";
    appearance?: "strong" | "soft" | "dualTone" | "onColor";
    color?: string;
    size?: string;
    RingColor?: string;
    adaptive?: boolean;
    className?: string;
  };
  defaultBadgeStatusIndicator?: {
    appearance?: "strong" | "soft" | "dualTone" | "onColor";
    color?: string;
    size?: string;
    stroke?: boolean;
    className?: string;
  };
  defaultBadgeCounter?: {
    variant?: "solid" | "solid-outline" | "outline" | "transparent";
    appearance?: "strong" | "soft" | "dualTone" | "onColor";
    color?: string;
    counter?: number;
    max?: number;
    size?: string;
    className?: string;
  };
  defaultLabel?: {
    // Base badge props
    variant?: "solid" | "solid-outline" | "outline" | "transparent";
    appearance?: "strong" | "soft" | "dualTone" | "onColor";
    color?: string;
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    adaptive?: boolean;
    className?: string;
    hasRing?: boolean;
    ringColor?: string;
    position?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left";

    // Label-specific props
    capitalize?: boolean;
    text?: string;
    align?: "left" | "center" | "right";
    required?: boolean;
    optional?: boolean;
    description?: string;
    disabled?: boolean;
    invalid?: boolean;
  };
  defaultBadgeLabel?: {
    // Base badge props
    variant?: "solid" | "solid-outline" | "outline" | "ghost";
    appearance?: "strong" | "soft" | "dualTone" | "onColor";
    color?: string;
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    adaptive?: boolean;
    className?: string;
    hasRing?: boolean;
    ringColor?: string;
    position?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left";

    // Label-specific props
    capitalize?: boolean;
    text?: string;
    disabled?: boolean;
  };
  defaultLogo?: {
    name?: string;

    size?: string;
  };
  defaultColorLogo?: {
    name?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  };
  defaultEmoji?: {
    name?: string;
    size?: "small" | "medium" | "large" | "xlarge";
  };
  defaultRadioButton?: {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    size?: "xs" | "sm" | "base" | "lg";
  };
  defaultCheckbox?: {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    size?: "xs" | "sm" | "base" | "lg";
  };
  defaultButton?: {
    label?: string;
    variant?: "solid" | "outline" | "solid-outline" | "ghost";
    appearance?: "soft" | "strong" | "dualTone" | "oncolor";
    interactionVariant?:
      | "none"
      | "solid"
      | "outline"
      | "ghost"
      | "solid-outline";
    color?: string;
    size?: "xs" | "sm" | "base" | "lg";
    disabled?: boolean;
    loading?: boolean;
    adaptive?: boolean;
    className?: string;
    prefix?: any;
    suffix?: any;
  };

  defaultProgress?: {
    value?: number;
    max?: number;
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    variant?: "filled" | "outlined" | "filled+outlined" | "ghost";
    appearance?: "soft" | "strong";
    type?: "determinate" | "indeterminate";
    orientation?: "horizontal" | "vertical";
    disabled?: boolean;
    adaptive?: boolean;
    valuePosition?: "none" | "above" | "inline" | "below";
    valueAlignment?: "start" | "middle" | "end";
    showValue?: boolean;
    label?: string;
    labelPosition?: "none" | "above" | "inline";
    helperText?: string;
    helperTextPosition?: "none" | "below-start" | "below-end" | "inline";
    animated?: boolean;
    animationDuration?: number;
  };

  defaultIndeterminateProgress?: {
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    variant?: "filled" | "outlined" | "filled+outlined" | "ghost";
    appearance?: "soft" | "strong";
    orientation?: "horizontal" | "vertical";
    disabled?: boolean;
    adaptive?: boolean;
    label?: string;
    labelPosition?: "none" | "above" | "inline";
    helperText?: string;
    helperTextPosition?: "none" | "below-start" | "below-end" | "inline";
    animationDuration?: number;
  };

  defaultCircularProgress?: {
    value?: number;
    max?: number;
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    variant?: "filled" | "outlined" | "filled+outlined" | "ghost";
    appearance?: "soft" | "strong";
    disabled?: boolean;
    adaptive?: boolean;
    valueText?: string;
    showValue?: boolean;
    label?: string;
    labelPosition?: "none" | "above" | "inline";
    helperText?: string;
    helperTextPosition?: "none" | "below-start" | "below-end" | "inline";
    thickness?: number;
    indeterminate?: boolean;
    animationDuration?: number;
  };
  defaultInlineMessage?: {
    description?: string;
    state?: "neutral" | "error" | "warning" | "success" | "info";
    size?: "xs" | "sm" | "base" | "lg";
    iconPosition?: "none" | "left" | "right";
    spaceBetween?: "xs" | "sm" | "base" | "lg";
    font?: "inter" | "arial" | "mono";
  };

  defaultBadgeRibbon?: {
    variant?: "filled" | "filledOutlined" | "outlined" | "transparent";
    appearance?: "strong" | "subtle" | "onColor";
    color?: string;
    size?: "xs" | "sm" | "base" | "lg";
    capitalize?: boolean;
    label?: string;
    alignment?: "left" | "right";
    tail?: boolean;
    rotate?:
      | "0deg"
      | "45deg"
      | "90deg"
      | "135deg"
      | "180deg"
      | "-45deg"
      | "-90deg"
      | "-135deg";
    pointer?: "inward" | "outward" | "long" | "none";
    hasRing?: boolean;
    ringWidth?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    ringColor?: string;
    position?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left";
  };

  defaultBadgeCorner?: {
    variant?: "filled" | "filledOutlined" | "outlined" | "transparent";
    appearance?: "strong" | "subtle" | "onColor";
    color?: string;
    size?: "xs" | "sm" | "base" | "lg";
    capitalize?: boolean;
    label?: string;
    subtitle?: string;
    rotate?:
      | "0deg"
      | "45deg"
      | "90deg"
      | "135deg"
      | "180deg"
      | "-45deg"
      | "-90deg"
      | "-135deg";
    hasRing?: boolean;
    ringWidth?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    ringColor?: string;
    position?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left";
  };
  defaultLink?: {
    href?: string;
    text?: string;
    variant?:
      | "none"
      | "underline"
      | "filled"
      | "filled+underline"
      | "outlined"
      | "filled+outlined";
    appearance?: "strong" | "dualtone" | "subtle" | "onColor";
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    color?: string;
    external?: boolean;
    disabled?: boolean;
    visited?: boolean;
    iconPosition?: "start" | "end";
  };
  defaultColorSwatch?: {
    color?: string;
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    shape?: "1:1" | "1:2" | "2:1";
    variant?: "solid" | "solid-outline" | "outline";
    appearance?: "strong" | "soft" | "dualTone" | "onColor" | "classic";
    label?: string;
    selected?: boolean;
    disabled?: boolean;
    adaptive?: boolean;
    className?: string;
  };
  defaultKeyboardKey?: {
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    variant?: "solid" | "solid-outline" | "outline" | "ghost";
    appearance?: "strong" | "soft";
    shadowDirection?: "none" | "top" | "bottom";
    label: string; // mapping for children
    keys?: string;
    ctag?: string;
    ariaLabel?: string;
    className?: string;
  };
  defaultText?: {
    children?: string;
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    weight?: "regular" | "medium" | "semibold" | "bold";
    align?: "start" | "center" | "end" | "justify";
    wrap?: boolean;
    truncate?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethough?: boolean;
    block?: boolean;
    adaptive?: boolean;
    className?: string;
    color?: string;
  };
  defaultDropdown?: {
    placeholder?: string;
    controlStatus?: object;
    className?: string;
    color?: string;
    as?: string;
    cTag?: string;
    listbox?: object;
    fullWidth?: boolean;
    appearance?: "soft" | "dualTone";
    focused?: boolean;
    hovered?: boolean;
    selected?: boolean;
    focusStyle?: object;
    invalid?: boolean;
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    spacing?: "compact" | "standard" | "spacious";
    style?: object;
    variant?:
      | "solid"
      | "outline"
      | "underline"
      | "solid-outline"
      | "solid-underline"
      | "ghost";
    loading?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    allowClear?: boolean;
    readOnly?: boolean;
    required?: boolean;
    validationRules?: object;
    floatingLabel?: object;
    showValidationMessage?: boolean;
    value?: string;
    searchable?: boolean;
  };
}

// Generated slot control types
export type SlotControlArgs<TPrefix extends string> = {
  [K in `${TPrefix}Type`]?:
    | "none"
    | "icon"
    | "flag"
    | "loader"
    | "rafiki"
    | "file-type"
    | "avatar"
    | "badge-dot"
    | "badge-status-indicator"
    | "badge-counter"
    | "label"
    | "badge-label"
    | "badge-ribbon"
    | "badge-corner"
    | "logo"
    | "color-logo"
    | "emoji"
    | "radio-button"
    | "checkbox"
    | "button"
    | "progress"
    | "indeterminate-progress"
    | "circular-progress"
    | "inline-message"
    | "link"
    | "kbd"
    | "text"
    | "dropdown";
} & {
  [K in `${TPrefix}Size`]?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"; // <--- ADDED this line
} & {
  [K in `${TPrefix}Name`]?: string;
} & {
  [K in `${TPrefix}Filled`]?: boolean;
} & {
  [K in `${TPrefix}FlagCode`]?: string;
} & {
  [K in `${TPrefix}FlagShape`]?: "rectangle" | "square" | "circle";
} & {
  [K in `${TPrefix}FlagSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}LoaderName`]?: string;
} & {
  [K in `${TPrefix}LoaderSize`]?: string;
} & {
  [K in `${TPrefix}LoaderColor`]?: string;
} & {
  [K in `${TPrefix}LoaderStrokeWidth`]?: number | string;
} & {
  [K in `${TPrefix}RafikiName`]?: string;
} & {
  [K in `${TPrefix}RafikiWidth`]?: number;
} & {
  [K in `${TPrefix}RafikiHeight`]?: number;
} & {
  [K in `${TPrefix}FileTypeExtension`]?: string;
} & {
  [K in `${TPrefix}FileTypeSize`]?: string;
} & {
  [K in `${TPrefix}AvatarName`]?: string;
} & {
  [K in `${TPrefix}AvatarSrc`]?: string;
} & {
  [K in `${TPrefix}AvatarSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}AvatarColor`]?: string;
} & {
  [K in `${TPrefix}AvatarShape`]?: "circle" | "square";
} & {
  [K in `${TPrefix}AvatarVariant`]?: "filled" | "filled+outlined" | "outlined";
} & {
  [K in `${TPrefix}AvatarAppearance`]?: "strong" | "subtle" | "onColor";
} & {
  [K in `${TPrefix}BadgeDotVariant`]?: "solid" | "solid-outline" | "outline";
} & {
  [K in `${TPrefix}BadgeDotAppearance`]?:
    | "strong"
    | "soft"
    | "dualTone"
    | "onColor";
} & {
  [K in `${TPrefix}BadgeDotColor`]?: string;
} & {
  [K in `${TPrefix}BadgeDotSize`]?: string;
} & {
  [K in `${TPrefix}BadgeDotRingColor`]?: string;
} & {
  [K in `${TPrefix}BadgeDotAdaptive`]?: boolean;
} & {
  [K in `${TPrefix}BadgeDotClassName`]?: string;
} & {
  [K in `${TPrefix}BadgeStatusIndicatorAppearance`]?:
    | "strong"
    | "soft"
    | "dualTone"
    | "onColor";
} & {
  [K in `${TPrefix}BadgeStatusIndicatorColor`]?: string;
} & {
  [K in `${TPrefix}BadgeStatusIndicatorSize`]?: string;
} & {
  [K in `${TPrefix}BadgeStatusIndicatorStroke`]?: boolean;
} & {
  [K in `${TPrefix}BadgeStatusIndicatorClassName`]?: string;
} & {
  [K in `${TPrefix}BadgeCounterVariant`]?:
    | "solid"
    | "solid-outline"
    | "outline"
    | "transparent";
} & {
  [K in `${TPrefix}BadgeCounterAppearance`]?:
    | "strong"
    | "soft"
    | "dualTone"
    | "onColor";
} & {
  [K in `${TPrefix}BadgeCounterColor`]?: string;
} & {
  [K in `${TPrefix}BadgeCounterSize`]?: string;
} & {
  [K in `${TPrefix}BadgeCounterValue`]?: number;
} & {
  [K in `${TPrefix}BadgeCounterMax`]?: number;
} & {
  [K in `${TPrefix}BadgeCounterClassName`]?: string;
} & {
  [K in `${TPrefix}BadgeRibbonVariant`]?:
    | "filled"
    | "filledOutlined"
    | "outlined"
    | "transparent";
} & {
  [K in `${TPrefix}BadgeRibbonAppearance`]?: "strong" | "subtle" | "onColor";
} & {
  [K in `${TPrefix}BadgeRibbonColor`]?: string;
} & {
  [K in `${TPrefix}BadgeRibbonSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}BadgeRibbonCapitalize`]?: boolean;
} & {
  [K in `${TPrefix}BadgeRibbonLabel`]?: string;
} & {
  [K in `${TPrefix}BadgeRibbonAlignment`]?: "left" | "right";
} & {
  [K in `${TPrefix}BadgeRibbonTail`]?: boolean;
} & {
  [K in `${TPrefix}BadgeRibbonRotate`]?:
    | "0deg"
    | "45deg"
    | "90deg"
    | "135deg"
    | "180deg"
    | "-45deg"
    | "-90deg"
    | "-135deg";
} & {
  [K in `${TPrefix}BadgeRibbonPointer`]?:
    | "inward"
    | "outward"
    | "long"
    | "none";
} & {
  [K in `${TPrefix}BadgeRibbonHasRing`]?: boolean;
} & {
  [K in `${TPrefix}BadgeRibbonRingWidth`]?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8";
} & {
  [K in `${TPrefix}BadgeRibbonRingColor`]?: string;
} & {
  [K in `${TPrefix}BadgeRibbonPosition`]?:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
} & {
  [K in `${TPrefix}BadgeRibbonClassName`]?: string;
} & {
  [K in `${TPrefix}BadgeCornerVariant`]?:
    | "filled"
    | "filledOutlined"
    | "outlined"
    | "transparent";
} & {
  [K in `${TPrefix}BadgeCornerAppearance`]?: "strong" | "subtle" | "onColor";
} & {
  [K in `${TPrefix}BadgeCornerColor`]?: string;
} & {
  [K in `${TPrefix}BadgeCornerSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}BadgeCornerCapitalize`]?: boolean;
} & {
  [K in `${TPrefix}BadgeCornerLabel`]?: string;
} & {
  [K in `${TPrefix}BadgeCornerSubtitle`]?: string;
} & {
  [K in `${TPrefix}BadgeCornerRotate`]?:
    | "0deg"
    | "45deg"
    | "90deg"
    | "135deg"
    | "180deg"
    | "-45deg"
    | "-90deg"
    | "-135deg";
} & {
  [K in `${TPrefix}BadgeCornerHasRing`]?: boolean;
} & {
  [K in `${TPrefix}BadgeCornerRingWidth`]?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8";
} & {
  [K in `${TPrefix}BadgeCornerRingColor`]?: string;
} & {
  [K in `${TPrefix}BadgeCornerPosition`]?:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
} & {
  [K in `${TPrefix}BadgeCornerClassName`]?: string;
} & {
  [K in `${TPrefix}LabelVariant`]?:
    | "filled"
    | "filledOutlined"
    | "outlined"
    | "transparent";
} & {
  [K in `${TPrefix}LabelAppearance`]?: "strong" | "subtle" | "onColor";
} & {
  [K in `${TPrefix}LabelColor`]?: string;
} & {
  [K in `${TPrefix}LabelSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}LabelAdaptive`]?: boolean;
} & {
  [K in `${TPrefix}LabelClassName`]?: string;
} & {
  [K in `${TPrefix}LabelHasRing`]?: boolean;
} & {
  [K in `${TPrefix}LabelRingColor`]?: string;
} & {
  [K in `${TPrefix}LabelPosition`]?:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
} & {
  [K in `${TPrefix}LabelCapitalize`]?: boolean;
} & {
  [K in `${TPrefix}LabelText`]?: string;
} & {
  [K in `${TPrefix}LabelAlign`]?: "left" | "center" | "right";
} & {
  [K in `${TPrefix}LabelRequired`]?: boolean;
} & {
  [K in `${TPrefix}LabelOptional`]?: boolean;
} & {
  [K in `${TPrefix}LabelDescription`]?: string;
} & {
  [K in `${TPrefix}LabelDisabled`]?: boolean;
} & {
  [K in `${TPrefix}LabelInvalid`]?: boolean;
} & {
  [K in `${TPrefix}BadgeLabelVariant`]?:
    | "solid"
    | "solid-outline"
    | "outline"
    | "transparent";
} & {
  [K in `${TPrefix}BadgeLabelAppearance`]?: "strong" | "subtle" | "onColor";
} & {
  [K in `${TPrefix}BadgeLabelColor`]?: string;
} & {
  [K in `${TPrefix}BadgeLabelSize`]?: "xs" | "sm" | "base" | "lg" | "xl";
} & {
  [K in `${TPrefix}BadgeLabelAdaptive`]?: boolean;
} & {
  [K in `${TPrefix}BadgeLabelClassName`]?: string;
} & {
  [K in `${TPrefix}BadgeLabelHasRing`]?: boolean;
} & {
  [K in `${TPrefix}BadgeLabelRingColor`]?: string;
} & {
  [K in `${TPrefix}BadgeLabelPosition`]?:
    | "none"
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
} & {
  [K in `${TPrefix}BadgeLabelCapitalize`]?: boolean;
} & {
  [K in `${TPrefix}BadgeLabelText`]?: string;
} & {
  [K in `${TPrefix}BadgeLabelDisabled`]?: boolean;
} & {
  [K in `${TPrefix}LogoName`]?: string;
} & {
  [K in `${TPrefix}LogoSize`]?: string;
} & {
  [K in `${TPrefix}ColorLogoName`]?: string;
} & {
  [K in `${TPrefix}ColorLogoSize`]?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl";
} & {} & {
  [K in `${TPrefix}EmojiName`]?: string;
} & {
  [K in `${TPrefix}EmojiSize`]?: "small" | "medium" | "large" | "xlarge";
} & {
  [K in `${TPrefix}RadioLabel`]?: string;
} & {
  [K in `${TPrefix}RadioChecked`]?: boolean;
} & {
  [K in `${TPrefix}RadioDisabled`]?: boolean;
} & {
  [K in `${TPrefix}RadioSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}CheckboxLabel`]?: string;
} & {
  [K in `${TPrefix}CheckboxChecked`]?: boolean;
} & {
  [K in `${TPrefix}CheckboxDisabled`]?: boolean;
} & {
  [K in `${TPrefix}CheckboxIndeterminate`]?: boolean;
} & {
  [K in `${TPrefix}CheckboxSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}ButtonLabel`]?: string;
} & {
  [K in `${TPrefix}ButtonVariant`]?:
    | "solid"
    | "outline"
    | "solid-outline"
    | "ghost";
} & {
  [K in `${TPrefix}ButtonAppearance`]?:
    | "soft"
    | "strong"
    | "dualTone"
    | "oncolor";
} & {
  [K in `${TPrefix}ButtinteractionVariantVariant`]?:
    | "none"
    | "solid"
    | "outline"
    | "ghost"
    | "solid-outline";
} & {
  [K in `${TPrefix}ButtonColor`]?: string;
} & {
  [K in `${TPrefix}ButtonSize`]?: "xs" | "sm" | "base" | "lg";
} & {
  [K in `${TPrefix}ButtonDisabled`]?: boolean;
} & {
  [K in `${TPrefix}ButtonLoading`]?: boolean;
} & {
  [K in `${TPrefix}ButtonFullWidth`]?: boolean;
} & {
  [K in `${TPrefix}ButtonAdaptive`]?: boolean;
} & {
  [K in `${TPrefix}ButtonClassName`]?: string;
} & {
  [K in `${TPrefix}ButtonPrefix`]?: any;
} & {
  [K in `${TPrefix}ButtonSuffix`]?: any;
} & {
  [K in `${TPrefix}LinkHref`]?: string;
} & {
  [K in `${TPrefix}LinkText`]?: string;
} & {
  [K in `${TPrefix}LinkVariant`]?:
    | "none"
    | "underline"
    | "filled"
    | "filled+underline"
    | "outlined"
    | "filled+outlined";
} & {
  [K in `${TPrefix}LinkAppearance`]?:
    | "strong"
    | "dualtone"
    | "subtle"
    | "onColor";
} & {
  [K in `${TPrefix}LinkSize`]?: "xs" | "sm" | "base" | "lg" | "xl";
} & {
  [K in `${TPrefix}LinkColor`]?: string;
} & {
  [K in `${TPrefix}LinkExternal`]?: boolean;
} & {
  [K in `${TPrefix}LinkDisabled`]?: boolean;
} & {
  [K in `${TPrefix}LinkVisited`]?: boolean;
} & {
  [K in `${TPrefix}ColorSwatchColor`]?: string;
} & {
  [K in `${TPrefix}ColorSwatchSize`]?: "xs" | "sm" | "base" | "lg" | "xl";
} & {
  [K in `${TPrefix}ColorSwatchShape`]?: "1:1" | "1:2" | "2:1";
} & {
  [K in `${TPrefix}ColorSwatchVariant`]?: "solid" | "solid-outline" | "outline";
} & {
  [K in `${TPrefix}ColorSwatchAppearance`]?:
    | "strong"
    | "soft"
    | "dualTone"
    | "onColor"
    | "classic";
} & {
  [K in `${TPrefix}ColorSwatchLabel`]?: string;
} & {
  [K in `${TPrefix}ColorSwatchSelected`]?: boolean;
} & {
  [K in `${TPrefix}ColorSwatchDisabled`]?: boolean;
} & {
  [K in `${TPrefix}ColorSwatchAdaptive`]?: boolean;
} & {
  [K in `${TPrefix}ColorSwatchClassName`]?: string;
} & {
  [K in `${TPrefix}KeyboardKeySize`]?: "xs" | "sm" | "base" | "lg" | "xl";
} & {
  [K in `${TPrefix}KeyboardKeyVariant`]?:
    | "solid"
    | "solid-outline"
    | "outline"
    | "ghost";
} & {
  [K in `${TPrefix}KeyboardKeyAppearance`]?: "strong" | "soft";
} & {
  [K in `${TPrefix}KeyboardKeyShadowType`]?: "none" | "top" | "bottom";
} & {
  [K in `${TPrefix}KeyboardKeyFullWidth`]?: boolean;
} & {
  [K in `${TPrefix}KeyboardKeyLabel`]?: string;
} & {
  [K in `${TPrefix}KeyboardKeyAriaLabel`]?: string;
} & {
  [K in `${TPrefix}KeyboardKeyClassName`]?: string;
} & {
  [K in `${TPrefix}TextChildren`]?: string;
} & {
  [K in `${TPrefix}TextSize`]?: "xs" | "sm" | "base" | "lg" | "xl";
} & {
  [K in `${TPrefix}TextWeight`]?: "regular" | "medium" | "semibold" | "bold";
} & {
  [K in `${TPrefix}TextAlign`]?: "start" | "center" | "end" | "justify";
} & {
  [K in `${TPrefix}TextWrap`]?: boolean;
} & {
  [K in `${TPrefix}TextTruncate`]?: boolean;
} & {
  [K in `${TPrefix}TextItalic`]?: boolean;
} & {
  [K in `${TPrefix}TextUnderline`]?: boolean;
} & {
  [K in `${TPrefix}TextStrikethough`]?: boolean;
} & {
  [K in `${TPrefix}TextBlock`]?: boolean;
} & {
  [K in `${TPrefix}TextAdaptive`]?: boolean;
} & {
  [K in `${TPrefix}TextClassName`]?: string;
} & {
  [K in `${TPrefix}TextColor`]?: string;
} & {
  [K in `${TPrefix}DropdownPlaceholder`]?: string;
} & {
  [K in `${TPrefix}DropdownControlStatus`]?: object;
} & {
  [K in `${TPrefix}DropdownClassName`]?: string;
} & {
  [K in `${TPrefix}DropdownColor`]?: string;
} & {
  [K in `${TPrefix}DropdownAs`]?: string;
} & {
  [K in `${TPrefix}DropdownCTag`]?: string;
} & {
  [K in `${TPrefix}DropdownListbox`]?: object;
} & {
  [K in `${TPrefix}DropdownFullWidth`]?: boolean;
} & {
  [K in `${TPrefix}DropdownAppearance`]?: "soft" | "dualTone";
} & {
  [K in `${TPrefix}DropdownFocused`]?: boolean;
} & {
  [K in `${TPrefix}DropdownHovered`]?: boolean;
} & {
  [K in `${TPrefix}DropdownSelected`]?: boolean;
} & {
  [K in `${TPrefix}DropdownFocusStyle`]?: object;
} & {
  [K in `${TPrefix}DropdownInvalid`]?: boolean;
} & {
  [K in `${TPrefix}DropdownRounded`]?: "none" | "sm" | "md" | "lg" | "full";
} & {
  [K in `${TPrefix}DropdownSize`]?: "xs" | "sm" | "base" | "lg" | "xl";
} & {
  [K in `${TPrefix}DropdownSpacing`]?: "compact" | "standard" | "spacious";
} & {
  [K in `${TPrefix}DropdownStyle`]?: object;
} & {
  [K in `${TPrefix}DropdownVariant`]?:
    | "solid"
    | "outline"
    | "underline"
    | "solid-outline"
    | "solid-underline"
    | "ghost";
} & {
  [K in `${TPrefix}DropdownLoading`]?: boolean;
} & {
  [K in `${TPrefix}DropdownDisabled`]?: boolean;
} & {
  [K in `${TPrefix}DropdownAutoFocus`]?: boolean;
} & {
  [K in `${TPrefix}DropdownAllowClear`]?: boolean;
} & {
  [K in `${TPrefix}DropdownReadOnly`]?: boolean;
} & {
  [K in `${TPrefix}DropdownRequired`]?: boolean;
} & {
  [K in `${TPrefix}DropdownValidationRules`]?: object;
} & {
  [K in `${TPrefix}DropdownFloatingLabel`]?: object;
} & {
  [K in `${TPrefix}DropdownShowValidationMessage`]?: boolean;
} & {
  [K in `${TPrefix}DropdownValue`]?: string;
} & {
  [K in `${TPrefix}DropdownSearchable`]?: boolean;
};

// Utility type to create story args with slot
export type CreateStoryArgs<TBaseProps, TSlot extends string> = TBaseProps &
// @ts-ignore -- unused type parameter in the original file (trips noUnusedParameters)
  (TSlot extends `${infer TPrefix}slot` ? SlotControlArgs<TSlot> : never);

// Helper to create story args type for slot
export type WithSlotControl<TBaseProps> = TBaseProps & SlotControlArgs<"slot">;

// More flexible type creator for custom slot configurations
export type WithCustomSlots<
  TBaseProps,
  TSlots extends readonly string[],
> = TBaseProps &
  (TSlots[number] extends string ? SlotControlArgs<TSlots[number]> : never);
// Type helper for single slot
export type WithSingleSlot<TBaseProps, TSlotName extends string> = TBaseProps &
  SlotControlArgs<TSlotName>;

// Generate argTypes for a slot
export const createSlotArgTypes = (
  slotPrefix: string,
  config: SlotControlConfig,
): ArgTypes => {
  const enabledTypes = config.enabledTypes || [
    "icon",
    "flag",
    "loader",
    "rafiki",
    "file-type",
    "avatar",
  ];
  const typeOptions = ["none", ...enabledTypes];

  const argTypes: ArgTypes = {};

  // Type control
  argTypes[`${slotPrefix}Type`] = {
    control: { type: "select" },
    options: typeOptions,
    description: `Type of ${config.category.toLowerCase()} content`,
    table: { category: config.category },
    name: "type",
  };

  argTypes[`${slotPrefix}Size`] = {
    control: { type: "select" },
    options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    description: `Icon size for ${config.category.toLowerCase()}`,
    table: { category: config.category },
    name: "size",
    if: { arg: `${slotPrefix}Type`, eq: "icon" },
  };

  // Icon controls
  if (enabledTypes.includes("icon")) {
    argTypes[`${slotPrefix}Name`] = {
      control: { type: "text" },
      description: `Icon name for ${config.category.toLowerCase()}`,
      table: { category: config.category },
      name: "name",
      if: { arg: `${slotPrefix}Type`, eq: "icon" },
    };
    argTypes[`${slotPrefix}Filled`] = {
      control: { type: "boolean" },
      description: `Whether ${config.category.toLowerCase()} icon is filled`,
      table: { category: config.category },
      name: "filled",
      if: { arg: `${slotPrefix}Type`, eq: "icon" },
    };
  }

  // Badge Dot controls
  if (enabledTypes.includes("badge-dot")) {
    argTypes[`${slotPrefix}BadgeDotVariant`] = {
      control: { type: "select" },
      options: ["solid", "solid-outline", "outline"],
      description: "Dot badge variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "badge-dot" },
    };

    argTypes[`${slotPrefix}BadgeDotAppearance`] = {
      control: { type: "select" },
      options: ["strong", "soft", "dualTone", "onColor"],
      description: "Dot badge appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "badge-dot" },
    };

    argTypes[`${slotPrefix}BadgeDotColor`] = {
      control: { type: "color" },
      description: "Dot badge color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-dot" },
    };

    argTypes[`${slotPrefix}BadgeDotSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Dot badge size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "badge-dot" },
    };
    argTypes[`${slotPrefix}BadgeDotRingColor`] = {
      control: { type: "color" },
      description: "Dot badge focus ring color",
      table: { category: config.category },
      name: "Focus Ring Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-dot" },
    };

    argTypes[`${slotPrefix}BadgeDotAdaptive`] = {
      control: { type: "boolean" },
      description: "Dot badge is adaptive",
      table: { category: config.category },
      name: "Adaptive",
      if: { arg: `${slotPrefix}Type`, eq: "badge-dot" },
    };

    argTypes[`${slotPrefix}BadgeDotClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes for dot badge",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "badge-dot" },
    };
  }

  // Badge Status Indicator controls
  if (enabledTypes.includes("badge-status-indicator")) {
    argTypes[`${slotPrefix}BadgeStatusIndicatorAppearance`] = {
      control: { type: "select" },
      options: ["strong", "soft", "dualTone", "onColor"],
      description: "Status indicator appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "badge-status-indicator" },
    };

    argTypes[`${slotPrefix}BadgeStatusIndicatorColor`] = {
      control: { type: "color" },
      description: "Status indicator color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-status-indicator" },
    };

    argTypes[`${slotPrefix}BadgeStatusIndicatorStroke`] = {
      control: { type: "boolean" },
      description: "Status indicator stroke",
      table: { category: config.category },
      name: "Stroke",
      if: { arg: `${slotPrefix}Type`, eq: "badge-status-indicator" },
    };

    argTypes[`${slotPrefix}BadgeStatusIndicatorSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Status indicator size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "badge-status-indicator" },
    };

    argTypes[`${slotPrefix}BadgeStatusIndicatorClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes for status indicator",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "badge-status-indicator" },
    };
  }

  // Badge Counter controls
  if (enabledTypes.includes("badge-counter")) {
    argTypes[`${slotPrefix}BadgeCounterVariant`] = {
      control: { type: "select" },
      options: ["solid", "solid-outline", "outline", "transparent"],
      description: "Counter badge variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "badge-counter" },
    };

    argTypes[`${slotPrefix}BadgeCounterAppearance`] = {
      control: { type: "select" },
      options: ["strong", "soft", "dualTone", "onColor"],
      description: "Counter badge appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "badge-counter" },
    };

    argTypes[`${slotPrefix}BadgeCounterValue`] = {
      control: { type: "number", min: 0 },
      description: "Counter value",
      table: { category: config.category },
      name: "Counter",
      if: { arg: `${slotPrefix}Type`, eq: "badge-counter" },
    };

    argTypes[`${slotPrefix}BadgeCounterMax`] = {
      control: { type: "number", min: 0 },
      description: "Maximum counter value",
      table: { category: config.category },
      name: "Max Value",
      if: { arg: `${slotPrefix}Type`, eq: "badge-counter" },
    };

    argTypes[`${slotPrefix}BadgeCounterColor`] = {
      control: { type: "color" },
      description: "Counter badge color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-counter" },
    };

    argTypes[`${slotPrefix}BadgeCounterSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Counter badge size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "badge-counter" },
    };

    argTypes[`${slotPrefix}BadgeCounterClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes for counter badge",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "badge-counter" },
    };
  }

  // Badge Ribbon controls
  if (enabledTypes.includes("badge-ribbon")) {
    argTypes[`${slotPrefix}BadgeRibbonVariant`] = {
      control: { type: "select" },
      options: ["filled", "filledOutlined", "outlined", "transparent"],
      description: "Ribbon badge variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonAppearance`] = {
      control: { type: "select" },
      options: ["strong", "subtle", "onColor"],
      description: "Ribbon badge appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonColor`] = {
      control: { type: "color" },
      description: "Ribbon badge color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg"],
      description: "Ribbon badge size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonCapitalize`] = {
      control: { type: "boolean" },
      description: "Capitalize ribbon label",
      table: { category: config.category },
      name: "Capitalize",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonLabel`] = {
      control: { type: "text" },
      description: "Ribbon label text",
      table: { category: config.category },
      name: "Label",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonAlignment`] = {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Ribbon alignment",
      table: { category: config.category },
      name: "Alignment",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonTail`] = {
      control: { type: "boolean" },
      description: "Show ribbon tail",
      table: { category: config.category },
      name: "Tail",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonRotate`] = {
      control: { type: "select" },
      options: [
        "0deg",
        "45deg",
        "90deg",
        "135deg",
        "180deg",
        "-45deg",
        "-90deg",
        "-135deg",
      ],
      description: "Ribbon rotation",
      table: { category: config.category },
      name: "Rotate",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonPointer`] = {
      control: { type: "select" },
      options: ["inward", "outward", "long", "none"],
      description: "Ribbon pointer style",
      table: { category: config.category },
      name: "Pointer",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonHasRing`] = {
      control: { type: "boolean" },
      description: "Show focus ring",
      table: { category: config.category },
      name: "Has Ring",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonRingWidth`] = {
      control: { type: "select" },
      options: ["1", "2", "3", "4", "5", "6", "7", "8"],
      description: "Focus ring width",
      table: { category: config.category },
      name: "Ring Width",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonRingColor`] = {
      control: { type: "color" },
      description: "Focus ring color",
      table: { category: config.category },
      name: "Ring Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonPosition`] = {
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
      ],
      description: "Badge position",
      table: { category: config.category },
      name: "Position",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };

    argTypes[`${slotPrefix}BadgeRibbonClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes for ribbon badge",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "badge-ribbon" },
    };
  }

  // Badge Corner controls
  if (enabledTypes.includes("badge-corner")) {
    argTypes[`${slotPrefix}BadgeCornerVariant`] = {
      control: { type: "select" },
      options: ["filled", "filledOutlined", "outlined", "transparent"],
      description: "Corner badge variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerAppearance`] = {
      control: { type: "select" },
      options: ["strong", "subtle", "onColor"],
      description: "Corner badge appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerColor`] = {
      control: { type: "color" },
      description: "Corner badge color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg"],
      description: "Corner badge size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerCapitalize`] = {
      control: { type: "boolean" },
      description: "Capitalize corner label",
      table: { category: config.category },
      name: "Capitalize",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerLabel`] = {
      control: { type: "text" },
      description: "Corner label text",
      table: { category: config.category },
      name: "Label",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerSubtitle`] = {
      control: { type: "text" },
      description: "Corner subtitle text",
      table: { category: config.category },
      name: "Subtitle",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerRotate`] = {
      control: { type: "select" },
      options: [
        "0deg",
        "45deg",
        "90deg",
        "135deg",
        "180deg",
        "-45deg",
        "-90deg",
        "-135deg",
      ],
      description: "Corner rotation",
      table: { category: config.category },
      name: "Rotate",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerHasRing`] = {
      control: { type: "boolean" },
      description: "Show focus ring",
      table: { category: config.category },
      name: "Has Ring",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerRingWidth`] = {
      control: { type: "select" },
      options: ["1", "2", "3", "4", "5", "6", "7", "8"],
      description: "Focus ring width",
      table: { category: config.category },
      name: "Ring Width",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerRingColor`] = {
      control: { type: "color" },
      description: "Focus ring color",
      table: { category: config.category },
      name: "Ring Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerPosition`] = {
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
      ],
      description: "Badge position",
      table: { category: config.category },
      name: "Position",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };

    argTypes[`${slotPrefix}BadgeCornerClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes for corner badge",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "badge-corner" },
    };
  }

  // Label badge controls
  if (enabledTypes.includes("label")) {
    argTypes[`${slotPrefix}LabelVariant`] = {
      control: { type: "select" },
      options: ["filled", "filledOutlined", "outlined", "transparent"],
      description: "Label badge variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelAppearance`] = {
      control: { type: "select" },
      options: ["strong", "subtle", "onColor"],
      description: "Label badge appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelColor`] = {
      control: { type: "color" },
      description: "Label badge color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg"],
      description: "Label badge size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelAdaptive`] = {
      control: { type: "boolean" },
      description: "Label badge adaptive styling",
      table: { category: config.category },
      name: "Adaptive",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelHasRing`] = {
      control: { type: "boolean" },
      description: "Show focus ring",
      table: { category: config.category },
      name: "Has Ring",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelRingColor`] = {
      control: { type: "color" },
      description: "Focus ring color",
      table: { category: config.category },
      name: "Ring Color",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelPosition`] = {
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
      ],
      description: "Badge position",
      table: { category: config.category },
      name: "Position",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelCapitalize`] = {
      control: { type: "boolean" },
      description: "Capitalize label text",
      table: { category: config.category },
      name: "Capitalize",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelText`] = {
      control: { type: "text" },
      description: "Label text",
      table: { category: config.category },
      name: "Text",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelAlign`] = {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Label text alignment",
      table: { category: config.category },
      name: "Align",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelRequired`] = {
      control: { type: "boolean" },
      description: "Show required indicator",
      table: { category: config.category },
      name: "Required",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelOptional`] = {
      control: { type: "boolean" },
      description: "Show optional indicator",
      table: { category: config.category },
      name: "Optional",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelDescription`] = {
      control: { type: "text" },
      description: "Label description text",
      table: { category: config.category },
      name: "Description",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelDisabled`] = {
      control: { type: "boolean" },
      description: "Disabled state",
      table: { category: config.category },
      name: "Disabled",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };

    argTypes[`${slotPrefix}LabelInvalid`] = {
      control: { type: "boolean" },
      description: "Invalid state",
      table: { category: config.category },
      name: "Invalid",
      if: { arg: `${slotPrefix}Type`, eq: "label" },
    };
  }

  // Badge Label controls
  if (enabledTypes.includes("badge-label")) {
    argTypes[`${slotPrefix}BadgeLabelVariant`] = {
      control: { type: "select" },
      options: ["solid", "solid-outline", "outline", "ghost"],
      description: "Label badge variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelAppearance`] = {
      control: { type: "select" },
      options: ["strong", "subtle", "onColor"],
      description: "Label badge appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelColor`] = {
      control: { type: "color" },
      description: "Label badge color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Label badge size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelAdaptive`] = {
      control: { type: "boolean" },
      description: "Label badge adaptive styling",
      table: { category: config.category },
      name: "Adaptive",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelHasRing`] = {
      control: { type: "boolean" },
      description: "Show focus ring",
      table: { category: config.category },
      name: "Has Ring",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelRingColor`] = {
      control: { type: "color" },
      description: "Focus ring color",
      table: { category: config.category },
      name: "Ring Color",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelPosition`] = {
      control: { type: "select" },
      options: [
        "none",
        "top",
        "bottom",
        "right",
        "left",
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
      ],
      description: "Badge position",
      table: { category: config.category },
      name: "Position",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelCapitalize`] = {
      control: { type: "boolean" },
      description: "Capitalize label text",
      table: { category: config.category },
      name: "Capitalize",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelText`] = {
      control: { type: "text" },
      description: "Label text",
      table: { category: config.category },
      name: "Text",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };

    argTypes[`${slotPrefix}BadgeLabelDisabled`] = {
      control: { type: "boolean" },
      description: "Disabled state",
      table: { category: config.category },
      name: "Disabled",
      if: { arg: `${slotPrefix}Type`, eq: "badge-label" },
    };
  }

  // Flag controls
  if (enabledTypes.includes("flag")) {
    argTypes[`${slotPrefix}FlagCode`] = {
      control: { type: "text" },
      description: "Flag country code (e.g., US, FR, DE)",
      table: { category: config.category },
      name: "code",
      if: { arg: `${slotPrefix}Type`, eq: "flag" },
    };

    argTypes[`${slotPrefix}FlagShape`] = {
      control: { type: "select" },
      options: ["rectangle", "square", "circle"],
      description: "Flag shape",
      table: { category: config.category },
      name: "shape",
      if: { arg: `${slotPrefix}Type`, eq: "flag" },
    };

    argTypes[`${slotPrefix}FlagSize`] = {
      control: { type: "select" },
      options: ["sm", "base", "lg"],
      description: "Flag size",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "flag" },
    };
  }

  // Loader controls
  if (enabledTypes.includes("loader")) {
    argTypes[`${slotPrefix}LoaderName`] = {
      control: { type: "text" },
      description: "Loader name (e.g., bouncy, ring, tailspin)",
      table: { category: config.category },
      name: "Loader Name",
      if: { arg: `${slotPrefix}Type`, eq: "loader" },
    };

    argTypes[`${slotPrefix}LoaderSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
      description: "Loader size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "loader" },
    };

    argTypes[`${slotPrefix}LoaderColor`] = {
      control: { type: "color" },
      description: "Loader color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "loader" },
    };

    argTypes[`${slotPrefix}LoaderStrokeWidth`] = {
      control: { type: "range", min: 1, max: 10, step: 0.5 },
      description: "Loader stroke width",
      table: { category: config.category },
      name: "Stroke Width",
      if: { arg: `${slotPrefix}Type`, eq: "loader" },
    };
  }

  // Rafiki illustration controls
  if (enabledTypes.includes("rafiki")) {
    argTypes[`${slotPrefix}RafikiName`] = {
      control: { type: "text" },
      description: "Rafiki illustration name (e.g., about_me_rafiki_simple)",
      table: { category: config.category },
      name: "Illustration Name",
      if: { arg: `${slotPrefix}Type`, eq: "rafiki" },
    };

    argTypes[`${slotPrefix}RafikiWidth`] = {
      control: { type: "number", min: 1 },
      description: "Custom illustration width (in pixels)",
      table: { category: config.category },
      name: "Custom Width (px)",
      if: { arg: `${slotPrefix}Type`, eq: "rafiki" },
    };

    argTypes[`${slotPrefix}RafikiHeight`] = {
      control: { type: "number", min: 1 },
      description: "Custom illustration height (in pixels)",
      table: { category: config.category },
      name: "Custom Height (px)",
      if: { arg: `${slotPrefix}Type`, eq: "rafiki" },
    };
  }

  // File Type controls
  if (enabledTypes.includes("file-type")) {
    argTypes[`${slotPrefix}FileTypeExtension`] = {
      control: { type: "text" },
      description: "File extension (e.g., pdf, doc, xls)",
      table: { category: config.category },
      name: "extension",
      if: { arg: `${slotPrefix}Type`, eq: "file-type" },
    };

    argTypes[`${slotPrefix}FileTypeSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      description: "File type icon size",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "file-type" },
    };
  }

  // Avatar controls
  if (enabledTypes.includes("avatar")) {
    argTypes[`${slotPrefix}AvatarName`] = {
      control: { type: "text" },
      description:
        "Avatar name for initials (leave empty for default person icon)",
      table: { category: config.category },
      name: "Name",
      if: { arg: `${slotPrefix}Type`, eq: "avatar" },
    };

    argTypes[`${slotPrefix}AvatarSrc`] = {
      control: { type: "text" },
      description: "Avatar image source URL",
      table: { category: config.category },
      name: "Image URL",
      if: { arg: `${slotPrefix}Type`, eq: "avatar" },
    };

    argTypes[`${slotPrefix}AvatarSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg"],
      description: "Avatar size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "avatar" },
    };

    argTypes[`${slotPrefix}AvatarColor`] = {
      control: { type: "color" },
      description: "Avatar background/initials color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "avatar" },
    };

    argTypes[`${slotPrefix}AvatarShape`] = {
      control: { type: "select" },
      options: ["circle", "square"],
      description: "Avatar shape",
      table: { category: config.category },
      name: "Shape",
      if: { arg: `${slotPrefix}Type`, eq: "avatar" },
    };

    argTypes[`${slotPrefix}AvatarVariant`] = {
      control: { type: "select" },
      options: ["filled", "filled+outlined", "outlined"],
      description: "Avatar variant type",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "avatar" },
    };

    argTypes[`${slotPrefix}AvatarAppearance`] = {
      control: { type: "select" },
      options: ["strong", "subtle", "onColor"],
      description: "Avatar appearance intensity",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "avatar" },
    };
  }

  // Logo controls (Brand from @inventive-ui/logos)
  if (enabledTypes.includes("logo")) {
    argTypes[`${slotPrefix}LogoName`] = {
      control: { type: "text" },
      description: "Logo brand name (e.g., github, google, facebook)",
      table: { category: config.category },
      name: "brandName",
      if: { arg: `${slotPrefix}Type`, eq: "logo" },
    };

    argTypes[`${slotPrefix}LogoSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      description: "Logo size preset (overrides width/height if set)",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "logo" },
    };
  }

  // Color Logo controls (Logo from @inventive-ui/color-logos)
  if (enabledTypes.includes("color-logo")) {
    argTypes[`${slotPrefix}ColorLogoName`] = {
      control: { type: "text" },
      description: "Color logo brand name (e.g., github, google, facebook)",
      table: { category: config.category },
      name: "brandName",
      if: { arg: `${slotPrefix}Type`, eq: "color-logo" },
    };

    argTypes[`${slotPrefix}ColorLogoSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      description: "Color logo size",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "color-logo" },
    };
  }

  // Emoji controls
  if (enabledTypes.includes("emoji")) {
    argTypes[`${slotPrefix}EmojiName`] = {
      control: { type: "text" },
      description: "Emoji name (e.g., waving_hand, smile, heart)",
      table: { category: config.category },
      name: "emojiName",
      if: { arg: `${slotPrefix}Type`, eq: "emoji" },
    };

    argTypes[`${slotPrefix}EmojiSize`] = {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
      description: "Emoji size",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "emoji" },
    };
  }

  // Radio Button controls
  if (enabledTypes.includes("radio-button")) {
    argTypes[`${slotPrefix}RadioLabel`] = {
      control: { type: "text" },
      description: "Radio button label text",
      table: { category: config.category },
      name: "Label",
      if: { arg: `${slotPrefix}Type`, eq: "radio-button" },
    };

    argTypes[`${slotPrefix}RadioChecked`] = {
      control: { type: "boolean" },
      description: "Radio button checked state",
      table: { category: config.category },
      name: "Checked",
      if: { arg: `${slotPrefix}Type`, eq: "radio-button" },
    };

    argTypes[`${slotPrefix}RadioDisabled`] = {
      control: { type: "boolean" },
      description: "Radio button disabled state",
      table: { category: config.category },
      name: "Disabled",
      if: { arg: `${slotPrefix}Type`, eq: "radio-button" },
    };

    argTypes[`${slotPrefix}RadioSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg"],
      description: "Radio button size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "radio-button" },
    };
  }

  // Checkbox controls
  if (enabledTypes.includes("checkbox")) {
    argTypes[`${slotPrefix}CheckboxLabel`] = {
      control: { type: "text" },
      description: "Checkbox label text",
      table: { category: config.category },
      name: "Label",
      if: { arg: `${slotPrefix}Type`, eq: "checkbox" },
    };

    argTypes[`${slotPrefix}CheckboxChecked`] = {
      control: { type: "boolean" },
      description: "Checkbox checked state",
      table: { category: config.category },
      name: "Checked",
      if: { arg: `${slotPrefix}Type`, eq: "checkbox" },
    };

    argTypes[`${slotPrefix}CheckboxDisabled`] = {
      control: { type: "boolean" },
      description: "Checkbox disabled state",
      table: { category: config.category },
      name: "Disabled",
      if: { arg: `${slotPrefix}Type`, eq: "checkbox" },
    };

    argTypes[`${slotPrefix}CheckboxIndeterminate`] = {
      control: { type: "boolean" },
      description: "Checkbox indeterminate state",
      table: { category: config.category },
      name: "Indeterminate",
      if: { arg: `${slotPrefix}Type`, eq: "checkbox" },
    };

    argTypes[`${slotPrefix}CheckboxSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg"],
      description: "Checkbox size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "checkbox" },
    };
  }

  // Button controls
  if (enabledTypes.includes("button")) {
    argTypes[`${slotPrefix}ButtonLabel`] = {
      control: { type: "text" },
      description: "Button label text",
      table: { category: config.category },
      name: "label",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonVariant`] = {
      control: { type: "select" },
      options: ["solid", "outline", "solid-outline", "ghost"],
      description: "Button variant",
      table: { category: config.category },
      name: "variant",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonAppearance`] = {
      control: { type: "select" },
      options: ["soft", "strong", "dualTone", "oncolor"],
      description: "Button appearance",
      table: { category: config.category },
      name: "appearance",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtinteractionVariantVariant`] = {
      control: { type: "select" },
      options: ["none", "solid", "outline", "ghost", "solid-outline"],
      description: "Button hover interaction",
      table: { category: config.category },
      name: "onInteraction",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonColor`] = {
      control: { type: "color" },
      description: "Button color",
      table: { category: config.category },
      name: "color",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Button size",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonDisabled`] = {
      control: { type: "boolean" },
      description: "Button disabled state",
      table: { category: config.category },
      name: "disabled",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonLoading`] = {
      control: { type: "boolean" },
      description: "Button loading state",
      table: { category: config.category },
      name: "loading",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    // argTypes[`${slotPrefix}ButtonFullWidth`] = {
    //   control: { type: "boolean" },
    //   description: "Button full width",
    //   table: { category: config.category },
    //   name: "fullWidth",
    //   if: { arg: `${slotPrefix}Type`, eq: "button" },
    // };
    argTypes[`${slotPrefix}ButtonAdaptive`] = {
      control: { type: "boolean" },
      description: "Button adaptive color",
      table: { category: config.category },
      name: "adaptive",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonClassName`] = {
      control: { type: "text" },
      description: "Button adaptive color",
      table: { category: config.category },
      name: "className",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonPrefix`] = {
      control: { type: "object" },
      description: "Content for left slot",
      table: { category: config.category },
      name: "prefix",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
    argTypes[`${slotPrefix}ButtonSuffix`] = {
      control: { type: "object" },
      description: "Content for right slot",
      table: { category: config.category },
      name: "suffix",
      if: { arg: `${slotPrefix}Type`, eq: "button" },
    };
  }

  // Progress controls
  if (enabledTypes.includes("progress")) {
    argTypes[`${slotPrefix}ProgressValue`] = {
      control: { type: "number", min: 0 },
      description: "Progress value",
      table: { category: config.category },
      name: "Value",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressMax`] = {
      control: { type: "number", min: 0 },
      description: "Progress maximum value",
      table: { category: config.category },
      name: "Max Value",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
      description: "Progress size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressVariant`] = {
      control: { type: "select" },
      options: ["filled", "outlined", "filled+outlined", "ghost"],
      description: "Progress variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressAppearance`] = {
      control: { type: "select" },
      options: ["soft", "strong"],
      description: "Progress appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressType`] = {
      control: { type: "select" },
      options: ["determinate", "indeterminate"],
      description: "Progress type",
      table: { category: config.category },
      name: "Type",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressOrientation`] = {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Progress orientation",
      table: { category: config.category },
      name: "Orientation",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressDisabled`] = {
      control: { type: "boolean" },
      description: "Progress disabled state",
      table: { category: config.category },
      name: "Disabled",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressAdaptive`] = {
      control: { type: "boolean" },
      description: "Progress adaptive color",
      table: { category: config.category },
      name: "Adaptive",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressValuePosition`] = {
      control: { type: "select" },
      options: ["none", "above", "inline", "below"],
      description: "Progress value position",
      table: { category: config.category },
      name: "Value Position",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressValueAlignment`] = {
      control: { type: "select" },
      options: ["start", "middle", "end"],
      description: "Progress value alignment",
      table: { category: config.category },
      name: "Value Alignment",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressShowValue`] = {
      control: { type: "boolean" },
      description: "Show progress value",
      table: { category: config.category },
      name: "Show Value",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressLabel`] = {
      control: { type: "text" },
      description: "Progress label text",
      table: { category: config.category },
      name: "Label",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressLabelPosition`] = {
      control: { type: "select" },
      options: ["none", "above", "inline"],
      description: "Progress label position",
      table: { category: config.category },
      name: "Label Position",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressHelperText`] = {
      control: { type: "text" },
      description: "Progress helper text",
      table: { category: config.category },
      name: "Helper Text",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressHelperTextPosition`] = {
      control: { type: "select" },
      options: ["none", "below-start", "below-end", "inline"],
      description: "Progress helper text position",
      table: { category: config.category },
      name: "Helper Text Position",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressAnimated`] = {
      control: { type: "boolean" },
      description: "Progress animation",
      table: { category: config.category },
      name: "Animated",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };

    argTypes[`${slotPrefix}ProgressAnimationDuration`] = {
      control: { type: "number", min: 0 },
      description: "Progress animation duration (ms)",
      table: { category: config.category },
      name: "Animation Duration",
      if: { arg: `${slotPrefix}Type`, eq: "progress" },
    };
  }

  // InlineMessage controls
  if (enabledTypes.includes("inline-message")) {
    argTypes[`${slotPrefix}InlineMessageDescription`] = {
      control: { type: "text" },
      description: "Inline message text",
      table: { category: config.category },
      name: "description",
      if: { arg: `${slotPrefix}Type`, eq: "inline-message" },
    };

    argTypes[`${slotPrefix}InlineMessageState`] = {
      control: { type: "select" },
      options: ["neutral", "error", "warning", "success", "info"],
      description: "Inline message state",
      table: { category: config.category },
      name: "state",
      if: { arg: `${slotPrefix}Type`, eq: "inline-message" },
    };

    argTypes[`${slotPrefix}InlineMessageSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Inline message size",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "inline-message" },
    };

    argTypes[`${slotPrefix}InlineMessageIconPosition`] = {
      control: { type: "select" },
      options: ["none", "left", "right"],
      description: "Inline message icon position",
      table: { category: config.category },
      name: "iconPosition",
      if: { arg: `${slotPrefix}Type`, eq: "inline-message" },
    };

    // argTypes[`${slotPrefix}InlineMessageSpaceBetween`] = {
    //   control: { type: "select" },
    //   options: ["xs", "sm", "base", "lg"],
    //   description: "Inline message spacing",
    //   table: { category: config.category },
    //   name: "spacing",
    //   if: { arg: `${slotPrefix}Type`, eq: "inline-message" },
    // };

    argTypes[`${slotPrefix}InlineMessageFont`] = {
      control: { type: "select" },
      options: ["inter", "arial", "mono"],
      description: "Inline message font",
      table: { category: config.category },
      name: "font",
      if: { arg: `${slotPrefix}Type`, eq: "inline-message" },
    };
  }

  if (enabledTypes.includes("link")) {
    argTypes[`${slotPrefix}LinkHref`] = {
      name: "Link Href",
      control: { type: "text" },
      description: "URL for the link",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkText`] = {
      name: "Link Text",
      control: { type: "text" },
      description: "Text content of the link",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkVariant`] = {
      name: "Link Variant",
      control: { type: "select" },
      options: [
        "none",
        "underline",
        "filled",
        "filled+underline",
        "outlined",
        "filled+outlined",
      ],
      description: "Visual variant of the link",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkAppearance`] = {
      name: "Link Appearance",
      control: { type: "select" },
      options: ["strong", "dualtone", "subtle", "onColor"],
      description: "Appearance style of the link",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkSize`] = {
      name: "Link Size",
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Size of the link",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkColor`] = {
      name: "Link Color",
      control: { type: "text" },
      description: "Sematic color or hex value",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkExternal`] = {
      name: "Link External",
      control: { type: "boolean" },
      description: "Open in new tab",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkDisabled`] = {
      name: "Link Disabled",
      control: { type: "boolean" },
      description: "Disable the link",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkVisited`] = {
      name: "Link Visited",
      control: { type: "boolean" },
      description: "Force visited state",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
    argTypes[`${slotPrefix}LinkIconPosition`] = {
      name: "Link Icon Position",
      control: { type: "select" },
      options: ["start", "end"],
      description: "Position of icon relative to text",
      table: { category: config.category },
      if: { arg: `${slotPrefix}Type`, eq: "link" },
    };
  }

  // Color Swatch controls
  if (enabledTypes.includes("color-swatch")) {
    argTypes[`${slotPrefix}ColorSwatchColor`] = {
      control: { type: "color" },
      description: "Swatch color",
      table: { category: config.category },
      name: "Color",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Swatch size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchShape`] = {
      control: { type: "select" },
      options: ["1:1", "1:2", "2:1"],
      description: "Swatch shape",
      table: { category: config.category },
      name: "Shape",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchVariant`] = {
      control: { type: "select" },
      options: ["solid", "solid-outline", "outline"],
      description: "Swatch variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchAppearance`] = {
      control: { type: "select" },
      options: ["strong", "soft", "dualTone", "onColor", "classic"],
      description: "Swatch appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchLabel`] = {
      control: { type: "text" },
      description: "Swatch label",
      table: { category: config.category },
      name: "Label",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchSelected`] = {
      control: { type: "boolean" },
      description: "Swatch selected state",
      table: { category: config.category },
      name: "Selected",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchDisabled`] = {
      control: { type: "boolean" },
      description: "Swatch disabled state",
      table: { category: config.category },
      name: "Disabled",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchAdaptive`] = {
      control: { type: "boolean" },
      description: "Swatch adaptive styling",
      table: { category: config.category },
      name: "Adaptive",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };

    argTypes[`${slotPrefix}ColorSwatchClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "color-swatch" },
    };
  }

  // Keyboard Key controls
  if (enabledTypes.includes("kbd")) {
    argTypes[`${slotPrefix}KeyboardKeySize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Keyboard key size",
      table: { category: config.category },
      name: "Size",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyVariant`] = {
      control: { type: "select" },
      options: ["solid", "solid-outline", "outline", "ghost"],
      description: "Keyboard key variant",
      table: { category: config.category },
      name: "Variant",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyAppearance`] = {
      control: { type: "select" },
      options: ["strong", "soft"],
      description: "Keyboard key appearance",
      table: { category: config.category },
      name: "Appearance",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyShadowDirection`] = {
      control: { type: "select" },
      options: ["none", "top", "bottom"],
      description: "Keyboard key shadow direction",
      table: { category: config.category },
      name: "Shadow Direction",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyFullWidth`] = {
      control: { type: "boolean" },
      description: "Keyboard key full width",
      table: { category: config.category },
      name: "Full Width",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyLabel`] = {
      control: { type: "text" },
      description: "Keyboard key label (content)",
      table: { category: config.category },
      name: "Label",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyKeys`] = {
      control: { type: "text" },
      description: "Auto-rendered symbols (command, shift, etc.)",
      table: { category: config.category },
      name: "Keys",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyCtag`] = {
      control: { type: "text" },
      description: "Component configuration tag",
      table: { category: config.category },
      name: "Ctag",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyAriaLabel`] = {
      control: { type: "text" },
      description: "Keyboard key aria-label",
      table: { category: config.category },
      name: "Aria Label",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };

    argTypes[`${slotPrefix}KeyboardKeyClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: { category: config.category },
      name: "Class Name",
      if: { arg: `${slotPrefix}Type`, eq: "kbd" },
    };
  }

  // Text controls
  if (enabledTypes.includes("text")) {
    argTypes[`${slotPrefix}TextChildren`] = {
      control: { type: "text" },
      description: `Text content for ${config.category.toLowerCase()}`,
      table: { category: config.category },
      name: "children",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: `Text size for ${config.category.toLowerCase()}`,
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextWeight`] = {
      control: { type: "select" },
      options: ["regular", "medium", "semibold", "bold"],
      description: `Font weight for ${config.category.toLowerCase()}`,
      table: { category: config.category },
      name: "weight",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextAlign`] = {
      control: { type: "select" },
      options: ["start", "center", "end", "justify"],
      description: `Text alignment`,
      table: { category: config.category },
      name: "align",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextWrap`] = {
      control: { type: "boolean" },
      description: `Enable text wrapping`,
      table: { category: config.category },
      name: "wrap",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextTruncate`] = {
      control: { type: "boolean" },
      description: `Truncate overflowing text`,
      table: { category: config.category },
      name: "truncate",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextItalic`] = {
      control: { type: "boolean" },
      description: `Italic text style`,
      table: { category: config.category },
      name: "italic",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextUnderline`] = {
      control: { type: "boolean" },
      description: `Underline text`,
      table: { category: config.category },
      name: "underline",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextStrikethough`] = {
      control: { type: "boolean" },
      description: `Strikethrough text`,
      table: { category: config.category },
      name: "strikethrough",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextBlock`] = {
      control: { type: "boolean" },
      description: `Render text as block element`,
      table: { category: config.category },
      name: "block",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextAdaptive`] = {
      control: { type: "boolean" },
      description: `Enable adaptive styling`,
      table: { category: config.category },
      name: "adaptive",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    argTypes[`${slotPrefix}TextClassName`] = {
      control: { type: "text" },
      description: `Additional CSS classes for text`,
      table: { category: config.category },
      name: "className",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };
    argTypes[`${slotPrefix}TextColor`] = {
      control: { type: "color" },
      description: "Text color",
      table: { category: config.category },
      name: "color",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };

    // Optional (since your system uses cTag)
    argTypes[`${slotPrefix}TextCtag`] = {
      control: { type: "text" },
      description: `Design-system identifier for text slot`,
      table: { category: config.category },
      name: "cTag",
      if: { arg: `${slotPrefix}Type`, eq: "text" },
    };
  }

  // Dropdown controls
  if (enabledTypes.includes("dropdown")) {
    argTypes[`${slotPrefix}DropdownPlaceholder`] = {
      control: { type: "text" },
      description: "Dropdown placeholder text",
      table: { category: config.category },
      name: "placeholder",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownControlStatus`] = {
      control: { type: "object" },
      description: "Dropdown control status slot",
      table: { category: config.category },
      name: "controlStatus",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownClassName`] = {
      control: { type: "text" },
      description: "Additional CSS classes for dropdown",
      table: { category: config.category },
      name: "className",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownColor`] = {
      control: { type: "color" },
      description: "Dropdown color",
      table: { category: config.category },
      name: "color",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownAs`] = {
      control: { type: "text" },
      description: "Dropdown element/component type",
      table: { category: config.category },
      name: "as",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownCTag`] = {
      control: { type: "text" },
      description: "Dropdown component tag",
      table: { category: config.category },
      name: "cTag",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownListbox`] = {
      control: { type: "object" },
      description: "Dropdown listbox slot",
      table: { category: config.category },
      name: "listbox",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownFullWidth`] = {
      control: { type: "boolean" },
      description: "Dropdown takes full available width",
      table: { category: config.category },
      name: "fullWidth",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownAppearance`] = {
      control: { type: "select" },
      options: ["soft", "dualTone"],
      description: "Dropdown appearance",
      table: { category: config.category },
      name: "appearance",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownFocused`] = {
      control: { type: "boolean" },
      description: "Dropdown focused state",
      table: { category: config.category },
      name: "focused",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownHovered`] = {
      control: { type: "boolean" },
      description: "Dropdown hovered state",
      table: { category: config.category },
      name: "hovered",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownSelected`] = {
      control: { type: "boolean" },
      description: "Dropdown selected state",
      table: { category: config.category },
      name: "selected",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownFocusStyle`] = {
      control: { type: "object" },
      description: "Dropdown focus style configuration",
      table: { category: config.category },
      name: "focusStyle",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownInvalid`] = {
      control: { type: "boolean" },
      description: "Dropdown has validation error",
      table: { category: config.category },
      name: "invalid",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownRounded`] = {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
      description: "Dropdown corner radius",
      table: { category: config.category },
      name: "rounded",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownSize`] = {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
      description: "Dropdown size",
      table: { category: config.category },
      name: "size",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownSpacing`] = {
      control: { type: "select" },
      options: ["compact", "standard", "spacious"],
      description: "Dropdown spacing",
      table: { category: config.category },
      name: "spacing",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownStyle`] = {
      control: { type: "object" },
      description: "Dropdown inline styles",
      table: { category: config.category },
      name: "style",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownVariant`] = {
      control: { type: "select" },
      options: [
        "solid",
        "outline",
        "underline",
        "solid-outline",
        "solid-underline",
        "ghost",
      ],
      description: "Dropdown variant",
      table: { category: config.category },
      name: "variant",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownLoading`] = {
      control: { type: "boolean" },
      description: "Dropdown loading state",
      table: { category: config.category },
      name: "loading",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownDisabled`] = {
      control: { type: "boolean" },
      description: "Disable dropdown",
      table: { category: config.category },
      name: "disabled",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownAutoFocus`] = {
      control: { type: "boolean" },
      description: "Automatically focus dropdown",
      table: { category: config.category },
      name: "autoFocus",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownAllowClear`] = {
      control: { type: "boolean" },
      description: "Allow clearing the selected value",
      table: { category: config.category },
      name: "allowClear",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownReadOnly`] = {
      control: { type: "boolean" },
      description: "Make dropdown read-only",
      table: { category: config.category },
      name: "readOnly",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownRequired`] = {
      control: { type: "boolean" },
      description: "Dropdown is required",
      table: { category: config.category },
      name: "required",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownValidationRules`] = {
      control: { type: "object" },
      description: "Dropdown validation rules",
      table: { category: config.category },
      name: "validationRules",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownFloatingLabel`] = {
      control: { type: "object" },
      description: "Dropdown floating label configuration",
      table: { category: config.category },
      name: "floatingLabel",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownShowValidationMessage`] = {
      control: { type: "boolean" },
      description: "Show dropdown validation message",
      table: { category: config.category },
      name: "showValidationMessage",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownValue`] = {
      control: { type: "text" },
      description: "Dropdown selected value",
      table: { category: config.category },
      name: "value",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };

    argTypes[`${slotPrefix}DropdownSearchable`] = {
      control: { type: "boolean" },
      description: "Allow searching dropdown options",
      table: { category: config.category },
      name: "searchable",
      if: { arg: `${slotPrefix}Type`, eq: "dropdown" },
    };
  }

  return argTypes;
};

// Generate default args for a slot
export const createSlotDefaultArgs = (
  slotPrefix: string,
  config: SlotControlConfig,
) => {
  const args: any = {};

  args[`${slotPrefix}Type`] = config.defaultType || "none";

  if (config.defaultIcon) {
    args[`${slotPrefix}Size`] = config.defaultIcon.size;
    args[`${slotPrefix}Name`] = config.defaultIcon.name || "star";
    args[`${slotPrefix}Filled`] = config.defaultIcon.filled || false;
  }

  if (config.defaultFlag) {
    args[`${slotPrefix}FlagCode`] = config.defaultFlag.code || "US";
    args[`${slotPrefix}FlagShape`] = config.defaultFlag.shape || "rectangle";
    args[`${slotPrefix}FlagSize`] = config.defaultFlag.size || "base";
  }

  if (config.defaultLoader) {
    args[`${slotPrefix}LoaderName`] = config.defaultLoader.name || "ring";
    args[`${slotPrefix}LoaderSize`] = config.defaultLoader.size || "base";
    args[`${slotPrefix}LoaderColor`] = config.defaultLoader.color || "#000000";
    args[`${slotPrefix}LoaderStrokeWidth`] =
      config.defaultLoader.strokeWidth || 2;
  }

  // Rafiki defaults
  if (config.defaultRafiki) {
    args[`${slotPrefix}RafikiName`] =
      config.defaultRafiki.name || "about_me_rafiki_simple";
    args[`${slotPrefix}RafikiWidth`] = config.defaultRafiki.width;
    args[`${slotPrefix}RafikiHeight`] = config.defaultRafiki.height;
  }

  if (config.defaultFileType) {
    args[`${slotPrefix}FileTypeExtension`] =
      config.defaultFileType.extension || "pdf";
    args[`${slotPrefix}FileTypeSize`] = config.defaultFileType.size || "base";
  }

  if (config.defaultAvatar) {
    args[`${slotPrefix}AvatarName`] = config.defaultAvatar.name || "";
    args[`${slotPrefix}AvatarSrc`] = config.defaultAvatar.src || "";
    args[`${slotPrefix}AvatarSize`] = config.defaultAvatar.size || "base";
    args[`${slotPrefix}AvatarColor`] = config.defaultAvatar.color || "brand";
    args[`${slotPrefix}AvatarShape`] = config.defaultAvatar.shape || "circle";
    args[`${slotPrefix}AvatarVariant`] =
      config.defaultAvatar.variant || "filled";
    args[`${slotPrefix}AvatarAppearance`] =
      config.defaultAvatar.appearance || "strong";
  }

  if (config.defaultBadgeDot) {
    args[`${slotPrefix}BadgeDotVariant`] =
      config.defaultBadgeDot.variant || "solid";
    args[`${slotPrefix}BadgeDotAppearance`] =
      config.defaultBadgeDot.appearance || "strong";
    args[`${slotPrefix}BadgeDotColor`] =
      config.defaultBadgeDot.color || "brand";
    args[`${slotPrefix}BadgeDotSize`] = config.defaultBadgeDot.size || "base";
    args[`${slotPrefix}BadgeDotRingColor`] = config.defaultBadgeDot.RingColor;
    args[`${slotPrefix}BadgeDotAdaptive`] =
      config.defaultBadgeDot.adaptive || false;
    args[`${slotPrefix}BadgeDotClassName`] =
      config.defaultBadgeDot.className || "";
  }

  if (config.defaultBadgeStatusIndicator) {
    args[`${slotPrefix}BadgeStatusIndicatorAppearance`] =
      config.defaultBadgeStatusIndicator.appearance || "strong";
    args[`${slotPrefix}BadgeStatusIndicatorColor`] =
      config.defaultBadgeStatusIndicator.color || "#F59E0B";
    args[`${slotPrefix}BadgeStatusIndicatorSize`] =
      config.defaultBadgeStatusIndicator.size || "base";
    args[`${slotPrefix}BadgeStatusIndicatorStroke`] =
      config.defaultBadgeStatusIndicator.stroke ?? true;
    args[`${slotPrefix}BadgeStatusIndicatorClassName`] =
      config.defaultBadgeStatusIndicator.className || "";
  }

  if (config.defaultBadgeCounter) {
    args[`${slotPrefix}BadgeCounterVariant`] =
      config.defaultBadgeCounter.variant || "solid";
    args[`${slotPrefix}BadgeCounterAppearance`] =
      config.defaultBadgeCounter.appearance || "strong";
    args[`${slotPrefix}BadgeCounterColor`] =
      config.defaultBadgeCounter.color || "#EF4444";
    args[`${slotPrefix}BadgeCounterSize`] =
      config.defaultBadgeCounter.size || "base";
    args[`${slotPrefix}BadgeCounterValue`] =
      config.defaultBadgeCounter.counter || 0;
    args[`${slotPrefix}BadgeCounterMax`] = config.defaultBadgeCounter.max;
    args[`${slotPrefix}BadgeCounterClassName`] =
      config.defaultBadgeCounter.className || "";
  }

  if (config.defaultLabel) {
    // Base badge props
    args[`${slotPrefix}LabelVariant`] = config.defaultLabel.variant || "filled";
    args[`${slotPrefix}LabelAppearance`] =
      config.defaultLabel.appearance || "strong";
    args[`${slotPrefix}LabelColor`] = config.defaultLabel.color || "brand";
    args[`${slotPrefix}LabelSize`] = config.defaultLabel.size || "base";
    args[`${slotPrefix}LabelAdaptive`] = config.defaultLabel.adaptive || false;
    args[`${slotPrefix}LabelClassName`] = config.defaultLabel.className || "";
    args[`${slotPrefix}LabelHasRing`] = config.defaultLabel.hasRing || false;
    args[`${slotPrefix}LabelRingColor`] = config.defaultLabel.ringColor;
    args[`${slotPrefix}LabelPosition`] = config.defaultLabel.position;

    // Label-specific props
    args[`${slotPrefix}LabelCapitalize`] =
      config.defaultLabel.capitalize || false;
    args[`${slotPrefix}LabelText`] = config.defaultLabel.text || "Label";
    args[`${slotPrefix}LabelAlign`] = config.defaultLabel.align || "left";
    args[`${slotPrefix}LabelRequired`] = config.defaultLabel.required || false;
    args[`${slotPrefix}LabelOptional`] = config.defaultLabel.optional || false;
    args[`${slotPrefix}LabelDescription`] =
      config.defaultLabel.description || "";
    args[`${slotPrefix}LabelDisabled`] = config.defaultLabel.disabled || false;
    args[`${slotPrefix}LabelInvalid`] = config.defaultLabel.invalid || false;
  }

  if (config.defaultBadgeLabel) {
    // Base badge props
    args[`${slotPrefix}BadgeLabelVariant`] =
      config.defaultBadgeLabel.variant || "filled";
    args[`${slotPrefix}BadgeLabelAppearance`] =
      config.defaultBadgeLabel.appearance || "strong";
    args[`${slotPrefix}BadgeLabelColor`] =
      config.defaultBadgeLabel.color || "brand";
    args[`${slotPrefix}BadgeLabelSize`] =
      config.defaultBadgeLabel.size || "base";
    args[`${slotPrefix}BadgeLabelAdaptive`] =
      config.defaultBadgeLabel.adaptive || false;
    args[`${slotPrefix}BadgeLabelClassName`] =
      config.defaultBadgeLabel.className || "";
    args[`${slotPrefix}BadgeLabelHasRing`] =
      config.defaultBadgeLabel.hasRing || false;
    args[`${slotPrefix}BadgeLabelRingColor`] =
      config.defaultBadgeLabel.ringColor;
    args[`${slotPrefix}BadgeLabelPosition`] = config.defaultBadgeLabel.position;

    // Label-specific props
    args[`${slotPrefix}BadgeLabelCapitalize`] =
      config.defaultBadgeLabel.capitalize || false;
    args[`${slotPrefix}BadgeLabelText`] =
      config.defaultBadgeLabel.text || "Label";
    args[`${slotPrefix}BadgeLabelDisabled`] =
      config.defaultBadgeLabel.disabled || false;
  }

  if (config.defaultLogo) {
    args[`${slotPrefix}LogoName`] = config.defaultLogo.name || "github";
    args[`${slotPrefix}LogoSize`] = config.defaultLogo.size || "md";
  }

  if (config.defaultColorLogo || config.enabledTypes?.includes("color-logo")) {
    args[`${slotPrefix}ColorLogoName`] =
      config.defaultColorLogo?.name || "google";
    args[`${slotPrefix}ColorLogoSize`] = config.defaultColorLogo?.size || "md";
  }

  if (config.defaultEmoji || config.enabledTypes?.includes("emoji")) {
    args[`${slotPrefix}EmojiName`] = config.defaultEmoji?.name || "waving_hand";
    args[`${slotPrefix}EmojiSize`] = config.defaultEmoji?.size || "medium";
  }

  if (config.defaultRadioButton) {
    args[`${slotPrefix}RadioLabel`] =
      config.defaultRadioButton.label || "Option";
    args[`${slotPrefix}RadioChecked`] =
      config.defaultRadioButton.checked || false;
    args[`${slotPrefix}RadioDisabled`] =
      config.defaultRadioButton.disabled || false;
    args[`${slotPrefix}RadioSize`] = config.defaultRadioButton.size || "base";
  }

  if (config.defaultCheckbox) {
    args[`${slotPrefix}CheckboxLabel`] =
      config.defaultCheckbox.label || "Option";
    args[`${slotPrefix}CheckboxChecked`] =
      config.defaultCheckbox.checked || false;
    args[`${slotPrefix}CheckboxDisabled`] =
      config.defaultCheckbox.disabled || false;
    args[`${slotPrefix}CheckboxIndeterminate`] =
      config.defaultCheckbox.indeterminate || false;
    args[`${slotPrefix}CheckboxSize`] = config.defaultCheckbox.size || "base";
  }

  if (config.defaultButton) {
    args[`${slotPrefix}ButtonLabel`] = config.defaultButton.label;
    args[`${slotPrefix}ButtonVariant`] =
      config.defaultButton.variant || "filled";
    args[`${slotPrefix}ButtonAppearance`] =
      config.defaultButton.appearance || "strong";
    args[`${slotPrefix}ButtinteractionVariantVariant`] =
      config.defaultButton.interactionVariant || "none";
    args[`${slotPrefix}ButtonColor`] = config.defaultButton.color || "brand";
    args[`${slotPrefix}ButtonSize`] = config.defaultButton.size || "base";
    args[`${slotPrefix}ButtonDisabled`] =
      config.defaultButton.disabled || false;
    args[`${slotPrefix}ButtonLoading`] = config.defaultButton.loading || false;
    args[`${slotPrefix}ButtonClassName`] = config.defaultButton.className || "";
    args[`${slotPrefix}ButtonPrefix`] = config.defaultButton.prefix;
    args[`${slotPrefix}ButtonSuffix`] = config.defaultButton.suffix;
  }

  if (config.defaultProgress) {
    args[`${slotPrefix}ProgressValue`] = config.defaultProgress.value || 0;
    args[`${slotPrefix}ProgressMax`] = config.defaultProgress.max || 100;
    args[`${slotPrefix}ProgressSize`] = config.defaultProgress.size || "base";
    args[`${slotPrefix}ProgressVariant`] =
      config.defaultProgress.variant || "filled";
    args[`${slotPrefix}ProgressAppearance`] =
      config.defaultProgress.appearance || "soft";
    args[`${slotPrefix}ProgressType`] =
      config.defaultProgress.type || "determinate";
    args[`${slotPrefix}ProgressOrientation`] =
      config.defaultProgress.orientation || "horizontal";
    args[`${slotPrefix}ProgressDisabled`] =
      config.defaultProgress.disabled || false;
    args[`${slotPrefix}ProgressAdaptive`] =
      config.defaultProgress.adaptive || false;
    args[`${slotPrefix}ProgressValuePosition`] =
      config.defaultProgress.valuePosition || "none";
    args[`${slotPrefix}ProgressValueAlignment`] =
      config.defaultProgress.valueAlignment || "end";
    args[`${slotPrefix}ProgressShowValue`] =
      config.defaultProgress.showValue || false;
    args[`${slotPrefix}ProgressLabel`] = config.defaultProgress.label || "";
    args[`${slotPrefix}ProgressLabelPosition`] =
      config.defaultProgress.labelPosition || "none";
    args[`${slotPrefix}ProgressHelperText`] =
      config.defaultProgress.helperText || "";
    args[`${slotPrefix}ProgressHelperTextPosition`] =
      config.defaultProgress.helperTextPosition || "none";
    args[`${slotPrefix}ProgressAnimated`] =
      config.defaultProgress.animated || true;
    args[`${slotPrefix}ProgressAnimationDuration`] =
      config.defaultProgress.animationDuration || 300;
  }

  if (config.defaultIndeterminateProgress) {
    args[`${slotPrefix}IndeterminateProgressSize`] =
      config.defaultIndeterminateProgress.size || "base";
    args[`${slotPrefix}IndeterminateProgressVariant`] =
      config.defaultIndeterminateProgress.variant || "filled";
    args[`${slotPrefix}IndeterminateProgressAppearance`] =
      config.defaultIndeterminateProgress.appearance || "soft";
    args[`${slotPrefix}IndeterminateProgressOrientation`] =
      config.defaultIndeterminateProgress.orientation || "horizontal";
    args[`${slotPrefix}IndeterminateProgressDisabled`] =
      config.defaultIndeterminateProgress.disabled || false;
    args[`${slotPrefix}IndeterminateProgressAdaptive`] =
      config.defaultIndeterminateProgress.adaptive || false;
    args[`${slotPrefix}IndeterminateProgressLabel`] =
      config.defaultIndeterminateProgress.label || "";
    args[`${slotPrefix}IndeterminateProgressLabelPosition`] =
      config.defaultIndeterminateProgress.labelPosition || "none";
    args[`${slotPrefix}IndeterminateProgressHelperText`] =
      config.defaultIndeterminateProgress.helperText || "";
    args[`${slotPrefix}IndeterminateProgressHelperTextPosition`] =
      config.defaultIndeterminateProgress.helperTextPosition || "none";
    args[`${slotPrefix}IndeterminateProgressAnimationDuration`] =
      config.defaultIndeterminateProgress.animationDuration || 1500;
  }

  if (config.defaultCircularProgress) {
    args[`${slotPrefix}CircularProgressValue`] =
      config.defaultCircularProgress.value || 0;
    args[`${slotPrefix}CircularProgressMax`] =
      config.defaultCircularProgress.max || 100;
    args[`${slotPrefix}CircularProgressSize`] =
      config.defaultCircularProgress.size || "base";
    args[`${slotPrefix}CircularProgressVariant`] =
      config.defaultCircularProgress.variant || "filled";
    args[`${slotPrefix}CircularProgressAppearance`] =
      config.defaultCircularProgress.appearance || "soft";
    args[`${slotPrefix}CircularProgressDisabled`] =
      config.defaultCircularProgress.disabled || false;
    args[`${slotPrefix}CircularProgressAdaptive`] =
      config.defaultCircularProgress.adaptive || false;
    args[`${slotPrefix}CircularProgressValueText`] =
      config.defaultCircularProgress.valueText || "";
    args[`${slotPrefix}CircularProgressShowValue`] =
      config.defaultCircularProgress.showValue || false;
    args[`${slotPrefix}CircularProgressLabel`] =
      config.defaultCircularProgress.label || "";
    args[`${slotPrefix}CircularProgressLabelPosition`] =
      config.defaultCircularProgress.labelPosition || "none";
    args[`${slotPrefix}CircularProgressHelperText`] =
      config.defaultCircularProgress.helperText || "";
    args[`${slotPrefix}CircularProgressHelperTextPosition`] =
      config.defaultCircularProgress.helperTextPosition || "none";
    args[`${slotPrefix}CircularProgressThickness`] =
      config.defaultCircularProgress.thickness;
    args[`${slotPrefix}CircularProgressIndeterminate`] =
      config.defaultCircularProgress.indeterminate || false;
    args[`${slotPrefix}CircularProgressAnimationDuration`] =
      config.defaultCircularProgress.animationDuration || 1500;
  }
  if (config.defaultInlineMessage) {
    args[`${slotPrefix}InlineMessageDescription`] =
      config.defaultInlineMessage.description || "Inline message";
    args[`${slotPrefix}InlineMessageState`] =
      config.defaultInlineMessage.state || "neutral";
    args[`${slotPrefix}InlineMessageSize`] =
      config.defaultInlineMessage.size || "base";
    args[`${slotPrefix}InlineMessageIconPosition`] =
      config.defaultInlineMessage.iconPosition || "left";
    args[`${slotPrefix}InlineMessageFont`] =
      config.defaultInlineMessage.font || "inter";
  }

  if (config.defaultBadgeRibbon) {
    args[`${slotPrefix}BadgeRibbonVariant`] =
      config.defaultBadgeRibbon.variant || "filled";
    args[`${slotPrefix}BadgeRibbonAppearance`] =
      config.defaultBadgeRibbon.appearance || "strong";
    args[`${slotPrefix}BadgeRibbonColor`] =
      config.defaultBadgeRibbon.color || "brand";
    args[`${slotPrefix}BadgeRibbonSize`] =
      config.defaultBadgeRibbon.size || "base";
    args[`${slotPrefix}BadgeRibbonCapitalize`] =
      config.defaultBadgeRibbon.capitalize || false;
    args[`${slotPrefix}BadgeRibbonLabel`] =
      config.defaultBadgeRibbon.label || "Ribbon";
    args[`${slotPrefix}BadgeRibbonAlignment`] =
      config.defaultBadgeRibbon.alignment || "left";
    args[`${slotPrefix}BadgeRibbonTail`] =
      config.defaultBadgeRibbon.tail || false;
    args[`${slotPrefix}BadgeRibbonRotate`] =
      config.defaultBadgeRibbon.rotate || "0deg";
    args[`${slotPrefix}BadgeRibbonPointer`] =
      config.defaultBadgeRibbon.pointer || "none";
    args[`${slotPrefix}BadgeRibbonHasRing`] =
      config.defaultBadgeRibbon.hasRing || false;
    args[`${slotPrefix}BadgeRibbonRingWidth`] =
      config.defaultBadgeRibbon.ringWidth;
    args[`${slotPrefix}BadgeRibbonRingColor`] =
      config.defaultBadgeRibbon.ringColor;
    args[`${slotPrefix}BadgeRibbonPosition`] =
      config.defaultBadgeRibbon.position;
  }

  if (config.defaultBadgeCorner) {
    args[`${slotPrefix}BadgeCornerVariant`] =
      config.defaultBadgeCorner.variant || "filled";
    args[`${slotPrefix}BadgeCornerAppearance`] =
      config.defaultBadgeCorner.appearance || "strong";
    args[`${slotPrefix}BadgeCornerColor`] =
      config.defaultBadgeCorner.color || "brand";
    args[`${slotPrefix}BadgeCornerSize`] =
      config.defaultBadgeCorner.size || "base";
    args[`${slotPrefix}BadgeCornerCapitalize`] =
      config.defaultBadgeCorner.capitalize || false;
    args[`${slotPrefix}BadgeCornerLabel`] =
      config.defaultBadgeCorner.label || "Corner";
    args[`${slotPrefix}BadgeCornerSubtitle`] =
      config.defaultBadgeCorner.subtitle || "";
    args[`${slotPrefix}BadgeCornerRotate`] =
      config.defaultBadgeCorner.rotate || "0deg";
    args[`${slotPrefix}BadgeCornerHasRing`] =
      config.defaultBadgeCorner.hasRing || false;
    args[`${slotPrefix}BadgeCornerRingWidth`] =
      config.defaultBadgeCorner.ringWidth;
    args[`${slotPrefix}BadgeCornerRingColor`] =
      config.defaultBadgeCorner.ringColor;
    args[`${slotPrefix}BadgeCornerPosition`] =
      config.defaultBadgeCorner.position;
  }

  if (config.defaultLink) {
    args[`${slotPrefix}LinkHref`] = config.defaultLink.href || "#";
    args[`${slotPrefix}LinkText`] = config.defaultLink.text || "Link";
    args[`${slotPrefix}LinkVariant`] = config.defaultLink.variant || "none";
    args[`${slotPrefix}LinkAppearance`] =
      config.defaultLink.appearance || "strong";
    args[`${slotPrefix}LinkSize`] = config.defaultLink.size || "base";
    args[`${slotPrefix}LinkColor`] = config.defaultLink.color || "brand";
    args[`${slotPrefix}LinkExternal`] = config.defaultLink.external || false;
    args[`${slotPrefix}LinkDisabled`] = config.defaultLink.disabled || false;
    args[`${slotPrefix}LinkVisited`] = config.defaultLink.visited || false;
    args[`${slotPrefix}LinkIconPosition`] =
      config.defaultLink.iconPosition || "start";
  }

  if (config.defaultColorSwatch) {
    args[`${slotPrefix}ColorSwatchColor`] =
      config.defaultColorSwatch.color || "brand";
    args[`${slotPrefix}ColorSwatchSize`] =
      config.defaultColorSwatch.size || "base";
    args[`${slotPrefix}ColorSwatchShape`] =
      config.defaultColorSwatch.shape || "1:1";
    args[`${slotPrefix}ColorSwatchVariant`] =
      config.defaultColorSwatch.variant || "solid";
    args[`${slotPrefix}ColorSwatchAppearance`] =
      config.defaultColorSwatch.appearance || "classic";
    args[`${slotPrefix}ColorSwatchLabel`] =
      config.defaultColorSwatch.label || "";
    args[`${slotPrefix}ColorSwatchSelected`] =
      config.defaultColorSwatch.selected || false;
    args[`${slotPrefix}ColorSwatchDisabled`] =
      config.defaultColorSwatch.disabled || false;
    args[`${slotPrefix}ColorSwatchAdaptive`] =
      config.defaultColorSwatch.adaptive || false;
    args[`${slotPrefix}ColorSwatchClassName`] =
      config.defaultColorSwatch.className || "";
  }

  if (config.defaultKeyboardKey) {
    args[`${slotPrefix}KeyboardKeySize`] =
      config.defaultKeyboardKey.size || "base";
    args[`${slotPrefix}KeyboardKeyVariant`] =
      config.defaultKeyboardKey.variant || "solid";
    args[`${slotPrefix}KeyboardKeyAppearance`] =
      config.defaultKeyboardKey.appearance || "strong";
    args[`${slotPrefix}KeyboardKeyShadowDirection`] =
      config.defaultKeyboardKey.shadowDirection || "none";
    args[`${slotPrefix}KeyboardKeyFullWidth`] = args[
      `${slotPrefix}KeyboardKeyLabel`
    ] = config.defaultKeyboardKey.label || "";
    args[`${slotPrefix}KeyboardKeyKeys`] = config.defaultKeyboardKey.keys || "";
    args[`${slotPrefix}KeyboardKeyCtag`] = config.defaultKeyboardKey.ctag || "";
    args[`${slotPrefix}KeyboardKeyAriaLabel`] =
      config.defaultKeyboardKey.ariaLabel || "";
    args[`${slotPrefix}KeyboardKeyClassName`] =
      config.defaultKeyboardKey.className || "";
  }

  // Text defaults
  if (config.defaultText) {
    const text = config.defaultText;
    args[`${slotPrefix}TextChildren`] = text.children || "";
    args[`${slotPrefix}TextSize`] = text.size || "base";
    args[`${slotPrefix}TextWeight`] = text.weight || "regular";
    args[`${slotPrefix}TextAlign`] = text.align || "start";
    args[`${slotPrefix}TextWrap`] = text.wrap ?? false;
    args[`${slotPrefix}TextTruncate`] = text.truncate ?? false;
    args[`${slotPrefix}TextItalic`] = text.italic ?? false;
    args[`${slotPrefix}TextUnderline`] = text.underline ?? false;
    args[`${slotPrefix}TextStrikethough`] = text.strikethough ?? false;
    args[`${slotPrefix}TextBlock`] = text.block ?? false;
    args[`${slotPrefix}TextAdaptive`] = text.adaptive ?? false;
    args[`${slotPrefix}TextClassName`] = text.className || "";
    args[`${slotPrefix}TextColor`] = text.color || "neutral";
  }

  // Dropdown defaults
  if (config.defaultDropdown) {
    args[`${slotPrefix}DropdownPlaceholder`] =
      config.defaultDropdown.placeholder || "Select...";
    args[`${slotPrefix}DropdownControlStatus`] =
      config.defaultDropdown.controlStatus;
    args[`${slotPrefix}DropdownClassName`] =
      config.defaultDropdown.className || "";
    args[`${slotPrefix}DropdownColor`] =
      config.defaultDropdown.color || "brand";
    args[`${slotPrefix}DropdownAs`] = config.defaultDropdown.as || "div";
    args[`${slotPrefix}DropdownCTag`] = config.defaultDropdown.cTag || "";
    args[`${slotPrefix}DropdownListbox`] = config.defaultDropdown.listbox;
    args[`${slotPrefix}DropdownFullWidth`] =
      config.defaultDropdown.fullWidth ?? false;
    args[`${slotPrefix}DropdownAppearance`] =
      config.defaultDropdown.appearance || "dualTone";
    args[`${slotPrefix}DropdownFocused`] = config.defaultDropdown.focused;
    args[`${slotPrefix}DropdownHovered`] = config.defaultDropdown.hovered;
    args[`${slotPrefix}DropdownSelected`] = config.defaultDropdown.selected;
    args[`${slotPrefix}DropdownFocusStyle`] = config.defaultDropdown.focusStyle;
    args[`${slotPrefix}DropdownInvalid`] =
      config.defaultDropdown.invalid ?? false;
    args[`${slotPrefix}DropdownRounded`] = config.defaultDropdown.rounded;
    args[`${slotPrefix}DropdownSize`] = config.defaultDropdown.size || "base";
    args[`${slotPrefix}DropdownSpacing`] = config.defaultDropdown.spacing;
    args[`${slotPrefix}DropdownStyle`] = config.defaultDropdown.style;
    args[`${slotPrefix}DropdownVariant`] = config.defaultDropdown.variant;
    args[`${slotPrefix}DropdownLoading`] =
      config.defaultDropdown.loading ?? false;
    args[`${slotPrefix}DropdownDisabled`] =
      config.defaultDropdown.disabled ?? false;
    args[`${slotPrefix}DropdownAutoFocus`] =
      config.defaultDropdown.autoFocus ?? false;
    args[`${slotPrefix}DropdownAllowClear`] =
      config.defaultDropdown.allowClear ?? false;
    args[`${slotPrefix}DropdownReadOnly`] =
      config.defaultDropdown.readOnly ?? false;
    args[`${slotPrefix}DropdownRequired`] =
      config.defaultDropdown.required ?? false;
    args[`${slotPrefix}DropdownValidationRules`] =
      config.defaultDropdown.validationRules;
    args[`${slotPrefix}DropdownFloatingLabel`] =
      config.defaultDropdown.floatingLabel;
    args[`${slotPrefix}DropdownShowValidationMessage`] =
      config.defaultDropdown.showValidationMessage ?? false;
    args[`${slotPrefix}DropdownValue`] = config.defaultDropdown.value;
    args[`${slotPrefix}DropdownSearchable`] =
      config.defaultDropdown.searchable ?? false;
  }

  return args;
};

// Build slot object from individual controls
export const buildSlotFromArgs = (args: any, slotPrefix: string) => {
  const type = args[`${slotPrefix}Type`];

  if (!type || type === "none") return undefined;

  if (type === "icon") {
    const name = args[`${slotPrefix}Name`];
    if (!name) return undefined;

    return {
      type: "icon",
      name,
      size: args[`${slotPrefix}Size`],
      filled: args[`${slotPrefix}Filled`] || false,
    };
  }

  if (type === "flag") {
    return {
      type: "flag",
      code: args[`${slotPrefix}FlagCode`] || "US",
      shape: args[`${slotPrefix}FlagShape`] || "rectangle",
      size: args[`${slotPrefix}FlagSize`] || "base",
    };
  }

  if (type === "loader") {
    const loaderSlot: any = {
      type: "loader",
      name: args[`${slotPrefix}LoaderName`] || "ring",
    };

    if (args[`${slotPrefix}LoaderSize`]) {
      loaderSlot.size = args[`${slotPrefix}LoaderSize`];
    }
    if (args[`${slotPrefix}LoaderColor`]) {
      loaderSlot.color = args[`${slotPrefix}LoaderColor`];
    }
    if (args[`${slotPrefix}LoaderStrokeWidth`] !== undefined) {
      loaderSlot.strokeWidth = args[`${slotPrefix}LoaderStrokeWidth`];
    }

    return loaderSlot;
  }

  // Rafiki illustration construction
  if (type === "rafiki") {
    const name = args[`${slotPrefix}RafikiName`];
    if (!name) return undefined;

    return {
      type: "rafiki",
      name,
      width: args[`${slotPrefix}RafikiWidth`],
      height: args[`${slotPrefix}RafikiHeight`],
    };
  }

  if (type === "file-type") {
    const extension = args[`${slotPrefix}FileTypeExtension`];
    if (!extension) return undefined;

    return {
      type: "file-type",
      extension,
      size: args[`${slotPrefix}FileTypeSize`] || "base",
    };
  }

  if (type === "avatar") {
    return {
      type: "avatar",
      name: args[`${slotPrefix}AvatarName`] || undefined,
      src: undefined,
      img: args[`${slotPrefix}AvatarSrc`]
        ? { src: args[`${slotPrefix}AvatarSrc`] }
        : undefined,
      size: args[`${slotPrefix}AvatarSize`] || "base",
      color: args[`${slotPrefix}AvatarColor`] || "brand",
      shape: args[`${slotPrefix}AvatarShape`] || "circle",
      variant: args[`${slotPrefix}AvatarVariant`] || "filled",
      appearance: args[`${slotPrefix}AvatarAppearance`] || "onColor",
    };
  }

  if (type === "badge-dot") {
    return {
      type: "badge-dot",
      variant: args[`${slotPrefix}BadgeDotVariant`] || "solid",
      appearance: args[`${slotPrefix}BadgeDotAppearance`] || "strong",
      color: args[`${slotPrefix}BadgeDotColor`] || "brand",
      size: args[`${slotPrefix}BadgeDotSize`] || "base",
      ringColor: args[`${slotPrefix}BadgeDotRingColor`],
      adaptive: args[`${slotPrefix}BadgeDotAdaptive`] || false,
      className: args[`${slotPrefix}BadgeDotClassName`],
    };
  }

  if (type === "badge-status-indicator") {
    return {
      type: "badge-status-indicator",
      appearance:
        args[`${slotPrefix}BadgeStatusIndicatorAppearance`] || "strong",
      color: args[`${slotPrefix}BadgeStatusIndicatorColor`] || "brand",
      size: args[`${slotPrefix}BadgeStatusIndicatorSize`] || "base",
      stroke: args[`${slotPrefix}BadgeStatusIndicatorStroke`],
      adaptive: args[`${slotPrefix}BadgeStatusIndicatorAdaptive`] || true,
      iconSlot: {
        type: "icon",
        library: "material-icons",
        name: "schedule",
        style: "outlined",
        color: "currentColor",
      },
      className: args[`${slotPrefix}BadgeStatusIndicatorClassName`],
    };
  }

  if (type === "badge-counter") {
    return {
      type: "badge-counter",
      variant: args[`${slotPrefix}BadgeCounterVariant`] || "filled",
      appearance: args[`${slotPrefix}BadgeCounterAppearance`] || "strong",
      color: args[`${slotPrefix}BadgeCounterColor`] || "brand",
      size: args[`${slotPrefix}BadgeCounterSize`] || "base",
      counter: args[`${slotPrefix}BadgeCounterValue`] || 0,
      max: args[`${slotPrefix}BadgeCounterMax`],
      adaptive: args[`${slotPrefix}BadgeCounterAdaptive`] || true,
      className: args[`${slotPrefix}BadgeCounterClassName`],
    };
  }

  if (type === "label") {
    const text = args[`${slotPrefix}LabelText`];
    if (!text) return undefined;

    return {
      type: "label",
      // Base badge props
      variant: args[`${slotPrefix}LabelVariant`] || "filled",
      appearance: args[`${slotPrefix}LabelAppearance`] || "strong",
      color: args[`${slotPrefix}LabelColor`] || "brand",
      size: args[`${slotPrefix}LabelSize`] || "base",
      adaptive: args[`${slotPrefix}LabelAdaptive`] || false,
      className: args[`${slotPrefix}LabelClassName`] || "",
      hasRing: args[`${slotPrefix}LabelHasRing`] || false,
      ringColor: args[`${slotPrefix}LabelRingColor`],
      position: args[`${slotPrefix}LabelPosition`],

      // Label-specific props
      capitalize: args[`${slotPrefix}LabelCapitalize`] || false,
      text,
      align: args[`${slotPrefix}LabelAlign`] || "left",
      required: args[`${slotPrefix}LabelRequired`] || false,
      optional: args[`${slotPrefix}LabelOptional`] || false,
      description: args[`${slotPrefix}LabelDescription`] || undefined,
      disabled: args[`${slotPrefix}LabelDisabled`] || false,
      invalid: args[`${slotPrefix}LabelInvalid`] || false,
      htmlFor: args[`${slotPrefix}LabelHtmlFor`] || undefined,
    };
  }

  if (type === "badge-label") {
    const text = args[`${slotPrefix}BadgeLabelText`];
    if (!text) return undefined;

    return {
      type: "badge-label",
      // Base badge props
      variant: args[`${slotPrefix}BadgeLabelVariant`] || "solid",
      appearance: args[`${slotPrefix}BadgeLabelAppearance`] || "soft",
      color: args[`${slotPrefix}BadgeLabelColor`] || "brand",
      size: args[`${slotPrefix}BadgeLabelSize`] || "base",
      adaptive: args[`${slotPrefix}BadgeLabelAdaptive`] || false,
      className: args[`${slotPrefix}BadgeLabelClassName`] || "",
      hasRing: args[`${slotPrefix}BadgeLabelHasRing`] || false,
      ringColor: args[`${slotPrefix}BadgeLabelRingColor`],
      position: args[`${slotPrefix}BadgeLabelPosition`],
      prefix: args[`${slotPrefix}BadgeLabelPrefix`],
      suffix: args[`${slotPrefix}BadgeLabelSuffix`],
      // Label-specific props
      capitalize: args[`${slotPrefix}BadgeLabelCapitalize`] || false,
      label: text,
      disabled: args[`${slotPrefix}BadgeLabelDisabled`] || false,
    };
  }

  if (type === "logo") {
    const name = args[`${slotPrefix}LogoName`];
    if (!name) return undefined;

    return {
      type: "logo",
      name,
      width: args[`${slotPrefix}LogoWidth`],
      height: args[`${slotPrefix}LogoHeight`],
      size: args[`${slotPrefix}LogoSize`],
    };
  }

  if (type === "color-logo") {
    const name = args[`${slotPrefix}ColorLogoName`];
    if (!name) return undefined;

    return {
      type: "color-logo",
      name,
      size: args[`${slotPrefix}ColorLogoSize`] || "md",
    };
  }

  if (type === "emoji") {
    const name = args[`${slotPrefix}EmojiName`];
    if (!name) return undefined;

    return {
      type: "emoji",
      name,
      size: args[`${slotPrefix}EmojiSize`] || "medium",
    };
  }

  if (type === "radio-button") {
    return {
      type: "radio-button",
      label: args[`${slotPrefix}RadioLabel`],
      checked: args[`${slotPrefix}RadioChecked`] || false,
      disabled: args[`${slotPrefix}RadioDisabled`] || false,
      size: args[`${slotPrefix}RadioSize`] || "base",
    };
  }

  if (type === "checkbox") {
    return {
      type: "checkbox",
      label: args[`${slotPrefix}CheckboxLabel`],
      checked: args[`${slotPrefix}CheckboxChecked`] || false,
      disabled: args[`${slotPrefix}CheckboxDisabled`] || false,
      indeterminate: args[`${slotPrefix}CheckboxIndeterminate`] || false,
      size: args[`${slotPrefix}CheckboxSize`] || "base",
    };
  }

  if (type === "button") {
    return {
      type: "button",
      label: args[`${slotPrefix}ButtonLabel`],
      variant: args[`${slotPrefix}ButtonVariant`] || "filled",
      appearance: args[`${slotPrefix}ButtonAppearance`] || "strong",
      interactionVariant:
        args[`${slotPrefix}ButtinteractionVariantVariant`] || "none",
      color: args[`${slotPrefix}ButtonColor`] || "brand",
      size: args[`${slotPrefix}ButtonSize`] || "base",
      disabled: args[`${slotPrefix}ButtonDisabled`] || false,
      loading: args[`${slotPrefix}ButtonLoading`] || false,
      adaptive: args[`${slotPrefix}ButtonAdaptive`] || false,
      className: args[`${slotPrefix}ButtonClassName`] || "",
      prefix: args[`${slotPrefix}ButtonPrefix`] || {
        type: "icon",
        name: "@placeholder",
      },
      suffix: args[`${slotPrefix}ButtonSuffix`],
    };
  }

  if (type === "progress") {
    return {
      type: "progress",
      value: args[`${slotPrefix}ProgressValue`] || 0,
      max: args[`${slotPrefix}ProgressMax`] || 100,
      size: args[`${slotPrefix}ProgressSize`] || "base",
      variant: args[`${slotPrefix}ProgressVariant`] || "filled",
      appearance: args[`${slotPrefix}ProgressAppearance`] || "soft",
      progressType: args[`${slotPrefix}ProgressType`] || "determinate",
      orientation: args[`${slotPrefix}ProgressOrientation`] || "horizontal",
      disabled: args[`${slotPrefix}ProgressDisabled`] || false,
      adaptive: args[`${slotPrefix}ProgressAdaptive`] || false,
      valuePosition: args[`${slotPrefix}ProgressValuePosition`] || "none",
      valueAlignment: args[`${slotPrefix}ProgressValueAlignment`] || "end",
      showValue: args[`${slotPrefix}ProgressShowValue`] || false,
      label: args[`${slotPrefix}ProgressLabel`],
      labelPosition: args[`${slotPrefix}ProgressLabelPosition`] || "none",
      helperText: args[`${slotPrefix}ProgressHelperText`],
      helperTextPosition:
        args[`${slotPrefix}ProgressHelperTextPosition`] || "none",
      animated: args[`${slotPrefix}ProgressAnimated`] || true,
      animationDuration: args[`${slotPrefix}ProgressAnimationDuration`] || 300,
    };
  }

  if (type === "inline-message") {
    return {
      type: "inline-message",
      description:
        args[`${slotPrefix}InlineMessageDescription`] || "Inline message",
      state: args[`${slotPrefix}InlineMessageState`] || "neutral",
      size: args[`${slotPrefix}InlineMessageSize`] || "base",
      iconPosition: args[`${slotPrefix}InlineMessageIconPosition`] || "left",
      spaceBetween: args[`${slotPrefix}InlineMessageSpaceBetween`] || "xs",
      font: args[`${slotPrefix}InlineMessageFont`] || "inter",
    };
  }

  if (type === "badge-ribbon") {
    return {
      type: "badge-ribbon",
      variant: args[`${slotPrefix}BadgeRibbonVariant`] || "filled",
      appearance: args[`${slotPrefix}BadgeRibbonAppearance`] || "strong",
      color: args[`${slotPrefix}BadgeRibbonColor`] || "brand",
      size: args[`${slotPrefix}BadgeRibbonSize`] || "base",
      capitalize: args[`${slotPrefix}BadgeRibbonCapitalize`] || false,
      label: args[`${slotPrefix}BadgeRibbonLabel`] || "Ribbon",
      alignment: args[`${slotPrefix}BadgeRibbonAlignment`] || "left",
      tail: args[`${slotPrefix}BadgeRibbonTail`] || false,
      rotate: args[`${slotPrefix}BadgeRibbonRotate`] || "0deg",
      pointer: args[`${slotPrefix}BadgeRibbonPointer`] || "none",
      hasRing: args[`${slotPrefix}BadgeRibbonHasRing`] || false,
      ringWidth: args[`${slotPrefix}BadgeRibbonRingWidth`],
      ringColor: args[`${slotPrefix}BadgeRibbonRingColor`],
      position: args[`${slotPrefix}BadgeRibbonPosition`],
      className: args[`${slotPrefix}BadgeRibbonClassName`],
    };
  }

  if (type === "badge-corner") {
    return {
      type: "badge-corner",
      variant: args[`${slotPrefix}BadgeCornerVariant`] || "filled",
      appearance: args[`${slotPrefix}BadgeCornerAppearance`] || "strong",
      color: args[`${slotPrefix}BadgeCornerColor`] || "brand",
      size: args[`${slotPrefix}BadgeCornerSize`] || "base",
      capitalize: args[`${slotPrefix}BadgeCornerCapitalize`] || false,
      label: args[`${slotPrefix}BadgeCornerLabel`] || "Corner",
      subtitle: args[`${slotPrefix}BadgeCornerSubtitle`] || "",
      rotate: args[`${slotPrefix}BadgeCornerRotate`] || "0deg",
      hasRing: args[`${slotPrefix}BadgeCornerHasRing`] || false,
      ringWidth: args[`${slotPrefix}BadgeCornerRingWidth`],
      ringColor: args[`${slotPrefix}BadgeCornerRingColor`],
      position: args[`${slotPrefix}BadgeCornerPosition`],
      className: args[`${slotPrefix}BadgeCornerClassName`],
    };
  }

  if (type === "link") {
    return {
      type: "link",
      href: args[`${slotPrefix}LinkHref`] || "#",
      text: args[`${slotPrefix}LinkText`] || "Link",
      variant: args[`${slotPrefix}LinkVariant`],
      appearance: args[`${slotPrefix}LinkAppearance`],
      size: args[`${slotPrefix}LinkSize`],
      color: args[`${slotPrefix}LinkColor`],
      external: args[`${slotPrefix}LinkExternal`],
      disabled: args[`${slotPrefix}LinkDisabled`],
      visited: args[`${slotPrefix}LinkVisited`],
      iconPosition: args[`${slotPrefix}LinkIconPosition`],
    };
  }

  if (type === "color-swatch") {
    return {
      type: "color-swatch",
      color: args[`${slotPrefix}ColorSwatchColor`] || "brand",
      size: args[`${slotPrefix}ColorSwatchSize`] || "base",
      shape: args[`${slotPrefix}ColorSwatchShape`] || "1:1",
      variant: args[`${slotPrefix}ColorSwatchVariant`] || "solid",
      appearance: args[`${slotPrefix}ColorSwatchAppearance`] || "classic",
      label: args[`${slotPrefix}ColorSwatchLabel`],
      selected: args[`${slotPrefix}ColorSwatchSelected`] || false,
      disabled: args[`${slotPrefix}ColorSwatchDisabled`] || false,
      adaptive: args[`${slotPrefix}ColorSwatchAdaptive`] || false,
      className: args[`${slotPrefix}ColorSwatchClassName`] || "",
    };
  }

  if (type === "kbd") {
    return {
      type: "kbd",
      size: args[`${slotPrefix}KeyboardKeySize`] || "base",
      variant: args[`${slotPrefix}KeyboardKeyVariant`] || "solid",
      appearance: args[`${slotPrefix}KeyboardKeyAppearance`] || "strong",
      shadowDirection:
        args[`${slotPrefix}KeyboardKeyShadowDirection`] || "none",
      label: args[`${slotPrefix}KeyboardKeyLabel`] || "K",
      keys: args[`${slotPrefix}KeyboardKeyKeys`],
      ctag: args[`${slotPrefix}KeyboardKeyCtag`],
      ariaLabel: args[`${slotPrefix}KeyboardKeyAriaLabel`],
      className: args[`${slotPrefix}KeyboardKeyClassName`] || "",
    };
  }

  if (type === "text") {
    return {
      type: "text",
      children: args[`${slotPrefix}TextChildren`],
      size: args[`${slotPrefix}TextSize`] || "base",
      weight: args[`${slotPrefix}TextWeight`] || "regular",
      align: args[`${slotPrefix}TextAlign`] || "start",
      wrap: args[`${slotPrefix}TextWrap`] || false,
      truncate: args[`${slotPrefix}TextTruncate`] || false,
      italic: args[`${slotPrefix}TextItalic`] || false,
      underline: args[`${slotPrefix}TextUnderline`] || false,
      strikethrough: args[`${slotPrefix}TextStrikethough`] || false,
      block: args[`${slotPrefix}TextBlock`] || false,
      adaptive: args[`${slotPrefix}TextAdaptive`] || false,
      className: args[`${slotPrefix}TextClassName`] || "",
      color: args[`${slotPrefix}TextColor`] || "neutral",
      cTag: args[`${slotPrefix}CTag`],
    };
  }

  if (type === "dropdown") {
    return {
      type: "dropdown",
      placeholder: args[`${slotPrefix}DropdownPlaceholder`] || "Select...",
      controlStatus: args[`${slotPrefix}DropdownControlStatus`],
      className: args[`${slotPrefix}DropdownClassName`] || "",
      color: args[`${slotPrefix}DropdownColor`],
      as: args[`${slotPrefix}DropdownAs`],
      cTag: args[`${slotPrefix}DropdownCTag`] || "",
      listbox: args[`${slotPrefix}DropdownListbox`],
      fullWidth: args[`${slotPrefix}DropdownFullWidth`] ?? false,
      appearance: args[`${slotPrefix}DropdownAppearance`] || "dualTone",
      focused: args[`${slotPrefix}DropdownFocused`],
      hovered: args[`${slotPrefix}DropdownHovered`],
      selected: args[`${slotPrefix}DropdownSelected`],
      focusStyle: args[`${slotPrefix}DropdownFocusStyle`],
      invalid: args[`${slotPrefix}DropdownInvalid`] ?? false,
      rounded: args[`${slotPrefix}DropdownRounded`],
      size: args[`${slotPrefix}DropdownSize`] || "base",
      spacing: args[`${slotPrefix}DropdownSpacing`],
      style: args[`${slotPrefix}DropdownStyle`],
      variant: args[`${slotPrefix}DropdownVariant`],
      loading: args[`${slotPrefix}DropdownLoading`] ?? false,
      disabled: args[`${slotPrefix}DropdownDisabled`] ?? false,
      autoFocus: args[`${slotPrefix}DropdownAutoFocus`] ?? false,
      allowClear: args[`${slotPrefix}DropdownAllowClear`] ?? false,
      readOnly: args[`${slotPrefix}DropdownReadOnly`] ?? false,
      required: args[`${slotPrefix}DropdownRequired`] ?? false,
      validationRules: args[`${slotPrefix}DropdownValidationRules`],
      floatingLabel: args[`${slotPrefix}DropdownFloatingLabel`],
      showValidationMessage:
        args[`${slotPrefix}DropdownShowValidationMessage`] ?? false,
      value: args[`${slotPrefix}DropdownValue`] || "",
      searchable: args[`${slotPrefix}DropdownSearchable`] ?? false,
    };
  }

  return undefined;
};

// Hide slot controls in argTypes
export const hideSlotControls = (slotPrefix: string): ArgTypes => {
  return {
    [`${slotPrefix}Type`]: { table: { disable: true } },
    [`${slotPrefix}Size`]: { table: { disable: true } },
    [`${slotPrefix}Name`]: { table: { disable: true } },
    [`${slotPrefix}Filled`]: { table: { disable: true } },
    [`${slotPrefix}FlagCode`]: { table: { disable: true } },
    [`${slotPrefix}FlagShape`]: { table: { disable: true } },
    [`${slotPrefix}FlagSize`]: { table: { disable: true } },
    [`${slotPrefix}LoaderName`]: { table: { disable: true } },
    [`${slotPrefix}LoaderSize`]: { table: { disable: true } },
    [`${slotPrefix}LoaderColor`]: { table: { disable: true } },
    [`${slotPrefix}LoaderStrokeWidth`]: { table: { disable: true } },
    [`${slotPrefix}RafikiName`]: { table: { disable: true } },
    [`${slotPrefix}RafikiWidth`]: { table: { disable: true } },
    [`${slotPrefix}RafikiHeight`]: { table: { disable: true } },
    [`${slotPrefix}FileTypeExtension`]: { table: { disable: true } },
    [`${slotPrefix}FileTypeSize`]: { table: { disable: true } },
    [`${slotPrefix}AvatarName`]: { table: { disable: true } },
    [`${slotPrefix}AvatarSrc`]: { table: { disable: true } },
    [`${slotPrefix}AvatarSize`]: { table: { disable: true } },
    [`${slotPrefix}AvatarColor`]: { table: { disable: true } },
    [`${slotPrefix}AvatarShape`]: { table: { disable: true } },
    [`${slotPrefix}AvatarVariant`]: { table: { disable: true } },
    [`${slotPrefix}AvatarAppearance`]: { table: { disable: true } },
    [`${slotPrefix}BadgeDotVariant`]: { table: { disable: true } },
    [`${slotPrefix}BadgeDotAppearance`]: { table: { disable: true } },
    [`${slotPrefix}BadgeDotColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeDotSize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeDotRingColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeDotAdaptive`]: { table: { disable: true } },
    [`${slotPrefix}BadgeDotClassName`]: { table: { disable: true } },
    [`${slotPrefix}BadgeStatusIndicatorAppearance`]: {
      table: { disable: true },
    },
    [`${slotPrefix}BadgeStatusIndicatorColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeStatusIndicatorSize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeStatusIndicatorStroke`]: { table: { disable: true } },
    [`${slotPrefix}BadgeStatusIndicatorClassName`]: {
      table: { disable: true },
    },
    [`${slotPrefix}BadgeCounterVariant`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCounterAppearance`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCounterColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCounterSize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCounterValue`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCounterMax`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCounterClassName`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonVariant`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonAppearance`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonSize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonCapitalize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonLabel`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonAlignment`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonTail`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonRotate`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonPointer`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonHasRing`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonRingWidth`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonRingColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonPosition`]: { table: { disable: true } },
    [`${slotPrefix}BadgeRibbonClassName`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerVariant`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerAppearance`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerSize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerCapitalize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerLabel`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerSubtitle`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerRotate`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerHasRing`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerRingWidth`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerRingColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerPosition`]: { table: { disable: true } },
    [`${slotPrefix}BadgeCornerClassName`]: { table: { disable: true } },
    [`${slotPrefix}LabelText`]: { table: { disable: true } },
    [`${slotPrefix}LabelVariant`]: { table: { disable: true } },
    [`${slotPrefix}LabelAppearance`]: { table: { disable: true } },
    [`${slotPrefix}LabelColor`]: { table: { disable: true } },
    [`${slotPrefix}LabelSize`]: { table: { disable: true } },
    [`${slotPrefix}LabelAdaptive`]: { table: { disable: true } },
    [`${slotPrefix}LabelClassName`]: { table: { disable: true } },
    [`${slotPrefix}LabelHasRing`]: { table: { disable: true } },
    [`${slotPrefix}LabelRingColor`]: { table: { disable: true } },
    [`${slotPrefix}LabelPosition`]: { table: { disable: true } },
    [`${slotPrefix}LabelCapitalize`]: { table: { disable: true } },
    [`${slotPrefix}LabelText`]: { table: { disable: true } },
    [`${slotPrefix}LabelAlign`]: { table: { disable: true } },
    [`${slotPrefix}LabelRequired`]: { table: { disable: true } },
    [`${slotPrefix}LabelOptional`]: { table: { disable: true } },
    [`${slotPrefix}LabelDescription`]: { table: { disable: true } },
    [`${slotPrefix}LabelDisabled`]: { table: { disable: true } },
    [`${slotPrefix}LabelInvalid`]: { table: { disable: true } },
    [`${slotPrefix}LabelHtmlFor`]: { table: { disable: true } },
    [`${slotPrefix}LogoName`]: { table: { disable: true } },
    [`${slotPrefix}LogoWidth`]: { table: { disable: true } },
    [`${slotPrefix}LogoHeight`]: { table: { disable: true } },
    [`${slotPrefix}LogoSize`]: { table: { disable: true } },
    [`${slotPrefix}ColorLogoName`]: { table: { disable: true } },
    [`${slotPrefix}ColorLogoSize`]: { table: { disable: true } },
    [`${slotPrefix}EmojiName`]: { table: { disable: true } },
    [`${slotPrefix}EmojiSize`]: { table: { disable: true } },
    [`${slotPrefix}RadioLabel`]: { table: { disable: true } },
    [`${slotPrefix}RadioChecked`]: { table: { disable: true } },
    [`${slotPrefix}RadioDisabled`]: { table: { disable: true } },
    [`${slotPrefix}RadioSize`]: { table: { disable: true } },
    [`${slotPrefix}CheckboxLabel`]: { table: { disable: true } },
    [`${slotPrefix}CheckboxChecked`]: { table: { disable: true } },
    [`${slotPrefix}CheckboxDisabled`]: { table: { disable: true } },
    [`${slotPrefix}CheckboxIndeterminate`]: { table: { disable: true } },
    [`${slotPrefix}CheckboxSize`]: { table: { disable: true } },
    [`${slotPrefix}ButtonLabel`]: { table: { disable: true } },
    [`${slotPrefix}ButtonVariant`]: { table: { disable: true } },
    [`${slotPrefix}ButtonAppearance`]: { table: { disable: true } },
    [`${slotPrefix}ButtinteractionVariantVariant`]: {
      table: { disable: true },
    },
    [`${slotPrefix}ButtonColor`]: { table: { disable: true } },
    [`${slotPrefix}ButtonSize`]: { table: { disable: true } },
    [`${slotPrefix}ButtonDisabled`]: { table: { disable: true } },
    [`${slotPrefix}ButtonLoading`]: { table: { disable: true } },
    [`${slotPrefix}ButtonAdaptive`]: { table: { disable: true } },
    [`${slotPrefix}ButtonClassName`]: { table: { disable: true } },
    [`${slotPrefix}ButtonPrefix`]: { table: { disable: true } },
    [`${slotPrefix}ButtonSuffix`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelText`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelVariant`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelAppearance`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelSize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelAdaptive`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelClassName`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelHasRing`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelRingColor`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelPosition`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelCapitalize`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelText`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelAlign`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelRequired`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelOptional`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelDescription`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelDisabled`]: { table: { disable: true } },
    [`${slotPrefix}BadgeLabelInvalid`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageDescription`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageState`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageSize`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageIconPosition`]: { table: { disable: true } },
    [`${slotPrefix}RibbonVariant`]: { table: { disable: true } },
    [`${slotPrefix}RibbonAppearance`]: { table: { disable: true } },
    [`${slotPrefix}RibbonColor`]: { table: { disable: true } },
    [`${slotPrefix}RibbonSize`]: { table: { disable: true } },
    [`${slotPrefix}RibbonCapitalize`]: { table: { disable: true } },
    [`${slotPrefix}RibbonLabel`]: { table: { disable: true } },
    [`${slotPrefix}RibbonAlignment`]: { table: { disable: true } },
    [`${slotPrefix}RibbonTail`]: { table: { disable: true } },
    [`${slotPrefix}RibbonRotate`]: { table: { disable: true } },
    [`${slotPrefix}RibbonPointer`]: { table: { disable: true } },
    [`${slotPrefix}RibbonHasRing`]: { table: { disable: true } },
    [`${slotPrefix}RibbonRingWidth`]: { table: { disable: true } },
    [`${slotPrefix}RibbonRingColor`]: { table: { disable: true } },
    [`${slotPrefix}RibbonPosition`]: { table: { disable: true } },
    [`${slotPrefix}RibbonClassName`]: { table: { disable: true } },
    [`${slotPrefix}CornerVariant`]: { table: { disable: true } },
    [`${slotPrefix}CornerAppearance`]: { table: { disable: true } },
    [`${slotPrefix}CornerColor`]: { table: { disable: true } },
    [`${slotPrefix}CornerSize`]: { table: { disable: true } },
    [`${slotPrefix}CornerCapitalize`]: { table: { disable: true } },
    [`${slotPrefix}CornerLabel`]: { table: { disable: true } },
    [`${slotPrefix}CornerSubtitle`]: { table: { disable: true } },
    [`${slotPrefix}CornerRotate`]: { table: { disable: true } },
    [`${slotPrefix}CornerHasRing`]: { table: { disable: true } },
    [`${slotPrefix}CornerRingWidth`]: { table: { disable: true } },
    [`${slotPrefix}CornerRingColor`]: { table: { disable: true } },
    [`${slotPrefix}CornerPosition`]: { table: { disable: true } },
    [`${slotPrefix}CornerClassName`]: { table: { disable: true } },
    [`${slotPrefix}ProgressValue`]: { table: { disable: true } },
    [`${slotPrefix}ProgressMax`]: { table: { disable: true } },
    [`${slotPrefix}ProgressSize`]: { table: { disable: true } },
    [`${slotPrefix}ProgressVariant`]: { table: { disable: true } },
    [`${slotPrefix}ProgressAppearance`]: { table: { disable: true } },
    [`${slotPrefix}ProgressType`]: { table: { disable: true } },
    [`${slotPrefix}ProgressOrientation`]: { table: { disable: true } },
    [`${slotPrefix}ProgressDisabled`]: { table: { disable: true } },
    [`${slotPrefix}ProgressAdaptive`]: { table: { disable: true } },
    [`${slotPrefix}ProgressValuePosition`]: { table: { disable: true } },
    [`${slotPrefix}ProgressValueAlignment`]: { table: { disable: true } },
    [`${slotPrefix}ProgressShowValue`]: { table: { disable: true } },
    [`${slotPrefix}ProgressLabel`]: { table: { disable: true } },
    [`${slotPrefix}ProgressLabelPosition`]: { table: { disable: true } },
    [`${slotPrefix}ProgressHelperText`]: { table: { disable: true } },
    [`${slotPrefix}ProgressHelperTextPosition`]: { table: { disable: true } },
    [`${slotPrefix}ProgressAnimated`]: { table: { disable: true } },
    [`${slotPrefix}ProgressAnimationDuration`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageDescription`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageState`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageSize`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageIconPosition`]: { table: { disable: true } },
    [`${slotPrefix}InlineMessageFont`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchColor`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchSize`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchShape`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchVariant`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchAppearance`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchLabel`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchSelected`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchDisabled`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchAdaptive`]: { table: { disable: true } },
    [`${slotPrefix}ColorSwatchClassName`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeySize`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyVariant`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyAppearance`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyShadowDirection`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyFullWidth`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyLabel`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyKeys`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyCtag`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyAriaLabel`]: { table: { disable: true } },
    [`${slotPrefix}KeyboardKeyClassName`]: { table: { disable: true } },
    [`${slotPrefix}TextChildren`]: { table: { disable: true } },
    [`${slotPrefix}TextSize`]: { table: { disable: true } },
    [`${slotPrefix}TextWeight`]: { table: { disable: true } },
    [`${slotPrefix}TextAlign`]: { table: { disable: true } },
    [`${slotPrefix}TextWrap`]: { table: { disable: true } },
    [`${slotPrefix}TextTruncate`]: { table: { disable: true } },
    [`${slotPrefix}TextItalic`]: { table: { disable: true } },
    [`${slotPrefix}TextUnderline`]: { table: { disable: true } },
    [`${slotPrefix}TextStrikethough`]: { table: { disable: true } },
    [`${slotPrefix}TextBlock`]: { table: { disable: true } },
    [`${slotPrefix}TextAdaptive`]: { table: { disable: true } },
    [`${slotPrefix}TextClassName`]: { table: { disable: true } },
    [`${slotPrefix}TextColor`]: { table: { disable: true } },
    [`${slotPrefix}DropdownPlaceholder`]: { table: { disable: true } },
    [`${slotPrefix}DropdownControlStatus`]: { table: { disable: true } },
    [`${slotPrefix}DropdownClassName`]: { table: { disable: true } },
    [`${slotPrefix}DropdownColor`]: { table: { disable: true } },
    [`${slotPrefix}DropdownAs`]: { table: { disable: true } },
    [`${slotPrefix}DropdownCTag`]: { table: { disable: true } },
    [`${slotPrefix}DropdownListbox`]: { table: { disable: true } },
    [`${slotPrefix}DropdownFullWidth`]: { table: { disable: true } },
    [`${slotPrefix}DropdownAppearance`]: { table: { disable: true } },
    [`${slotPrefix}DropdownFocused`]: { table: { disable: true } },
    [`${slotPrefix}DropdownHovered`]: { table: { disable: true } },
    [`${slotPrefix}DropdownSelected`]: { table: { disable: true } },
    [`${slotPrefix}DropdownFocusStyle`]: { table: { disable: true } },
    [`${slotPrefix}DropdownInvalid`]: { table: { disable: true } },
    [`${slotPrefix}DropdownRounded`]: { table: { disable: true } },
    [`${slotPrefix}DropdownSize`]: { table: { disable: true } },
    [`${slotPrefix}DropdownSpacing`]: { table: { disable: true } },
    [`${slotPrefix}DropdownStyle`]: { table: { disable: true } },
    [`${slotPrefix}DropdownVariant`]: { table: { disable: true } },
    [`${slotPrefix}DropdownLoading`]: { table: { disable: true } },
    [`${slotPrefix}DropdownDisabled`]: { table: { disable: true } },
    [`${slotPrefix}DropdownAutoFocus`]: { table: { disable: true } },
    [`${slotPrefix}DropdownAllowClear`]: { table: { disable: true } },
    [`${slotPrefix}DropdownReadOnly`]: { table: { disable: true } },
    [`${slotPrefix}DropdownRequired`]: { table: { disable: true } },
    [`${slotPrefix}DropdownValidationRules`]: { table: { disable: true } },
    [`${slotPrefix}DropdownFloatingLabel`]: { table: { disable: true } },
    [`${slotPrefix}DropdownShowValidationMessage`]: {
      table: { disable: true },
    },
    [`${slotPrefix}DropdownValue`]: { table: { disable: true } },
    [`${slotPrefix}DropdownSearchable`]: { table: { disable: true } },
  };
};

// Extract slot args from story args (for clean props)
export const extractSlotArgs = (args: any, slotPrefixes: string[]) => {
  const slotArgs: any = {};
  const cleanArgs = { ...args };

  slotPrefixes.forEach((prefix) => {
    const slotKeys = [
      `${prefix}Type`,
      `${prefix}Size`,
      `${prefix}Name`,
      `${prefix}Filled`,
      `${prefix}FlagCode`,
      `${prefix}FlagShape`,
      `${prefix}FlagSize`,
      `${prefix}LoaderName`,
      `${prefix}LoaderSize`,
      `${prefix}LoaderColor`,
      `${prefix}LoaderStrokeWidth`,
      `${prefix}RafikiName`,
      `${prefix}RafikiWidth`,
      `${prefix}RafikiHeight`,
      `${prefix}FileTypeExtension`,
      `${prefix}FileTypeSize`,
      `${prefix}AvatarName`,
      `${prefix}AvatarSrc`,
      `${prefix}AvatarSize`,
      `${prefix}AvatarColor`,
      `${prefix}AvatarShape`,
      `${prefix}AvatarVariant`,
      `${prefix}AvatarAppearance`,
      `${prefix}BadgeDotVariant`,
      `${prefix}BadgeDotAppearance`,
      `${prefix}BadgeDotColor`,
      `${prefix}BadgeDotSize`,
      `${prefix}BadgeDotRingColor`,
      `${prefix}BadgeDotAdaptive`,
      `${prefix}BadgeDotClassName`,
      `${prefix}BadgeStatusIndicatorAppearance`,
      `${prefix}BadgeStatusIndicatorColor`,
      `${prefix}BadgeStatusIndicatorSize`,
      `${prefix}BadgeStatusIndicatorStroke`,
      `${prefix}BadgeStatusIndicatorClassName`,
      `${prefix}BadgeCounterVariant`,
      `${prefix}BadgeCounterAppearance`,
      `${prefix}BadgeCounterColor`,
      `${prefix}BadgeCounterSize`,
      `${prefix}BadgeCounterValue`,
      `${prefix}BadgeCounterMax`,
      `${prefix}BadgeCounterAdaptive`,
      `${prefix}BadgeCounterClassName`,
      `${prefix}LabelVariant`,
      `${prefix}LabelAppearance`,
      `${prefix}LabelColor`,
      `${prefix}LabelSize`,
      `${prefix}LabelAdaptive`,
      `${prefix}LabelClassName`,
      `${prefix}LabelHasRing`,
      `${prefix}LabelRingColor`,
      `${prefix}LabelPosition`,
      `${prefix}LabelCapitalize`,
      `${prefix}LabelText`,
      `${prefix}LabelAlign`,
      `${prefix}LabelRequired`,
      `${prefix}LabelOptional`,
      `${prefix}LabelDescription`,
      `${prefix}LabelDisabled`,
      `${prefix}LabelInvalid`,
      `${prefix}LabelHtmlFor`,
      `${prefix}BadgeLabelVariant`,
      `${prefix}BadgeLabelAppearance`,
      `${prefix}BadgeLabelColor`,
      `${prefix}BadgeLabelSize`,
      `${prefix}BadgeLabelAdaptive`,
      `${prefix}BadgeLabelClassName`,
      `${prefix}BadgeLabelHasRing`,
      `${prefix}BadgeLabelRingColor`,
      `${prefix}BadgeLabelPosition`,
      `${prefix}BadgeLabelCapitalize`,
      `${prefix}BadgeLabelText`,
      `${prefix}BadgeLabelAlign`,
      `${prefix}BadgeLabelRequired`,
      `${prefix}BadgeLabelOptional`,
      `${prefix}BadgeLabelDescription`,
      `${prefix}BadgeLabelDisabled`,
      `${prefix}BadgeLabelInvalid`,
      `${prefix}LogoName`,
      `${prefix}LogoWidth`,
      `${prefix}LogoHeight`,
      `${prefix}LogoSize`,
      `${prefix}ColorLogoName`,
      `${prefix}ColorLogoSize`,
      `${prefix}EmojiName`,
      `${prefix}EmojiSize`,
      `${prefix}RadioLabel`,
      `${prefix}RadioChecked`,
      `${prefix}RadioDisabled`,
      `${prefix}RadioSize`,
      `${prefix}CheckboxLabel`,
      `${prefix}CheckboxChecked`,
      `${prefix}CheckboxDisabled`,
      `${prefix}CheckboxIndeterminate`,
      `${prefix}CheckboxSize`,
      `${prefix}ButtonLabel`,
      `${prefix}ButtonVariant`,
      `${prefix}ButtonAppearance`,
      `${prefix}ButtinteractionVariantVariant`,
      `${prefix}ButtonColor`,
      `${prefix}ButtonSize`,
      `${prefix}ButtonDisabled`,
      `${prefix}ButtonLoading`,
      `${prefix}ButtonFullWidth`,
      `${prefix}ButtonAdaptive`,
      `${prefix}ButtonClassName`,
      `${prefix}ButtonPrefix`,
      `${prefix}ButtonSuffix`,
      `${prefix}InlineMessageDescription`,
      `${prefix}InlineMessageState`,
      `${prefix}InlineMessageSize`,
      `${prefix}InlineMessageIconPosition`,
      `${prefix}InlineMessageFont`,
      `${prefix}BadgeRibbonVariant`,
      `${prefix}BadgeRibbonAppearance`,
      `${prefix}BadgeRibbonColor`,
      `${prefix}BadgeRibbonSize`,
      `${prefix}BadgeRibbonCapitalize`,
      `${prefix}BadgeRibbonLabel`,
      `${prefix}BadgeRibbonAlignment`,
      `${prefix}BadgeRibbonTail`,
      `${prefix}BadgeRibbonRotate`,
      `${prefix}BadgeRibbonPointer`,
      `${prefix}BadgeRibbonHasRing`,
      `${prefix}BadgeRibbonRingWidth`,
      `${prefix}BadgeRibbonRingColor`,
      `${prefix}BadgeRibbonPosition`,
      `${prefix}BadgeRibbonClassName`,
      `${prefix}BadgeCornerVariant`,
      `${prefix}BadgeCornerAppearance`,
      `${prefix}BadgeCornerColor`,
      `${prefix}BadgeCornerSize`,
      `${prefix}BadgeCornerCapitalize`,
      `${prefix}BadgeCornerLabel`,
      `${prefix}BadgeCornerSubtitle`,
      `${prefix}BadgeCornerRotate`,
      `${prefix}BadgeCornerHasRing`,
      `${prefix}BadgeCornerRingWidth`,
      `${prefix}BadgeCornerRingColor`,
      `${prefix}BadgeCornerPosition`,
      `${prefix}BadgeCornerClassName`,
      `${prefix}LinkHref`,
      `${prefix}LinkText`,
      `${prefix}LinkVariant`,
      `${prefix}LinkAppearance`,
      `${prefix}LinkSize`,
      `${prefix}LinkColor`,
      `${prefix}LinkExternal`,
      `${prefix}LinkDisabled`,
      `${prefix}LinkVisited`,
      `${prefix}LinkDisabled`,
      `${prefix}LinkVisited`,
      `${prefix}LinkIconPosition`,
      `${prefix}ColorSwatchColor`,
      `${prefix}ColorSwatchSize`,
      `${prefix}ColorSwatchShape`,
      `${prefix}ColorSwatchVariant`,
      `${prefix}ColorSwatchAppearance`,
      `${prefix}ColorSwatchLabel`,
      `${prefix}ColorSwatchSelected`,
      `${prefix}ColorSwatchDisabled`,
      `${prefix}ColorSwatchAdaptive`,
      `${prefix}ColorSwatchClassName`,
      `${prefix}KeyboardKeySize`,
      `${prefix}KeyboardKeyVariant`,
      `${prefix}KeyboardKeyAppearance`,
      `${prefix}KeyboardKeyShadowDirection`,
      `${prefix}KeyboardKeyFullWidth`,
      `${prefix}KeyboardKeyLabel`,
      `${prefix}KeyboardKeyKeys`,
      `${prefix}KeyboardKeyCtag`,
      `${prefix}KeyboardKeyAriaLabel`,
      `${prefix}KeyboardKeyClassName`,
      `${prefix}TextChildren`,
      `${prefix}TextSize`,
      `${prefix}TextWeight`,
      `${prefix}TextAlign`,
      `${prefix}TextWrap`,
      `${prefix}TextTruncate`,
      `${prefix}TextItalic`,
      `${prefix}TextUnderline`,
      `${prefix}TextStrikethough`,
      `${prefix}TextBlock`,
      `${prefix}TextAdaptive`,
      `${prefix}TextClassName`,
      `${prefix}TextColor`,
      `${prefix}DropdownPlaceholder`,
      `${prefix}DropdownControlStatus`,
      `${prefix}DropdownClassName`,
      `${prefix}DropdownColor`,
      `${prefix}DropdownAs`,
      `${prefix}DropdownCTag`,
      `${prefix}DropdownListbox`,
      `${prefix}DropdownFullWidth`,
      `${prefix}DropdownAppearance`,
      `${prefix}DropdownFocused`,
      `${prefix}DropdownHovered`,
      `${prefix}DropdownSelected`,
      `${prefix}DropdownFocusStyle`,
      `${prefix}DropdownInvalid`,
      `${prefix}DropdownRounded`,
      `${prefix}DropdownSize`,
      `${prefix}DropdownSpacing`,
      `${prefix}DropdownStyle`,
      `${prefix}DropdownVariant`,
      `${prefix}DropdownLoading`,
      `${prefix}DropdownDisabled`,
      `${prefix}DropdownAutoFocus`,
      `${prefix}DropdownAllowClear`,
      `${prefix}DropdownReadOnly`,
      `${prefix}DropdownRequired`,
      `${prefix}DropdownValidationRules`,
      `${prefix}DropdownFloatingLabel`,
      `${prefix}DropdownShowValidationMessage`,
      `${prefix}DropdownValue`,
      `${prefix}DropdownSearchable`,
    ];

    slotKeys.forEach((key) => {
      if (key in cleanArgs) {
        slotArgs[key] = cleanArgs[key];
        delete cleanArgs[key];
      }
    });
  });

  return { slotArgs, cleanArgs };
};
