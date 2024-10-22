import styles from './Tag.module.scss'

export const Tag = ({children, bgColor}: {children: string, bgColor: string}) => {
    return (
        <div className={`${bgColor} ${styles.tag}`}>
            {children}
        </div>
    )
}