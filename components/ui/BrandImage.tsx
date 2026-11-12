import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/** Dark charcoal blur used while remote photos load */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhMWExYiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBkMGQwZCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=";

/**
 * next/image with the brand photo treatment (desaturated, high contrast) and an optional
 * red/black gradient overlay so mixed stock photos look like one shoot.
 * Use inside a positioned parent with `fill`, or pass width/height.
 */
export function BrandImage({
  overlay = true,
  treat = true,
  className,
  wrapperClassName,
  ...props
}: ImageProps & { overlay?: boolean; treat?: boolean; wrapperClassName?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-brand-charcoal", wrapperClassName)}>
      <Image
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        quality={65}
        {...props}
        alt={props.alt}
        className={cn("object-cover", treat && "photo-treat", className)}
      />
      {overlay ? <div aria-hidden className="photo-overlay absolute inset-0" /> : null}
    </div>
  );
}
