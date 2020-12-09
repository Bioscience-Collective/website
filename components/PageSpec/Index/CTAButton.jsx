import styles from '../../../styles/Button.module.sass'
import { motion } from 'framer-motion'
import Link from 'next/link'

function ButtonContent(props) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{
                scale: .96,
                borderRadius: "100%"
            }}
            className="inline-block"
        >
            <button className={styles.button}>
                {props.text}
            </button>
        </motion.div>
    )
}

export default function CTAButton(props) {
    return (<>
        {props.link ? (
            <Link href={props.link}>
                <a>
                    <ButtonContent text={props.text} />
                </a>
            </Link>
        ) : (
                <a href={props.href}>
                    <ButtonContent text={props.text} />
                </a>
            )}

        <a href={props.href}>
        </a>
    </>

    )
}