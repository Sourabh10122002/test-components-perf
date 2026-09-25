// Story helper copied from origin/badge:src/components/Badge/utils.ts (getCornerRotation; not exported by the installed Badge subpath)
export const getCornerRotation = (placement?: string): number => {
  switch (placement) {
    case "top-start": return 135;
    case "top-end": return -134;
    case "bottom-start": return 45;
    case "bottom-end": return -45;
    default: return 0;
  }
};
