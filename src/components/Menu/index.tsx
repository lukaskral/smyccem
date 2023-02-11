import Link from 'next/link';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <header className={styles['menu']}>
            <div className={styles['menu__container']}>
                <div className={styles['menu__logo']}>
                    <Link href="/">Trhni si smyčcem</Link>
                </div>
                <div className={styles['menu__navigation']}>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Úvod</Link>
                            </li>
                            <li>
                                <Link href="/hudba">Hudba</Link>
                            </li>
                            <li>
                                <Link href="/texty">Texty s akordy</Link>
                            </li>
                            <li>
                                <Link href="/kontakt">Kontakt</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Menu;
