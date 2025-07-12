import { Heading } from '@/components/ui/heading';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Fieldset } from '@/components/ui/fieldset';

export default function PreferencesStep() {
  return (
    <Fieldset>
      <Heading level={3}>Set User Preferences</Heading>
      <div>
        <label htmlFor="language">Language</label>
        <Select id="language" name="language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </Select>
      </div>
      <div>
        <Checkbox id="accessibility" name="accessibility" />
        <label htmlFor="accessibility">Enable accessibility features</label>
      </div>
      <div>
        <Checkbox id="daltonism" name="daltonism" />
        <label htmlFor="daltonism">Enable daltonism mode</label>
      </div>
      {/* Add more preferences as needed */}
    </Fieldset>
  );
}
