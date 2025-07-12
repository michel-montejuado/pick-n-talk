import { useState } from 'react';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import AccountStep from '@/components/app/setup/AccountStep';
import UsersStep from '@/components/app/setup/UsersStep';
import BindersStep from '@/components/app/setup/BindersStep';
import PreferencesStep from '@/components/app/setup/PreferencesStep';
import ReviewStep from '@/components/app/setup/ReviewStep';

const steps = [
  { label: 'Account', component: AccountStep },
  { label: 'Users', component: UsersStep },
  { label: 'Binders', component: BindersStep },
  { label: 'Preferences', component: PreferencesStep },
  { label: 'Review', component: ReviewStep },
];

export default function SetupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 py-8">
      <div className="w-full max-w-xl p-8 shadow-lg bg-white dark:bg-zinc-800">
        <Heading level={1} className="mb-6 text-center">Setup</Heading>
        <div className="flex justify-center gap-4 mb-8">
          {steps.map((step, idx) => (
            <span
              key={step.label}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${idx === currentStep ? 'bg-blue-600 text-white' : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200'}`}
            >
              {step.label}
            </span>
          ))}
        </div>
        <div className="mb-8">
          <StepComponent />
        </div>
        <div className="flex justify-between">
          <Button onClick={prevStep} disabled={currentStep === 0} className="mr-2" color="zinc">
            Back
          </Button>
          <Button onClick={nextStep} disabled={currentStep === steps.length - 1} color="blue">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
