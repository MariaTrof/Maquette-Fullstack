import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <span className={styles.firstText}>
        <div className={styles.square}></div>

        <h1 className={styles.title}>АТЛАНТ ОЦЕНКА</h1>
        <p className={styles.pText}>
          Найти лучшее решение для вас в сфере земельных правоотношений и
          операций с недвижимостью - это наша работа <br />
          Нам удается добиваться экстраординарных результатов благодаря
          накопленному опыту и глубокому пониманию особенностей работы
          государственных органов. <br />
          Мы уделяем большое внимание каждому вопросу, и составляем
          индивидуальный план работы с учетеом ваших целей, потому что наш
          абсолютный приоритет - эффективность нашего бизнеса.
        </p>
        <ul className={styles.ulText}>
          <li>ПОСМОТРИТЕ РЕКОМЕНДАЦИИ НАШИХ КЛИЕНТОВ</li>
          <li>ПОЗНАКОМТЕСЬ С КОМПАНИЕЙ</li>
        </ul>
        <div className={styles.lastPart}>
          <div>
            <h1 className={styles.red}>&gt; 10 лет</h1>
            <p className={styles.pText}>успешной работы по всей стране</p>
          </div>
          <div>
            <h1 className={styles.red}>&gt; 1 500</h1>
            <p className={styles.pText}>
              проектов в сфере земельных правоотношений
            </p>
          </div>
          <div>
            <h1 className={styles.red}>&gt; 1000</h1>
            <p className={styles.pText}>
              клиентов <br />
              70% из которых - постоянные
            </p>
          </div>
        </div>

        <button className={styles.btn}>БОЛЬШЕ О КОМПАНИИ</button>
      </span>
    </div>
  );
};
