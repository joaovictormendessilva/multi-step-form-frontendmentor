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
  setThankYouStep: React.Dispatch<React.SetStateAction<boolean>>;
}

// React
import { useContext, FormEvent } from "react";
import { AppContext } from "../../App";
import { Order } from "../../interfaces/Order";

export function StepFour({
  setStepTwo,
  setStepThree,
  setStepFour,
  setThankYouStep,
}: StepFourProps) {
  const appContext = useContext(AppContext);
  if (!appContext) return;
  const { stepOneFields, stepTwoFields, stepThreeFields, setOrder } =
    appContext;

  const resultSumServices: number =
    stepTwoFields.monthlyOrYearly === "Monthly"
      ? stepThreeFields
          .filter((service) => service.checked === true)
          .reduce((total, valor) => total + valor.monthlyPrice, 0) +
        stepTwoFields.planPrice!
      : stepThreeFields
          .filter((service) => service.checked === true)
          .reduce((total, valor) => total + valor.yearlyPrice, 0) +
        stepTwoFields.planPrice!;

  const anyChosenService = stepThreeFields.filter(
    (service) => service.checked === true
  );

  const handleBackPage = () => {
    setStepThree(true);
    setStepFour(false);
  };

  const handleBackToStepTwo = () => {
    setStepTwo(true);
    setStepFour(false);
  };

  const confirmOrder = async (e: FormEvent) => {
    e.preventDefault();

    const services = stepThreeFields
      .filter((service) => service.checked === true)
      .map((service) => service.label);

    const newOder: Order = {
      name: stepOneFields.name,
      email: stepOneFields.email,
      phone: stepOneFields.phone,
      plan: stepTwoFields.plan,
      planPrice: stepTwoFields.planPrice,
      services: services,
      monthlyOrYearly: stepTwoFields.monthlyOrYearly,
      total: resultSumServices,
    };

    await setOrder(newOder);
    setStepFour(false);
    setThankYouStep(true);
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
            <b>
              ${stepTwoFields.planPrice}
              {stepTwoFields.monthlyOrYearly === "Monthly" ? "/mo" : "/yr"}
            </b>
          </div>
        </div>

        {anyChosenService.length > 0 && <div className={styles.divider}></div>}

        <div className={styles.listOfServices}>
          <ul>
            {stepThreeFields.map(
              (service) =>
                service.checked === true && (
                  <li key={service.id}>
                    <div className={styles.serviceInfo}>
                      <span className={styles.serviceTitle}>
                        {service.label}
                      </span>
                      <span className={styles.servicePrice}>
                        {stepTwoFields.monthlyOrYearly === "Monthly"
                          ? `${service.monthlyPrice}/mo`
                          : `${service.yearlyPrice}/yr`}
                      </span>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      <div className={styles.totalPerMonth}>
        <span className={styles.totalPerMonthTitle}>
          Total ({stepTwoFields.monthlyOrYearly ? "per month" : "per year"})
        </span>
        <h4 className={styles.totalPerMonthTotal}>
          +$
          {`
            ${resultSumServices}
            ${stepTwoFields.monthlyOrYearly === "Monthly" ? "/mo" : "/yr"}
          `}
        </h4>
      </div>

      <Buttons
        value="Confirm"
        show={true}
        onHandleBackPage={handleBackPage}
        onClick={confirmOrder}
      />
    </div>
  );
}
