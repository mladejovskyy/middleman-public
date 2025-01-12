"use client";
import '../page.css';
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Contact from "@/app/_components/Contact/Contact";
import ButtonPrimary from "@/app/_components/ButtonPrimary/ButtonPrimary";

export default function TomasPage() {

    return (
        <>
            <Navbar/>
            <main>
                <section className="member" id="member">
                    <div className="container">
                        <div className="row">
                            <div className="item left">
                                <img loading="eager" src="/images/about/about-tomas.webp" alt="Foto Tomáše" draggable={false}/>
                            </div>
                            <div className="item right">
                                <h3 className="sm">Vývojář</h3>
                                <h2>Tomáš</h2>
                                <p>
                                Tomáš je hlavní vývojář a také i designer naší agentury. Dokáže vzít projekt od konzultace s klientem až po deployment. Má již více než 3 roky praxe a podílel se na více než 20 webových projektech.
                                </p>
                                <div className="imgs-row">
                                    <img loading="eager" src="/images/about/about-icon-next.webp" alt="Ikona Next.js"
                                         draggable={false} className="icon" width={48} height={48}/>
                                    <img loading="eager" src="/images/about/about-icon-react.webp" alt="Ikona React"
                                         draggable={false} className="icon" width={48} height={48}/>
                                    <img loading="eager" src="/images/about/about-icon-supabase.webp" alt="Ikona Supabase"
                                         draggable={false} className="icon" width={48} height={48}/>
                                    <img loading="eager" src="/images/about/about-icon-figma.webp" alt="Ikona Figma"
                                         draggable={false} className="icon" width={48} height={48}/>
                                    <img loading="eager" src="/images/about/about-icon-wordpress.webp" alt="Ikona Wordpress"
                                         draggable={false} className="icon" width={48} height={48}/>
                                </div>
                                <div className="btns-row">
                                    <ButtonPrimary>Nezávazná konzultace</ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Contact/>
            <Footer/>
        </>
    )
}