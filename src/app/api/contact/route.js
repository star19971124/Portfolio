import {Resend} from 'resend'
import {NextRequest, NextResponse} from 'next/server';
import EmailTemplate from "@/app/components/emailTemplate";

const resend = new Resend('')

export async function POST(req) {
    try {

        const {name, email, message, website} = await req.json()
        console.log('name server', name)
        console.log('email server', email)
        console.log('msg server', message)
        console.log('website server', website)

        if (website && website.trim() !== '') //used to handle bot mailer
            return NextResponse.json({succcess: false}, {status: 400})

        const {data, error} = await resend.emails.send({
            from: `${name} <contact@tvoosai.dev>`,
            to: ['tvoosai@gmail.com'],
            subject: `Contattato da ${name}`,
            replyTo: email,
            react: <EmailTemplate name={name} email={email} message={message}/>
        })

        if (error)
            return NextResponse.json({success: false, error: error}, {status: 400})
        return NextResponse.json({success: true}, {status: 200})

    } catch (e) {
        console.error(e)
        NextResponse.json({success: false, error: e}, {status: 500})
    }
}