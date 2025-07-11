import { cn } from "@/utils/cn";

type HeadingProps = { level?: 1 | 2 | 3 | 4 | 5 | 6 } & React.ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(
        className,
        "font-semibold text-zinc-950 dark:text-white",
        level === 1 && "text-2xl/8 sm:text-xl/8",
        level === 2 && "text-base/7 sm:text-sm/6",
        level === 3 && "text-base/6 sm:text-sm/6",
        level === 4 && "text-sm/6 sm:text-xs/5",
        level === 5 && "text-sm/5",
        level === 6 && "text-xs/5"
      )}
    />
  );
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(
        className,
        "text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white"
      )}
    />
  );
}
