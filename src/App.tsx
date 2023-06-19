import styles from "./App.module.css";
import React, { useState, createContext, FormEvent } from "react";
import { Container } from "./components/Container/Container";

import { StepOneFields } from "./interfaces/StepOneFields";
import { StepTwoFields } from "./interfaces/StepTwoFields";

interface IAppContext {
  stepOneFields: StepOneFields;
  setStepOneFields: React.Dispatch<React.SetStateAction<StepOneFields>>;
  stepTwoFields: StepTwoFields;
  setStepTwoFields: React.Dispatch<React.SetStateAction<StepTwoFields>>;
}

export const AppContext = createContext<IAppContext | null>(null);

export function App() {
  const [stepOneFields, setStepOneFields] = useState<StepOneFields>(
    {} as StepOneFields
  );

  const [stepTwoFields, setStepTwoFields] = useState<StepTwoFields>(
    {} as StepTwoFields
  );

  return (
    <div className={styles.app}>
      <AppContext.Provider
        value={{
          stepOneFields,
          setStepOneFields,
          stepTwoFields,
          setStepTwoFields,
        }}
      >
        <Container />
      </AppContext.Provider>
    </div>
  );
}
