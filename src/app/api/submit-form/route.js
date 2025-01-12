// app/api/submit-form/route.js
import {NextResponse} from 'next/server';

export async function POST(request) {
    const formData = await request.formData();
    const hiddenField = formData.get('hiddenField');

    if (hiddenField) {
        return NextResponse.json({message: 'Bot detected. Form submission rejected.'});
    }

    const accessKey = process.env.ACCESS_KEY;

    formData.append('access_key', accessKey);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            return NextResponse.json({message: 'Formulář úspěšně odeslán. Budeme se vám co nejdřívě věnovat.'});
        } else {
            return NextResponse.json({message: data.message});
        }
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({message: 'Při odesílání formuláře nastala chyba. Prosím zkuste to znovu později.'});
    }
}
