import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge for Tailwind CSS.
 * @param args - Class name arguments (strings, arrays, objects)
 * @returns {string} A single merged className string
 *
 * @example
 * cn("foo", { bar: true, baz: false }) // "foo bar"
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}