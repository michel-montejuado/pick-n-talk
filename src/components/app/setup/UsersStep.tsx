import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Fieldset } from '@/components/ui/fieldset';

export default function UsersStep() {
  return (
    <Fieldset>
      <Heading level={3}>Add Users</Heading>
      <div>
        <label htmlFor="userName">User Name</label>
        <Input id="userName" name="userName" type="text" />
      </div>
      <Button>Add User</Button>
      {/* List of added users, editable */}
    </Fieldset>
  );
}
