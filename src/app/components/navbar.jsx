import HamburgerMenu from "@/app/components/icons/hamburgerMenu";
import {useTranslations} from "next-intl";
import LanguageDropdown from "@/app/languageDropdown";
import Image from 'next/image';

function Navbar() {
    const t = useTranslations('navbar')
    return <>
        <div className="navbar bg-base-100 text-neutral-content w-full sticky top-0 left-0 z-20">
            <div className="navbar-start">

                <div className="flex-1">
                    <Image src="/logo.svg" alt="home" width={128} height={32} className="h-4 w-auto" priority />
                </div>
            </div>
            <div className="navbar-end">
                <LanguageDropdown/>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <HamburgerMenu></HamburgerMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        <li><a href="#home">{t('home')}</a></li>
                        <li><a href="#experience">{t('experience')}</a></li>
                        <li><a href="#knowledge">{t('knowledge')}</a></li>
                        <li><a href="#projects">{t('projects')}</a></li>
                        <li><a href="#contact">{t('contact')}</a></li>
                    </ul>
                </div>
                <div className="lg:flex hidden  flex-none ">
                    <ul className="menu menu-horizontal px-4">
                        <li><a href="#home" className="btn btn-ghost text-lg">{t('home')}</a></li>
                        <li><a href="#experience" className="btn btn-ghost text-lg">{t('experience')}</a></li>
                        <li><a href="#knowledge" className="btn btn-ghost text-lg">{t('knowledge')}</a></li>
                        <li><a href="#projects" className="btn btn-ghost text-lg">{t('projects')}</a> </li>
                        <li><a href="#contact" className="btn btn-ghost text-lg">{t('contact')}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </>

}

export default Navbar