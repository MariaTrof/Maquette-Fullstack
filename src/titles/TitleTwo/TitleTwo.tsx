import styles from "./TitleTwo.module.scss";

export const TitleTwo = () => {
  return (
    <div className={styles.secondTitle}>
      <div className={styles.container}>
        <h1 className={styles.Num}>129</h1>
        <span className={styles.rightContent}>
          <h1 className={styles.text}>ЗЕМЕЛЬНЫХ УЧАСТКОВ</h1>
          <p className={styles.smallText}>прошли процедуру ВРИ</p>
        </span>
      </div>
    </div>
  );
};
