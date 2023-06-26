import styles from "./Container.module.css";

import { StepOne } from "../StepOne/StepOne";
import { AsideSteps } from "../AsideSteps/AsideSteps";

import { useState } from "react";
import { StepTwo } from "../StepTwo/StepTwo";
import { StepThree } from "../StepThree/StepThree";
import { StepFour } from "../StepFour/StepFour";
import { ThankYouStep } from "../ThankYouStep/ThankYouStep";

export function Container() {
  const [stepOne, setStepOne] = useState<boolean>(true);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  const [thankYouStep, setThankYouStep] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <AsideSteps
        stepOne={stepOne}
        stepTwo={stepTwo}
        stepThree={stepThree}
        stepFour={stepFour}
      />

      <main>
        <form>
          {stepOne && (
            <StepOne setStepOne={setStepOne} setStepTwo={setStepTwo} />
          )}

          {stepTwo && (
            <StepTwo
              setStepOne={setStepOne}
              setStepTwo={setStepTwo}
              setStepThree={setStepThree}
            />
          )}

          {stepThree && (
            <StepThree
              setStepTwo={setStepTwo}
              setStepThree={setStepThree}
              setStepFour={setStepFour}
            />
          )}

          {stepFour && (
            <StepFour
              setStepTwo={setStepTwo}
              setStepThree={setStepThree}
              setStepFour={setStepFour}
              setThankYouStep={setThankYouStep}
            />
          )}

          {thankYouStep && <ThankYouStep />}
        </form>
      </main>
    </div>
  );
}
