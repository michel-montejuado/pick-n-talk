"use client";

import { Button as ButtonHeadless, type ButtonProps as ButtonPropsHeadless } from "@headlessui/react";
import { LayoutGroup, motion } from "framer-motion";
import { forwardRef, useId, type ComponentPropsWithoutRef, type ForwardedRef, type ReactNode } from "react";
import { TouchTarget } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Link } from "@/components/ui/link";

export function Navbar({ className, ...props }: React.ComponentPropsWithoutRef<"nav">) {
  return <nav {...props} className={cn(className, "flex flex-1 items-center gap-4 py-2.5")} />;
}

export function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div aria-hidden="true" {...props} className={cn(className, "h-6 w-px bg-zinc-950/10 dark:bg-white/10")} />;
}

export function NavbarSection({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const id = useId();

  return (
    <LayoutGroup id={id}>
      <div {...props} className={cn(className, "flex items-center gap-3")} />
    </LayoutGroup>
  );
}

export function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div aria-hidden="true" {...props} className={cn(className, "-ml-4 flex-1")} />;
}

type NavbarItemButtonProps = {
  current?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ButtonPropsHeadless, "as" | "className" | "href">;

type NavbarItemLinkProps = {
  current?: boolean;
  className?: string;
  children: ReactNode;
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "className">;

type NavbarItemProps = NavbarItemButtonProps | NavbarItemLinkProps;

export const NavbarItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  NavbarItemProps
>(function NavbarItem(props, ref) {
  const { current, className, children, ...rest } = props as NavbarItemProps;

  const classes = cn(
    // Base
    "relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5",
    // Leading icon/icon-only
    "*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5",
    // Trailing icon (down chevron or similar)
    "*:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4",
    // Avatar
    "*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6",
    // Hover
    "data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950",
    // Active
    "data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950",
    // Dark mode
    "dark:text-white dark:*:data-[slot=icon]:fill-zinc-400",
    "dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white",
    "dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
  );

  const isLink = "href" in props && typeof props.href === "string";

  return (
    <span className={cn(className, "relative")}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white"
        />
      )}
      {isLink ? (
        <Link
          {...(rest as NavbarItemLinkProps)}
          className={classes}
          data-current={current ? "true" : undefined}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
        >
          <TouchTarget>{children}</TouchTarget>
        </Link>
      ) : (
        <ButtonHeadless
          {...(rest as NavbarItemButtonProps)}
          className={cn("cursor-default", classes)}
          data-current={current ? "true" : undefined}
          ref={ref as ForwardedRef<HTMLButtonElement>}
        >
          <TouchTarget>{children}</TouchTarget>
        </ButtonHeadless>
      )}
    </span>
  );
});

export function NavbarLabel({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return <span {...props} className={cn(className, "truncate")} />;
}
