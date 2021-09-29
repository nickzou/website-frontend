import {useState, useCallback, useEffect} from 'react';
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

    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleResize = useCallback(e => {
        if(e.matches) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])

    useEffect(() => {
        const media = window.matchMedia(`(max-width: 991px)`)
        media.addEventListener('change', handleResize)
        if (media.matches) {
            setIsMobile(true)
        }
        return () => media.removeEventListener('change', handleResize)
    }, [])

    return(
        <header className={styles.header} role="heading" aria-level={1}>
            <div className="container-xl h-100">
                <div className="row h-100 justify-content-lg-between position-relative">
                    <div className="col col-lg-2 d-flex justify-content-start align-items-center flex-grow-1 flex-lg-grow-0">
                    </div>
                    <div className={classes(`col-lg-10 d-lg-flex align-items-lg-end ${styles.menu_wrapper}`, {isActive:menuIsOpen})}>
                        <Menu />
                    </div>
                    { isMobile &&
                        <div className={`col p-0 d-flex justify-content-center align-items-center flex-grow-0 flex-shrink-0 ${styles.hamburger}`}>
                            <Hamburger toggle={menuIsOpen} onClick={toggleMenu} />
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}