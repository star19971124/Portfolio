import {Resend} from 'resend'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' })
//const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    try {
        //console.log('API Key:', process.env.RESEND_API_KEY);
        dotenv.config({ path: '.env.local' })
        console.log('ci sono? ',process.env)
        console.log(process.env)
        const {name, email, message} = await req.json()
        console.log('name server', name)
        console.log('email server', email)
        console.log('msg server', message)
        /*const {data, error} = await resend.emails.send({
            from: ' <contact@tvoosai.dev>',
            to: ['tvoosai@gmail.com'],
            subject: `Contattato da ${name}`,
            replyTo: email,
            html: `<p><strong>Email:</strong> ${email}</p><p><strong>Messaggio:</strong><br>${message}</p>`,
        })

        if (error)
            return Response.json({success: false, error: error}, {status: 400})

        Response.json({success: true, data})*/

    } catch (error) {
        console.error('Error sending mail', error)
        return Response.json({success: false, error: error.message}, {status: 500})
    }
}