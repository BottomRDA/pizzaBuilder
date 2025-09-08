import { useState } from 'react';

export const useSteps = (stepsCount: number) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < stepsCount - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goToStep = (step: number) => {
        if (step >= 0 && step < stepsCount) {
            setCurrentStep(step);
        }
    };

    const resetSteps = () => {
        setCurrentStep(0);
    };

    return {
        currentStep,
        nextStep,
        prevStep,
        goToStep,
        resetSteps,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === stepsCount - 1,
    };
};
