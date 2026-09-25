// Showcase ported from origin/datepicker:src/components/Datepicker/stories/Datepicker.stories.tsx (story "Showcase", name "Showcase / Overview")
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";
import { DatepickerShowcase } from "../story-helpers/Datepicker/DatepickerShowcase";

export default function DatepickerShowcasePage() {
  const globals = {};
  const theme = getShowcaseTheme(globals);
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <DatepickerShowcase
        color={theme.color}
        layoutProps={theme.layoutProps}
      />
    </ShowcaseShell>
  );
}
