/**
 * TODO: Update this component to use your client-side framework"s link
 * component. We"ve provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import { DataInteractive as DataInteractiveHeadless } from "@headlessui/react";
import { forwardRef, type ComponentPropsWithoutRef, type ForwardedRef } from "react";
import { Link as LinkReactRouter, type LinkProps as LinkReactRouterProps } from "react-router";

export const Link = forwardRef(function Link(
  props: { href: string | LinkReactRouterProps["to"] } & ComponentPropsWithoutRef<"a">,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <DataInteractiveHeadless>
      <LinkReactRouter {...props} to={props.href} ref={ref} />
    </DataInteractiveHeadless>
  );
});
