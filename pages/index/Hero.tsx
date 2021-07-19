import styles from './Hero.module.scss';
import BackgroundImage from '@components/BackgroundImage/BackgroundImage';
import Button from '@components/Button/Button';

export default function Hero() {
    return(
        <section id="hero" className={`position-relative ${styles.hero}`}>
            <div className={`container-lg white ${styles.content}`}>
                <div className={`row justify-content-center ${styles.row__content_landscape}`}>
                    <div className={`col col-10 ${styles.col__content_landscape}`}>
                        <hgroup className={styles.hgroup}>
                            <h1 className={styles.site_title}><span className={styles.outline}>nick</span> zou</h1>
                            <div className={`mb-3 ${styles.site_subtitle}`}>designer. developer. manager. <br/>based out of Toronto, Canada.</div>
                        </hgroup>
                    </div>
                </div>
                <div className={`row mb-3 justify-content-center ${styles.row__content_landscape}`}>
                    <div className={`col col-10 ${styles.col__cta} ${styles.col__content_landscape}`}>
                        <Button link={'#portfolio'} text={'see my work'} />
                    </div>
                </div>
                <div className={`row mb-3 justify-content-center ${styles.row__content_landscape}`}>
                    <div className={`col col-10 ${styles.col__cta} ${styles.col__content_landscape}`}>
                        <Button link={'#contact'} text={'connect with me'} outline={true}/>
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