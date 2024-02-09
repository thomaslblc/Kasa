import './star.scss';

function Star({ rating }) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <i key={i} className={"fa-solid fa-star " + (i + 1 < rating ? 'red' : "")}></i>
        )
    }
    return <> {stars}  </>
}

export default Star;