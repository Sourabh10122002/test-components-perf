import type { IUIThemeConfig } from "@inventive-ui/framework/config";
const config: IUIThemeConfig = {
  theme: {
    mode: {
      default: "light",
      allowSystem: true,
    },

    direction: "ltr",

    colors: {
      brand: {
        set: "#6366f1",
      },

      neutral: {
        set: "#64748b",
      },

      semantic: {
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        info: "#3b82f6",
      },

      accent: {
        white: "#ffffff",
        black: "#000000",
      },

      gradients: {
        sunset: {
          from: "success",
          to: "info",
          direction: "to end",
        },
      },
    },

    typography: {
      provider: "system",
      set: "inter",
    },

    spacing: {
      set: "compact",
    },

    rounded: {
      set: "none",
    },

    /**
     * Optional theme.shellBoot — first-paint html/body/#root before CSS loads.
     * Omit to derive from theme.colors.neutral.set (palette 50/950).
     * Override with hex when your canvas differs from the neutral scale.
     */
  },

  states: {
    focused: {
      mode: "native",
      shades: { light: "600", dark: "400" },
      style: {
        width: 2,
        offset: 2,
        offsetColor: { light: "white", dark: "black" },
      },
      accessibility: { minContrast: 3, highContrastSupport: false },
    },
    disabled: {
      style: "fade",
      opacity: 0.5,
    },
    loading: {
      style: "fade",
      opacity: 0.5,
      spinner: true,
      cursor: "wait",
      loader: { name: "line-spinner", color: "currentColor", strokeWidth: 2 },
      label: "Loading",
    },
  },

  core: {
    important: false,
  },

  // Optional: scan: { dirs: ["src", "app"] } when your layout differs from Framework defaults.
  // IUI packages are discovered from package.json dependencies — do not list them here.
};

export default config;
