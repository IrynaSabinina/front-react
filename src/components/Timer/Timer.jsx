import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

// import { useEffect, useState } from "react";
export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [seconds]);

  if (seconds === 60) {
    setMinute(minute + 1);
    setSeconds(0);
  } else if (minute === 60) {
    setHours(hours + 1);
    setMinute(0);
  }

  return (
    <>
      <div className={styles.timer}>
        {String(hours).length < 2 ? <p>0{hours} h : </p> : <p>{hours} h : </p>}

        {String(minute).length < 2 ? (
          <p>0{minute} m : </p>
        ) : (
          <p>{minute} m : </p>
        )}

        {String(seconds).length < 2 ? <p>0{seconds} s</p> : <p>{seconds} s</p>}
      </div>
    </>
  );
};
