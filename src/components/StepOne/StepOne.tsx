import { FormControl } from "../FormControl/FormControl";
import { NextButton } from "../NextButton/NextButton";
import styles from "./StepOne.module.css";

export function StepOne() {
  return (
    <div className={styles.stepOne}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <form>
        <FormControl
          htmlFor="name"
          label="Name"
          id="name"
          placeholder="e.g. Stephen King"
          type="text"
        />

        <FormControl
          htmlFor="email"
          id="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
        />

        <FormControl
          htmlFor="phone"
          id="phone"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="text"
        />

        <NextButton value="Next Step" />
      </form>
    </div>
  );
}
