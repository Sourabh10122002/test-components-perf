// Story helper copied from origin/menu:src/components/Menu/styles/styles.ts (not exported by the installed package)
import { cn } from "@inventive-ui/framework";

export const getMenuSeparatorClass = (adaptive = true): string =>
  cn("my-1 border-t border-neutral-200", adaptive && "dark:border-neutral-700");
