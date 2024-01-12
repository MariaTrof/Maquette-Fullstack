import { Button } from "../../buttons/Button";
import styles from "./InteractivePage.module.scss";

export const InteractivePage = () => {
  return (
    <div className={styles.interactivePage}>
      <h1 className={styles.titleText}>НАШИ УСЛУГИ | ПРАВОВОЙ КОНСАЛТИНГ </h1>
      <span className={styles.btns}>
        <Button> ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ</Button>
        <Button> ДОСУДЕБНОЕ И СУДЕБНОЕ УРЕГУЛИРОВАНИЕ НАЛОГОВ</Button>
        <Button> ОЦЕНКА ВОЗДУШНОГО И ВОДНОГО ПРОСТРАНСТВА</Button>
        <Button> ОЦЕНКА МАШИН И ОБОРУДОВАНИЯ</Button>
        <Button> ОЦЕНКА ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ И НМА</Button>
        <Button>
          КОНСУЛЬТИРОВАНИЕ В РАМКАХ ЗАКУПОЧНОЙ ДЕЯТЕЛЬНОСТИ ПО 223-ФЗ И 44-ФЗ
        </Button>
        <button className={styles.Btn}>ВСЕ УСЛУГИ</button>
      </span>
      <div className={styles.pages}>
        <a className={styles.a}>ПРАВОВOЙ КОНСАЛТИНГ</a>
        <a className={styles.a}>ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ</a>
        <a className={styles.a}>ОЦЕНКА</a>
        <a className={styles.a}>ЮРИДИЧЕСКИЕ УСЛУГИ</a>
        <a className={styles.a}>АУДИТ</a>
      </div>
    </div>
  );
};
