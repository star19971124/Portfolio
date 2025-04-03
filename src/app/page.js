import Navbar from "@/app/components/navbar";
import Landing from "@/app/components/landing";
import Experience from "@/app/components/experience/experience";
import Knowledge from "@/app/components/knowledge/knowledge";

export default function Home() {
    return <div className="flex flex-col items-center justify-center">
        <Navbar></Navbar>
        <section id="home" className="w-screen h-screen ">
            <div className=" relative w-screen h-[93%] flex items-center justify-center z-10">
                <Landing></Landing>
            </div>
        </section>
        <div className="main-body flex-grow ">
            <section id="experience"
                     className="min-h-screen w-full scroll-mt-28">
                <Experience></Experience></section>
            <section id="knowledge" className="min-h-screen flex items-center justify-center  ">
                <Knowledge></Knowledge></section>
            <section id="projects"
                     className="min-h-screen flex items-center justify-center">
                <h1>PROJECTS</h1></section>
        </div>
        <section id="contact" className="w-screen mt-60">
            <h1>CONTACT</h1></section>

    </div>
}
