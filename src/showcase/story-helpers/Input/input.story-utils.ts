// Copied from origin/input:src/components/Input/stories/input.story-utils.ts — only the runtime helpers
// used by the Showcase / Overview stories (the Storybook argTypes builders are not needed here).

// get color from args or global theme
export const getColor = (args: any, globals: any) =>
  args.color ?? globals?.themeColor;

// enhance button slot with icon + action
export const enhanceButtonSlot = (slot: any, args: any, key: string) => {
  if (!slot || slot.type !== "button") return slot;

  return {
    ...slot,
    action: args[`${key}ButtonAction`],
  };
};
