"use client";
import '../page.css';
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Contact from "@/app/_components/Contact/Contact";
import ButtonPrimary from "@/app/_components/ButtonPrimary/ButtonPrimary";

export default function MatyasPage() {

    return (
        <>
            <Navbar/>
            <main>
                <section className="member" id="member">
                    <div className="container">
                        <div className="row">
                            <div className="item left">
                                <img loading="eager" src="/images/about/about-matyas.webp" alt="Foto Tomáše" draggable={false}/>
                            </div>
                            <div className="item right">
                                <h3 className="sm">Grafik</h3>
                                <h2>Matyáš</h2>
                                <p>
                                    Matyáš je grafik, který se specializuje na moderní a funkční designy. Svou kreativitou a smyslem pro detail přispívá k jedinečnému vizuálnímu stylu našich projektů. Má 4 roky zkušeností s grafickým designem.
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