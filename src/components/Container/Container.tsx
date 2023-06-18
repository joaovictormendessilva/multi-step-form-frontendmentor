import styles from "./Container.module.css";

import { StepOne } from "../StepOne/StepOne";
import { AsideSteps } from "../AsideSteps/AsideSteps";

export function Container() {
  return (
    <div className={styles.container}>
      <AsideSteps />

      <main>
        <StepOne />
      </main>
    </div>
  );
}
