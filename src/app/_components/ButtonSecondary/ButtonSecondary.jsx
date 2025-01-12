"use client"
import './ButtonSecondary.css';
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function ButtonSecondary({ children, url }) {
    const router = useRouter();

    const scrollToTarget = async (sectionId) => {
        const currentPath = window.location.pathname;

        if (currentPath === '/') {
            // Directly scroll to the target section if already on homepage
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            // Redirect to homepage and then scroll to the target section
            await router.push('/');

            // Ensure scrolling happens after redirection
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({behavior: 'smooth'});
                }
            }, 100); // Short delay to ensure page redirection is processed
        }
    };

    return (
        <Link href={url} target="_blank" rel="noopener noreferrer nofollow" aria-label="Odkaz na webový projekt" className="btn btn-secondary">
            {children}
            <img src="/images/btn-arrow-black.svg" alt="Ikona šipky" draggable={false} width="42" height="42" loading="eager"/>
        </Link>
    )
}