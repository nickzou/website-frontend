import Image from '@components/Image/Image';

interface props {
    name: string,
    overlay: boolean
}

export default function BackgroundImage(props:props) {
    return(
        <Image
            src={`/images/${props.name}/mobile_1x.jpg`}
            desktopPortraitSrcSet={`/images/${props.name}/desktop_portrait_1x.jpg, /images/${props.name}/desktop_portrait_2x.jpg 2x`}
            desktopSrcSet={`/images/${props.name}/desktop_1x.jpg, /images/${props.name}/desktop_2x.jpg 2x`}
            tabletLargeLandscapeSrcSet={`/images/${props.name}/tablet-large_landscape_1x.jpg, /images/${props.name}/tablet-large_landscape_2x.jpg 2x`}
            tabletLargeSrcSet={`/images/${props.name}/tablet-large_1x.jpg, /images/${props.name}/tablet-large_2x.jpg 2x`}
            tabletLandscapeSrcSet={`/images/${props.name}/tablet_landscape_1x.jpg, /images/${props.name}/tablet_landscape_2x.jpg 2x`}
            tabletSrcSet={`/images/${props.name}/tablet_1x.jpg, /images/${props.name}/tablet_2x.jpg 2x`}
            phabletLandscapeSrcSet={`/images/${props.name}/phablet_landscape_1x.jpg, /images/${props.name}/phablet_landscape_2x.jpg 2x, /images/${props.name}/phablet_landscape_3x.jpg 3x`}
            phabletSrcSet={`/images/${props.name}/phablet_1x.jpg, /images/${props.name}/phablet_2x.jpg 2x, /images/${props.name}/phablet_3x.jpg 3x`}
            mobileLandscapeSrcSet={`/images/${props.name}/mobile_landscape_1x.jpg, /images/${props.name}/mobile_landscape_2x.jpg 2x`}
            mobileSrcSet={`/images/${props.name}/mobile_1x.jpg, /images/${props.name}/mobile_2x.jpg 2x`}
            alt="Financial district, downtown Toronto"
            backgroundImage={true}
            overlay={props.overlay}
        />
    )
}