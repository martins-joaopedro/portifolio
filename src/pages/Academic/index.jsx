import styles from "./styles.module.css";
import { data } from '../../data/academic.json'

export const Academic = () => {

  return (
    <div id="academic" className={styles.academic}>
      <div className={styles.cardContainer}>
        {data.map(({ name, img, activity, description, date }) => (
          <div className={styles.card} key={name}>
            <div className={styles.header}>
                <img src={img} />
                <div>
                    <h3>{name}</h3>
                    <p>{activity}</p>
                    <small>{date}</small>
                    <p>{description}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
