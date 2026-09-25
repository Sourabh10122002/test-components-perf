// Showcase ported from origin/gridbox:src/components/Gridbox/stories/Gridbox.stories.tsx
import { Gridbox } from "@inventive-ui/components/Gridbox";
import { ShowcaseShell } from "../storybook";
import { LazySection } from "../storybook";



export default function GridboxShowcase() {
  const globals: Record<string, any> = {};
    return (
      <ShowcaseShell globals={globals} className={""}>
        <div>
          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  navPlacement
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        bottom nav
                      </p>
                      <Gridbox />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        top nav
                      </p>
                      <Gridbox navPlacement="top" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        start nav
                      </p>
                      <Gridbox navPlacement="start" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        end nav
                      </p>
                      <Gridbox navPlacement="end" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>
          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  render
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        emojis
                      </p>
                      <Gridbox render="emojis" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        lucide-icons
                      </p>
                      <Gridbox render="lucide-icons" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        material-icons
                      </p>
                      <Gridbox render="material-icons" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        phosphor-icons
                      </p>
                      <Gridbox render="phosphor-icons" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        color-logos
                      </p>
                      <Gridbox render="color-logos" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        file-types
                      </p>
                      <Gridbox render="file-types" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        flags
                      </p>
                      <Gridbox render="flags" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        loaders
                      </p>
                      <Gridbox render="loaders" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        logos
                      </p>
                      <Gridbox render="logos" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        material-symbols
                      </p>
                      <Gridbox render="material-symbols" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Sizes</h2>

                <div>
                  <div className="flex grid grid-cols-1  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        xs
                      </p>
                      <Gridbox size="xs" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        sm
                      </p>
                      <Gridbox size="sm" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        base
                      </p>
                      <Gridbox size="base" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        lg
                      </p>
                      <Gridbox size="lg" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        xl
                      </p>
                      <Gridbox size="xl" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  isTabable
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        without Tabable
                      </p>
                      <Gridbox isTabable={false} />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        with Tabable
                      </p>
                      <Gridbox isTabable={true} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  showCategory
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        without showCategory
                      </p>
                      <Gridbox showCategory={false} />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        with showCategory
                      </p>
                      <Gridbox showCategory={true} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  showSearch
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        without showSearch
                      </p>
                      <Gridbox showSearch={false} />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        with showSearch
                      </p>
                      <Gridbox showSearch={true} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  showTabs
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        without showTabs
                      </p>
                      <Gridbox showTabs={false} />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        with showTabs
                      </p>
                      <Gridbox showTabs={true} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  showRecent
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        with recentItems
                      </p>
                      <Gridbox
                        showCategory={true}
                        showRecent={true}
                        recentItems={["😗", "😅", "😂"]}
                      />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        without recentItems
                      </p>
                      <Gridbox showCategory={true} showRecent={false} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  showFavorite
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        with favoriteItems
                      </p>
                      <Gridbox
                        showCategory={true}
                        showFavorite={true}
                        favoriteItems={["😗", "😅", "😂"]}
                      />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        without recentItems
                      </p>
                      <Gridbox showCategory={true} showFavorite={false} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection enabled={true}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  showLabel
                </h2>

                <div>
                  <div className="flex grid grid-cols-2  items-center gap-4  w-fit">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        with showLabel
                      </p>
                      <Gridbox showLabel={true} />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        without showLabel
                      </p>
                      <Gridbox showLabel={false} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
}
