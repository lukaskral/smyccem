import Page from '../components/Page';

const Music = () => {
    return (
        <Page title="Hudba" bg="/assets/site/005.jpeg">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XcMHoApxLNk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MCScwxAPrF8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Page>
    );
};

export default Music;
