import styles from "./App.module.css";
import { Container } from "./components/Container/Container";

export function App() {
  return (
    <div className={styles.app}>
      <Container />
    </div>
  );
}
