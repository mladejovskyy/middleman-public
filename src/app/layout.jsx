import { Nunito_Sans } from "next/font/google";

import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], style: ["normal", "italic"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--nunitosans" });

export const metadata = {
    title: "Middleman | Budujeme webovou identitu pro váš brand",
    description: "Tvoříme moderní weby a optimalizujeme online přítomnost. Middleman přináší špičkový web design, SEO a tvorbu webů na míru.",
    keywords: "SEO, web design, tvorba webových stránek, webová identita, branding, optimalizace webu, Middleman",
    author: "Middleman",
    og: {
        title: "Middleman | Budujeme webovou identitu pro váš brand",
        description: "Specializujeme se na tvorbu webů, design a optimalizaci, které posunou váš brand na další úroveň. Vyzkoušejte nezávaznou konzultaci s našimi experty.",
        url: "https://www.middleman.cz",
        image: "https://www.middleman.cz/images/og-image.webp"
    }
}


export default function RootLayout({children}) {
    return (
        <html lang="cs" className={[nunitoSans.variable].join(" ")} translate="no" suppressHydrationWarning={true}>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={metadata.description}/>
            <meta name="keywords" content={metadata.keywords}/>
            <meta name="author" content={metadata.author}/>
            <meta property="og:title" content={metadata.og.title}/>
            <meta property="og:description" content={metadata.og.description}/>
            <meta property="og:url" content={metadata.og.url}/>
            <meta property="og:image" content={metadata.og.image}/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={metadata.og.title}/>
            <meta name="twitter:description" content={metadata.og.description}/>
            <meta name="twitter:image" content={metadata.og.image}/>
            <link rel="canonical" href="https://www.mladejovsky.cz"/>
            <link rel="icon" href="/favicon.ico"/>
            <title>{metadata.title}</title>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}