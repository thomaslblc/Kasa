import './banner.scss';

function Banner({ img, title }) {
    return (
        <div className="inner">
            <div className="banner">
                <img src={img} alt="Bannière" />
                {
                    title.length >= 1 ? (<h1>{title}</h1>) : ""
                }
            </div>
        </div>
    );
}

export default Banner;
