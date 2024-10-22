import { ReactElement } from 'react'
import styles from './HeroBar.module.scss'

export const HeroBar = ({children, direction}: {children:string | ReactElement, direction?: string}) => {
    const containerDirection = direction === 'column' ? styles.column : ''
    
    return (
        <section className={styles.secondary_hero}>
            <div className={`${containerDirection} ${styles.container}`}>
                {children}
            </div>
        </section>
    )
}