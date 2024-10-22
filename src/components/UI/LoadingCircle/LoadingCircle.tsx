import { Oval } from 'react-loader-spinner'
import styles from './LoadingCircle.module.scss'

export const LoadingCircle = () => {
    return <div data-testid='loading' className={styles.backdrop}>
        <Oval
        visible={true}
        height="160"
        width="160"
        color="#06965C"
        secondaryColor="#FFFFFF"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
}

export default LoadingCircle