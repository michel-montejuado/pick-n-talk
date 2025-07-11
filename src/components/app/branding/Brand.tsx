import { Logo } from "@/components/app/branding/Logo";

export function Branding() {
  return (
    <span className="flex items-center space-x-2 no-underline">
      <Logo />
      <span className="font-bold text-2xl">Pick'n'Talk</span>
    </span>
  );
}
