import styles from "./FormControl.module.css";

interface FormControlProps {
  htmlFor: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

export function FormControl({ ...FormControl }: FormControlProps) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={FormControl.htmlFor}>{FormControl.label}</label>
      <input
        id={FormControl.id}
        type={FormControl.type}
        placeholder={FormControl.placeholder}
        required
      />
    </div>
  );
}
