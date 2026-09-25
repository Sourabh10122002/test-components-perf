

export type ShowcaseSkeletonProps = {
  height: number | string;
  className?: string;
};

function toPx(value: number | string) {
  return typeof value === "number" ? `${value}px` : value;
}

/** Sized placeholder to reserve layout while a showcase section lazy-mounts. */
export function ShowcaseSkeleton({ height, className }: ShowcaseSkeletonProps) {
  return (
    <div
      className={className}
      style={{ minHeight: toPx(height) }}
      aria-hidden="true"
    />
  );
}
