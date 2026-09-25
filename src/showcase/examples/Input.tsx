// Showcase ported from origin/input:src/components/Input/stories/{Input,Number,Password,Telephone,Otp,Tag,Card}.stories.tsx (each file's "Showcase / Overview" story; bodies live in ../story-helpers/Input/*Overview.tsx)
import { InputOverview } from "../story-helpers/Input/InputOverview";
import { NumberOverview } from "../story-helpers/Input/NumberOverview";
import { PasswordOverview } from "../story-helpers/Input/PasswordOverview";
import { TelephoneOverview } from "../story-helpers/Input/TelephoneOverview";
import { OtpOverview } from "../story-helpers/Input/OtpOverview";
import { TagOverview } from "../story-helpers/Input/TagOverview";
import { CardOverview } from "../story-helpers/Input/CardOverview";

const stories = [
  { title: "Input / Showcase / Overview", Story: InputOverview },
  { title: "Number / Showcase / Overview", Story: NumberOverview },
  { title: "Password / Showcase / Overview", Story: PasswordOverview },
  { title: "Telephone / Showcase / Overview", Story: TelephoneOverview },
  { title: "OTP / Showcase / Overview", Story: OtpOverview },
  { title: "Tag / Showcase / Overview", Story: TagOverview },
  { title: "Card / Showcase / Overview", Story: CardOverview },
];

export default function InputShowcase() {
  return (
    <div className="flex flex-col gap-16">
      {stories.map(({ title, Story }) => (
        <div key={title}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-4">
            {title}
          </h3>
          <Story />
        </div>
      ))}
    </div>
  );
}
