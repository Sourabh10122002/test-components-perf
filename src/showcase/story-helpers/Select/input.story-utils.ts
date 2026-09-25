// Copied from origin/input:src/components/Input/stories/input.story-utils.ts (story helper only;
// the select branch imports it from "../../Input/stories/input.story-utils" but that path does not exist there).

// get color from args or global theme
export const getColor = (args: any, globals: any) =>
  args.color ?? globals?.themeColor;
