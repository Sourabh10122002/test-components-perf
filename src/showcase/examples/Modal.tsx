// @ts-nocheck
// Ported from origin/modal:src/components/Modal/stories/Modal.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/modal:src/components/Modal/stories/Modal.stories.tsx (Showcase) + origin/modal:src/components/Modal/stories/ModalDialog.stories.tsx (Showcase, via ../story-helpers/Modal/ModalDialogShowcase)
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@inventive-ui/components/Modal";
import type { ModalBackdrop } from "@inventive-ui/components/Modal";
import { LazySection } from "../storybook";
import { cn } from "@inventive-ui/framework";
import { useSlotRenderer } from "@inventive-ui/framework/slots";
import { SHOWCASE_CONTAINER_CLASS, ShowcaseShell } from "../storybook";
import ModalDialogShowcase from "../story-helpers/Modal/ModalDialogShowcase";

/* ---------------------------- META CONFIGURATION -------------------------- */

/* -------------------------------------------------------------------------- */
/* SHOWCASE STORY                                                             */
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

const positionLabelMap = {
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

// Story params were: (args: ModalStoryProps, { globals }: { globals: Record<string, unknown> })
function ModalShowcase() {
  const globals = {};
    // Hide the controls panel for this story
    const renderSlot = useSlotRenderer();
    // ---------------------------------------------------------
    // STATE
    // --------------------------------------------------------

    // ---------------------------------------------------------
    // DATA LISTS
    // ---------------------------------------------------------
    const sizes = ["xs", "sm", "base", "lg", "full"] as const;
    const animations = ["Default", "Slide", "Scale", "Bounce"] as const;
    const backdrop = ["none", "blur", "dim"];
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
      <ShowcaseShell
        globals={globals}
        className={cn(SHOWCASE_CONTAINER_CLASS, "p-0")}
      >
        <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-600">
          <div className="max-w-7xl mx-auto">
            <header className="mb-10">
              <h1 className="text-3xl font-extrabold text-slate-900">
                Modal Showcase
              </h1>
              <p className="text-slate-500 mt-2">
                Interactive gallery of all available Modal configurations. Click
                a card to trigger the modal.
              </p>
            </header>
            {/* ------------------------------------------------------ */}
            {/* 1. SIZES */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Sizes</h2>
                <div className={cn(gridStyle)}>
                  {sizes.map((size) => (
                    <div key={size} className={cardStyle}>
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        Size: {sizeLabelMap[size]}
                      </span>
                      {/* MODAL INSTANCE */}
                      <Modal
                        cTag="modal-primary"
                        size={size}
                        animation="Default"
                        placement="top"
                        trigger={{ type: "button", label: size }}
                        closeOnInteractionOutside={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Modal Sizes",
                              color: "black",
                              weight: "semibold",
                              size: "base",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Demonstrate the different sizes",
                              color: "neutral",
                              weight: "regular",
                              size: "sm",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This is a demonstration of the {sizeLabelMap[size]}{" "}
                            modal size. The content scales appropriately to
                            showcase the available size options.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 2. POSITIONS */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                  placements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-12 mx-auto">
                  {positions.map((pos) => (
                    <div
                      key={pos}
                      className="flex flex-col items-center justify-center gap-3 h-32 w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer"
                    >
                      <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        {positionLabelMap[pos]}
                      </span>
                      <Modal
                        cTag="modal-primary"
                        trigger={{ type: "button", label: pos }}
                        placement={pos}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Modal Positions",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Demonstrate the different positions",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal demonstrates the{" "}
                            <strong>{positionLabelMap[pos]}</strong> placement.
                            It opens from the selected position while
                            maintaining consistent spacing, alignment, and
                            interaction behavior.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 3. BACKDROP */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Backdrop</h2>
                <div className={gridStyle}>
                  {backdrop.map((backdrop) => (
                    <div
                      key={backdrop}
                      className={cardStyle}
                      //
                    >
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        Backdrop: {backdropLabelMap[backdrop]}
                      </span>
                      {/* MODAL INSTANCE */}
                      <Modal
                        cTag="modal-primary"
                        size="sm"
                        animation="Default"
                        placement="center"
                        backdrop={backdrop as ModalBackdrop}
                        trigger={{ type: "button", label: backdrop }}
                        closeOnInteractionOutside={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Modal Backdrop",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children:
                                "Demonstrate the different backdrop styles",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal demonstrates the{" "}
                            <strong>{backdropLabelMap[backdrop]}</strong>{" "}
                            backdrop. Open each variant to compare how the
                            background is displayed while the modal remains in
                            focus.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 3. ANIMATIONS */}
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
                      <Modal
                        cTag="modal-primary"
                        size="sm"
                        animation={animation}
                        placement="top"
                        trigger={{ type: "button", label: animation }}
                        closeOnInteractionOutside={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Modal Animations",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children:
                                "Demonstrate the different animation styles",
                              color: "neutral",
                              weight: "regular",
                              size: "sm",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal demonstrates the{" "}
                            <strong>{animation}</strong> animation. Open each
                            variant to compare how the modal enters and exits
                            while preserving a consistent user experience.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 4. INTERRACTION CONFIG */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2
                  className={cn(
                    "text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200",
                  )}
                >
                  Interaction Config
                </h2>
                {/* CHANGE 1: Switched from Grid to Flex. 'flex-wrap' prevents overlapping. */}
                <div className={cn("flex flex-wrap gap-8 mb-12 justify-start")}>
                  {/* Card 1 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Draggable
                    </span>
                    {/* Button Wrapper */}
                    <div className="flex flex-col gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
                        // trigger={{ label: "Overflow False" }}
                        trigger={{ type: "button", label: "Overflow false" }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={false}
                        draggable={true}
                        overflow={false}
                        allowOutsideInteraction={false}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Free Dragging",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Drag beyond viewport boundaries",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal allows unrestricted dragging. You can
                            move it freely, including beyond the viewport
                            boundaries, making it suitable for large workspaces
                            or multi-monitor environments.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                      <Modal
                        cTag="modal-primary"
                        // trigger={{ label: "Overflow True" }}
                        trigger={{ type: "button", label: "Overflow true" }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={false}
                        draggable={true}
                        overflow={true}
                        allowOutsideInteraction={false}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Restricted Dragging",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Confined to the viewport",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal can be dragged, but its movement is
                            constrained to the viewport. It cannot be moved
                            outside the visible screen area, ensuring it always
                            remains accessible.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Outside Interraction
                    </span>
                    {/* Button Wrapper */}
                    <div className="flex flex-col gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
                        // trigger={{ label: "interraction-true" }}
                        trigger={{ type: "button", label: "interraction-true" }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={false}
                        draggable={false}
                        overflow={false}
                        allowOutsideInteraction={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outside Interaction Enabled",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children:
                                "Interact with content behind the modal",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal allows interaction with elements outside
                            of it. You can continue using the underlying page
                            without closing the modal.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                      <Modal
                        cTag="modal-primary"
                        // trigger={{ label: "interraction-false" }}
                        trigger={{
                          type: "button",
                          label: "interraction-false",
                        }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={false}
                        draggable={false}
                        overflow={false}
                        allowOutsideInteraction={false}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outside Interaction Disabled",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children:
                                "Block interaction with background content",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal prevents interaction with elements
                            outside of it. The background remains inactive until
                            the modal is closed.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Click outside the modal to close
                    </span>
                    {/* Button Wrapper */}
                    <div className="flex flex-col gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
                        trigger={{ type: "button", label: "dismissible-true" }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={true}
                        draggable={false}
                        overflow={false}
                        allowOutsideInteraction={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outside Click Enabled",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Click outside to dismiss the modal",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal closes automatically when you click
                            outside of it. Use this behavior for dismissible
                            dialogs that don't require an explicit action to
                            close.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                      <Modal
                        cTag="modal-primary"
                        // trigger={{ label: "dismissible-false" }}
                        trigger={{ type: "button", label: "dismissible-false" }}
                        backdrop="none"
                        size="sm"
                        closeOnInteractionOutside={false}
                        draggable={false}
                        overflow={false}
                        allowOutsideInteraction={true}
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outside Click Disabled",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children:
                                "Outside clicks do not dismiss the modal",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This modal remains open when you click outside of
                            it. Close it using the close button or another
                            available action within the modal.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 3. Extra Controls */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2
                  className={cn(
                    "text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200",
                  )}
                >
                  Extra controls
                </h2>
                {/* CHANGE 1: Switched from Grid to Flex. 'flex-wrap' prevents overlapping. */}
                <div className={cn("flex flex-wrap gap-8 mb-12 justify-start")}>
                  {/* Card 1 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Border Enabled
                    </span>
                    {/* Button Wrapper */}
                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
                        // trigger={{ label: "outlined" }}
                        trigger={{ type: "button", label: "outlined" }}
                        backdrop="none"
                        outlined
                        size="sm"
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Outlined Modal",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children:
                                "Display the modal with a visible border",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: {
                            type: "button",
                            size: "base",
                            adaptive: true,
                            prefix: {
                              type: "icon",
                              name: "@close",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody>
                          <p className="text-sm text-gray-60 dark:text-gray-40">
                            This example demonstrates the{" "}
                            <strong>outlined</strong> variant. A visible border
                            is applied around the modal to enhance its
                            definition and visual separation from the
                            background.
                          </p>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Resizeable
                    </span>
                    {/* Button Wrapper */}
                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
                        trigger={{ type: "button", label: "allow-resize" }}
                        backdrop="none"
                        size="base"
                        resizable
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Maximizable Modal",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Expand and restore the modal size",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: true,
                          trailingButton1: {
                            type: "button",
                            prefix: {
                              name: "more_horiz",
                              type: "icon",
                            },
                          },
                          trailingButton2: {
                            type: "button",
                            prefix: {
                              name: "settings",
                              type: "icon",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody />
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Maximizable
                    </span>
                    {/* Button Wrapper */}
                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
                        trigger={{ type: "button", label: "allow-maximize" }}
                        maximizable
                        backdrop="none"
                        size="base"
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Maximizable Modal",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Expand and restore the modal size",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: true,
                          trailingButton1: {
                            type: "button",
                            prefix: {
                              name: "more_horiz",
                              type: "icon",
                            },
                          },
                          trailingButton2: {
                            type: "button",
                            prefix: {
                              name: "settings",
                              type: "icon",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody />
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Maximizable + Resizable
                    </span>
                    {/* Button Wrapper */}
                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
                        trigger={{ type: "button", label: "maximize + resize" }}
                        maximizable
                        resizable
                        backdrop="none"
                        size="base"
                        header={{
                          content: {
                            title: {
                              type: "text",
                              children: "Maximizable Modal",
                              color: "neutral",
                              weight: "semibold",
                              size: "lg",
                              truncate: true,
                            } as any,
                            subtitle: {
                              type: "text",
                              children: "Expand and restore the modal size",
                              color: "neutral",
                              weight: "regular",
                              size: "base",
                              truncate: true,
                            } as any,
                            arrangement: "normal",
                            align: "start",
                          },
                          closeButton: true,
                          trailingButton1: {
                            type: "button",
                            prefix: {
                              name: "more_horiz",
                              type: "icon",
                            },
                          },
                          trailingButton2: {
                            type: "button",
                            prefix: {
                              name: "settings",
                              type: "icon",
                            },
                          },
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
                          tertiaryAction: undefined,
                          variant: "none",
                          align: "end",
                          // shape: "regular",
                          arrangement: "row",
                        }}
                      >
                        <ModalHeader />
                        <ModalBody />
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 5 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example Modal (Discord Style)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
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
                            fullWidth: true,
                            size: "lg", // Large button
                            color: "brand", // Assuming brand is blue/purple
                          },
                          // shape: "wide", // Makes the button span 100% width
                          variant: "none", // Removes the top border line
                          align: "center",
                        }}
                      >
                        {/* Do NOT pass children to ModalHeader so it renders the config above */}
                        <ModalHeader />

                        <ModalBody>
                          <div className="flex flex-col items-center text-center pb-2 px-2">
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
                        </ModalBody>

                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 6 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example Modal (Promotional Prompt)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
                        cTag="modal-primary"
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
                            fullWidth: true, 
                          },
                          secondaryAction: {
                            type: "button",
                            label: "Leave history off",
                            size: "base",
                            variant: "soft",
                            color: "neutral",
                            fullWidth: true,
                          },
                          arrangement: "col", // Stacks the buttons vertically
                          // shape: "wide", // Forces them to span 100% width
                          variant: "none", // Removes top border line
                          align: "center",
                        }}
                      >
                        <ModalHeader />

                        <ModalBody>
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
                        </ModalBody>

                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 7 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example Modal (Page is unavailable)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
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

                          // shape: "wide",
                          variant: "none",
                          align: "center",
                        }}
                      >
                        {/* Leave this empty so it uses the config above without adding extra padding */}
                        <ModalHeader>
                          <img
                            src="https://user-images.githubusercontent.com/21296444/28687161-edb3aa9c-72e3-11e7-8d38-4c94dcb38811.png"
                            alt="Promo Illustration"
                            className="w-16 h-16 object-contain mb-4 opacity-70 drop-shadow-sm" // Adjusted size and opacity
                          />
                        </ModalHeader>

                        <ModalBody>
                          <div className="">
                            <h3 className="text-3xl font-semibold text-gray-90 dark:text-white mb-2">
                              This page is unavailable
                            </h3>
                            <h1 className="text-lg font-normal text-gray-90 dark:text-white mb-2">
                              You don't have access to this link or this link is
                              invalid.
                            </h1>
                          </div>
                        </ModalBody>

                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                  {/* Card 8 */}
                  <div className="flex flex-col items-center justify-center gap-3 min-h-[8rem] h-auto w-60 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer">
                    <span className="whitespace-nowrap text-sm text-gray-60 dark:text-gray-40 font-medium capitalize">
                      Example modal(Clear Chat Modal)
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center w-full">
                      <Modal
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
                        <ModalHeader>
                          {/* Title */}
                          <h2 className="text-3xl font-semibold text-gray-90 dark:text-white mb-3">
                            Clear current chat?
                          </h2>
                        </ModalHeader>

                        <ModalBody>
                          <div className="flex flex-col items-center text-center px-4">
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
                        </ModalBody>

                        {/* Custom Footer for vertically stacked, full-width buttons */}
                        <ModalFooter />
                        {/* <div className="flex flex-col gap-3 w-full px-2 pb-2"> */}

                        {/* Primary Action Button (White in Dark Mode) */}
                        {/* <button className="w-full py-3 px-4 bg-gray-90 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"> */}
                        {/* Clear chat */}
                        {/* </button> */}

                        {/* Secondary Action Button (Outline) */}
                        {/* <button className="w-full py-3 px-4 bg-transparent border border-gray-30 dark:border-gray-60 text-gray-90 dark:text-white text-sm font-semibold rounded-full hover:bg-gray-10 dark:hover:bg-gray-80 transition-colors"> */}
                        {/* Log in */}
                        {/* </button> */}

                        {/* </div> */}
                        {/* </ModalFooter> */}
                      </Modal>
                    </div>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1.Header  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Header</h2>
                <div className={gridStyle}>
                  {/* Card 1: Without-Subtitle */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Without-Subtitle
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "with subtitle" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Header With Subtitle",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children:
                              "This modal comes with some subtitle written in this.",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                            filled: false,
                          },
                        },
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
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-black dark:text-gray-40">
                          This modal demonstrates a header configuration with a
                          subtitle. It maintains standard spacing and includes
                          primary and secondary footer actions.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 2: Without-Close button */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Without-Close button
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "w/o close" }}
                      allowOutsideInteraction={true}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Modal Without Close Button",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Click Outside To Close Enabled",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: false,
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This modal omits the default close button in the
                          header. To dismiss this modal, you must click on the
                          backdrop outside the modal window or use the footer
                          actions.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 3: With-Trailing buttons */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      With-Trailing buttons
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "trailing buttons" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Trailing Buttons",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing Modal with trailing buttons",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
                        },
                        trailingButton1: {
                          type: "button",
                          prefix: {
                            name: "more_horiz",
                            type: "icon",
                          },
                        },
                        trailingButton2: {
                          type: "button",
                          prefix: {
                            name: "settings",
                            type: "icon",
                          },
                        },
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
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This header includes additional trailing action
                          buttons (like settings or more options) alongside the
                          standard close button.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 4: Content-Center */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Content-Center
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "center" }}
                      closeOnInteractionOutside={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Content Center",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing Modal with content centered",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          align: "center",
                          arrangement: "normal",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
                        },
                        trailingButton1: {
                          type: "button",
                          prefix: {
                            name: "more_horiz",
                            type: "icon",
                          },
                        },
                        trailingButton2: {
                          type: "button",
                          prefix: {
                            name: "settings",
                            type: "icon",
                          },
                        },
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "none",
                        align: "center", // Aligning footer actions to center to match header
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40 text-center">
                          The text content within this modal's header and body
                          is centrally aligned, providing a focused, symmetrical
                          layout often used for alerts or success states.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 5: Arrangement-Reversed */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Arrangement-Reversed
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "subtitle-up" }}
                      closeOnInteractionOutside={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Content Reverse",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing Modal with content reversed",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          align: "start",
                          arrangement: "reverse",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
                        },
                        trailingButton1: {
                          type: "button",
                          prefix: {
                            name: "more_horiz",
                            type: "icon",
                          },
                        },
                        trailingButton2: {
                          type: "button",
                          prefix: {
                            name: "settings",
                            type: "icon",
                          },
                        },
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
                        variant: "none",
                        align: "start",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          Notice how the title and subtitle arrangement is
                          flipped in the header. The subtitle appears above the
                          primary title text.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 6: Forge Element */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Forge Element
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      closeOnInteractionOutside
                      trigger={{ type: "button", label: "forge element" }}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Forge Element",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                          },
                          subtitle: {
                            type: "text",
                            children:
                              "Showcasing Modal with Link as close button",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "link",
                          children: "Close",
                          truncate: true,
                          className: "w-15 h-10",
                        },
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This variation swaps out the traditional close icon
                          button for a simple text link element labeled "Close",
                          demonstrating component composability.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1.Header Variants  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Header Variants</h2>
                <div className={gridStyle}>
                  {/* Card 1: variant - none */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - none
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "none" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different header variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
                        },
                        variant: "none",
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a header variant with no
                          additional styling, providing a clean and simple look.
                          The absence of borders or background fills allows the
                          content to breathe naturally.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 2: variant - filled */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - filled
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "filled" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different header variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
                        },
                        variant: "solid",
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a header variant with a
                          filled background, creating a distinct separation from
                          the body content. The filled style enhances visual
                          hierarchy.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 3: variant - divider padded */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider padded
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "divider" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different header variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
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
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a header variant with a
                          padded divider, providing a subtle visual separation
                          between the header and body content. The padded
                          divider adds a touch of elegance while maintaining a
                          clean and organized appearance.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 4: variant - divider full */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider full
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "divider-full" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different header variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
                        },
                        variant: "divider-full",
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
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a header variant with a
                          full-width divider, creating a strong visual
                          separation between the header and body content. The
                          full divider emphasizes the division, enhancing
                          clarity and organization within the modal structure.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 5: variant - filled + divider */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize truncate">
                      variant - filled + divider
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="base"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "filled + divider" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Header variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different header variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: {
                            type: "icon",
                            name: "@close",
                          },
                        },
                        variant: "solid-divider",
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
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a header variant that
                          combines a filled background with a divider, creating
                          a visually striking and well-defined separation from
                          the body content.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1. Body */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Body</h2>
                <div className={gridStyle}>
                  {/* Card 1: without scrollbar */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      without scrollbar
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="xs"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "w/o scrollbar" }}
                      closeOnInteractionOutside={false}
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
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      body={{
                        align: "justify",
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                        },
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-10 dark:text-white">
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
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 2: with scrollbar */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      with scrollbar
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="xs"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "with scrollbar" }}
                      closeOnInteractionOutside={false}
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
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      body={{
                        scrollbar: true,
                        maxHeightForScrollbar: "120px", // slightly increased for better reading window
                        align: "justify",
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
                        variant: "none",
                        align: "end",
                        // shape: "regular",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-10 dark:text-white pr-2">
                          This layout showcases body variants within a
                          scroll-enabled container, allowing additional content
                          to be accessed without compromising the overall
                          structure. The scrollbar appears only when necessary,
                          preserving a clean initial view while supporting
                          longer or dynamic content. Each body variant maintains
                          its visual integrity as users scroll, ensuring
                          consistent spacing, readability, and alignment
                          throughout the experience. This approach balances
                          flexibility and usability, making it ideal for
                          content-rich sections where clarity and smooth
                          navigation are equally important.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 3: with image */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      with image
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="xs"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "img" }}
                      closeOnInteractionOutside={false}
                      allowOutsideInteraction={false}
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
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      body={{
                        align: "center",
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          fullWidth: true
                        },
                        variant: "none",
                        align: "center",
                        // shape: "wide",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <img
                          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                          width={285}
                          height={250}
                          alt="Beautiful sunset at the beach"
                          className="rounded-md object-cover shadow-sm w-full"
                        />
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 4: Input-Label variants */}
                  <div className={cardStyle}>
                    <span className="mb-4 block text-sm font-semibold capitalize text-gray-60 dark:text-gray-40">
                      Input-Label variants
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "input variants" }}
                      closeOnInteractionOutside={false}
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
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        variant: "divider-padded",
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      footer={{
                        // Solid purple button
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          variant: "solid",
                          color: "brand",
                        },
                        // Soft/light purple button
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          variant: "soft",
                          color: "brand",
                        },
                        align: "end",
                        variant: "divider-padded",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <form className="w-full space-y-5 py-1 text-start">
                          {/* 1. Cover Image Upload */}
                          <div className="group relative flex h-[120px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border-[1.5px] border-dashed border-gray-20 transition-all duration-200 hover:bg-gray-50">
                            <span className="text-sm font-medium text-gray-20">
                              Click to upload cover
                            </span>
                            <input type="file" className="hidden" />
                          </div>

                          {/* 2. Category Select */}
                          <div className="relative">
                            <select
                              id="category"
                              className="block w-full cursor-pointer rounded-lg border border-gray-80 bg-white px-3 py-2.5 text-sm text-gray-90 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            >
                              <option>Travel</option>
                              <option>Lifestyle</option>
                              <option>Technology</option>
                              <option>Abstract</option>
                            </select>
                          </div>
                        </form>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 5: Profile Variant */}
                  <div className={cardStyle}>
                    <span className="mb-4 block text-sm font-semibold capitalize text-gray-60 dark:text-gray-40">
                      Profile Variant (Scrollable)
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "View Profile" }}
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
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      body={{
                        align: "center",
                      }}
                      footer={{
                        primaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          variant: "solid",
                          color: "brand",
                          fullWidth: true
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          variant: "soft",
                          color: "brand",
                          fullWidth: true
                        },
                        variant: "none",
                        align: "center",
                        // shape: "wide",
                        arrangement: "row",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <div className="custom-scrollbar max-h-[60vh] w-full overflow-y-auto p-1">
                          <div className="flex w-full flex-col items-center pt-2">
                            {/* Avatar Image with Ring */}
                            <div className="relative shrink-0">
                              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur"></div>
                              <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                                alt="Profile"
                                className="relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg dark:border-gray-80"
                              />
                              <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-white bg-green-500 dark:border-gray-80"></span>
                            </div>

                            {/* Name and Role */}
                            <div className="mt-4 text-center">
                              <h3 className="text-xl font-bold text-gray-90 dark:text-white">
                                Sarah Jenkins
                              </h3>
                              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                Senior UX Designer
                              </p>
                            </div>

                            {/* Bio */}
                            <div className="mt-3 px-4 text-center text-sm leading-relaxed text-gray-60 dark:text-gray-30">
                              <p>
                                Passionate about creating intuitive digital
                                experiences. Lover of coffee, minimalism, and
                                sunset photography. Sarah has over 10 years of
                                experience leading design teams and building
                                scalable design systems for Fortune 500
                                companies.
                              </p>
                            </div>

                            {/* Stats Row */}
                            <div className="mt-6 grid w-full grid-cols-3 divide-x divide-gray-20 border-t border-gray-10 pb-2 pt-4 dark:divide-gray-70 dark:border-gray-70">
                              <div className="flex flex-col items-center">
                                <span className="text-lg font-bold text-gray-90 dark:text-white">
                                  12
                                </span>
                                <span className="text-xs font-medium uppercase tracking-wide text-gray-50 dark:text-gray-40">
                                  Projects
                                </span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-lg font-bold text-gray-90 dark:text-white">
                                  5.8k
                                </span>
                                <span className="text-xs font-medium uppercase tracking-wide text-gray-50 dark:text-gray-40">
                                  Followers
                                </span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-lg font-bold text-gray-90 dark:text-white">
                                  4.9
                                </span>
                                <span className="text-xs font-medium uppercase tracking-wide text-gray-50 dark:text-gray-40">
                                  Rating
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1. Footer */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Footer</h2>
                <div className={gridStyle}>
                  {/* Card 1: Single-button/start */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Single-button/start
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "1 button start" }}
                      closeOnInteractionOutside={true}
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
                            children:
                              "Footer with single button aligned to start",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout features a single primary action aligned
                          to the start (left) of the footer. It is typically
                          used in informational modals where the primary
                          call-to-action serves as a simple acknowledgment.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 2: Single-button/end */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Single-button/end
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "1 button end" }}
                      closeOnInteractionOutside={true}
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
                            children:
                              "Footer with single button aligned to end",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This variation positions a single primary action at
                          the end (right) of the footer. This is the most common
                          pattern for standard dialogue flows, guiding the user
                          forward.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 3: Double-button/start */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Double-button/start
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "2 button start" }}
                      closeOnInteractionOutside={true}
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
                            children:
                              "Footer with double button aligned to start",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout features two actions grouped at the start
                          of the footer. It works well for forms or interfaces
                          where the visual weight needs to be anchored to the
                          left alongside the reading direction.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 4: Double-button/end */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Double-button/end
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "2 button end" }}
                      closeOnInteractionOutside={true}
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
                            children:
                              "Footer with double button aligned to end",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          The classic dual-action footer. Positioning the
                          primary and secondary actions at the end creates a
                          standard, universally recognized confirmation flow for
                          the user.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 5: Centered button */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      centered button
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "2 button center" }}
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40 text-center">
                          Centering the actions creates a balanced, symmetrical
                          visual hierarchy. This alignment pairs beautifully
                          with centrally aligned header and body content, often
                          used in alerts or success messages.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 5: Double Button at both ends*/}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      centered button
                    </span>
                    <Modal
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40 text-center">
                          Centering the actions creates a balanced, symmetrical
                          visual hierarchy. This alignment pairs beautifully
                          with centrally aligned header and body content, often
                          used in alerts or success messages.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 6: Wide button */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      wide button
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "wide buttons" }}
                      closeOnInteractionOutside={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Wide Button",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer with wide buttons spanning width",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      footer={{
                        align: "center",
                        // shape: "wide",
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          Applying the 'wide' shape forces the buttons to
                          stretch across the available container width. This
                          maximizes the hit area, making it highly accessible
                          and mobile-friendly.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 7: Triple button/end */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Triple button/end
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "3 button end" }}
                      closeOnInteractionOutside={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Three Button",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer with three dynamic actions",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      footer={{
                        align: "end",
                        // shape: "regular",
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
                        tertiaryAction: {
                          type: "button",
                          label: "Button",
                          size: "base",
                          variant: "ghost", // Often a ghost button to reduce visual noise
                        },
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This complex footer handles three distinct actions.
                          Our layout engine smartly groups the primary and
                          secondary actions together, while isolating the
                          tertiary action on the opposite side to prevent
                          misclicks.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 8: Avatar button */}
                  {/* <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Avatar button
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="xs"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "avatar button" }}
                      closeOnInteractionOutside={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Avatar Footer",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer integrating an avatar & buttons",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      footer={{
                        align: "end",
                        shape: "regular",
                        primaryAction: {
                          type: "button",
                          label: "Approve",
                          size: "base",
                        },
                        secondaryAction: {
                          type: "button",
                          label: "Review",
                          size: "base",
                        },
                        // Using a raw React element for the slot renderer
                        tertiaryAction: (
                          <div className="flex items-center gap-2 cursor-pointer group">
                            <img
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32&q=80"
                              className="w-8 h-8 rounded-full border border-gray-20 group-hover:ring-2 group-hover:ring-blue-500 transition-all object-cover"
                              alt="User avatar"
                            />
                            <span className="text-sm font-medium text-gray-70 group-hover:text-blue-600">
                              Assignee
                            </span>
                          </div>
                        ),
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          Leveraging the slot renderer's flexibility, this layout
                          injects a custom React element (an avatar badge) into the
                          tertiary slot while keeping standard action buttons in the
                          primary and secondary slots.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div> */}
                  {/* Card 9: Link & button */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Link & button
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      trigger={{ type: "button", label: "link & button" }}
                      closeOnInteractionOutside={false}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Link & Button",
                            size: "lg",
                            weight: "semibold",
                          },
                          subtitle: {
                            type: "text",
                            children: "Footer with a link and buttons",
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
                        },
                      }}
                      footer={{
                        align: "end",
                        // shape: "regular",
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This variant maps a standard link to the tertiary
                          position. It provides helpful secondary
                          navigation—like linking to documentation or privacy
                          policies—without cluttering the main action group.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* Footer Variants  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Footer Variants</h2>
                <div className={gridStyle}>
                  {/* Card 1: variant - none */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - none
                    </span>
                    <Modal
                      cTag="modal-primary"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "none" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a footer without any
                          additional styling or separation from the body
                          content. The footer seamlessly integrates with the
                          overall layout, providing a minimalist and clean
                          aesthetic.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 2: variant - filled */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - filled
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "filled" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a footer with a filled
                          background, creating a distinct separation from the
                          body content. The filled footer enhances visual
                          hierarchy and draws attention to the action buttons,
                          providing a clear call-to-action area within the
                          modal.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 3: variant - divider padded */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider padded
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "divider" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                          label: "Discard",
                          size: "base",
                        },
                        variant: "divider-padded",
                      }}
                    >
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a footer with a padded
                          divider, providing a subtle visual separation from the
                          body content. The padded divider adds a touch of
                          elegance while keeping the content visually connected.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 4: variant - divider full */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider full
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "divider-full" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a footer with a full-width
                          divider, creating a clear and defined separation from
                          the body content. The full divider emphasizes the
                          footer area, enhancing the overall structure and
                          organization within the modal.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                  {/* Card 5: variant - filled + divider */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize truncate">
                      variant - filled + divider
                    </span>
                    <Modal
                      cTag="modal-primary"
                      size="sm"
                      animation="Default"
                      placement="center"
                      outlined
                      trigger={{ type: "button", label: "filled + divider" }}
                      closeOnInteractionOutside={true}
                      header={{
                        content: {
                          title: {
                            type: "text",
                            children: "Footer Variants",
                            color: "neutral",
                            weight: "semibold",
                            size: "lg",
                            truncate: true,
                          },
                          subtitle: {
                            type: "text",
                            children: "Showcasing different footer variants",
                            color: "neutral",
                            weight: "regular",
                            size: "base",
                            truncate: true,
                          },
                          arrangement: "normal",
                          align: "start",
                        },
                        closeButton: {
                          type: "button",
                          size: "base",
                          adaptive: true,
                          prefix: { type: "icon", name: "@close" },
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
                      <ModalHeader />
                      <ModalBody>
                        <p className="text-sm text-gray-60 dark:text-gray-40">
                          This layout demonstrates a footer that combines a
                          filled background with a divider, creating a visually
                          distinct and organized section within the modal. The
                          filled background adds depth while the divider ensures
                          a crisp structural edge.
                        </p>
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </div>
                </div>
              </section>
            </LazySection>
          </div>
        </div>
      </ShowcaseShell>
    );
  }

export default function ModalShowcasePage() {
  return (
    <>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Modal.stories.tsx — Showcase</h2>
      <ModalShowcase />
      <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mt-12">ModalDialog.stories.tsx — Showcase</h2>
      <ModalDialogShowcase />
    </>
  );
}
