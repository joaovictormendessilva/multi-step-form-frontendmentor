// CSS
import styles from "./StepFour.module.css";

// Components
import { Buttons } from "../Buttons/Buttons";
import { Header } from "../Header/Header";

// Interface
interface StepFourProps {
  setStepTwo: React.Dispatch<React.SetStateAction<boolean>>;
  setStepThree: React.Dispatch<React.SetStateAction<boolean>>;
  setStepFour: React.Dispatch<React.SetStateAction<boolean>>;
}

// React
import { useContext } from "react";
import { AppContext } from "../../App";

export function StepFour({
  setStepTwo,
  setStepThree,
  setStepFour,
}: StepFourProps) {
  const appContext = useContext(AppContext);
  if (!appContext) return;
  const { stepTwoFields, stepThreeFields } = appContext;

  const handleBackPage = () => {
    setStepThree(true);
    setStepFour(false);
  };

  const handleBackToStepTwo = () => {
    setStepTwo(true);
    setStepFour(false);
  };

  return (
    <div className={styles.stepFour}>
      <Header
        title="Finishing up"
        paragraph="Double-check everything looks OK before confirming."
      />

      <div className={styles.containerInfo}>
        <div className={styles.planAndValue}>
          <div className={styles.planAndChangeButton}>
            <b>
              {stepTwoFields.plan} ({stepTwoFields.monthlyOrYearly})
            </b>
            <button onClick={handleBackToStepTwo}>Change</button>
          </div>
          <div>
            <b>$9/mo</b>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.listOfServices}>
          <ul>
            <li>
              {stepThreeFields.onlineService && (
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceTitle}>Online service</span>
                  <span className={styles.servicePrice}>
                    {stepTwoFields.monthlyOrYearly === "Monthly"
                      ? "+1/mo"
                      : "+10/yr"}
                  </span>
                </div>
              )}
            </li>
            <li>
              {stepThreeFields.largerStorage && (
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceTitle}>Larger storage</span>
                  <span className={styles.servicePrice}>
                    {stepTwoFields.monthlyOrYearly === "Monthly"
                      ? "+2/mo"
                      : "+20/yr"}
                  </span>
                </div>
              )}
            </li>
            <li>
              {stepThreeFields.customizableProfile && (
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceTitle}>
                    Customizable profile
                  </span>
                  <span className={styles.servicePrice}>
                    {stepTwoFields.monthlyOrYearly === "Monthly"
                      ? "+2/mo"
                      : "+20/yr"}
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.totalPerMonth}>
        <span className={styles.totalPerMonthTitle}>Total (per month)</span>
        <h4 className={styles.totalPerMonthTotal}>+$12/mo</h4>
      </div>

      <Buttons value="Confirm" show={true} onHandleBackPage={handleBackPage} />
    </div>
  );
}
