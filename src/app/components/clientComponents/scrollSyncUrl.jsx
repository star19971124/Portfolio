"use client"
import {useEffect, useRef} from "react"

const sectionTitles = {
    home: 'Tvoosai',
    experience: 'Experience — Tvoosai',
    knowledge: 'Knowledge — Tvoosai',
    projects: 'Projects — Tvoosai',
    contact: 'Contact — Tvoosai'
}

function ScrollSyncUrl() {
    const current = useRef(null)
    useEffect(() => {
        console.log('hello motherfucker')
        const sections = document.querySelectorAll('section[id]')
        sections.forEach(s => console.log(`sections are ${s.getAttribute('id')}`))

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log('entry', entry)
                console.log('entry id', entry.target.getAttribute('id'))
                if (!entry.isIntersecting) return
                const id = entry.target.getAttribute('id')
                if (id && id !== current.current) {
                    const newUrl = id !== 'home' ? `/#${id}` : '/'
                    history.replaceState(null, '', newUrl)
                    document.title = sectionTitles[id] || 'Tvoosai'
                    current.current = id
                }
            })
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60% 0px',
        })
        sections.forEach(section => observer.observe(section))
        return () => sections.forEach(section => observer.unobserve(section))
    }, [])
    return null
}

export default ScrollSyncUrl