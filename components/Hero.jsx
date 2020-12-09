import styles from '../styles/Hero.module.sass'

export default function Hero(props) {
    return (
        <>
            <h1 className={styles.title}>{props.title}</h1>
            {props.highlight ? (
                <h2 className={styles.subtitlePure}>{props.subtitle}</h2>
            ) : (
                <h2 className={styles.subtitle}>{props.subtitle}</h2>
                )}

        </>
    )
}