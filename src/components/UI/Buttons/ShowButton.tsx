import { MdKeyboardArrowDown } from "react-icons/md";
import styles from './Buttons.module.scss'

export const ShowButton = ({showed, onClick, ...props}: {onClick?: () => void, showed: boolean}) => {

    return (
        <button className={` ${styles.show_button}`} {...props} onClick={onClick}>
            {showed ? 'Hide' : "Show More"}
            <MdKeyboardArrowDown className={`${showed ? styles.reverse_arrow : ""}`} />
        </button>
    )
}