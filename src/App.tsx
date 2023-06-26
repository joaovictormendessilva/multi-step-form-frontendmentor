// CSS
import styles from "./App.module.css";

// Components
import { Container } from "./components/Container/Container";

// Interfaces
import { StepOneFields } from "./interfaces/StepOneFields";
import { StepTwoFields } from "./interfaces/StepTwoFields";
import { StepThreeFields } from "./interfaces/StepThreeFields";

// Dados
import { serviceData } from "./data/serviceData";

interface IAppContext {
  stepOneFields: StepOneFields;
  setStepOneFields: React.Dispatch<React.SetStateAction<StepOneFields>>;
  stepTwoFields: StepTwoFields;
  setStepTwoFields: React.Dispatch<React.SetStateAction<StepTwoFields>>;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  monthlyOrYearly: string;
  setMonthlyOrYearly: React.Dispatch<React.SetStateAction<string>>;
  stepThreeFields: StepThreeFields[];
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
  showLightBox: boolean;
  setShowLightBox: React.Dispatch<React.SetStateAction<boolean>>;
}

import React, { useState, createContext } from "react";
import { Order } from "./interfaces/Order";
import { LightBox } from "./components/LightBox/LightBox";

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

  const stepThreeFields: StepThreeFields[] = serviceData;

  const [order, setOrder] = useState<Order>({} as Order);

  const [showLightBox, setShowLightBox] = useState<boolean>(false);

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
          order,
          setOrder,
          showLightBox,
          setShowLightBox,
        }}
      >
        <Container />
        {showLightBox && (
          <LightBox order={order} setShowLightBox={setShowLightBox} />
        )}
      </AppContext.Provider>
    </div>
  );
}
