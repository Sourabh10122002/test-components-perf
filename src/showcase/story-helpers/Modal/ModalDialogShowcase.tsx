// @ts-nocheck
// Ported from origin/modal:src/components/Modal/stories/ModalDialog.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/modal:src/components/Modal/stories/ModalDialog.stories.tsx
import type { ModalBackdrop, ModalState } from "@inventive-ui/components/Modal";
import { Modal, ModalDialog } from "@inventive-ui/components/Modal";
import { cn } from "@inventive-ui/framework";
import { useSlotRenderer } from "@inventive-ui/framework/slots";
import { LazySection } from "../../storybook";
import { SHOWCASE_CONTAINER_CLASS, ShowcaseShell } from "../../storybook";

/* -------------------------------------------------------------------------- */
/* SHOWCASE STORY                                                           */
/* -------------------------------------------------------------------------- */

const sizeLabelMap: Record<string, string> = {
  xs: "Extra Small",
  sm: "Small",
  base: "Medium",
  lg: "Large",
  full: "Full Size",
};

const backdropLabelMap: Record<string, string> = {
  none: "none",
  dim: "dim light",
  blur: "blurry effect",
};

const positionLabelMap: Record<string, string> = {
  "top-start": "start aligned at the top",
  top: "Centered at the top",
  "top-end": "end aligned at the top",
  start: "Centered on the start",
  center: "Perfectly centered",
  end: "Centered on the end",
  "bottom-start": "start aligned at the bottom",
  bottom: "Centered at the bottom",
  "bottom-end": "end aligned at the bottom",
};

const modalHeaderSize: Record<string, string> = {
  xs: "sm",
  sm: "base",
  base: "lg",
  lg: "xl",
  full: "xl",
};

// Story params were: (args, { globals })
export default function ModalDialogShowcase() {
  const globals = {};
    const renderSlot = useSlotRenderer();

    // ---------------------------------------------------------
    // DATA LISTS
    // ---------------------------------------------------------
    const sizes = ["xs", "sm", "base", "lg"] as const;
    const animations = ["Default", "Slide", "Scale", "Bounce"] as const;
    const backdrop = ["none", "blur", "dim"];
    const states = ["danger", "warning", "success", "info", "brand", "neutral"];
    const positions = [
      "top-start",
      "top",
      "top-end",
      "start",
      "center",
      "end",
      "bottom-start",
      "bottom",
      "bottom-end",
    ] as const;

    // ---------------------------------------------------------
    // STYLES
    // ---------------------------------------------------------
    const sectionTitle =
      "text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200";
    const gridStyle =
      "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12";
    const cardStyle =
      "flex flex-col items-center justify-center gap-3 p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer";

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-600">
          <div className="max-w-7xl mx-auto">
            <header className="mb-10">
              <h1 className="text-3xl font-extrabold text-slate-900">
                Dialog Showcase
              </h1>
              <p className="text-slate-500 mt-2">
                Interactive gallery of all available Dialog configurations.
                Click a card to trigger the Dialog.
              </p>
            </header>
            {/* ------------------------------------------------------ */}
            {/* 1. SIZES */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Sizes</h2>
                <div className={gridStyle}>
                  {sizes.map((size) => (
                    <div key={size} className={cardStyle}>
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        Size: {sizeLabelMap[size]}
                      </span>
                      {/* MODAL INSTANCE */}
                      <ModalDialog
                        cTag="dialog"
                        size={size}
                        animation="Default"
                        placement="center"
                        trigger={{
                          type: "button",
                          ctag: "button",
                          label: size,
                        }}
                        closeOnInteractionOutside
                        header={{
                          lSlot: {
                            icon: true,
                            align: "start",
                          },
                          content: {
                            title: {
                              type: "text",
                              children: "Size Variants",
                              size: modalHeaderSize[size] as any,
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Demonstrate the different sizes",
                              size: size as any,
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This is a demonstration of the {sizeLabelMap[size]}{" "}
                          dialog size. The content scales appropriately to
                          showcase the available size options.
                        </p>
                      </ModalDialog>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 2. STATES */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>States</h2>
                <div className={gridStyle}>
                  {states.map((state) => (
                    <div key={state} className={cardStyle}>
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        State: {state}
                      </span>
                      {/* MODAL INSTANCE */}
                      <ModalDialog
                        cTag="dialog"
                        size="sm"
                        animation="Default"
                        state={state as ModalState}
                        placement="center"
                        trigger={{ type: "button", label: state, color: state }}
                        closeOnInteractionOutside={true}
                        header={{
                          lSlot: {
                            icon: true,
                            align: "start",
                          },
                          content: {
                            title: {
                              type: "text",
                              children: "State Variants",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: `Demonstrating the ${state} state`,
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This dialog demonstrates the <strong>{state}</strong>{" "}
                          state. It alters the semantic colors to indicate
                          different levels of intent or urgency.
                        </p>
                      </ModalDialog>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 3. POSITIONS */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Placements</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-12 mx-auto">
                  {positions.map((pos) => (
                    <div
                      key={pos}
                      className="flex flex-col items-center justify-center gap-3 h-32 w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer"
                    >
                      <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        {positionLabelMap[pos]}
                      </span>
                      <ModalDialog
                        cTag="dialog"
                        trigger={{ type: "button", ctag: "button", label: pos }}
                        placement={pos}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={true}
                        header={{
                          lSlot: {
                            icon: true,
                            align: "start",
                          },
                          content: {
                            title: {
                              type: "text",
                              children: "Position Variants",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Showcases different modal positions",
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This dialog demonstrates the{" "}
                          <strong>{positionLabelMap[pos]}</strong> placement. It
                          opens from the selected position while maintaining
                          consistent spacing, alignment, and interaction
                          behavior.
                        </p>
                      </ModalDialog>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 4. BACKDROP */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Backdrop</h2>
                <div className={gridStyle}>
                  {backdrop.map((backdrop) => (
                    <div key={backdrop} className={cardStyle}>
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                        Backdrop: {backdropLabelMap[backdrop]}
                      </span>
                      {/* MODAL INSTANCE */}
                      <ModalDialog
                        cTag="dialog"
                        size="sm"
                        animation="Default"
                        placement="center"
                        backdrop={backdrop as ModalBackdrop}
                        trigger={{
                          type: "button",
                          ctag: "button",
                          label: backdrop,
                        }}
                        closeOnInteractionOutside={true}
                        header={{
                          lSlot: {
                            icon: true,
                            align: "start",
                          },
                          content: {
                            title: {
                              type: "text",
                              children: "Dialog Backdrop",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Demonstrate the different styles",
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This dialog demonstrates the{" "}
                          <strong>{backdropLabelMap[backdrop]}</strong>{" "}
                          backdrop. Open each variant to compare how the
                          background is displayed while the dialog remains in
                          focus.
                        </p>
                      </ModalDialog>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 5. ANIMATIONS */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Animations</h2>
                <div className={gridStyle}>
                  {animations.map((animation) => (
                    <div key={animation} className={cardStyle}>
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        {animation}
                      </span>
                      {/* MODAL INSTANCE */}
                      <ModalDialog
                        cTag="dialog"
                        size="sm"
                        animation={animation}
                        placement="top"
                        trigger={{
                          type: "button",
                          ctag: "button",
                          label: animation,
                        }}
                        closeOnInteractionOutside={true}
                        header={{
                          lSlot: {
                            icon: true,
                            align: "start",
                          },
                          content: {
                            title: {
                              type: "text",
                              children: "Animations",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Demonstrate the different animations",
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This dialog demonstrates the{" "}
                          <strong>{animation}</strong> animation. Open each
                          variant to compare how the dialog enters and exits
                          while preserving a consistent user experience.
                        </p>
                      </ModalDialog>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 6. Extra Controls */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Extra controls</h2>
                <div className={cn("flex flex-wrap gap-8 mb-12 justify-start")}>
                  {/* Card 1: Border Enabled */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Border Enabled
                    </span>
                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <ModalDialog
                        cTag="dialog"
                        trigger={{
                          type: "button",
                          ctag: "button",
                          label: "outlined",
                        }}
                        backdrop="none"
                        outlined
                        size="sm"
                        header={{
                          lSlot: {
                            icon: true,
                            align: "start",
                          },
                          content: {
                            title: {
                              type: "text",
                              children: "Outlined Dialog",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Showcase dialog with visible border",
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This example demonstrates the{" "}
                          <strong>outlined</strong> variant. A visible border is
                          applied around the dialog to enhance its definition
                          and visual separation from the background.
                        </p>
                      </ModalDialog>
                    </div>
                  </div>
                  {/* Card 2: Outside Interaction Enabled */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Outside Interaction
                    </span>
                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <ModalDialog
                        cTag="dialog"
                        trigger={{
                          type: "button",
                          ctag: "button",
                          label: "interaction-true",
                        }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outside Interaction Enabled",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Interact with content behind",
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This dialog allows interaction with elements outside
                          of it. You can continue using the underlying page
                          without closing the dialog.
                        </p>
                      </ModalDialog>
                      <ModalDialog
                        cTag="dialog"
                        trigger={{
                          type: "button",
                          ctag: "button",
                          label: "interaction-false",
                        }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={true}
                        allowOutsideInteraction={false}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outside Interaction Disabled",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Block interaction behind",
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This dialog prevents interaction with elements outside
                          of it. The background remains inactive until the
                          dialog is closed.
                        </p>
                      </ModalDialog>
                    </div>
                  </div>
                  {/* Card 3: Click outside to dismiss */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Click outside to dismiss
                    </span>
                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <ModalDialog
                        cTag="dialog"
                        trigger={{
                          type: "button",
                          ctag: "button",
                          label: "dismissible",
                        }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={true}
                        allowOutsideInteraction={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outside Click Enabled",
                              size: "lg",
                              weight: "semibold",
                            },
                            subtitle: {
                              type: "text",
                              children: "Click outside to dismiss",
                              size: "sm",
                            },
                          },
                        }}
                        footer={{
                          align: "end",
                          primaryAction: {
                            type: "button",
                            label: "Button",
                            size: "base",
                          },
                        }}
                      >
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This dialog closes automatically when you click
                          outside of it. Use this behavior for dismissible
                          dialogs that don't require an explicit action to
                          close.
                        </p>
                      </ModalDialog>
                    </div>
                  </div>
                      {/* Card 4 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example Modal (Discord Style)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal.Dialog
                        cTag="modal-primary"
                        trigger={{
                          type: "button",
                          label: "Open Example modal 1",
                        }}
                        backdrop="dim" // Use 'dim' for the dark overlay seen in the screenshot
                        size="sm"
                        // 1. HEADER: Empty title/subtitle, NO divider, only the close button
                        header={{
                          content: {
                            title: "",
                            subtitle: "",
                          },
                          variant: "none", // Removes the bottom border line
                          closeButton: {
                            type: "button",
                            size: "lg", // Make the close button slightly larger
                            adaptive: true,
                            prefix: { type: "icon", name: "@close" },
                          },
                        }}
                        // 2. BODY: Center everything
                        body={{
                          align: "center",
                        }}
                        // 3. FOOTER: Single full-width button, NO divider
                        footer={{
                          primaryAction: {
                            type: "button",
                            label: "Browse New Frames",
                            size: "lg", // Large button
                            color: "brand", // Assuming brand is blue/purple
                            fullWidth: true, // Make the button span the full width of the modal
                          },
                          // variant: "none", // Removes the top border line
                          // align: "center",
                        }}
                      >
                        {/* Do NOT pass children to ModalHeader so it renders the config above */}

                          <div className="flex flex-col items-center text-center pb-2">
                            {/* Illustration / Image */}
                            <img
                              src="https://pbs.twimg.com/media/HO0dFggXcAASM-x?format=webp&name=medium"
                              alt="Promo Illustration"
                              className="w-48 h-auto object-contain mb-6 drop-shadow-md"
                            />

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-10 dark:text-white mb-3">
                              New Frames Just Dropped
                            </h2>

                            {/* Subtitle / Description */}
                            <p className="text-sm text-gray-10 dark:text-gray-90 leading-relaxed">
                              Grab a custom border that wraps around your
                              profile. Your profile called, it wants one.
                            </p>
                          </div>

                      </Modal.Dialog>
                    </div>
                  </div>
                    {/* Card 5 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example Modal (Promotional Prompt)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal.Dialog
                        cTag="modal-primary"
                        size="base"
                        trigger={{
                          type: "button",
                          label: "Open Prompt Modal 2",
                        }}
                        // backdrop="dim"
                        // size="2xl"
                        // 1. HEADER: Clean layout containing only the close button
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Recommendations not quite right?",
                              size: "4xl",
                              weight: "semibold",
                            },
                            subtitle: "",
                            align: "center",
                          },
                          variant: "none",
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: { type: "icon", name: "@close" },
                          },
                        }}
                        // 2. BODY: Center-aligned content
                        body={{
                          align: "center",
                        }}
                        // 3. FOOTER: Stacked arrangement with shape wide to mimic full-width buttons
                        footer={{
                          primaryAction: {
                            type: "button",
                            label: "Turn on history",
                            size: "base",
                            variant: "solid",
                            color: "brand",
                            fullWidth: true, // Ensures the button spans the full width of the modal
                          },
                          secondaryAction: {
                            type: "button",
                            label: "Leave history off",
                            size: "base",
                            variant: "soft",
                            color: "neutral",
                            fullWidth: true, // Ensures the button spans the full width of the modal
                          },
                          arrangement: "col", // Stacks the buttons vertically
                          variant: "none", // Removes top border line
                          align: "center",
                        }}
                      >

                          <div className="flex flex-col items-center text-center px-2">
                            {/* Main Title
          <h2 className="text-2xl font-bold text-gray-90 dark:text-white mb-3 tracking-tight">
            Recommendations not quite right?
          </h2> */}

                            {/* Descriptive Subtitle */}
                            <p className="text-lg text-gray-10 dark:text-gray-90 leading-relaxed max-w-full">
                              When you turn on watch history, you’ll get more
                              personalized recommendations.
                            </p>
                          </div>

                      </Modal.Dialog>
                    </div>
                  </div>
                       {/* Card 7 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example Modal (Page is unavailable)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal.Dialog
                        cTag="modal-primary"
                        trigger={{
                          type: "button",
                          label: "Example modal 3",
                        }}
                        closeOnInteractionOutside={true}
                        backdrop="dim"
                        size="base"
                        // 1. Configure header to hide borders and the close button
                        header={{
                          content: {
                            title: "",
                            subtitle: "",
                          },
                          variant: "none", // Removes the divider line
                          closeButton: {
                            type: "none", // Hides the close button
                          },
                        }}
                        body={{
                          align: "center",
                        }}
                        // 2. Update footer to reflect the loading state and lighter color
                        footer={{
                          primaryAction: {
                            type: "button",
                            label: "Go to Home",
                            size: "base",
                            fullWidth: true,
                            color: "gray",
                            className: "text-black",
                            // Use your icon system to call the spinner
                          },

                          variant: "none",
                          align: "center",
                        }}
                      >
                        {/* Leave this empty so it uses the config above without adding extra padding */}

                          <div className="">
                            
                             <img
                            src="https://user-images.githubusercontent.com/21296444/28687161-edb3aa9c-72e3-11e7-8d38-4c94dcb38811.png"
                            alt="Promo Illustration"
                            className="w-16 h-16 object-contain mb-4 opacity-70 drop-shadow-sm" // Adjusted size and opacity
                          />

                            <h3 className="text-3xl font-semibold text-gray-90 dark:text-white mb-2">
                              This page is unavailable
                            </h3>
                            <h1 className="text-lg font-normal text-gray-90 dark:text-white mb-2">
                              You don't have access to this link or this link is
                              invalid.
                            </h1>
                          </div>

                      </Modal.Dialog>
                    </div>
                  </div>
                  {/* Card 7 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example modal(Clear Chat Modal)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal.Dialog
                        cTag="modal-primary"
                        trigger={{
                          type: "button",
                          label: "Example modal 4",
                        }}
                        closeOnInteractionOutside={true}
                        backdrop="dim"
                        size="sm" // "base" or "sm" depending on your exact library sizing
                        // Configure header to hide the border but KEEP the close "X" button
                        header={{
                          content: {
                            title: "",
                            subtitle: "",
                          },
                          variant: "none", // Removes the divider line
                          closeButton: {
                            type: "button",
                            adaptive: true,
                            prefix: { type: "icon", name: "@close" }, // Standard 'x' close icon
                          },
                        }}
                        footer={{
                          arrangement: "col",
                          primaryAction: {
                            type: "button",
                            label: "Clear chat",
                            fullWidth: true,
                            size: "base",
                          },
                          secondaryAction: {
                            type: "button",
                            label: "Log in",
                            fullWidth: true,
                            size: "base",
                          },
                        }}
                        body={{
                          align: "center",
                        }}
                        // We are leaving the footer prop out here and building it manually below to guarantee vertical stacking
                      >
                        {/* Renders the top-right X and handles the spacing */}

                          <div className="flex flex-col items-center text-center px-4">

                              <h2 className="text-3xl font-semibold text-gray-90 dark:text-white mb-3">
                            Clear current chat?
                          </h2>
                            {/* Subtitle / Description with selective bolding */}
                            <p className="text-2xl text-gray-60 dark:text-gray-30 leading-relaxed mb-4">
                              To start a new chat, your current conversation
                              will be discarded.{" "}
                              <span className="font-semibold text-gray-90 dark:text-white">
                                Sign up
                              </span>{" "}
                              or{" "}
                              <span className="font-semibold text-gray-90 dark:text-white">
                                log in
                              </span>{" "}
                              to save chats.
                            </p>
                          </div>

                      </Modal.Dialog>
                    </div>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 7. Header  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Header</h2>
                <div className={gridStyle}>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Without-Subtitle
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "w/o subtitle",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Header Without Subtitle",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: { type: "text", children: "" },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This dialog demonstrates a header configuration without
                        a subtitle. It maintains standard spacing and includes
                        primary and secondary footer actions.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Icon at top
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "icon-top",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "top" },
                        content: {
                          title: {
                            type: "text",
                            children: "Dialog Header",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Header icon aligned at top",
                            size: "sm",
                          },
                        },
                        closeButton: false,
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                      body={{ alignWithIcon: true }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        Notice how the header icon is aligned to the top. The
                        body content aligns alongside the icon structure
                        flawlessly.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Content center
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "center",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "top" },
                        content: {
                          title: {
                            type: "text",
                            children: "Content Center",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Dialog with centered content",
                            size: "sm",
                          },
                          align: "center",
                        },
                        closeButton: false,
                      }}
                      footer={{
                        align: "center",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40 text-center">
                        The text content within this dialog's header and body is
                        centrally aligned, providing a focused, symmetrical
                        layout often used for alerts.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Arrangement-Reversed
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "subtitle-up",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Content Reverse",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Dialog with content reversed",
                            size: "sm",
                          },
                          align: "start",
                          arrangement: "reverse",
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        Notice how the title and subtitle arrangement is flipped
                        in the header. The subtitle appears above the primary
                        title text.
                      </p>
                    </ModalDialog>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 8. Header Variants  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Header Variants</h2>
                <div className={gridStyle}>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - none
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "none",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Different dialog header variants",
                            size: "sm",
                          },
                        },
                        variant: "none",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a header variant with no
                        additional styling, providing a clean and simple look.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - filled
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "filled",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Different dialog header variants",
                            size: "sm",
                          },
                        },
                        variant: "solid",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a header variant with a filled
                        background, creating a distinct separation from the body
                        content.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider padded
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "divider",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Different dialog header variants",
                            size: "sm",
                          },
                        },
                        variant: "divider-padded",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a header variant with a padded
                        divider, providing a subtle visual separation between
                        the header and body content.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider full
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "divider-full",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Different dialog header variants",
                            size: "sm",
                          },
                        },
                        variant: "divider-full",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a header variant with a
                        full-width divider, creating a strong visual separation
                        between the header and body content.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize truncate">
                      variant - filled + divider
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "filled + divider",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Different dialog header variants",
                            size: "sm",
                          },
                        },
                        variant: "solid-divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a header variant that combines
                        a filled background with a divider, creating a visually
                        striking and well-defined separation.
                      </p>
                    </ModalDialog>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 9. Body */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Body</h2>
                <div className={gridStyle}>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      without scrollbar
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "w/o scrollbar",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Body Variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Content adapting to layout seamlessly",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "start",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        alignWithIcon: true,
                      }}
                      body={{
                        align: "justify",
                        alignWithIcon: true,
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates multiple body variants
                        presented in a clean, uninterrupted view without
                        introducing scrollbars. Each variant adapts seamlessly
                        to the available space, maintaining visual consistency
                        and readability while respecting the container’s
                        boundaries. By intelligently managing overflow and
                        spacing, the content remains fully accessible at a
                        glance, creating a smooth and distraction-free
                        experience.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      with scrollbar
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "with scrollbar",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Scrollable Body",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Handling extended content gracefully",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "start",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        alignWithIcon: true,
                      }}
                      body={{
                        scrollbar: true,
                        maxHeightForScrollbar: "120px",
                        align: "start",
                        alignWithIcon: true,
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40 pr-2">
                        This layout showcases body variants within a
                        scroll-enabled container, allowing additional content to
                        be accessed without compromising the overall structure.
                        The scrollbar appears only when necessary, preserving a
                        clean initial view while supporting longer or dynamic
                        content. Each body variant maintains its visual
                        integrity as users scroll, ensuring consistent spacing,
                        readability, and alignment throughout the experience.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      with image
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", ctag: "button", label: "img" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Media View",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Body with added imagery",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "center",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true, // Ensures the button spans the full width of the modal
                        },
                        arrangement: "row",
                        alignWithIcon: true,
                      }}
                      body={{
                        align: "center",
                        alignWithIcon: true,
                      }}
                    >
                      <img
                        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                        width={285}
                        height={250}
                        alt="Beautiful sunset at the beach"
                        className="rounded-md object-cover shadow-sm w-full"
                      />
                    </ModalDialog>
                  </div>
                  {/* Input-Label variants */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Input-Label variants
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "input variants",
                      }}
                      closeOnInteractionOutside={true}
                      allowOutsideInteraction={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "New Story",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Share your experience with the world",
                            size: "sm",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        variant: "divider-padded",
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        align: "end",
                        variant: "divider-padded",
                        arrangement: "row",
                        alignWithIcon: true,
                      }}
                      body={{
                        alignWithIcon: true,
                      }}
                    >
                      <form className="w-full space-y-6 text-start">
                        <div className="w-full">
                          {renderSlot({
                            slot: {
                              type: "label",
                              text: "Cover Image",
                              size: "base",
                              className: "mb-2 font-semibold text-gray-70",
                            },
                          })}
                          <div className="group relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-30 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-blue-500 transition-all duration-200">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-40 group-hover:text-blue-500">
                              <p className="text-xs font-medium">
                                Click to upload cover
                              </p>
                            </div>
                            <input type="file" className="hidden" />
                          </div>
                        </div>
                        <div>
                          {renderSlot({
                            slot: {
                              type: "label",
                              text: "Title",
                              align: "start",
                              size: "base",
                              className:
                                "mb-1.5 block font-medium text-gray-70",
                            },
                          })}
                          {renderSlot({
                            slot: {
                              type: "input-text",
                              placeholder: "e.g. The Quiet Morning",
                              size: "sm",
                              className:
                                "w-full h-10 px-4 py-2 border border-gray-20 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none",
                            },
                          })}
                        </div>
                        <div>
                          {renderSlot({
                            slot: {
                              type: "label",
                              text: "Category",
                              align: "start",
                              size: "base",
                              className:
                                "mb-1.5 block font-medium text-gray-70",
                            },
                          })}
                          <div className="relative">
                            <select
                              id="category"
                              className="appearance-none bg-white border border-gray-20 text-gray-70 text-sm rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full px-4 py-2.5 outline-none transition-all cursor-pointer"
                            >
                              <option>Travel</option>
                              <option>Lifestyle</option>
                              <option>Technology</option>
                              <option>Abstract</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          {renderSlot({
                            slot: {
                              type: "label",
                              text: "Your Story",
                              align: "start",
                              size: "base",
                              className:
                                "mb-1.5 block font-medium text-gray-70",
                            },
                          })}
                          {renderSlot({
                            slot: {
                              type: "input-textarea",
                              placeholder: "Start typing your story here...",
                              size: "sm",
                              className:
                                "block w-full px-4 py-3 text-sm text-gray-70 bg-white border border-gray-20 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none transition-all placeholder-gray-40",
                            },
                          })}
                        </div>
                      </form>
                    </ModalDialog>
                  </div>
                  {/* Profile Variant */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Profile Variant (Scrollable)
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "View Profile",
                      }}
                      closeOnInteractionOutside={true}
                      allowOutsideInteraction={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Team Member",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "View employee details",
                            size: "sm",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                      }}
                      body={{ align: "center", alignWithIcon: true }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true, // Ensures the button spans the full width of the modal
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true, // Ensures the button spans the full width of the modal
                        },
                        variant: "none",
                        align: "center",
                        arrangement: "row",
                        alignWithIcon: true,
                      }}
                    >
                      <div className="max-h-[60vh] overflow-y-auto w-full p-1 custom-scrollbar">
                        <div className="w-full flex flex-col items-center pt-2">
                          <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-30"></div>
                            <img
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                              alt="Profile"
                              className="relative w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                            <span className="absolute bottom-1 end-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></span>
                          </div>
                          <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-gray-90">
                              Sarah Jenkins
                            </h3>
                            <p className="text-sm font-medium text-blue-600">
                              Senior UX Designer
                            </p>
                          </div>
                          <div className="mt-3 text-sm text-gray-50 text-center px-4 leading-relaxed">
                            <p>
                              Passionate about creating intuitive digital
                              experiences. Lover of coffee, minimalism, and
                              sunset photography. Sarah has over 10 years of
                              experience leading design teams and building
                              scalable design systems for Fortune 500 companies.
                            </p>
                          </div>
                          <div className="w-full mt-6 grid grid-cols-3 divide-x divide-gray-20 border-t border-gray-10 pt-4 pb-2">
                            <div className="flex flex-col items-center">
                              <span className="text-lg font-bold text-gray-80">
                                12
                              </span>
                              <span className="text-xs text-gray-40 uppercase tracking-wide">
                                Projects
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-lg font-bold text-gray-80">
                                5.8k
                              </span>
                              <span className="text-xs text-gray-40 uppercase tracking-wide">
                                Followers
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-lg font-bold text-gray-80">
                                4.9
                              </span>
                              <span className="text-xs text-gray-40 uppercase tracking-wide">
                                Rating
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ModalDialog>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 10. Footer */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Footer</h2>
                <div className={gridStyle}>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Single-button/start
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "1 button start",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Layouts",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Single button aligned to start",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "start",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout features a single primary action aligned to
                        the start (left) of the footer. It is typically used in
                        informational dialogs where the primary call-to-action
                        serves as a simple acknowledgment.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Single-button/end
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "1 button end",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Layouts",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Single button aligned to end",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This variation positions a single primary action at the
                        end (right) of the footer. This is the most common
                        pattern for standard dialogue flows, guiding the user
                        forward.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Double-button/start
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "2 button start",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Layouts",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Double button aligned to start",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "start",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout features two actions grouped at the start of
                        the footer. It works well for forms or interfaces where
                        the visual weight needs to be anchored to the left.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Double-button/end
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "2 button end",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Layouts",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Double button aligned to end",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        The classic dual-action footer. Positioning the primary
                        and secondary actions at the end creates a universally
                        recognized confirmation flow for the user.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      centered button
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "2 button center",
                      }}
                      closeOnInteractionOutside
                      header={{
                        lSlot: { icon: true, align: "top" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Layouts",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Double button center",
                            size: "sm",
                          },
                          align: "center",
                        },
                      }}
                      footer={{
                        align: "center",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40 text-center">
                        Centering the actions creates a balanced, symmetrical
                        visual hierarchy. This alignment pairs beautifully with
                        centrally aligned header and body content.
                      </p>
                    </ModalDialog>
                  </div>
                   {/* Card 5: Double Button at both ends*/}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      2 Buttons at both ends
                    </span>
                    <Modal.Dialog
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        label: "2 button at both ends",
                      }}
                      closeOnInteractionOutside={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Layouts",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer with double button center",
                          },
                          arrangement: "normal",
                          align: "center",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      footer={{
                        align: "justify",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                      }}
                    >
                        <p className="text-sm text-gray-60 dark:text-gray-40 text-center">
                          Centering the actions creates a balanced, symmetrical
                          visual hierarchy. This alignment pairs beautifully
                          with centrally aligned header and body content, often
                          used in alerts or success messages.
                        </p>
                    </Modal.Dialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      wide button
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "wide buttons",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Wide Button",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer with wide buttons",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "center",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true,
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true,
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        Applying the 'wide' shape forces the buttons to stretch
                        across the available container width. This maximizes the
                        hit area, making it highly accessible and
                        mobile-friendly.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      horizontal button
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "horizontal",
                      }}
                      closeOnInteractionOutside
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Horizontal Button",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer with vertical arrangement",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "center",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true,
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true,
                        },
                        arrangement: "col",
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        Arranging wide buttons in a column layout is an
                        excellent design choice for accommodating lengthy text
                        labels or creating tall touch targets for mobile
                        interfaces.
                      </p>
                    </ModalDialog>
                  </div>
                  {/* <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Avatar button
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "avatar button",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: { type: "text", children: "Avatar Footer", size: "lg", weight: "semibold" },
                          subtitle: { type: "text", children: "Footer with avatar badge", size: "sm" },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Approve", size: "base" },
                        secondaryAction: { type: "button", label: "Review", size: "base" },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        A variation demonstrating standard footer buttons accompanied by rich contextual elements like user avatars or indicators.
                      </p>
                    </ModalDialog>
                  </div> */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Link & button
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "link & button",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Button with Link",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer with link & buttons",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        link: {
                          text: "Learn More",
                          href: "www.example.com",
                        },
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This variant provides helpful secondary navigation—like
                        linking to documentation or policies—without cluttering
                        the main action group.
                      </p>
                    </ModalDialog>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 11. Footer Variants  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Footer Variants</h2>
                <div className={gridStyle}>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - none
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "none",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "none",
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a footer without any additional
                        styling or separation from the body content. It
                        seamlessly integrates for a minimalist look.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - filled
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "filled",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "solid",
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a footer with a filled
                        background, creating a distinct separation from the body
                        content. It draws attention to the action buttons.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider padded
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "divider",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "divider-padded",
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a footer with a padded divider,
                        providing a subtle visual separation from the body
                        content. The padded divider adds elegance.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider full
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "divider-full",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        lSlot: { icon: true, align: "start" },
                        content: {
                          title: {
                            type: "text",
                            children: "Footer variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "divider-full",
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout demonstrates a footer with a full-width
                        divider, creating a clear and defined separation. The
                        full divider emphasizes the footer area.
                      </p>
                    </ModalDialog>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize truncate">
                      variant - filled + divider
                    </span>
                    <ModalDialog
                      cTag="dialog"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{
                        type: "button",
                        ctag: "button",
                        label: "filled + divider",
                      }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Footer variants",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            size: "sm",
                          },
                        },
                      }}
                      footer={{
                        align: "end",
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "solid-divider",
                      }}
                    >
                      <p className="text-sm text-gray-60 dark:text-gray-40">
                        This layout combines a filled background with a divider,
                        creating a visually distinct and organized section
                        within the dialog structure.
                      </p>
                    </ModalDialog>
                  </div>
                </div>
              </section>
            </LazySection>
          </div>
        </div>
      </ShowcaseShell>
    );
  }
