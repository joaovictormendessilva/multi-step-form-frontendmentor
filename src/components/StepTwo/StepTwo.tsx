// React
import { ChangeEvent, useContext, FormEvent } from "react";

// CSS
import styles from "./StepTwo.module.css";

// Components
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { Buttons } from "../Buttons/Buttons";

// Images
import arcadeIcon from "../../assets/icon-arcade.svg";
import advancedIcon from "../../assets/icon-advanced.svg";
import proIcon from "../../assets/icon-pro.svg";

// Context
import { AppContext } from "../../App";

interface StepTwoProps {
  setStepOne: React.Dispatch<React.SetStateAction<boolean>>;
  setStepTwo: React.Dispatch<React.SetStateAction<boolean>>;
  setStepThree: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StepTwo({
  setStepOne,
  setStepTwo,
  setStepThree,
}: StepTwoProps) {
  const appContext = useContext(AppContext);
  if (!appContext) return;
  const {
    setStepTwoFields,
    selectedPlan,
    setSelectedPlan,
    monthlyOrYearly,
    setMonthlyOrYearly,
  } = appContext;

  const handleChangeMonthlyOrYearly = (e: ChangeEvent<HTMLInputElement>) => {
    const monthlyOrYearly = e.target.checked ? "Yearly" : "Monthly";

    setMonthlyOrYearly(monthlyOrYearly);
  };

  const handleChangePlan = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(e.target.value);
  };

  const handleCheckFields = (e: FormEvent) => {
    e.preventDefault();

    const values = {
      plan: selectedPlan,
      monthlyOrYearly: monthlyOrYearly,
    };

    setStepTwoFields(values);
    setStepTwo(false);
    setStepThree(true);
  };

  const handleBackPage = () => {
    setStepOne(true);
    setStepTwo(false);
  };

  return (
    <div className={styles.stepTwo}>
      <Header
        title="Select your plan"
        paragraph="You have the option of monthly or yearly billing."
      />

      <div className={styles.cardGroup} onChange={handleChangePlan}>
        <Card
          idInput="arcade"
          image={arcadeIcon}
          imageAlt="Ícone do plano arcade"
          labelHtmlFor="arcade"
          label="Arcade"
          value="Arcade"
          checked={selectedPlan === "Arcade"}
          removeControlledMessage={() => {}}
          monthlyPrice={9}
          yearlyPrice={90}
          monthlyOrYearly={monthlyOrYearly}
        />

        <Card
          idInput="advanced"
          image={advancedIcon}
          imageAlt="Ícone do plano advanced"
          labelHtmlFor="advanced"
          label="Advanced"
          value="Advanced"
          checked={selectedPlan === "Advanced"}
          removeControlledMessage={() => {}}
          monthlyPrice={12}
          yearlyPrice={120}
          monthlyOrYearly={monthlyOrYearly}
        />

        <Card
          idInput="pro"
          image={proIcon}
          imageAlt="Ícone do plano pro"
          labelHtmlFor="pro"
          label="Pro"
          value="Pro"
          checked={selectedPlan === "Pro"}
          removeControlledMessage={() => {}}
          monthlyPrice={15}
          yearlyPrice={150}
          monthlyOrYearly={monthlyOrYearly}
        />
      </div>

      <div className={styles.plans}>
        <b>Monthly</b>
        <label className={styles.switch}>
          <input
            type="checkbox"
            id="monthlyOrYearly"
            name="monthlyOrYearly"
            onChange={handleChangeMonthlyOrYearly}
            defaultChecked={monthlyOrYearly === "Monthly" ? false : true}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <b>Yearly</b>
      </div>
      <Buttons
        value="Next Step"
        onClick={handleCheckFields}
        onHandleBackPage={handleBackPage}
      />
    </div>
  );
}
