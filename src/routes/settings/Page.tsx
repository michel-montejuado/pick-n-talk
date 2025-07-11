import AccessibilitySettings from "@/components/app/settings/accessibility-settings";
import { Heading } from "@/components/ui/heading";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16">
      <Heading>Settings</Heading>
      <AccessibilitySettings />
    </div>
  );
}
