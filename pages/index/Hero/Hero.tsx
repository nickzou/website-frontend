import styles from './Hero.module.scss';
import BackgroundImage from '@components/BackgroundImage/BackgroundImage';
import Button from '@components/Button/Button';

export default function Hero() {
    return(
        <section id="hero" className={`position-relative ${styles.hero}`}>
            <div className={`container-md white ${styles.content}`}>
                <div className={`row justify-content-center justify-content-lg-start ${styles.row__content_landscape}`}>
                    <div className={`col col-11 offset-lg-1 offset-xl-0 ${styles.col__content_landscape}`}>
                        <hgroup className={styles.hgroup}>
                            <h1 className={styles.site_title}><span className={styles.outline}>nick</span> zou</h1>
                            <div className={`mb-3 ${styles.site_subtitle}`}>designer. developer. manager.</div>
                        </hgroup>
                    </div>
                </div>
                <div className={`row mb-3 justify-content-center justify-content-lg-start ${styles.row__content_landscape}`}>
                    <div className={`col col-9 col-md-4 col-lg-3 offset-lg-1 offset-xl-0 ${styles.col__cta} ${styles.col__cta_landscape}`}>
                        <Button link={'#portfolio'} text={'see my work'} />
                    </div>
                </div>
                <div className={`row mb-3 justify-content-center justify-content-lg-start ${styles.row__content_landscape}`}>
                    <div className={`col col-9 col-md-4 col-lg-3 offset-lg-1 offset-xl-0 ${styles.col__cta} ${styles.col__cta_landscape}`}>
                        <Button link={'#contact'} text={'connect with me'} outline={true}/>
                    </div>
                </div>
            </div>
            <BackgroundImage
                name={'hero'}
                overlay={true}
            />
        </section>
    )
}