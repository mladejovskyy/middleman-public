'use client'
import Navbar from "../_components/Navbar/Navbar";
import Footer from '../_components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../globals.css';
import '../page.css';
import './page.css';
import '../utils/CustomScrollbar.css';
import {useEffect} from "react";

export default function ochranaOsobnichUdaju() {
    useEffect(() => {
        //load animations
        AOS.init();
    }, [])

    return (
        <>
            <Navbar/>
            <section className="ochrana" id="ochrana">
                <div className="container">
                    <h1>zásady o zpracování osobních údajů</h1>
                </div>
            </section>
            <section className='content'>
                <div className="container">
                    <div>
                        <h2>1. Shromažďované údaje</h2>
                        <p>Shromažďujeme následující osobní údaje:</p>
                        <ul>
                            <li>Jméno – pro identifikaci potenciálního zákazníka.</li>
                            <li>E-mailová adresa – pro zpětný kontakt a komunikaci s potenciálním zákazníkem.</li>
                            <li>Telefonní číslo – jako alternativa k e-mailu pro rychlejší komunikaci.</li>
                            <li>Zpráva – obsahuje další informace, které potenciální zákazník dobrovolně poskytne.</li>
                        </ul>
                    </div>

                    <div>
                        <h2>2. Účel zpracování osobních údajů</h2>
                        <p>Osobní údaje jsou zpracovávány za účelem:</p>
                        <ul>
                            <li>Řešení zakázky – zpracování dotazů a požadavků potenciálních zákazníků a navázání
                                kontaktu pro účely poskytnutí služby nebo nabídky.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>3. Právní základ pro zpracování údajů</h2>
                        <p>Právním základem pro zpracování vašich osobních údajů je:</p>
                        <ul>
                            <li>Souhlas subjektu údajů – Odesláním formuláře dáváte souhlas ke zpracování vašich
                                osobních údajů pro výše uvedené účely.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>4. Uchovávání osobních údajů</h2>
                        <p>Osobní údaje budou uchovávány po dobu nezbytnou k dosažení účelu, pro který byly
                            shromážděny:</p>
                        <ul>
                            <li>Doba uchování – Vaše osobní údaje budou uchovávány po dobu nezbytnou k vyřízení vaší
                                zakázky, případně do odvolání vašeho souhlasu.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>5. Práva subjektů údajů</h2>
                        <p>Subjekty údajů mají podle GDPR následující práva:</p>
                        <ul>
                            <li>Právo na přístup k osobním údajům – Můžete požádat o kopii osobních údajů, které o vás
                                uchováváme.
                            </li>
                            <li>Právo na opravu nepřesných údajů – Pokud zjistíte, že údaje, které o vás máme, jsou
                                nepřesné, máte právo požádat o jejich opravu.
                            </li>
                            <li>Právo na výmaz osobních údajů ("právo být zapomenut") – V určitých případech máte právo
                                požádat o výmaz vašich osobních údajů.
                            </li>
                            <li>Právo na omezení zpracování – Můžete požádat o omezení zpracování vašich osobních údajů
                                v určitých situacích.
                            </li>
                            <li>Právo na přenositelnost údajů – Máte právo získat své osobní údaje v strukturovaném,
                                běžně používaném a strojově čitelném formátu a předat je jinému správci.
                            </li>
                            <li>Právo vznést námitku proti zpracování – Pokud se domníváte, že zpracování vašich údajů
                                není oprávněné, máte právo vznést námitku.
                            </li>
                        </ul>
                        <p>V případě, že si přejete uplatnit některé z výše uvedených práv, můžete správce kontaktovat
                            prostřednictvím e-mailu: <strong><a
                                href="mailto:tomasmladejovsky@gmail.com">tomasmladejovsky@gmail.com</a></strong>.</p>
                    </div>
                </div>

            </section>
            <Footer/>

        </>
    )
}