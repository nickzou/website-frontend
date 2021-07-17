import {useState} from 'react';
import cx from 'classnames/bind';
import styles from './Header.module.scss';
import Hamburger from '@components/Hamburger/Hamburger';
import Menu from '@components/Menu/Menu';

let conditionalStyles = {
    isActive: styles.is_active
}

let classes = cx.bind(conditionalStyles);

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return(
        <header className={styles.header} role="heading" aria-level={1}>
            <div className="container-lg h-100">
                <div className="row h-100 position-relative">
                    <div className="col d-flex justify-content-start align-items-center flex-grow-1">
                    </div>
                    <div className={classes(`w-100 bg-dim ${styles.menu_wrapper}`, {isActive:menuIsOpen})}>
                        <Menu />
                    </div>
                    <div className={`col p-0 d-flex justify-content-center align-items-center flex-grow-0 flex-shrink-0 ${styles.hamburger}`}>
                        <Hamburger toggle={menuIsOpen} onClick={toggleMenu} />
                    </div>
                </div>
            </div>
        </header>
    )
}