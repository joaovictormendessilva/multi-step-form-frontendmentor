import styles from "./Container.module.css";

import { StepOne } from "../StepOne/StepOne";
import { AsideSteps } from "../AsideSteps/AsideSteps";

import { useState } from "react";
import { StepTwo } from "../StepTwo/StepTwo";

export function Container() {
  const [stepOne, setStepOne] = useState<boolean>(true);
  const [stepTwo, setStepTwo] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <AsideSteps />

      <main>
        <form>
          {stepOne && (
            <StepOne setStepOne={setStepOne} setStepTwo={setStepTwo} />
          )}

          {stepTwo && (
            <StepTwo setStepOne={setStepOne} setStepTwo={setStepTwo} />
          )}
        </form>
      </main>
    </div>
  );
}
