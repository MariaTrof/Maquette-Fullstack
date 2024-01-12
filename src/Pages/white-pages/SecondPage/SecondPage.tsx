import videoSky from "../../../assets/videosky.mp4";
import page from "../../../assets/pagepicture.jpg";
import "../../../assets/guillaume-bolduc-uZc-QuBvjmU-unsplash.jpg";
import styles from  "./SecondPage.module.scss";
import { useState } from "react";

export const SecondPage = () => {

  const [isPlaying, setPlaying] = useState(false);

  const handleMouseOver = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <div className={styles.secondPage}>
        <span className={styles.leftContent}>
          <h1 className={styles.red}>ЛИДЕРЫ</h1>
          <h1 className={styles.black}>РЕЙТИНГОВ</h1>
          <p className={styles.pText}>
            Мы рады, что результаты, которых мы добились для вас, также высоко
            оценивают авторитетные издания.
          </p>
          <button className={styles.btnOne}>СМОТРЕТЬ РЕЙТИНГИ</button>
          <h1 className={styles.black}>УЗНАТЬ</h1>
          <h1 className={styles.red}>ЗА 60 СЕКУНД</h1>
          <div onMouseOver={handleMouseOver}>
            {isPlaying ? (
              <video
                className={styles.video}
                src={videoSky}
                loop
                controls
              ></video>
            ) : (
              <video
                className={styles.video}
                src={videoSky}
                controls
                loop
              ></video>
            )}
          </div>
        </span>
        <span className={styles.rightContent}>
          <h1 className={styles.black}>Годовой отчет</h1>
          <p className={styles.pText}>
            Мы гордимся своими показателями, и рады ими с вами делиться
          </p>
          <div>
            <img src={page} className={styles.pagePicture} />
          </div>
          <button className={styles.btnTwo}>ОТКРЫТЬ ОТЧЕТ</button> <br/>
          <button className={styles.btnThird}>НАПИСАТЬ ДИРЕКТОРУ</button>
        </span>
      </div>
    </div>
  );
};
