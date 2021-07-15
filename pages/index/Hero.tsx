import styles from './Hero.module.scss';
import Image from '@components/Image/Image';

export default function Hero() {
    return(
        <section id="hero" className={styles.hero}>
            <div className={`container position-relative white ${styles.content}`}>
                <div className="row">
                    <div className="col">
                        <hgroup>
                            <h1 className={styles.site_title}>nick zou</h1>
                            <div className={styles.site_subtitle}>designer. developer. <span className="gold">manager.</span></div>
                        </hgroup>
                    </div>
                </div>
            </div>
            <Image
                src={`/images/hero/mobile_1x.jpg`}
                desktopPortraitSrcSet={'/images/hero/desktop_portrait_1x.jpg, /images/hero/desktop_portrait_2x.jpg 2x'}
                desktopSrcSet={'/images/hero/desktop_1x.jpg, /images/hero/desktop_2x.jpg 2x'}
                tabletLargeLandscapeSrcSet={'/images/hero/tablet-large_landscape_1x.jpg, /images/hero/tablet-large_landscape_2x.jpg 2x'}
                tabletLargeSrcSet={'/images/hero/tablet-large_1x.jpg, /images/hero/tablet-large_2x.jpg 2x'}
                tabletLandscapeSrcSet={'/images/hero/tablet_landscape_1x.jpg, /images/hero/tablet_landscape_2x.jpg 2x'}
                tabletSrcSet={'/images/hero/tablet_1x.jpg, /images/hero/tablet_2x.jpg 2x'}
                phabletLandscapeSrcSet={'/images/hero/phablet_landscape_1x.jpg, /images/hero/phablet_landscape_2x.jpg 2x, /images/hero/phablet_landscape_3x.jpg 3x'}
                phabletSrcSet={'/images/hero/phablet_1x.jpg, /images/hero/phablet_2x.jpg 2x, /images/hero/phablet_3x.jpg 3x'}
                mobileLandscapeSrcSet={'/images/hero/mobile_landscape_1x.jpg, /images/hero/mobile_landscape_2x.jpg 2x'}
                mobileSrcSet={'/images/hero/mobile_1x.jpg, /images/hero/mobile_2x.jpg 2x'}
                alt="Financial district, downtown Toronto"
                backgroundImage={true}
            />
        </section>
    );
};