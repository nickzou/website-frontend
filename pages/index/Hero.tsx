import styles from './Hero.module.scss';
import BackgroundImage from '@components/BackgroundImage/BackgroundImage';

export default function Hero() {
    return(
        <section id="hero" className={`position-relative ${styles.hero}`}>
            <div className={`container-lg white ${styles.content}`}>
                <div className="row">
                    <div className="col">
                        <hgroup className={styles.hgroup}>
                            <h1 className={styles.site_title}><span className={styles.outline}>nick</span> zou</h1>
                            <div className={styles.site_subtitle}>designer. developer. manager. <br/>based out of Toronto, Canada.</div>
                        </hgroup>
                    </div>
                </div>
            </div>
            <BackgroundImage
                name={'hero'}
                overlay={true}
            />
        </section>
    );
};