'use client'
import Navbar from "../_components/Navbar/Navbar";
import Footer from '../_components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../globals.css';
import '../page.css';
import './page.css';
import '../utils/CustomScrollbar.css';
import {useEffect, useState} from "react";
import { toast } from "sonner";
import {Toaster} from "@/components/ui/sonner";

export default function ochranaOsobnichUdaju() {
    useEffect(() => {
        //load animations
        AOS.init();
    }, [])

    const [result, setResult] = useState(null);

    const handleDotaznikSubmit = async (e) => {
        e.preventDefault();
        setResult("Odesílání....");
        const formData = new FormData(e.target);

        // Basic client-side input validation
        const name = formData.get("jmeno").trim();
        const surname = formData.get("prijmeni").trim();
        const phone = formData.get("phone").trim();
        const email = formData.get("email").trim();
        const message = formData.get("message").trim();
        const age = formData.get("age").trim();
        const changes = formData.get("changes").trim();
        const rating = formData.get("rating");
        const gender = formData.get("gender");

        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setResult(data.message);
            toast(data.message);
            if (data.message === "Formulář úspěšně odeslán. Děkujeme za vaši zpětnou vazbu.") {
                e.target.reset();
            }
        } catch (error) {
            console.error("Error:", error);
            const errorMessage = "Při odesílání formuláře nastala chyba. Prosím zkuste to znovu později.";
            setResult(errorMessage);
            toast(errorMessage);
        }
    };

    return (
        <>
            <Navbar/>
            <section className="dotaznik" id="dotaznik">
                <div className="container">
                    <div className="row">
                        <h1>Dotazník spokojenosti</h1>
                        <form onSubmit={handleDotaznikSubmit}>
                            <div className="form-control">
                                <input type="text" name="jmeno" id="jmeno" placeholder="Jméno" required/>
                                <input type="text" name="prijmeni" id="prijmeni" placeholder="Příjmení" required/>
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" id="phone" placeholder="Tel. číslo" required/>
                                <input type="email" name="email" id="email" placeholder="Email" required/>
                            </div>
                            <textarea name="message" id="message" cols="30" rows="3"
                                      placeholder="Co se Vám nejvíce na webu líbilo?" required>
                            </textarea>
                            <div className="form-control">
                                <input type="number" name="age" id="age" placeholder="Věk" required/>
                                <input type="text" name="changes" id="changes" placeholder="Co byste na webu změnili?" required/>
                            </div>
                            <div className="form-control">
                                <div className="form-group">
                                    <label htmlFor="rating">Kolik hvězdiček byste našemu webu dali?</label>
                                    <div id="rating">
                                        <label>
                                            <input type="radio" name="rating" value="1" required/> 1
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="2" required/> 2
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="3" required/> 3
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="4" required/> 4
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="5" required/> 5
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender">Jaké je vaše pohlavní?</label>
                                    <div id="gender">
                                        <label>
                                            <input type="radio" name="gender" value="male" required/> Muž
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="female" required/> Žena
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="else" required/> Nechci uvádět
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary-basic">Odeslat</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
            <Toaster />
        </>
    )
}