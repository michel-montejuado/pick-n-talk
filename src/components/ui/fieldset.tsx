import {
  Description as DescriptionHeadless,
  Field as FieldHeadless,
  Fieldset as FieldsetHeadless,
  Label as LabelHeadless,
  Legend as LegendHeadless,
  type DescriptionProps as DescriptionPropsHeadless,
  type FieldProps as FieldPropsHeadless,
  type FieldsetProps as FieldsetPropsHeadless,
  type LabelProps as LabelPropsHeadless,
  type LegendProps as LegendPropsHeadless,
} from "@headlessui/react";
import type React from "react";
import { cn } from "@/utils/cn";

export function Fieldset({ className, ...props }: { className?: string } & Omit<FieldsetPropsHeadless, "as" | "className">) {
  return (
    <FieldsetHeadless
      {...props}
      className={cn(className, "*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6")}
    />
  );
}

export function Legend({ className, ...props }: { className?: string } & Omit<LegendPropsHeadless, "as" | "className">) {
  return (
    <LegendHeadless
      data-slot="legend"
      {...props}
      className={cn(
        className,
        "text-base/6 font-semibold text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white"
      )}
    />
  );
}

export function FieldGroup({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div data-slot="control" {...props} className={cn(className, "space-y-8")} />;
}

export function Field({ className, ...props }: { className?: string } & Omit<FieldPropsHeadless, "as" | "className">) {
  return (
    <FieldHeadless
      {...props}
      className={cn(
        className,
        "[&>[data-slot=label]+[data-slot=control]]:mt-3",
        "[&>[data-slot=label]+[data-slot=description]]:mt-1",
        "[&>[data-slot=description]+[data-slot=control]]:mt-3",
        "[&>[data-slot=control]+[data-slot=description]]:mt-3",
        "[&>[data-slot=control]+[data-slot=error]]:mt-3",
        "*:data-[slot=label]:font-medium"
      )}
    />
  );
}

export function Label({ className, ...props }: { className?: string } & Omit<LabelPropsHeadless, "as" | "className">) {
  return (
    <LabelHeadless
      data-slot="label"
      {...props}
      className={cn(
        className,
        "text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white"
      )}
    />
  );
}

export function Description({
  className,
  ...props
}: { className?: string } & Omit<DescriptionPropsHeadless, "as" | "className">) {
  return (
    <DescriptionHeadless
      data-slot="description"
      {...props}
      className={cn(className, "text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400")}
    />
  );
}

export function ErrorMessage({
  className,
  ...props
}: { className?: string } & Omit<DescriptionPropsHeadless, "as" | "className">) {
  return (
    <DescriptionHeadless
      data-slot="error"
      {...props}
      className={cn(className, "text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500")}
    />
  );
}
