// React
import { useState, ChangeEvent, useContext, FormEvent } from "react";

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
}

export function StepTwo({ setStepOne, setStepTwo }: StepTwoProps) {
  const [plan, setPlan] = useState<string>("Arcade");
  const [monthlyOrYearly, setMonthlyOrYearly] = useState<boolean>(false);

  const appContext = useContext(AppContext);
  if (!appContext) return;
  const { setStepTwoFields } = appContext;

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthlyOrYearly(e.target.checked);
  };

  const handleChangePlan = (e: ChangeEvent<HTMLInputElement>) => {
    setPlan(e.target.value);
  };

  const handleCheckFields = (e: FormEvent) => {
    e.preventDefault();

    const values = {
      plan: plan,
      monthlyOrYearly: monthlyOrYearly,
    };

    setStepTwoFields(values);
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
          checked={plan}
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
          checked={plan}
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
          checked={plan}
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
            onChange={handleChangeField}
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
