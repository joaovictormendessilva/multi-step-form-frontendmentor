// React
import { useContext, ChangeEvent } from "react";

// Components
import { Buttons } from "../Buttons/Buttons";
import { Header } from "../Header/Header";
import { Service } from "../Service/Service";

// Context API
import { AppContext } from "../../App";

interface StepThreeProps {
  setStepTwo: React.Dispatch<React.SetStateAction<boolean>>;
  setStepThree: React.Dispatch<React.SetStateAction<boolean>>;
  setStepFour: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StepThree({
  setStepTwo,
  setStepThree,
  setStepFour,
}: StepThreeProps) {
  const appContext = useContext(AppContext);
  if (!appContext) return;
  const { monthlyOrYearly, stepThreeFields } = appContext;

  const handleChangeServices = (e: ChangeEvent<HTMLInputElement>) => {
    stepThreeFields.map((service) => {
      if (e.target.name === service.inputName) {
        service.checked = !service.checked;
      }
    });
  };

  const handleBackPage = () => {
    setStepTwo(true);
    setStepThree(false);
  };

  const onHandleNextPage = () => {
    setStepThree(false);
    setStepFour(true);
  };

  return (
    <div>
      <Header
        title="Pick add-ons"
        paragraph="Add-ons gelp enhance your gaming experience."
      />

      {stepThreeFields.map((service) => {
        return (
          <Service
            key={service.id}
            inputId={service.inputId}
            inputName={service.inputName}
            label={service.label}
            paragraph={service.paragraph}
            monthlyPrice={service.monthlyPrice}
            yearlyPrice={service.yearlyPrice}
            monthlyOrYearly={monthlyOrYearly}
            onHandleChangeServices={handleChangeServices}
            checked={service.checked === true}
          />
        );
      })}

      <Buttons
        show={true}
        value="Next Step"
        onHandleBackPage={handleBackPage}
        onClick={onHandleNextPage}
      />
    </div>
  );
}
