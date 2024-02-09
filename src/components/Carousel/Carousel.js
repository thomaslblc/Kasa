import { useState } from "react";
import './carousel.scss';

function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    if (images.length <= 1) {
        return (
            <div className="carouselContainer">
                {images.map((picture, i) => (
                    <div key={i}>
                        {index === i && (
                            <div>
                                <img src={picture} alt={"Image Carousel" + i} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <div className="carouselContainer">
            <i className="fa-solid fa-angle-left" onClick={() => {
                setIndex(index === 0 ? images.length - 1 : index - 1)

            }}></i>
            {images.map((picture, i) => {
                return (
                    <div key={i}>
                        {index === i && (
                            <div>
                                <img src={picture} alt={"Image Carousel" + i} />
                                <p className="carouselIndex">{i + 1}/{images.length}</p>
                            </div>
                        )
                        }
                    </div>
                )
            })}
            <i className="fa-solid fa-angle-right" onClick={() => {
                setIndex(index < images.length - 1 ? index + 1 : 0)
            }}></i>
        </div>
    )
}

export default Carousel;