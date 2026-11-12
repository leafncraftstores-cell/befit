import { cn } from "@/lib/utils";

/** Clearly-marked placeholder panel for transformation photos not yet supplied */
export function TransformationPlaceholder({ variant }: { variant: "before" | "after" }) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center p-4 text-center sm:p-8",
        // each label sits in its own half so they never overlap under the slider
        variant === "before" ? "justify-start" : "justify-end",
        variant === "before"
          ? "bg-[repeating-linear-gradient(-45deg,#1c1c1e_0_18px,#232326_18px_36px)]"
          : "bg-[repeating-linear-gradient(-45deg,#3a0d0f_0_18px,#4a1013_18px_36px)]",
      )}
    >
      <div className="w-[44%] max-w-xs border-2 border-dashed border-white/30 p-3 sm:p-5">
        <p className="font-display text-2xl tracking-wide text-white/90 uppercase sm:text-4xl">
          {variant === "before" ? "Before" : "After"}
        </p>
        <p className="mt-2 text-xs font-semibold text-amber-300 sm:text-sm">
          [Member transformation: to be supplied by BE-FIT]
        </p>
        <p className="mt-1 text-xs text-white/60">Placeholder image</p>
      </div>
    </div>
  );
}
