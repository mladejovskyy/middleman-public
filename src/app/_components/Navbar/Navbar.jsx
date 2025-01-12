'use client'
import './Navbar.css';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import ButtonPrimary from "@/app/_components/ButtonPrimary/ButtonPrimary";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 120) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTarget = async (sectionId) => {
        const currentPath = window.location.pathname;
        const offset = window.innerWidth >= 768 ? 70 : 80;

        if (currentPath === '/') {
            // On homepage, directly scroll to the target section
            const section = document.getElementById(sectionId);
            if (section) {
                const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({top: topPosition, behavior: 'smooth'});
            }
        } else {
            // Redirect to the homepage and then scroll
            await router.push('/');

            // Ensure scrolling happens after page navigation
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({top: topPosition, behavior: 'smooth'});
                }
            }, 100); // Short delay to ensure page redirection is processed
        }
    }

    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="container">
                <img
                    onClick={() => scrollToTarget('hero')}
                    className="nav-logo"
                    src="/images/logo.svg"
                    alt="Logo mladejovsky"
                    draggable="false"
                    loading="eager"
                    placeholder="blur"
                />
                
                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToTarget('services')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="0"><span>Služby</span>
                    </li>
                    <li onClick={() => scrollToTarget('portfolio')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="100"><span>Portfolio</span>
                    </li>
                    <li onClick={() => scrollToTarget('faq')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="200"><span>Časté dotazy</span>
                    </li>
                    <li onClick={() => scrollToTarget('aboutus')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="300"><span>O nás</span>
                    </li>
                    <li onClick={() => scrollToTarget('reviews')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="400"><span>Recenze</span>
                    </li>

                    <li data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
                        <ButtonPrimary>Nezávazná konzultace</ButtonPrimary>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
