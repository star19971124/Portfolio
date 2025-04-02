"use client"

import {useEffect, useRef, cloneElement} from "react";

function AnimatedProgress({children}) {
    const progressRef = useRef(null)
    //   console.log(`IVVALORE fuori ${value}`)
    useEffect(() => {
        const progressElement = progressRef.current;
        if (!progressElement) return;
        progressElement.value = 0;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Aggiungi la classe per abilitare la transizione
                    entry.target.classList.add('animate')
                    // Piccolo timeout per assicurarci che la transizione sia attiva
                    requestAnimationFrame(() => {
                        // console.log(`IVVALORE ${value}`)
                        // Imposta il valore finale
                        entry.target.value = value
                    });
                    return
                }
                entry.target.classList.remove('animate')
                entry.target.setAttribute('value', '0')
            },
            {
                threshold: 0.5,
                rootMargin: '0px'
            }
        );

        observer.observe(progressElement);

        return () => observer.disconnect();
    }, [])
    return cloneElement(children, progressRef)
}

export default AnimatedProgress