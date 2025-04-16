"use client"

import {Link, usePathname} from "@/i18n/navigation";
import ItFlag from "@/app/components/icons/ItFlag";
import EnFlag from "@/app/components/icons/EnFlag";
import DeFlag from "@/app/components/icons/DeFlag";
import {useLocale} from "next-intl";

function LanguageDropdown() {

    const pathname = usePathname()
    const locale = useLocale()

    return <div className="dropdown dropwon-start ml-2">
        <div tabIndex={0} role="button" className="btn btn-sm btn-ghost">
            {currentLanguage(locale)}
        </div>
        <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-28 text-sm"
        >
            <li><Link locale="en" href={pathname}><EnFlag/><span className="hidden lg:inline">EN</span></Link></li>
            <li><Link locale="it" href={pathname}><ItFlag/><span className="hidden lg:inline">IT</span></Link></li>
            <li><Link locale="de" href={pathname}><DeFlag/><span className="hidden lg:inline">DE</span></Link></li>
        </ul>
    </div>
}

function currentLanguage(locale) {
    switch (locale) {
        case 'en':
            return <><EnFlag/><span className="hidden lg:inline uppercase">{locale}</span></>
        case 'it':
            return <><ItFlag/><span className="hidden lg:inline uppercase">{locale}</span></>
        case 'de':
            return <><DeFlag/><span className="hidden lg:inline uppercase">{locale}</span></>
        default:
            return <><EnFlag/><span className="hidden lg:inline uppercase">{locale}</span></>
    }
}

export default LanguageDropdown