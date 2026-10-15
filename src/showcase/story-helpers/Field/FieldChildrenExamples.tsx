// Not from the Field story: shows the control passed as Field's single child
// instead of the `input` slot. Field clones the child and adds id, required,
// disabled and the aria-* links to its label and message; label and
// inlineMessage stay slot props.
import { useState } from "react";
import { Field } from "@inventive-ui/components/Field";
import { InputText } from "@inventive-ui/components/Input";
import { RadioGroup, Radio } from "@inventive-ui/components/Radio";
import { CheckboxGroup, Checkbox } from "@inventive-ui/components/Checkbox";

const SECTION_TITLE = "text-2xl font-semibold text-neutral-900 dark:text-neutral-100";
const SECTION_DESC = "text-sm text-neutral-600 dark:text-neutral-400";

export function FieldChildrenExamples() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("email");
  const [channels, setChannels] = useState<string[]>(["email"]);

  return (
    <section className="space-y-6">
      <div>
        <h2 className={SECTION_TITLE}>Control as a child</h2>
        <p className={SECTION_DESC}>
          The control is a component placed inside Field, with no input slot and
          no SlotRenderer. Label and message are still slot props.
        </p>
      </div>

      <div className="grid max-w-2xl gap-8">
        <Field
          label={{ children: "Full name" }}
          inlineMessage={{ children: "As it appears on your ID" }}
          required
        >
          <InputText
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>

        {/* Field forwards aria-invalid, not `invalid` or `size`: set them on the child. */}
        <Field
          label={{ children: "Email" }}
          inlineMessage={{ children: "Enter a valid email address" }}
          invalid
        >
          <InputText placeholder="name@example.com" defaultValue="not-an-email" invalid />
        </Field>

        <Field
          label={{ children: "Preferred contact" }}
          inlineMessage={{ children: "We'll only use this for account updates" }}
        >
          <RadioGroup value={contact} onChange={setContact} direction="column" gap={8}>
            <Radio value="email" label="Email" />
            <Radio value="phone" label="Phone" />
            <Radio value="sms" label="SMS" disabled />
          </RadioGroup>
        </Field>

        <Field
          label={{ children: "Notifications" }}
          inlineMessage={{ children: "Choose one or more channels" }}
        >
          <CheckboxGroup value={channels} onChange={setChannels} direction="column">
            <Checkbox value="email" label="Email notifications" />
            <Checkbox value="sms" label="SMS notifications" />
            <Checkbox value="push" label="Push notifications" />
          </CheckboxGroup>
        </Field>

        <Field label={{ children: "Disabled" }} disabled>
          <InputText placeholder="Field passes disabled to the child" />
        </Field>
      </div>
    </section>
  );
}
