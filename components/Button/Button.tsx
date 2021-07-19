import styles from './Button.module.scss';
import cx from 'classnames/bind';

interface props {
    text: string,
    link: string,
    outline?: boolean
}

let conditionalStyles = {
    fill: styles.fill,
    outline: styles.outline
}

const classes = cx.bind(conditionalStyles)

export default function Button(props:props) {
    return (
        <a href={props.link} className={classes(`${styles.button}`, {fill:!props.outline}, {outline:props.outline})}>{props.text}</a>
    )
}