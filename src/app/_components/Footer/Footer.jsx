'use client'
import './Footer.css';
import Link from "next/link";
import {useRouter} from 'next/navigation';

export default function Footer() {
    const router = useRouter();

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
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item left">
                        <img
                            onClick={() => scrollToTarget('hero')}
                            src="/images/logo.svg"
                            alt="Logo mladejovsky"
                            className='logo'
                            draggable="false"
                            loading="lazy"
                            placeholder="blur"
                        />
                        <p className="slogan">Budujeme webovou identitu pro váš brand</p>
                        <p className="ico">
                            MIDDLEMAN s.r.o.<br/>IČO: 21789649<br/>Praha 8, Karlín
                        </p>
                    </div>
                    <div className="group empty"></div>
                    <div className="group">
                            <h3>Užitečné</h3>
                            <ul>
                                <li><Link href='/zpracovani-osobnich-udaju/'>Zpracování osobních údajů</Link></li>
                                <li><Link href='/dotaznik-spokojenosti/'>Dotazník spokojenosti</Link></li>
                            </ul>
                    </div>
                    <div className="group">
                            <h3>Navigace</h3>
                            <ul>
                                <li onClick={() => scrollToTarget('services')}>Služby</li>
                                <li onClick={() => scrollToTarget('portfolio')}>Portfolio</li>
                                <li onClick={() => scrollToTarget('faq')}>Časté dotazy</li>
                                <li onClick={() => scrollToTarget('aboutus')}>O nás</li>
                                <li onClick={() => scrollToTarget('reviews')}>Recenze</li>
                                <li onClick={() => scrollToTarget('contact')}>Nezávazná konzultace</li>
                            </ul>
                    </div>
                    <div className="group">
                            <h3>Kontakty</h3>
                            <ul>
                                <Link
                                    href="mailto:middleman.web@protonmail.com"
                                    className="link"
                                    aria-label="Napište mi email a promluvme si o vašem projektu"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5m-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07"></path>
                                    </svg>
                                    middleman.web@protonmail.com
                                </Link>
                                <Link
                                    href="tel:723709079"
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Zavolejte mi a promluvme si o vašem projektu">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path>
                                        </svg>
                                    </div>
                                    +420 723 709 079
                                </Link>
                                <Link
                                    href="https://www.instagram.com/middleman.web/"
                                    className="link"
                                    aria-label="Zobrazte si náš firemní instagram"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                                    </svg>
                                    @middleman.web
                                </Link>
                            </ul>
                    </div>
                </div>
                <hr/>
                <div className="bottom">
                    <p className="copyright">© 2024 middleman.cz, Všechna práva vyhrazena.</p>
                    <Link href='https://www.mladejovsky.cz' className="author">Web &
                        Design <img
                            onClick={() => scrollToTarget('hero')}
                            src="/images/logo.svg"
                            alt="Logo mladejovsky"
                            className='logo'
                            draggable="false"
                            loading="lazy"
                            placeholder="blur"
                        /></Link>
                </div>
            </div>
        </footer>
    );
}
