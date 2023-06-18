import styles from "./AsideSteps.module.css";

export function AsideSteps() {
  return (
    <aside className={styles.asideSteps}>
      <ul>
        <li>
          <div>
            <button>1</button>
          </div>
          <div>
            <p>STEP 1</p>
            <b>YOUR INFO</b>
          </div>
        </li>

        <li>
          <div>
            <button>2</button>
          </div>
          <div>
            <p>STEP 2</p>
            <b>SELECT PLAN</b>
          </div>
        </li>

        <li>
          <div>
            <button>3</button>
          </div>
          <div>
            <p>STEP 3</p>
            <b>ADD-ONS</b>
          </div>
        </li>

        <li>
          <div>
            <button>4</button>
          </div>
          <div>
            <p>STEP 4</p>
            <b>SUMMARY</b>
          </div>
        </li>
      </ul>
    </aside>
  );
}
