import styles from '@/coponents/Headline/Headline.module.css'

export const Headline = (props) => {
    return(
        <div className={styles.center}>
            {props.title}
        </div>
    )
}