import styles from "./Card.module.css";

interface CardProps {
  idInput: string;
  imageAlt: string;
  labelHtmlFor: string;
  label: string;
  value: string;
  checked: string;
  removeControlledMessage: () => void;
  monthlyPrice: number;
  yearlyPrice: number;
  image: string;
  monthlyOrYearly: boolean;
}

export function Card({ ...Card }: CardProps) {
  return (
    <div className={styles.card}>
      <input
        id={Card.idInput}
        type="radio"
        name="radio"
        value={Card.value}
        checked={Card.checked === Card.value}
        onChange={Card.removeControlledMessage}
      />

      <div className={styles.cardInfo}>
        <img src={Card.image} alt={Card.imageAlt} />

        <div>
          <label htmlFor={Card.labelHtmlFor}>{Card.label}</label>
          {Card.monthlyOrYearly ? (
            <p>${Card.yearlyPrice}/yr</p>
          ) : (
            <p>${Card.monthlyPrice}/mo</p>
          )}
          {Card.monthlyOrYearly && (
            <p className={styles.monthsFreeLabel}>2 months free</p>
          )}
        </div>
      </div>
    </div>
  );
}
