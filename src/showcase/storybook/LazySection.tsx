import type { CSSProperties, ElementType, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ShowcaseSkeleton } from "./ShowcaseSkeleton";

export type LazySectionProps = {
  children: ReactNode;
  /** @default "50px" — tighter margin defers off-screen showcase sections longer. */
  rootMargin?: string;
  placeholder?: ReactNode;
  /** Mount immediately (e.g. above-the-fold header sections). */
  enabled?: boolean;
  fallbackCheckMs?: number;
  maxGeometryChecks?: number;
  /** Reserve height while unmounted — prevents layout jump. @default 480 */
  estimatedHeight?: number | string;
  /** Alias used by some Showcase stories (Avatar/Listbox). */
  height?: number | string;
  className?: string;
  as?: ElementType;
};

function parseSingleValueMarginPx(rootMargin: string): number {
  const match = rootMargin.trim().match(/^(-?\d+(?:\.\d+)?)px$/i);
  return match ? Number(match[1]) : 0;
}

function toCssSize(value: number | string): string {
  return typeof value === "number" ? `${value}px` : value;
}

export function LazySection({
  children,
  rootMargin = "50px",
  placeholder,
  enabled = true,
  fallbackCheckMs = 2000,
  maxGeometryChecks = 8,
  estimatedHeight = 480,
  height,
  className,
  as,
}: LazySectionProps) {
  const Wrapper = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(!enabled);
  const hasMountedRef = useRef(!enabled);
  const reservedHeight = height ?? estimatedHeight;

  const resolvedPlaceholder = placeholder ?? (
    <ShowcaseSkeleton height={reservedHeight} />
  );

  useEffect(() => {
    if (!enabled) {
      hasMountedRef.current = true;
      setMounted(true);
      return;
    }
    if (hasMountedRef.current) return;
    const el = ref.current;
    if (!el) return;

    const marginPx = parseSingleValueMarginPx(rootMargin);
    const isNearViewport = () => {
      const rect = el.getBoundingClientRect();
      const vh = globalThis.innerHeight || 0;
      const threshold = vh + Math.max(0, marginPx);
      return rect.top <= threshold && rect.bottom >= -Math.max(0, marginPx);
    };

    if (
      typeof globalThis === "undefined" ||
      !("IntersectionObserver" in globalThis)
    ) {
      hasMountedRef.current = true;
      setMounted(true);
      return;
    }

    const markMounted = () => {
      if (hasMountedRef.current) return;
      hasMountedRef.current = true;
      setMounted(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          markMounted();
          io.disconnect();
        }
      },
      { root: null, rootMargin },
    );
    io.observe(el);

    let cancelled = false;
    let timer: ReturnType<typeof globalThis.setTimeout> | null = null;
    let geometryChecks = 0;
    const scheduleGeometryCheck = () => {
      if (
        cancelled ||
        hasMountedRef.current ||
        geometryChecks >= maxGeometryChecks
      ) {
        return;
      }
      timer = globalThis.setTimeout(() => {
        if (cancelled) return;
        geometryChecks += 1;
        if (isNearViewport()) {
          markMounted();
          io.disconnect();
          return;
        }
        scheduleGeometryCheck();
      }, fallbackCheckMs);
    };
    scheduleGeometryCheck();

    return () => {
      cancelled = true;
      if (timer != null) globalThis.clearTimeout(timer);
      io.disconnect();
    };
  }, [enabled, rootMargin, fallbackCheckMs, maxGeometryChecks]);

  const style = useMemo<CSSProperties>(() => {
    if (!mounted && reservedHeight != null) {
      return { minHeight: toCssSize(reservedHeight) };
    }
    return {};
  }, [mounted, reservedHeight]);

  return (
    <Wrapper ref={ref} className={className} style={style}>
      {mounted ? children : resolvedPlaceholder}
    </Wrapper>
  );
}
