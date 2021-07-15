import styles from './Image.module.scss';

interface props {
    src: string,
    alt?: string,
    className?: string
    backgroundImage?: boolean,
    mobileSrcSet?: string
    mobileLandscapeSrcSet?: string
    phabletSrcSet?: string
    phabletLandscapeSrcSet?: string,
    tabletSrcSet?: string,
    tabletLandscapeSrcSet?: string,
    tabletLargeSrcSet?: string,
    tabletLargeLandscapeSrcSet?: string,
    desktopSrcSet?: string,
    desktopPortraitSrcSet?: string,
    desktopLargeSrcSet?: string,
    desktopLargePortraitSrcSet?: string,
}

export default function Image(props: props) {
    return(
        <div className={`image${props.backgroundImage && ` ${styles.background_image_wrapper}`}`}>
            <picture>
                {props.desktopLargePortraitSrcSet && <source srcSet={props.desktopLargePortraitSrcSet} media="(min-width: 900px) and (orientation: portrait)"/>}
                {props.desktopLargeSrcSet && <source srcSet={props.desktopLargeSrcSet} media="(min-width: 1440px)"/>}
                {props.desktopPortraitSrcSet && <source srcSet={props.desktopPortraitSrcSet} media="(min-width: 768px) and (orientation: portrait)"/>}
                {props.desktopSrcSet && <source srcSet={props.desktopSrcSet} media="(min-width: 1366px)"/>}
                {props.tabletLargeLandscapeSrcSet && <source srcSet={props.tabletLargeLandscapeSrcSet} media="(min-width: 1366px) and (orientation: landscape)"/>}
                {props.tabletLargeSrcSet && <source srcSet={props.tabletLargeSrcSet} media="(min-width: 1024px)"/>}
                {props.tabletLandscapeSrcSet && <source srcSet={props.tabletLandscapeSrcSet} media="(min-width: 1024px) and (orientation: landscape)"/>}
                {props.tabletSrcSet && <source srcSet={props.tabletSrcSet} media="(min-width: 768px)"/>}
                {props.phabletLandscapeSrcSet && <source srcSet={props.phabletLandscapeSrcSet} media="(min-width: 731px) and (orientation: landscape)"/>}
                {props.phabletSrcSet && <source srcSet={props.phabletSrcSet} media="(min-width: 576px)"/>}
                {props.mobileLandscapeSrcSet && <source srcSet={props.mobileLandscapeSrcSet} media="(orientation: landscape)"/>}
                {props.mobileSrcSet && <source srcSet={props.mobileSrcSet}/>}
                <img src={`${props.src}`} alt={props.alt} className={`${props.backgroundImage && ` ${styles.background_image}`}`}/>
            </picture>
        </div>
    );
}