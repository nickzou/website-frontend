import {useState} from 'react';
import styles from './Header.module.scss';
import Hamburger from '@components/Hamburger/Hamburger';

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return(
        <header className={styles.header} role="heading" aria-level={1}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col d-flex justify-content-start align-items-center flex-grow-1">
                    logo
                    </div>
                    <div className={`col p-0 d-flex justify-content-center align-items-center flex-grow-0 flex-shrink-0 ${styles.hamburger}`}>
                        <Hamburger toggle={menuIsOpen} onClick={toggleMenu} />
                    </div>
                </div>
            </div>
        </header>
    )
}