import styles from './Header.module.scss';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className="container">
                <div className="row">
                    <div className="col">
                    logo
                    </div>
                </div>
            </div>
        </header>
    )
}