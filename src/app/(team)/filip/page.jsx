"use client";
import '../page.css';
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Contact from "@/app/_components/Contact/Contact";
import ButtonPrimary from "@/app/_components/ButtonPrimary/ButtonPrimary";

export default function FilipPage() {

    return (
        <>
            <Navbar/>
            <main>
                <section className="member" id="member">
                    <div className="container">
                        <div className="row">
                            <div className="item left">
                                <img loading="eager" src="/images/about/about-filip.webp" alt="Foto Tomáše" draggable={false}/>
                            </div>
                            <div className="item right">
                                <h3 className="sm">Manažer</h3>
                                <h2>Filip</h2>
                                <p>
                                    Filip je manažer naší agentury, který zajišťuje organizaci a dohled nad projekty. Díky svým schopnostem pomáhá týmu doručit skvělé výsledky. Má více než 3 roky praxe v řízení projektů a zkušenosti s desítkami webových řešení.
                                </p>
                                <div className="imgs-row">
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