"use client"
import {useEffect, useRef, useState} from "react";

function Timeline() {
    const [state, setState] = useState({height: 0, visible: false});
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(`window height ciao ${window.innerHeight}`);
                if (entry.isIntersecting) {
                    setState({visible: true, height: window.innerHeight *0.95})
                    observer.disconnect()
                }
            },
            {threshold: 0.1}
        )

        if (ref.current) observer.observe(ref.current);
        /*const handleResize = (prevState) => setState({...prevState, height: window.innerHeight - 128});
                handleResize()
                window.addEventListener("resize", handleResize);*/
        return () => {
            if (state.visible)
                observer.disconnect()
            window.removeEventListener("resize", () => {/*handleResize}*/
            })
        }
    }, []);
    console.log(`isVisible: ${state.visible}`)
    return <div ref={ref} className=" bg-base-100">

    </div>
}

export default Timeline