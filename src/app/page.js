import Navbar from "@/app/components/navbar";


export default function Home() {
    return (<div className="flex flex-col items-center justify-center">
        <Navbar></Navbar>

        <section id="home" className="w-screen h-screen ">

            <div className=" relative w-screen h-[93%] flex items-center justify-center z-10">
                <h1>HOME</h1>
            </div>
        </section>
        <div className="flex-grow main-body">
            <section id="experience"
                     className="min-h-screen flex">
                <h1>EXPERIENCE</h1></section>
                <section id="knowledge" className="min-h-screen flex items-center justify-center  ">
                    <h1>KNOWLEDGE</h1></section>
                <section id="projects"
                         className="min-h-screen flex items-center justify-center">
                    <h1>PROJECTS</h1></section>
            </div>
            <section id="contact" className="w-screen mt-60">
                <h1>CONTACT</h1></section>

    </div>);
}
