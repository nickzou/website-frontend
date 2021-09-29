import styles from './Menu.module.scss';
import { v4 as uuid } from 'uuid';

interface props {

}

export default function Menu(props:props) {
    return(
        <nav className={styles.menu} aria-label="main navigation">
            <ul>
                {[
                    {
                        title: 'about me',
                        link: '#about'
                    },
                    {
                        title: 'timeline',
                        link: '#timeline'
                    },
                    {
                        title: 'portfolio',
                        link: '#portfolio'
                    },
                    {
                        title: 'contact',
                        link: '#contact'
                    }
                ].map(item=> <li key={uuid()}><a href={item.link}>{item.title}</a></li>)}
            </ul>
        </nav>
    )
}