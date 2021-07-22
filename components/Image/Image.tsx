import cx from 'classnames/bind';
import styles from './Image.module.scss';
import ConditionalWrapper from '@components/ConditionalWrapper';
import React from 'react';

interface props {
    src: string,
    alt?: string,
    className?: string
    backgroundImage?: boolean,
    overlay?: boolean,
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

let conditionalStyles = {
    overlay: styles.overlay
}

let classes = cx.bind(conditionalStyles)

export default function Image(props: props) {
    return(
        <ConditionalWrapper condition={props.backgroundImage} wrapper={children => <div className={classes(`background-image-wrapper ${styles.background_image_wrapper}`, {overlay:props.overlay})}>{children}</div>} >
            <picture>
                {props.desktopLargePortraitSrcSet && <source srcSet={props.desktopLargePortraitSrcSet} media="(min-width: 900px) and (orientation: portrait)"/>}
                {props.desktopLargeSrcSet && <source srcSet={props.desktopLargeSrcSet} media="(min-width: 1440px) and (orientation: landscape)"/>}
                {props.desktopPortraitSrcSet && <source srcSet={props.desktopPortraitSrcSet} media="(min-width: 800px) and (orientation: portrait)"/>}
                {props.desktopSrcSet && <source srcSet={props.desktopSrcSet} media="(min-width: 1366px) and (orientation: landscape)"/>}
                {props.tabletLargeLandscapeSrcSet && <source srcSet={props.tabletLargeLandscapeSrcSet} media="(min-width: 1366px) and (orientation: landscape)"/>}
                {props.tabletLargeSrcSet && <source srcSet={props.tabletLargeSrcSet} media="(min-width: 1024px) and (orientation: portrait)"/>}
                {props.tabletLandscapeSrcSet && <source srcSet={props.tabletLandscapeSrcSet} media="(min-width: 1024px) and (orientation: landscape)"/>}
                {props.tabletSrcSet && <source srcSet={props.tabletSrcSet} media="(min-width: 768px) and (orientation: portrait)"/>}
                {props.phabletLandscapeSrcSet && <source srcSet={props.phabletLandscapeSrcSet} media="(min-width: 731px) and (orientation: landscape)"/>}
                {props.phabletSrcSet && <source srcSet={props.phabletSrcSet} media="(min-width: 576px) and (orientation: portrait)"/>}
                {props.mobileLandscapeSrcSet && <source srcSet={props.mobileLandscapeSrcSet} media="(orientation: landscape)"/>}
                {props.mobileSrcSet && <source srcSet={props.mobileSrcSet} media="(orientation: portrait)"/>}
                <img src={`${props.src}`} alt={props.alt} className={`${props.backgroundImage && ` ${styles.background_image}`}`}/>
            </picture>
        </ConditionalWrapper>
    );
}