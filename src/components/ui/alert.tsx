import {
  Description as DescriptionHeadless,
  Dialog as DialogHeadless,
  DialogBackdrop as DialogBackdropHeadless,
  DialogPanel as DialogPanelHeadless,
  DialogTitle as DialogTitleHeadless,
  type DescriptionProps as DescriptionPropsHeadless,
  type DialogProps as DialogPropsHeadless,
  type DialogTitleProps as DialogTitlePropsHeadless,
} from "@headlessui/react";
import type React from "react";
import { cn } from "@/utils/cn";
import { Text } from "@/components/ui/text";

const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
};

type AlertProps = {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
} & Omit<DialogPropsHeadless, "as" | "className">;

export function Alert({ size = "md", className, children, ...props }: AlertProps) {
  return (
    <DialogHeadless {...props}>
      <DialogBackdropHeadless
        transition
        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      />

      <div className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
        <div className="grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4">
          <DialogPanelHeadless
            transition
            className={cn(
              className,
              sizes[size],
              "row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline",
              "transition duration-100 will-change-transform data-closed:opacity-0 data-enter:ease-out data-closed:data-enter:scale-95 data-leave:ease-in"
            )}
          >
            {children}
          </DialogPanelHeadless>
        </div>
      </div>
    </DialogHeadless>
  );
}

type AlertTitleProps = { className?: string } & Omit<DialogTitlePropsHeadless, "as" | "className">;

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <DialogTitleHeadless
      {...props}
      className={cn(
        className,
        "text-center text-base/6 font-semibold text-balance text-zinc-950 sm:text-left sm:text-sm/6 sm:text-wrap dark:text-white"
      )}
    />
  );
}

type AlertDescriptionProps = { className?: string } & Omit<DescriptionPropsHeadless<typeof Text>, "as" | "className">;

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <DescriptionHeadless
      as={Text}
      {...props}
      className={cn(className, "mt-2 text-center text-pretty sm:text-left")}
    />
  );
}

export function AlertBody({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={cn(className, "mt-4")} />;
}

export function AlertActions({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        className,
        "mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto"
      )}
    />
  );
}
