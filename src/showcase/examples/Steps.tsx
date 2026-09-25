// Showcase ported from origin/steps:src/components/Steps/stories/steps.stories.tsx
import { useState } from "react";
import { Steps } from "@inventive-ui/components/Steps";
import type { StepData } from "@inventive-ui/components/Steps";
import { useSlotRenderer } from "@inventive-ui/framework/slots";
import { useTheme } from "@inventive-ui/framework";

// ============================================
// SHOWCASE HELPER COMPONENTS
// ============================================
const ShowcaseSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-6 pb-12 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
    <div className="space-y-1">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
    <div className="space-y-8">{children}</div>
  </section>
);

const ShowcaseSubSection = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
      {title}
    </h3>
    {children}
  </div>
);

// ============================================
// DEMO STEP DATA
// ============================================
const basicSteps: StepData[] = [
  {
    id: "1",
    label: "Step 1",
    description: "First step",
    indicatorType: "icon",
  },
  {
    id: "2",
    label: "Step 2",
    description: "Second step",
    indicatorType: "icon",
  },
  {
    id: "3",
    label: "Step 3",
    description: "Third step",
    indicatorType: "icon",
  },
  {
    id: "4",
    label: "Step 4",
    description: "Fourth step",
    indicatorType: "icon",
  },
];

const numberSteps: StepData[] = [
  {
    id: "1",
    label: "Step 1",
    description: "First step",
    indicatorType: "number",
    stepNumber: 1,
  },
  {
    id: "2",
    label: "Step 2",
    description: "Second step",
    indicatorType: "number",
    stepNumber: 2,
  },
  {
    id: "3",
    label: "Step 3",
    description: "Third step",
    indicatorType: "number",
    stepNumber: 3,
  },
  {
    id: "4",
    label: "Step 4",
    description: "Fourth step",
    indicatorType: "number",
    stepNumber: 4,
  },
];

const dotSteps: StepData[] = [
  { id: "1", label: "Step 1", description: "First step", indicatorType: "dot" },
  {
    id: "2",
    label: "Step 2",
    description: "Second step",
    indicatorType: "dot",
  },
  { id: "3", label: "Step 3", description: "Third step", indicatorType: "dot" },
  {
    id: "4",
    label: "Step 4",
    description: "Fourth step",
    indicatorType: "dot",
  },
];

const linearErrorSteps: StepData[] = [
  {
    id: "1",
    label: "Account",
    description: "Create account",
    indicatorType: "number",
    stepNumber: 1,
  },
  {
    id: "2",
    label: "Verification",
    description: "Verify email",
    indicatorType: "number",
    stepNumber: 2,
    state: "error",
  },
  {
    id: "3",
    label: "Profile",
    description: "Set up profile",
    indicatorType: "number",
    stepNumber: 3,
  },
  {
    id: "4",
    label: "Complete",
    description: "All done",
    indicatorType: "number",
    stepNumber: 4,
  },
];

// ============================================
// LINEAR DEMO COMPONENT
// ============================================
const LinearDemoComponent = () => {
  const theme = useTheme(); // ✅ Use Theme Hook
  const renderSlot = useSlotRenderer();
  const [activeStep, setActiveStep] = useState(0);
  const [blockedMessage, setBlockedMessage] = useState("");
  const totalSteps = linearErrorSteps.length;

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setBlockedMessage("");
  };

  // @ts-ignore -- unused parameter in the original story (noUnusedParameters)
  const handleNavigationBlocked = (blockedBy: number[]) => {
    setBlockedMessage("⚠️ Navigation blocked! Complete the error step first.");
    setTimeout(() => setBlockedMessage(""), 3000);
  };

  const handleNext = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    }
    setBlockedMessage("");
  };

  const isCompleted = activeStep === totalSteps;

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Try clicking on Step 3 or 4. Navigation is blocked by the error in Step
        2.
      </p>
      <Steps
        steps={linearErrorSteps}
        activeStep={activeStep}
        linear={true}
        showDescriptions={true}
        allowClickOnFuture={true}
        allowClickOnCompleted={true}
        onStepClick={handleStepClick}
        onNavigationBlocked={handleNavigationBlocked}
        errorMessage={blockedMessage || undefined}
        size="base"
        line={{ stroke: "thin" }}
      />
      <div className="flex gap-2 mt-4">
        {/* Back — outline mirrors inactive step indicator style from variants.ts */}
        {renderSlot({
          slot: {
            type: "button",
            label: "Back",
            onClick: () => setActiveStep(Math.max(0, activeStep - 1)),
            disabled: activeStep === 0,
            variant: "outline",
            appearance: "none",
            size: "sm",
            color: theme?.globalColor ?? "brand",
          } as any,
        })}
        {/* Next — solid+strong mirrors active/current step indicator style from variants.ts */}
        {renderSlot({
          slot: {
            type: "button",
            label: activeStep === totalSteps - 1 ? "Done" : "Next",
            onClick: handleNext,
            disabled: isCompleted,
            variant: "solid",
            appearance: "strong",
            size: "sm",
            color: theme?.globalColor ?? "brand",
          } as any,
        })}
        {/* Reset — outline mirrors inactive step indicator style from variants.ts */}
        {renderSlot({
          slot: {
            type: "button",
            label: "Reset",
            onClick: () => setActiveStep(0),
            variant: "outline",
            appearance: "none",
            size: "sm",
            color: theme?.globalColor ?? "brand",
          } as any,
        })}
      </div>
    </div>
  );
};

// ============================================
// NON-LINEAR DEMO COMPONENT
// ============================================
const NonLinearDemoComponent = () => {
  const theme = useTheme(); // ✅ Use Theme Hook
  const renderSlot = useSlotRenderer();
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  const nonLinearSteps: StepData[] = [
    {
      id: "1",
      label: "Account",
      description: "Create account",
      indicatorType: "number",
      stepNumber: 1,
    },
    {
      id: "2",
      label: "Profile",
      description: "Set up profile",
      indicatorType: "number",
      stepNumber: 2,
    },
    {
      id: "3",
      label: "Settings",
      description: "Preferences",
      indicatorType: "number",
      stepNumber: 3,
    },
    {
      id: "4",
      label: "Complete",
      description: "All done",
      indicatorType: "number",
      stepNumber: 4,
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Click on any step to navigate freely. No blocking behavior.
      </p>
      <Steps
        steps={nonLinearSteps}
        activeStep={activeStep}
        linear={false}
        showDescriptions={true}
        allowClickOnFuture={true}
        allowClickOnCompleted={true}
        onChange={(index) => setActiveStep(index)}
        size="base"
        line={{ stroke: "thin" }}
      />
      <div className="flex gap-2 mt-4">
        {/* Back — outline mirrors inactive step indicator style from variants.ts */}
        {renderSlot({
          slot: {
            type: "button",
            label: "Back",
            onClick: () => setActiveStep(Math.max(0, activeStep - 1)),
            disabled: activeStep === 0,
            variant: "outline",
            appearance: "none",
            size: "sm",
            color: theme?.globalColor ?? "brand",
          } as any,
        })}
        {/* Next — solid+strong mirrors active/current step indicator style from variants.ts */}
        {renderSlot({
          slot: {
            type: "button",
            label: activeStep === totalSteps - 1 ? "Done" : "Next",
            onClick: () => setActiveStep(Math.min(totalSteps, activeStep + 1)),
            disabled: activeStep === totalSteps,
            variant: "solid",
            appearance: "strong",
            size: "sm",
            color: theme?.globalColor ?? "brand",
          } as any,
        })}
      </div>
    </div>
  );
};

// ============================================
// SHOWCASE STORY
// ============================================
// Story params were: ()
export default function StepsShowcase() {
    return (
      (
    <div className="bg-white dark:bg-gray-900 flex flex-col gap-16 max-w-6xl mx-auto p-4 md:p-8">
      <ShowcaseSection
        title="1. Types: Linear vs Non-Linear"
        description="Linear steppers enforce sequential navigation and block progress when errors exist. Non-linear steppers allow free navigation."
      >
        <div className="grid grid-cols-1 gap-12">
          <ShowcaseSubSection title="Linear Mode (with Error Blocking)">
            <LinearDemoComponent />
          </ShowcaseSubSection>
          <ShowcaseSubSection title="Non-Linear Mode (Free Navigation)">
            <NonLinearDemoComponent />
          </ShowcaseSubSection>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="2. Orientation"
        description="Steppers support both horizontal and vertical layouts with various label positions."
      >
        <ShowcaseSubSection title="Horizontal (Default)" className="mb-8">
          <Steps
            steps={basicSteps}
            activeStep={1}
            orientation="horizontal"
            showDescriptions={true}
            label={{ placement: "bottom" }}
            size="base"
            line={{ stroke: "thin" }}
          />
        </ShowcaseSubSection>

        <ShowcaseSubSection
          title="Horizontal with Top Labels"
          className="mb-8 pt-8"
        >
          <Steps
            steps={basicSteps}
            activeStep={1}
            orientation="horizontal"
            showDescriptions={true}
            label={{ placement: "top" }}
            size="base"
            line={{ stroke: "thin" }}
          />
        </ShowcaseSubSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ShowcaseSubSection title="Vertical with Start Labels">
            <Steps
              steps={basicSteps}
              activeStep={1}
              orientation="vertical"
              showDescriptions={true}
              label={{ placement: "start" }}
              size="base"
              line={{ stroke: "thin" }}
              spacing="standard"
            />
          </ShowcaseSubSection>

          <ShowcaseSubSection title="Vertical with End Labels">
            <Steps
              steps={basicSteps}
              activeStep={1}
              orientation="vertical"
              showDescriptions={true}
              label={{ placement: "end" }}
              size="base"
              line={{ stroke: "thin" }}
              spacing="standard"
            />
          </ShowcaseSubSection>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="3. States"
        description="Steps can be in various states: inactive, current, success, error, warning, disabled, or loading."
      >
        <ShowcaseSubSection title="All States Overview">
          <Steps
            steps={[
              {
                id: "1",
                label: "Inactive",
                description: "Not started",
                indicatorType: "number",
                stepNumber: 1,
              },
              {
                id: "2",
                label: "Current",
                description: "In progress",
                indicatorType: "number",
                stepNumber: 2,
              },
              {
                id: "3",
                label: "Success",
                description: "Completed",
                indicatorType: "number",
                stepNumber: 3,
                state: "success",
              },
              {
                id: "4",
                label: "Error",
                description: "Needs attention",
                indicatorType: "number",
                stepNumber: 4,
                state: "error",
              },
              {
                id: "5",
                label: "Warning",
                description: "Review needed",
                indicatorType: "number",
                stepNumber: 5,
                state: "warning",
              },
              {
                id: "6",
                label: "Disabled",
                description: "Not available",
                indicatorType: "number",
                stepNumber: 6,
                disabled: true,
              },
              {
                id: "7",
                label: "Loading",
                description: "Processing",
                indicatorType: "number",
                stepNumber: 7,
                state: "loading",
              },
            ]}
            activeStep={1}
            showDescriptions={true}
            label={{ variant: "inline" }}
            size="base"
            line={{ stroke: "thin" }}
          />
        </ShowcaseSubSection>

        <ShowcaseSubSection title="Custom State Configuration">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Control styling separately for completed/active (e.g.
            outline/strong), current (e.g. solid/strong), and inactive (e.g.
            outline/none) states.
          </p>
          <Steps
            steps={numberSteps}
            activeStep={1}
            active={{ variant: "outline", appearance: "strong" }}
            current={{ variant: "solid", appearance: "strong" }}
            inactive={{ variant: "outline", appearance: "none" }}
            showDescriptions={true}
            size="base"
            line={{ stroke: "thin" }}
          />
        </ShowcaseSubSection>
      </ShowcaseSection>

      <ShowcaseSection
        title="4. Indicator Styles"
        description="Choose from four different indicator styles to match your design needs."
      >
        <div className="space-y-10">
          <ShowcaseSubSection title="Number Indicators">
            <Steps
              steps={numberSteps}
              activeStep={1}
              indicatorType="number"
              showDescriptions={true}
              size="base"
              line={{ stroke: "thin" }}
            />
          </ShowcaseSubSection>

          <ShowcaseSubSection title="Icon Indicators (Default)">
            <Steps
              steps={basicSteps}
              activeStep={1}
              indicatorType="icon"
              showDescriptions={true}
              size="base"
              line={{ stroke: "thin" }}
            />
          </ShowcaseSubSection>

          <ShowcaseSubSection title="Dot Indicators">
            <Steps
              steps={dotSteps}
              activeStep={1}
              indicatorType="dot"
              showDescriptions={true}
              size="base"
              line={{ stroke: "thin" }}
            />
          </ShowcaseSubSection>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="5. Line Types"
        description="Customize connecting lines with different styles and thicknesses."
      >
        <div className="space-y-8">
          <ShowcaseSubSection title="Solid Line (Default)">
            <Steps
              steps={numberSteps}
              activeStep={1}
              line={{ style: "solid", stroke: "thin" }}
              showDescriptions={false}
              size="base"
            />
          </ShowcaseSubSection>

          <ShowcaseSubSection title="Dashed Line">
            <Steps
              steps={numberSteps}
              activeStep={1}
              line={{ style: "dashed", stroke: "thin" }}
              showDescriptions={false}
              size="base"
            />
          </ShowcaseSubSection>

          <ShowcaseSubSection title="Dotted Line">
            <Steps
              steps={numberSteps}
              activeStep={1}
              line={{ style: "dotted", stroke: "thin" }}
              showDescriptions={false}
              size="base"
            />
          </ShowcaseSubSection>
        </div>
      </ShowcaseSection>
    </div>
  )
    );
  }
