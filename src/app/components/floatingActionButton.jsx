"use client"

import {useEffect, useState} from "react";

function FloatingActionButton() {
    const [isButtonVisible, setIsButtonVisible] = useState(false)
    useEffect(() => {

        window.addEventListener('scroll', () => {
            const homeSection = document.getElementById("home")
            const homeHeight = homeSection ? homeSection.offsetHeight : 0
            setIsButtonVisible(window.scrollY > homeHeight * 0.35)
        })
    })
    return <div className={`fixed bottom-0 right-0 mb-6 mr-6 transition-all duration-300  ${isButtonVisible ? 'opacity-100 scale-100': 'opacity-0 scale-0 pointer-events-none'}`}>
        <a href="#home">
            <button className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                </svg>
            </button>
        </a>
    </div>
}

export default FloatingActionButton