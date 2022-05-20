import Countdown from "react-countdown";
import styles from "../styles/components/ResetCounter.module.css";

const msToNextHour = () => {
    return 3600000 - (new Date().getTime() % 3600000);
};

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        return <div className={styles.reset}>Flips have reset, good luck!</div>;
    } else {
        return (
            <span>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </span>
        );
    }
};

export default function ResetCounter() {
    return (
        <div className={styles.mainContainer}>
            <div>Time until next flips:</div>
            <Countdown date={Date.now() + msToNextHour()} renderer={renderer} />
        </div>
    );
}
