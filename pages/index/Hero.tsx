import styles from './Hero.module.scss';

export default function Hero() {
    return(
        <section id="hero" className={styles.hero}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <hgroup>
                            <h1 className={styles.site_title}>nick zou</h1>
                            <div className={styles.site_subtitle}>designer. developer. <span className="gold">manager.</span></div>
                        </hgroup>
                    </div>
                </div>
            </div>
        </section>
    );
};