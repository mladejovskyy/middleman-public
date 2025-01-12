"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "./page.css";
import "./utils/CustomScrollbar.css";
import { useState, useEffect } from "react";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import ButtonPrimary from "@/app/_components/ButtonPrimary/ButtonPrimary";
import ButtonTransparent from "@/app/_components/ButtonTransparent/ButtonTransparent";
import HeroReviews from "@/app/_components/HeroReviews/HeroReviews";
import Marquee from "react-fast-marquee";
import ButtonSecondary from "@/app/_components/ButtonSecondary/ButtonSecondary";
import EmblaReviews from "@/app/_components/EmblaReviews/js/EmblaReviews";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Contact from "@/app/_components/Contact/Contact";
import { TextAnimate } from "@/components/ui/text-animate";
import {HeroMarquee} from "@/app/_components/HeroMarquee/HeroMarquee";

const OPTIONS_REVIEWS = { loop: false};
const REVIEWS = [
  {
    "name": "Petr Novotný",
    "text": "Skvělá spolupráce! Webové stránky pro naši firmu nejen vypadají profesionálně, ale také skvěle fungují. Oceňuji rychlou komunikaci a ochotu vyhovět našim požadavkům. Rozhodně doporučuji každému, kdo hledá kvalitní a moderní řešení.",
    "img": "/images/reviews/reviews_photo1.webp"
  },
  {
    "name": "Jana Malá",
    "text": "Výsledek předčil naše očekávání. Web je přehledný, moderní a klienti si ho pochvalují. Vše bylo hotové rychle a bez problémů. Ráda se na vás obrátím i příště!",
    "img": "/images/reviews/reviews_photo2.webp"
  },
  {
    "name": "Marek Dvořák",
    "text": "Díky za nový web! Proces byl hladký, od úvodní konzultace až po spuštění. Ceníme si nejen profesionálního přístupu, ale i cenných rad ohledně online propagace.",
    "img": "/images/reviews/reviews_photo3.webp"
  },
  {
    "name": "Eva Horáková",
    "text": "Webové stránky, které jste nám vytvořili, jsou přesně podle našich představ. Oceňuji, že jste kladli důraz na detaily a přizpůsobili design naší firemní identitě. Doporučuji vás dál!",
    "img": "/images/reviews/reviews_photo4.webp"
  },
  {
    "name": "Tomáš Kučera",
    "text": "Výborná služba! Stránky jsou rychlé, přehledné a vizuálně atraktivní. Nejvíc oceňuji, jak jste pružně reagovali na naše připomínky. Děkujeme za skvělý výsledek.",
    "img": "/images/reviews/reviews_photo5.webp"
  },
  {
    "name": "Lucie Veselá",
    "text": "Mám z nového webu obrovskou radost! Vaše služby hodnotím na jedničku – profesionální přístup, rychlost a preciznost. Naše firma teď působí mnohem důvěryhodněji.",
    "img": "/images/reviews/reviews_photo6.webp"
  },
  {
    "name": "Jan Procházka",
    "text": "Perfektní spolupráce! Už od prvního kontaktu bylo jasné, že jsem v dobrých rukou. Stránky jsou intuitivní a splňují všechny naše požadavky. Děkujeme za skvělou práci!",
    "img": "/images/reviews/reviews_photo7.webp"
  },
  {
    "name": "Adéla Králová",
    "text": "Nový web přinesl naší firmě spoustu pozitivní zpětné vazby. Oceňuji hlavně moderní design a uživatelskou přívětivost. Vše proběhlo hladce a podle plánu. Doporučuji!",
    "img": "/images/reviews/reviews_photo8.webp"
  },
  {
    "name": "Michal Beneš",
    "text": "Velmi kvalitní služba! Stránky byly hotové rychle a profesionálně. Vaše rady ohledně SEO už teď přinášejí výsledky. Moc děkuji za skvělou spolupráci!",
    "img": "/images/reviews/reviews_photo9.webp"
  }
]


export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        return window.innerWidth < 768;
      },
    });
  }, []);

  const scrollToTarget = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = window.innerWidth >= 768 ? 70 : 80;
      const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };



  return (
      <>
        <Navbar/>
        <main>
          <section className="hero" id="hero">
            <div className="container">
              <div className="row">
                <div className="item left">
                  <h1>
                    <TextAnimate animation="slideUp" by="word">Budujeme</TextAnimate>
                    <span className="highlight underline-animated">
                      <TextAnimate animation="slideUp" by="word">webovou identitu</TextAnimate>
                    </span>
                    <TextAnimate animation="slideUp" by="word">pro Váš brand</TextAnimate>
                  </h1>
                  <div className="btns-row">
                    <div data-aos="fade-right" data-aos-delay="0" data-aos-once="true">
                      <ButtonPrimary>Nezávazná konzultace</ButtonPrimary>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="100" data-aos-once="true">
                      <ButtonTransparent target="services">Služby</ButtonTransparent>
                    </div>
                  </div>
                  <HeroReviews/>
                </div>
                <div className="item right">
                  <HeroMarquee/>
                </div>
              </div>
            </div>
            <div className="fast-marquee">
              <Marquee loop={0}>
                <img loading="eager" src="/images/hero/hero-photo1.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo2.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo3.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo9.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo4.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo5.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo8.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo6.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
                <img loading="eager" src="/images/hero/hero-photo7.webp" alt="Náhled projektu" draggable={false}
                     width={290}/>
              </Marquee>
            </div>
          </section>
        </main>
        <section className="services" id="services">
          <div className="container">
            <h3 className="sm">Služby</h3>
            <h2>Naše služby</h2>
            <div className="row">
              <div className="item">
                <div className="top">
                  <img loading="lazy" src="/images/services-seo.svg" alt="hero" draggable={false} width={64}
                       height={64}/>
                  <h3>SEO</h3>
                </div>
                <div className="bottom">
                  <h4>Buďte vidět tam, kde Vás hledají!</h4>
                  <p>
                    Zvyšte návštěvnost svého webu a přeměňte návštěvníky na zákazníky s našimi špičkovými SEO
                    strategiemi.
                  </p>
                </div>
              </div>
              <div className="item primary">
                <div className="top">
                  <img loading="lazy" src="/images/services-web.svg" alt="hero" draggable={false} width={64}
                       height={64}/>
                  <h3>Tvorba webu</h3>
                </div>
                <div className="bottom">
                  <h4>Web, který prodává.</h4>
                  <p>
                    Vytváříme moderní a rychlé weby na míru, které reprezentují vaši značku a podporují růst vašeho
                    podnikání.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="top">
                  <img loading="lazy" src="/images/services-design.svg" alt="hero" draggable={false} width={64}
                       height={64}/>
                  <h3>Web Design</h3>
                </div>
                <div className="bottom">
                  <h4>Design, který zaujme.</h4>
                  <p>
                    Atraktivní a funkční design, který vaši návštěvníci nezapomenou. Transformujeme vaše nápady do
                    vizuálně dokonalé reality.
                  </p>
                </div>
              </div>
            </div>
            <div className="btns-row" data-aos="fade-up" data-aos-delay="0" data-aos-once="true">
              <ButtonPrimary>Nezávazná konzultace</ButtonPrimary>
            </div>
          </div>
        </section>
        <section className="clients" id="clients">
          <Marquee loop={0}>
            <img loading="lazy" src="/images/marquee/marquee-khk.webp" alt="Logo Krajské Hospodářské Komory Střední Čechy" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-redesigner.webp" alt="Logo Redesigner" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-cmelak.webp" alt="Logo Agentury Čmelák" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-khk.webp" alt="Logo Krajské Hospodářské Komory Střední Čechy" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-redesigner.webp" alt="Logo Redesigner" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-cmelak.webp" alt="Logo Agentury Čmelák" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-khk.webp" alt="Logo Krajské Hospodářské Komory Střední Čechy" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-redesigner.webp" alt="Logo Redesigner" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-cmelak.webp" alt="Logo Agentury Čmelák" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-khk.webp" alt="Logo Krajské Hospodářské Komory Střední Čechy" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-redesigner.webp" alt="Logo Redesigner" draggable={false}/>
            <img loading="lazy" src="/images/marquee/marquee-cmelak.webp" alt="Logo Agentury Čmelák" draggable={false}/>
          </Marquee>
        </section>
        <section className="portfolio" id="portfolio">
          <div className="container">
            <h3 className="sm">Portfolio</h3>
            <h2>Co jsme vytvořili</h2>
            <div className="row">
              <div className="item one" data-aos="zoom-in-up" data-aos-delay="0" data-aos-once="true">
                <div className="top">
                  <img src="/images/portfolio/portfolio-photo1.webp" alt="Macbook s projektem na obrazovce"
                       draggable={false}/>
                </div>
                <div className="bottom">
                  <h3>Web pro 3D AI nástroj</h3>
                  <div className="pills-row">
                    <h4 className="pill">Tvorba webu</h4>
                    <h4 className="pill">Na míru</h4>
                    <h4 className="pill">Branding</h4>
                  </div>
                  <ButtonSecondary url="https://morphly-czechskills.vercel.app/">Prohlédnout</ButtonSecondary>
                </div>
              </div>
              <div className="item two" data-aos="zoom-in-up" data-aos-delay="100" data-aos-once="true">
                <div className="top">
                  <img src="/images/portfolio/portfolio-photo2.webp" alt="Macbook s projektem na obrazovce"
                       draggable={false}/>
                </div>
                <div className="bottom">
                  <h3>Web pro herní studio</h3>
                  <div className="pills-row">
                    <h4 className="pill">Tvorba webu</h4>
                    <h4 className="pill">Na míru</h4>
                    <h4 className="pill">Branding</h4>
                  </div>
                  <ButtonSecondary url="https://modul-b.vercel.app/">Prohlédnout</ButtonSecondary>
                </div>
              </div>
              <div className="item three" data-aos="zoom-in-up" data-aos-delay="200" data-aos-once="true">
                <div className="top">
                  <img src="/images/portfolio/portfolio-photo3.webp" alt="Macbook s projektem na obrazovce"
                       draggable={false}/>
                </div>
                <div className="bottom">
                  <h3>Web pro taneční agenturu</h3>
                  <div className="pills-row">
                    <h4 className="pill">Tvorba webu</h4>
                    <h4 className="pill">Na míru</h4>
                  </div>
                  <ButtonSecondary url="https://www.agenturacmelak.cz/">Prohlédnout</ButtonSecondary>
                </div>
              </div>
            </div>
            <div className="btns-row">
              <ButtonTransparent url="/portfolio/">Zobrazit vše</ButtonTransparent>
            </div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="container">
            <div className="row">
              <div className="item left">
                <h3 className="sm">FAQ</h3>
                <h2>Často kladené otázky</h2>
                <div data-aos="fade-right" data-aos-delay="0" data-aos-once="true">
                  <ButtonPrimary>Nezávazná konzultace</ButtonPrimary>
                </div>
              </div>
              <div className="item right">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Kolik stojí nový web?</AccordionTrigger>
                    <AccordionContent>
                      Cena tvorby webových stránek začíná přibližně na 19 990 kč, ale hlavně závisí na vašich
                      požadavcích, funkcionalitě a rozsahu projektu. Připravujeme řešení na míru, proto je vždy lepší
                      domluvit si úvodní konzultaci, kde společně najdeme nejlepší poměr kvality a ceny.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Za jak dlouho budu mít nový web na míru?</AccordionTrigger>
                    <AccordionContent>
                      Doba vytvoření závisí na rozsahu a náročnosti projektu. Běžně se pohybujeme mezi 4 a 8 týdny. Po
                      konzultaci vám připravíme konkrétní časový plán, který bude přizpůsoben vašim potřebám.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Mohu sledovat postup práce na webu?</AccordionTrigger>
                    <AccordionContent>
                      Ano, udržujeme transparentní komunikaci. Pravidelně vás budeme informovat o postupu a můžete se
                      kdykoliv podívat na aktuální stav projektu. Zároveň zapojujeme klienty do procesu testování a
                      ladění webu.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Co když potřebuji změny na webu po dokončení?</AccordionTrigger>
                    <AccordionContent>
                      Žádný problém! Nabízíme dlouhodobou podporu a správu, takže kdykoliv budete potřebovat něco
                      upravit nebo přidat, jsme tady pro vás. Rádi vám zajistíme jak drobné úpravy, tak i větší
                      aktualizace.
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutus" id="aboutus">
          <div className="container">
            <div className="row">
              <div className="item left">
                <h3 className="sm">O nás</h3>
                <h2>O nás</h2>
                <p>
                  Jsme webová agentura Middleman s <b>více než 10 lety zkušeností</b>. Náš tříčlenný tým propojuje
                  kreativitu, moderní technologie a precizní zpracování. Specializujeme se na tvorbu webů, které nejen
                  vypadají skvěle, ale hlavně prodávají.
                </p>
                <p>
                  Věříme v jednoduchost, kvalitu a dlouhodobá řešení. Každý projekt bereme jako partnerství, kde
                  nasloucháme, analyzujeme a tvoříme na míru. Vaše spokojenost je naší vizitkou.
                </p>
                <div className="btns-row" data-aos="fade-right" data-aos-delay="0" data-aos-once="true">
                  <ButtonPrimary>Nezávazná konzultace</ButtonPrimary>
                </div>
              </div>
              <div className="item right">
                <Link href="/tomas/" rel="noopener noreferrer" aria-label="Odkaz na podstránku o Tomášovi"
                      className="card">
                  <h3>Tomáš</h3>
                  <h4>Vývojář</h4>
                  <img loading="lazy" src="/images/pattern-circle.svg" alt="Patern v pozadí" draggable={false}
                       className="pattern"/>
                  <img loading="lazy" src="/images/aboutus-tomas.webp" alt="Foto Tomáše" draggable={false}
                       className="member tomas"/>
                </Link>
                <Link href="/filip/" rel="noopener noreferrer" aria-label="Odkaz na podstránku o Filipovi"
                      className="card">
                  <h3>Filip</h3>
                  <h4>Manažer</h4>
                  <img loading="lazy" src="/images/pattern-circle.svg" alt="Patern v pozadí" draggable={false}
                       className="pattern"/>
                  <img loading="lazy" src="/images/aboutus-filip.webp" alt="Foto Tomáše" draggable={false}
                       className="member filip"/>
                </Link>
                <Link href="/matyas/" rel="noopener noreferrer" aria-label="Odkaz na podstránku o Matyášovi"
                      className="card three">
                  <h3>Matyáš</h3>
                  <h4>Grafik</h4>
                  <img loading="lazy" src="/images/pattern-circle.svg" alt="Patern v pozadí" draggable={false}
                       className="pattern"/>
                  <img loading="lazy" src="/images/aboutus-matyas.webp" alt="Foto Tomáše" draggable={false}
                       className="member matyas"/>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <EmblaReviews slides={REVIEWS} options={OPTIONS_REVIEWS}/>
        <Contact/>
        <Footer/>
      </>
  );
}
