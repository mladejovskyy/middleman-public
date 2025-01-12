"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "./page.css";
import "./not-found.css";
import "./utils/CustomScrollbar.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import Link from "next/link";
import { useEffect } from "react";
import ButtonPrimary from "@/app/_components/ButtonPrimary/ButtonPrimary";

export default function ErrorPage() {
  useEffect(() => {
    //load animations
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="container not-found">
          <div>
            <h1>ERROR 404</h1>
            <h3>
              Stránka, kterou hledáte, pravděpodobně neexistuje nebo byla
              smazána.
            </h3>
              <ButtonPrimary url="../">Vrátit se zpět</ButtonPrimary>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
