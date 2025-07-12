import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Fieldset } from '@/components/ui/fieldset';

export default function AccountStep() {
  return (
    <Fieldset>
      <Heading level={3}>Caregiver Account Setup</Heading>
      <div>
        <label htmlFor="caregiverName">Name</label>
        <Input id="caregiverName" name="caregiverName" type="text" />
      </div>
      <div>
        <label htmlFor="caregiverEmail">Email</label>
        <Input id="caregiverEmail" name="caregiverEmail" type="email" />
      </div>
      {/* Add more fields as needed */}
    </Fieldset>
  );
}
