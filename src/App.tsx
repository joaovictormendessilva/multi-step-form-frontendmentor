import styles from "./App.module.css";
import React, { useState, createContext } from "react";
import { Container } from "./components/Container/Container";

import { StepOneFields } from "./interfaces/StepOneFields";
import { StepTwoFields } from "./interfaces/StepTwoFields";
import { StepThreeFields } from "./interfaces/StepThreeFields";

interface IAppContext {
  stepOneFields: StepOneFields;
  setStepOneFields: React.Dispatch<React.SetStateAction<StepOneFields>>;
  stepTwoFields: StepTwoFields;
  setStepTwoFields: React.Dispatch<React.SetStateAction<StepTwoFields>>;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  monthlyOrYearly: string;
  setMonthlyOrYearly: React.Dispatch<React.SetStateAction<string>>;
  stepThreeFields: StepThreeFields;
  setStepThreeFields: React.Dispatch<React.SetStateAction<StepThreeFields>>;
}

export const AppContext = createContext<IAppContext | null>(null);

export function App() {
  const [stepOneFields, setStepOneFields] = useState<StepOneFields>(
    {} as StepOneFields
  );

  const [stepTwoFields, setStepTwoFields] = useState<StepTwoFields>(
    {} as StepTwoFields
  );

  const [selectedPlan, setSelectedPlan] = useState<string>("Arcade");
  const [monthlyOrYearly, setMonthlyOrYearly] = useState<string>("Monthly");

  const [stepThreeFields, setStepThreeFields] = useState<StepThreeFields>(
    {} as StepThreeFields
  );

  return (
    <div className={styles.app}>
      <AppContext.Provider
        value={{
          stepOneFields,
          setStepOneFields,
          stepTwoFields,
          setStepTwoFields,
          selectedPlan,
          setSelectedPlan,
          monthlyOrYearly,
          setMonthlyOrYearly,
          stepThreeFields,
          setStepThreeFields,
        }}
      >
        <Container />
      </AppContext.Provider>
    </div>
  );
}
