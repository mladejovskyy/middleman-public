"use client"
import './ButtonPrimary.css';
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function ButtonPrimary({ children, url }) {
    const router = useRouter();

    const scrollToTarget = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = window.innerWidth >= 768 ? 70 : 80;
            const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    if(url) {
        return (
            <Link href={url} target="" rel="noopener noreferrer nofollow" aria-label="Odkaz" className="btn btn-primary">
                {children}
                <img src="/images/btn-arrow.svg" alt="Ikona šipky" draggable={false} width="42" height="42" loading="eager"/>
            </Link>
        )
    }

    return (
        <button onClick={() => scrollToTarget("contact")} className="btn btn-primary">
            {children}
            <img src="/images/btn-arrow.svg" alt="Ikona šipky" draggable={false} width="42" height="42" loading="eager"/>
        </button>
    )
}