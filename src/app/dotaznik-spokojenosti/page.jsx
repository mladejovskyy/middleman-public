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

    function handleDotaznikSubmit(e) {
        e.preventDefault();
        console.log('dotaznik submitted');
    }

    return (
        <>
            <Navbar/>
            <section className="dotaznik" id="dotaznik">
                <div className="container">
                    <div className="row">
                        <h1>Dotazník spokojenosti</h1>
                        <form onSubmit={handleDotaznikSubmit}>
                            <div className="form-control">
                                <input type="text" name="jmeno" id="jmeno" placeholder="Jméno"/>
                                <input type="text" name="prijmeni" id="prijmeni" placeholder="Příjmení"/>
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" id="phone" placeholder="Tel. číslo"/>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <textarea name="message" id="" cols="30" rows="3"
                                      placeholder="Co se Vám nejvíce na webu líbilo?">
                            </textarea>
                            <div className="form-control">
                                <input type="number" name="age" id="age" placeholder="Věk"/>
                                <input type="text" name="changes" id="changes" placeholder="Co byste na webu změnili?"/>
                            </div>
                            <div className="form-control">
                                <div className="form-group">
                                    <label htmlFor="rating">Kolik hvězdiček byste našemu webu dali?</label>
                                    <div id="rating">
                                        <label>
                                            <input type="radio" name="rating" value="1"/> 1
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="2"/> 2
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="3"/> 3
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="4"/> 4
                                        </label>
                                        <label>
                                            <input type="radio" name="rating" value="5"/> 5
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender">Jaké je vaše pohlavní?</label>
                                    <div id="gender">
                                        <label>
                                            <input type="radio" name="gender" value="male"/> Muž
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="female"/> Žena
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="else"/> Nechci uvádět
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

        </>
    )
}