import cx from 'classnames/bind';
import styles from './Hamburger.module.scss';

interface props {
    toggle: boolean,
    onClick: any
}

let conditionalStyles = {
    isActive: styles['is-active']
}

let classes = cx.bind(conditionalStyles);

export default function Hamburger(props:props) {
    return(
        <button
            className={classes(`${styles.hamburger} ${styles['hamburger--vortex']}`, {isActive: props.toggle})}
            onClick={props.onClick}
            tabIndex={0}
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
            aria-expanded={props.toggle}>
            <span className={styles['hamburger-box']}>
                <span className={styles['hamburger-inner']}></span>
            </span>
        </button>
    )
}