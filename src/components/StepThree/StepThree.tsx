import { useContext, ChangeEvent } from "react";
import { Buttons } from "../Buttons/Buttons";
import { Header } from "../Header/Header";
import { Service } from "../Service/Service";
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
  const { monthlyOrYearly, stepThreeFields, setStepThreeFields } = appContext;

  const handleChangeServices = (e: ChangeEvent<HTMLInputElement>) => {
    setStepThreeFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
    console.log(stepThreeFields);
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

      <Service
        inputId="onlineService"
        inputName="onlineService"
        label="Online service"
        paragraph="Access to multiplayer games"
        monthlyPrice={1}
        yearlyPrice={10}
        monthlyOrYearly={monthlyOrYearly}
        onHandleChangeServices={handleChangeServices}
        checked={stepThreeFields.onlineService === true}
      />
      <Service
        inputId="largerStorage"
        inputName="largerStorage"
        label="Larger storage"
        paragraph="Extra 1TB of cloud save"
        monthlyPrice={2}
        yearlyPrice={20}
        monthlyOrYearly={monthlyOrYearly}
        onHandleChangeServices={handleChangeServices}
        checked={stepThreeFields.largerStorage === true}
      />
      <Service
        inputId="customizableProfile"
        inputName="customizableProfile"
        label="Customizable Profile"
        paragraph="Custom theme on your profile"
        monthlyPrice={2}
        yearlyPrice={20}
        monthlyOrYearly={monthlyOrYearly}
        onHandleChangeServices={handleChangeServices}
        checked={stepThreeFields.customizableProfile === true}
      />

      <Buttons
        show={true}
        value="Next Step"
        onHandleBackPage={handleBackPage}
        onClick={onHandleNextPage}
      />
    </div>
  );
}
