import styles from './style.module.scss';

export default function Footer() {
    return (
        <footer>
            Developer by Alex Nicolas
            <div className={styles.icons}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </footer>
    )
}