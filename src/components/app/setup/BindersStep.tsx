import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Fieldset } from '@/components/ui/fieldset';

export default function BindersStep() {
  return (
    <Fieldset>
      <Heading level={3}>Set Up or Sync Binders</Heading>
      <div>
        <label htmlFor="binderName">Binder Name</label>
        <Input id="binderName" name="binderName" type="text" />
      </div>
      <Button>Add Binder</Button>
      {/* List of binders per user, editable */}
    </Fieldset>
  );
}
