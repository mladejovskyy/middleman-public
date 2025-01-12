import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import '../css/emblaReviews.css'
import Link from "next/link";

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const scrollToTarget = (targetId) => {
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect()
                const offsetTop = rect.top + window.scrollY - ((window.innerWidth >= 768) ? 35 : 40) //nastav hodnoty pro desktop a mobil - můžeš si je upravit
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                })
            }
        }, 200);
    };


    return (
        <>
            <section className="reviews" id="reviews">
                <div className="container">
                    <div className="heading">
                        <div className="left">
                            <h3 className="sm">recenze</h3>
                            <h2>Co o nás říkají?</h2>
                        </div>
                        <div className="right">
                            <div className="embla__reviews__controls">
                                <div className="embla__reviews__buttons">
                                    <PrevButton
                                        onClick={onPrevButtonClick}
                                        disabled={prevBtnDisabled}
                                    />
                                    <NextButton
                                        onClick={onNextButtonClick}
                                        disabled={nextBtnDisabled}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="embla__reviews">
                            <div className="embla__viewport" ref={emblaRef}>
                                <div className="embla__container">
                                    {slides.map((review, index) => (
                                        <div className="embla__slide" key={index}>
                                            <div className="wrapper">
                                                <div className="text-container">
                                                    <p>{review.text}</p>
                                                </div>
                                                <div className="bottom">

                                                    <div className="author">
                                                        {review.img ? (
                                                            <img
                                                                src="/images/reviews/reviews-placeholder.webp"
                                                                alt={`Profilová fotka ${review.name}`}
                                                                width="48"
                                                                height="48"
                                                                loading="lazy"
                                                                draggable={false}
                                                            />
                                                        ) : (
                                                            <img
                                                                src={`/images/reviews/${review.img}`}
                                                                alt={`Profilová fotka`}
                                                                width="48"
                                                                height="48"
                                                                loading="lazy"
                                                                draggable={false}
                                                            />
                                                        )}
                                                        <div className="author-name">
                                                            <h4>{review.name}</h4>
                                                        </div>
                                                    </div>
                                                    <img
                                                        src="/images/reviews-stars.svg"
                                                        alt={`Stars`}
                                                        loading="lazy"
                                                        draggable={false}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default EmblaCarousel