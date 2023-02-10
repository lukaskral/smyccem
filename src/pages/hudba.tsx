import Page from '../components/Page';

const Music = () => {
    return (
        <Page title="Hudba" bg="/assets/site/004.jpeg">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cGIr-o348DU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br /> <br />
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iHll1Ynj9rg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br /> <br />
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/y0TGWSv40Cw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br /> <br />
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XcMHoApxLNk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Page>
    );
};

export default Music;
