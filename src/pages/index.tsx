import Post from '../types/post';
import Page from '../components/Page';

type Props = {
    allPosts: Post[],
};

const Index = ({}: Props) => {
    return (
        <Page title="Úvod" bg="/assets/site/000.jpeg" contentAlign="bottom">
            <p>
                <b>Trhni si smyčcem</b> je šansonový dvojboj mezi punkem a filharmonií.
            </p>
            <br />
            <p>Jsme dva, hrajeme jen na 9 strun a celé se to sbalí do jedné větší tašky.</p>
            <br />
            <p>
                Hrajeme vlastní tvorbu, texty převážně na aktuální a literární témata. Formálně
                spadáme pod magický realismus, ale ještě nám nevolali. Hrajeme v akusticky a nebo
                jinak zajímavých prostorech, mezi skvělými lidmi nebo v přírodě.
            </p>
        </Page>
    );
};

export default Index;

export const getStaticProps = async () => {
    return {
        props: {},
    };
};
