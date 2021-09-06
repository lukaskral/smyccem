import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <header className={styles['menu']}>
            <div className={styles['menu__container']}>
                <div className={styles['menu__logo']}>
                    <a href="/">Smyčcem</a>
                </div>
                <div className={styles['menu__navigation']}>
                    <nav>
                        <ul>
                            <li>
                                <a href="/hudby">Hudba</a>
                            </li>
                            <li>
                                <a href="/texty">Texty</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/kontakt">Kontakt</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Menu;
