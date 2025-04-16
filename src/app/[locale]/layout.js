import {NextIntlClientProvider, hasLocale} from "next-intl"
import {notFound} from "next/navigation"
import {routing} from "@/i18n/routing"

export const metadata = {
    title: "Tvoosai",
    description: "Tvoosai portfolio",
};

export default async function RootLayout({children, params}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
    )
}
