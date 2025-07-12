import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Fieldset } from '@/components/ui/fieldset';

export default function ReviewStep() {
  return (
    <Fieldset>
      <Heading level={3}>Review & Confirm Setup</Heading>
      {/* Summary of all setup steps for confirmation */}
      <p>Review your account, users, binders, and preferences before completing onboarding.</p>
      <Button>Confirm & Finish</Button>
    </Fieldset>
  );
}
