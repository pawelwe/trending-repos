import React from 'react';
import { useContext, useState, useCallback } from 'react';
import WizardContext from '../../context/WizardContext';
import { ValidationProvider } from '../../context/ValidationContext';
import styles from './Step.scss';

export const Step = React.memo(function step({
  children,
  isValid = false,
  isTouched = false,
}) {
  const [isStepValid, setIsStepValid] = useState(isValid);
  const [isStepTouched, setIsStepTouched] = useState(isTouched);
  const { goToNextStep, goToPrevStep, step } = useContext(WizardContext);

  const handleGoToNextStep = useCallback(() => {
    if (isStepValid) {
      goToNextStep();
    } else {
      setIsStepTouched(true);
    }
  }, [isStepValid, isStepTouched]);

  return (
    <article className={styles['step']}>
      <ValidationProvider
        value={{
          isStepValid,
          setIsStepValid,
          isStepTouched,
          setIsStepTouched,
        }}
      >
        <div>{children}</div>
      </ValidationProvider>
      <footer>
        {step > 1 ? (
          <button onClick={goToPrevStep}>Go to previous step</button>
        ) : (
          <span></span>
        )}
        <button onClick={handleGoToNextStep}>Go to next step</button>
      </footer>
    </article>
  );
});
