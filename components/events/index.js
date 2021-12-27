import React from 'react';
import styles from './styles.module.css'
import useEventsList from "../../hooks/useEventsList"

const EventsComponent = () => {

  const stateEventsList = useEventsList();
  return (
    <>
      <div className="event-times">
        <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList}`}>
          <li className={styles.subSpotTitle}>
            <h4>Siguiente evento</h4>
          </li>
        </ul>

        {stateEventsList.map((row, index) =>(
          <ul className={`${styles.times} ${styles.listUnStyled}`} id="next-events" key={`stateEventsList${index}`}>
            <li>
              <span className={styles.badge}>00:00</span>
              <span className={styles.circle}/>
              <span className={styles.name}>{row.Nombre}</span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default EventsComponent;
