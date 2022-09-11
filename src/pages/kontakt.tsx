import Page from '../components/Page';
import Header from '../components/Menu';

const Contact = () => {
    return (
        <Page title="Kontakt" bg="/assets/site/002.jpeg" contentAlign="bottom">
            <p>tom.randus@gmail.com</p>
            <p>+420 724 023 901</p>
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
            {/* <h2>Zvučení</h2> */}
            <p>
                Pokud je to možné, hrajeme bez jakéhokoliv dozvučení, v prostorech jako jsou budovy
                divadel, kostely, amfiteátry, galerie. Když je zvučení vyžadováno, hrajeme na jediný
                velkomembránový kondenzátorový mikrofon kardioidní charakteristiky s
                předzesilovačem.
            </p>
        </Page>
    );
};

export default Contact;
