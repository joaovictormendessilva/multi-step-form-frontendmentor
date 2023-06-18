import styles from "./NextButton.module.css";

interface NextButtonProps {
  value: "Next Step" | "Confirm";
}

export function NextButton({ value }: NextButtonProps) {
  return (
    <div className={styles.nextButton}>
      <button>{value}</button>
    </div>
  );
}
