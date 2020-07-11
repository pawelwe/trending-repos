import { useState } from 'react';

export const useWizard = () => {
  let [step, setStep] = useState(1);

  const goToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const goToPrevStep = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  return {
    step,
    goToNextStep,
    goToPrevStep,
  };
};
