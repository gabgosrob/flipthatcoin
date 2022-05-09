import styles from "../styles/components/Loading.module.css";

export default function Load() {
    return (
        <div>
            <div className={styles.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
