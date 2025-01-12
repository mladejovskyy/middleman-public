"use client";
import './page.css';
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Contact from "@/app/_components/Contact/Contact";
import ButtonSecondary from "@/app/_components/ButtonSecondary/ButtonSecondary";

export default function PortfolioPage() {

    return (
        <>
            <Navbar/>
            <main>
                <section className="sub-portfolio" id="sub-portfolio">
                    <div className="container">
                        <h3 className="sm">Portfolio</h3>
                        <h2>Co jsme vytvořili</h2>
                        <div className="row">
                            <div className="item one">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo1.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Web pro 3D AI nástroj</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Tvorba webu</h4>
                                        <h4 className="pill">Na míru</h4>
                                        <h4 className="pill">Branding</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://morphly-czechskills.vercel.app/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item two">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo2.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Web pro herní studio</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Tvorba webu</h4>
                                        <h4 className="pill">Na míru</h4>
                                        <h4 className="pill">Branding</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://modul-b.vercel.app/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item three">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo3.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Web pro taneční agenturu</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Tvorba webu</h4>
                                        <h4 className="pill">Na míru</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://www.agenturacmelak.cz/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item four">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo4.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Vývoj webu Gardysport Academy</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Vývoj webu</h4>
                                        <h4 className="pill">Redesigner</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://gardysportacademy.cz/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item five">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo5.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Vývoj webu Purmax</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Vývoj webu</h4>
                                        <h4 className="pill">Redesigner</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://www.agenturacmelak.cz/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item six">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo6.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Vývoj webu Petra Dubce</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Vývoj webu</h4>
                                        <h4 className="pill">Redesigner</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://www.purmax.cz/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item seven">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo7.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Vývoj webu Účetnictví Totoro</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Vývoj webu</h4>
                                        <h4 className="pill">Redesigner</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://www.ucetnictvitotoro.cz/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item eight">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo8.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Vývoj webu VSTransgroup</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Vývoj webu</h4>
                                        <h4 className="pill">Redesigner</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://www.vstransgroup.cz/">Prohlédnout</ButtonSecondary>
                                </div>
                            </div>
                            <div className="item nine">
                                <div className="top">
                                    <img src="/images/portfolio/portfolio-photo9.webp"
                                         alt="Macbook s projektem na obrazovce"
                                         draggable={false}/>
                                </div>
                                <div className="bottom">
                                    <h3>Vývoj webu EsStudio</h3>
                                    <div className="pills-row">
                                        <h4 className="pill">Vývoj webu</h4>
                                        <h4 className="pill">Redesigner</h4>
                                    </div>
                                    <ButtonSecondary
                                        url="https://www.esstudio.sk/">Prohlédnout</ButtonSecondary>
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