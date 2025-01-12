"use client";
import './Contact.css';
import {useState} from "react";
import Link from "next/link";
import { toast } from "sonner";
import {Toaster} from "@/components/ui/sonner";

export default function Contact() {
// CONTACT START

    const [result, setResult] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setResult("Odesílání....");
        const formData = new FormData(e.target);

        if (formData.get("hiddenField")) {
            setResult("Bot detected. Form submission rejected.");
            toast("Bot detected. Form submission rejected.");
            return;
        }

        // Basic client-side input validation
        const name = formData.get("name").trim();
        const contact = formData.get("contact").trim();
        const message = formData.get("message").trim();

        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setResult(data.message);
            toast(data.message);
            if (data.message === "Formulář úspěšně odeslán. Budeme se vám co nejdřívě věnovat.") {
                e.target.reset();
            }
        } catch (error) {
            console.error("Error:", error);
            const errorMessage = "Při odesílání formuláře nastala chyba. Prosím zkuste to znovu později.";
            setResult(errorMessage);
            toast(errorMessage);
        }
    };

    // END OF CONTACT

    return (
        <>
        <section className="contact bg" id="contact">
            <div className="container">
                <h3 className="sm">Kontakt</h3>
                <h2>Promluvme si o vašem projektu</h2>
                <div className="row">
                    <div className="item left">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Jméno a příjmení"
                                    required
                                />
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="Tel. číslo/Email"
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="hiddenField"
                                className="hidden-field"
                                aria-hidden="true"
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            <div className="form-control">
                  <textarea
                      name="message"
                      placeholder="Měl bych zájem o prezenční web..."
                      required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary-basic">
                                    Odeslat
                                </button>
                                <span>
                    Odesláním formuláře souhlasíte se
                    <Link
                        className="form-link"
                        aria-label="Odkaz na stránku se zásady o zpracování osobních údajů"
                        rel="noopener noreferrer"
                        href="/zpracovani-osobnich-udaju">
                      zpracováním osobních údajů
                    </Link>
                  </span>
                            </div>
                        </form>

                    </div>

                    <div className="item right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11569.48200828299!2d14.443389646917067!3d50.095519480602654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a336e7f09d%3A0x2600af105c20fbf1!2sKarl%C3%ADn%2C%20Prague%208!5e0!3m2!1sen!2scz!4v1736116921821!5m2!1sen!2scz"
                            className="map" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="links">
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
                                <span>middleman.web@protonmail.com</span>
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
                                <span>@middleman.web</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Toaster />
    </>
    )
}