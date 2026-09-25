// Copied from origin/input:src/components/Input/utils/passwordUtils.ts and utils/cardUtils.ts —
// only the two helpers the Password / Card Showcase stories call directly (getPasswordToggleSuffix, getCardBrand),
// since the package does not export them. Library types are replaced by minimal local aliases.

type InputAffix = Record<string, unknown>;
type CardBrandConfig = { name: string; pattern: RegExp; [key: string]: unknown };

// default password toggle
export const getPasswordToggleSuffix = (
  showPassword: boolean,
  overrides: Record<string, unknown> = {},
): InputAffix => ({
  type: "button",
  action: "togglePassword",
  variant: "ghost",
  appearance: "dualTone",
  className: "p-0",
  suffix: {
    type: "icon",
    library: "lucide",
    name: showPassword ? "@eyeOff" : "@eye",
  },
  ...overrides,
});

export const CARD_BRANDS = {
  visa: {
    pattern: /^4/,
    maxDigits: 16,
    formattedLength: 19,
  },

  mastercard: {
    pattern: /^(5[1-5]|2(2[2-9]|[3-6]|7[01]|720))/,
    maxDigits: 16,
    formattedLength: 19,
  },

  amex: {
    pattern: /^3[47]/,
    maxDigits: 15,
    formattedLength: 17,
  },

  discover: {
    pattern: /^6(?:011|5|4[4-9])/,
    maxDigits: 16,
    formattedLength: 19,
  },
} as const;

const normalize = (value: string) => value.replace(/\D/g, "");


export const getAllCardBrands = (customBrands: CardBrandConfig[] = []) => ({
  ...CARD_BRANDS,
  ...Object.fromEntries(customBrands.map((b) => [b.name, b])),
});

export const getCardBrand = (
  cardNumber: string,
  customBrands: CardBrandConfig[] = [],
): string | undefined => {
  const digits = normalize(cardNumber);
  const allBrands = getAllCardBrands(customBrands);

  for (const [name, config] of Object.entries(allBrands)) {
    if (config.pattern.test(digits)) {
      return name;
    }
  }

  return undefined;
};
