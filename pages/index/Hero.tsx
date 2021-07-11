import Image from 'next/image';
import styles from './Hero.module.scss';
import BackgroundImage from '@public/images/toronto.jpg';

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
                src={BackgroundImage}
                className={'background-image'}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 70%"
                alt="Financial district, downtown Toronto"
                priority
            />
        </section>
    );
};