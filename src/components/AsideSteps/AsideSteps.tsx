// CSS
import styles from "./AsideSteps.module.css";

// React
import { useContext } from "react";

// Context
import { AppContext } from "../../App";

interface AsideStepsProps {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  stepFour: boolean;
}

export function AsideSteps({
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
}: AsideStepsProps) {
  const appContext = useContext(AppContext);
  if (!appContext) return;
  const {} = appContext;

  return (
    <aside className={styles.asideSteps}>
      <ul>
        <li>
          <div>
            <button className={`${stepOne === true && styles.activeStep}`}>
              1
            </button>
          </div>
          <div>
            <p>STEP 1</p>
            <b>YOUR INFO</b>
          </div>
        </li>

        <li>
          <div>
            <button className={`${stepTwo === true && styles.activeStep}`}>
              2
            </button>
          </div>
          <div>
            <p>STEP 2</p>
            <b>SELECT PLAN</b>
          </div>
        </li>

        <li>
          <div>
            <button className={`${stepThree === true && styles.activeStep}`}>
              3
            </button>
          </div>
          <div>
            <p>STEP 3</p>
            <b>ADD-ONS</b>
          </div>
        </li>

        <li>
          <div>
            <button className={`${stepFour === true && styles.activeStep}`}>
              4
            </button>
          </div>
          <div>
            <p>STEP 4</p>
            <b>SUMMARY</b>
          </div>
        </li>
      </ul>
    </aside>
  );
}
