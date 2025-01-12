import './HeroReviews.css';

export default function HeroReviews() {

    return (
        <div className="reviews-row">
            <img src="/images/hero-reviews-photo.webp" className="people" alt="" draggable={false} loading="eager" height={45} width={95}/>
            <div>
                <img src="/images/reviews-stars.svg" className="stars" alt="" draggable={false} loading="eager"/>
                <p><b>100+</b> vytvořených úspěšných webů</p>
            </div>
        </div>
    )
}