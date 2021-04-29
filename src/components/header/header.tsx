import styles from './style.module.scss';

export default function Header() {
    return (
        <header>
            <div className={styles.h1}>
                <h1>Consultador de CEP</h1>
            </div>
        </header>
    )
}