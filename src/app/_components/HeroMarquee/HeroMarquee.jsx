import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import './HeroMarquee.css';

const imgs = [
    "/images/hero/hero-photo3.webp",
    "/images/hero/hero-photo1.webp",
    "/images/hero/hero-photo7.webp",
    "/images/hero/hero-photo9.webp",
    "/images/hero/hero-photo2.webp",
    "/images/hero/hero-photo6.webp",
    "/images/hero/hero-photo8.webp",
    "/images/hero/hero-photo4.webp",
    "/images/hero/hero-photo5.webp",
]
const imgs2 = [
    "/images/hero/hero-photo4.webp",
    "/images/hero/hero-photo2.webp",
    "/images/hero/hero-photo8.webp",
    "/images/hero/hero-photo1.webp",
    "/images/hero/hero-photo5.webp",
    "/images/hero/hero-photo9.webp",
    "/images/hero/hero-photo3.webp",
    "/images/hero/hero-photo6.webp",
    "/images/hero/hero-photo7.webp",
]


const ReviewCard = ({img}) => {
    return (
        <img loading="eager" src={img} alt="Náhled projektu" draggable={false} width={290}/>
    );
};

export function HeroMarquee() {
    return (
        <div
            className="relative flex h-[700px] w-full flex-row items-center justify-center rounded-lg bg-background md:shadow-xl magic-marquee">
            <Marquee vertical className="[--duration:50s] marquee one">
                {imgs.map((imgUrl) => (
                    <ReviewCard key={imgUrl} img={imgUrl}/>
                ))}
            </Marquee>
            <Marquee reverse vertical className="[--duration:50s] marquee two">
                {imgs2.map((imgUrl) => (
                    <ReviewCard key={imgUrl} img={imgUrl}/>
                ))}
            </Marquee>
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-dark dark:from-background"></div>
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-3/6 bg-gradient-to-t from-[#040404] to-transparent"></div>
        </div>
    );
}