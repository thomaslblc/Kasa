import './banner.scss';

function BannerAbout({ img }) {
    return (
        <div className="inner">
            <div className="banner">
                <img src={img} alt="Bannière" />
            </div>
        </div>
    );
}

export default BannerAbout;