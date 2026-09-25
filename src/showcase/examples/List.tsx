// Showcase ported from origin/list:src/components/List/stories/List.stories.tsx
import React from "react";
import { List, OrderedList, UnorderedList, ListItem } from "@inventive-ui/components/List";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../storybook";

function LazySection({
  children,
  height = 200,
}: {
  children: React.ReactNode;
  height?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref}>
      {visible ? children : <div style={{ minHeight: height }} />}
    </div>
  );
}

export default function ListShowcase() {
  const globals: Record<string, any> = {};
    // @ts-ignore -- unused in the original story (noUnusedLocals)
    const theme = getShowcaseTheme(globals);
    return (
      <ShowcaseShell className={SHOWCASE_CONTAINER_CLASS} globals={globals}>
        <div className="space-y-12 p-8 min-h-screen">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              List Component Showcase
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A comprehensive overview of list variations, styling, and nested
              lists.
            </p>
          </div>

          {/* Unordered Lists */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  Unordered Lists
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Various marker styles for unordered lists.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Disc (Default)
                  </h3>
                  <UnorderedList styleType="disc">
                    <ListItem>Item one</ListItem>
                    <ListItem>Item two</ListItem>
                    <ListItem>Item three</ListItem>
                  </UnorderedList>
                </div>
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Circle
                  </h3>
                  <UnorderedList styleType="circle">
                    <ListItem>Item one</ListItem>
                    <ListItem>Item two</ListItem>
                    <ListItem>Item three</ListItem>
                  </UnorderedList>
                </div>
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Square
                  </h3>
                  <UnorderedList styleType="square">
                    <ListItem>Item one</ListItem>
                    <ListItem>Item two</ListItem>
                    <ListItem>Item three</ListItem>
                  </UnorderedList>
                </div>
              </div>
            </section>
          </LazySection>

          {/* Ordered Lists */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  Ordered Lists
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Various number and alphabetical styles.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Decimal (Default)
                  </h3>
                  <OrderedList styleType="decimal">
                    <ListItem>First item</ListItem>
                    <ListItem>Second item</ListItem>
                    <ListItem>Third item</ListItem>
                  </OrderedList>
                </div>
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Lower Alpha
                  </h3>
                  <OrderedList styleType="lower-alpha">
                    <ListItem>First item</ListItem>
                    <ListItem>Second item</ListItem>
                    <ListItem>Third item</ListItem>
                  </OrderedList>
                </div>
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Upper Roman
                  </h3>
                  <OrderedList styleType="upper-roman">
                    <ListItem>First item</ListItem>
                    <ListItem>Second item</ListItem>
                    <ListItem>Third item</ListItem>
                  </OrderedList>
                </div>
              </div>
            </section>
          </LazySection>

          {/* Nested Lists */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  Nested Lists
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Lists inside of lists with proper indents and styling.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                <UnorderedList styleType="disc">
                  <ListItem>
                    Fruits
                    <UnorderedList styleType="circle" className="ml-4 mb-1">
                      <ListItem>Apple</ListItem>
                      <ListItem>Banana</ListItem>
                      <ListItem>Orange</ListItem>
                    </UnorderedList>
                  </ListItem>
                  <ListItem>
                    Vegetables
                    <OrderedList styleType="decimal" className="ml-4">
                      <ListItem>Carrot</ListItem>
                      <ListItem>Broccoli</ListItem>
                    </OrderedList>
                  </ListItem>
                </UnorderedList>
              </div>
            </section>
          </LazySection>

          {/* Prefix Slots */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  Prefix Slots
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Lists supporting different types of prefixes such as icons,
                  avatars, flags, loaders, and file types.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Icon Prefix */}
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Icon Prefix
                  </h3>
                  <List styleType="none">
                    <ListItem
                      prefix={{
                        type: "icon",
                        name: "check_circle",
                        color: "success",
                      }}
                    >
                      Task completed
                    </ListItem>
                    <ListItem
                      prefix={{ type: "icon", name: "error", color: "danger" }}
                    >
                      Action required
                    </ListItem>
                    <ListItem
                      prefix={{ type: "icon", name: "info", color: "info" }}
                    >
                      Information note
                    </ListItem>
                  </List>
                </div>

                {/* Avatar Prefix */}
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Avatar Prefix
                  </h3>
                  <List styleType="none">
                    <ListItem
                      prefix={{ type: "avatar", name: "Alice", size: "xs" }}
                    >
                      Alice Smith
                    </ListItem>
                    <ListItem
                      prefix={{ type: "avatar", name: "Bob", size: "xs" }}
                    >
                      Bob Jones
                    </ListItem>
                    <ListItem
                      prefix={{ type: "avatar", name: "Charlie", size: "xs" }}
                    >
                      Charlie Brown
                    </ListItem>
                  </List>
                </div>

                {/* Flag Prefix */}
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Flag Prefix
                  </h3>
                  <List styleType="none">
                    <ListItem
                      prefix={{
                        type: "flag",
                        code: "US",
                        shape: "rectangle",
                        size: "base",
                      }}
                    >
                      United States
                    </ListItem>
                    <ListItem
                      prefix={{
                        type: "flag",
                        code: "GB",
                        shape: "rectangle",
                        size: "base",
                      }}
                    >
                      United Kingdom
                    </ListItem>
                    <ListItem
                      prefix={{
                        type: "flag",
                        code: "FR",
                        shape: "rectangle",
                        size: "base",
                      }}
                    >
                      France
                    </ListItem>
                  </List>
                </div>

                {/* File Type Prefix */}
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm overflow-visible">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    File Type Prefix
                  </h3>
                  <List styleType="none" className="ms-2">
                    <ListItem
                      prefix={{ type: "file-type", extension: "pdf", size: "lg" }}
                    >
                      document.pdf
                    </ListItem>
                    <ListItem
                      prefix={{
                        type: "file-type",
                        extension: "word",
                        size: "lg",
                      }}
                    >
                      report.docx
                    </ListItem>
                    <ListItem
                      prefix={{
                        type: "file-type",
                        extension: "excel",
                        size: "lg",
                      }}
                    >
                      data.xlsx
                    </ListItem>
                  </List>
                </div>

                {/* Loader Prefix */}
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Loader Prefix
                  </h3>
                  <List styleType="none">
                    <ListItem
                      prefix={{ type: "loader", size: "sm", color: "brand" }}
                    >
                      Loading data...
                    </ListItem>
                    <ListItem
                      prefix={{ type: "loader", size: "sm", color: "brand" }}
                    >
                      Syncing files...
                    </ListItem>
                    <ListItem
                      prefix={{ type: "loader", size: "sm", color: "brand" }}
                    >
                      Processing...
                    </ListItem>
                  </List>
                </div>

                {/* Unstyled List */}
                <div className="space-y-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm">
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                    Unstyled List
                  </h3>
                  <List styleType="none">
                    <ListItem>Bare item 1</ListItem>
                    <ListItem>Bare item 2</ListItem>
                    <ListItem>Bare item 3</ListItem>
                  </List>
                </div>
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
}
