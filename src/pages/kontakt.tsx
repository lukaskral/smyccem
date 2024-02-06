import Link from 'next/link';
import Page from '../components/Page';

const Contact = () => {
    return (
        <Page title="Kontakt" bg="/assets/site/002.jpeg" contentAlign="bottom">
            <p>tom.randus@gmail.com</p>
            <p>+420 724 023 901</p>
            <br />
            <p>
                <a href="https://www.youtube.com/@smyccem">Youtube</a>
            </p>
            <br />
            <p>
                <a href="https://www.facebook.com/Trhni-si-smy%C4%8Dcem-100603462205271">
                    Facebook
                </a>
            </p>
            <br />
            <p>
                <a href="https://www.instagram.com/smyccem/?hl=cs">Instagram</a>
            </p>
            <br />

            <p>
                Dokážeme hrát bez jakéhokoliv dozvučení, ve vhodných prostorech jako jsou budovy
                divadel, kostely, galerie.
            </p>
            <br />
            <p>
                Na festivalech, lidových slavnostech a v klubech zvučíme, zde je{' '}
                <Link href="/static/trhni-si-smyccem-stage-plan.png">schéma zapojení</Link>.
            </p>
        </Page>
    );
};

export default Contact;
