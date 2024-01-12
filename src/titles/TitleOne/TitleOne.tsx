import styles from "./TitleOne.module.scss";

export const TitleOne = () => {
  return (
    <div className={styles.firstTitle}>
      <div className={styles.container}>
        <h1 className={styles.Num}>73</h1>
        <span className={styles.rightContent}>
          <h1 className={styles.text}>ПРОЕКТА ПЛАНИРОВКИ</h1>
          <p className={styles.smallText}>
            утверждено на территории Москвы и МО
          </p>
        </span>
      </div>
    </div>
  );
};
