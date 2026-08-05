import React from "react";
import Resume from "../assets/ResumeRizalSetioAji.pdf"
import Button from "../components/buttons/Button";
import { Store } from "lucide-react";


const Hero = () => {
    return (
        <>
            <section className="Portofolio h-sccreen w-full flex flex-col text-center" id="home">
                <div className="xss:mx-0 xss:my-5 xss:p-0 lg:mx-10 lg:p-0 lg:my-0 xss:shadow-none xss:rounded-none lg:shadow-lg lg:rounded-lg bg-slate-300/30 flex flex-col">
                    <h1  className="xss:pt-4 lg:px-5 xss:text-3xl lg:text-5xl font-mono font-bold tracking-wide transition delay-200 ease-in-out hover:scale-110 duration-300">Hello, I'am 
                    </h1>
                    <h1 className="xss:text-5xl lg:text-8xl xss:p-1 lg:p-5 transition delay-200 ease-in-out hover:scale-110 duration-300 bg-gradient-to-r from-pink-600 to-violet-800 hover:from-violet-800 hover:to-pink-600 bg-clip-text text-transparent"> Rizal Setio Aji</h1>
                    <h2 className="xss:text-lg lg:text-3xl xss:m-2 font-sans font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 animate-pulse">QA Tester   
                    </h2>
                    <div className="flex flex-col">
                        <div className="DescCard__ flex flex-col">
                            <p className="xss:px-4 text-lg font-sans">This is my web Portfolio. 
                                <br />I have -+ 4 Years of Experience in QA Manual. 
                                <br />I Started My Career From QA Manual PT Palu Bisnis Servis 
                                    And PT Sharing Vision Indonesia.
                                <br />I am So Glad with my work, because my project is Very Useful for others.
                            </p>
                        </div>
                        <div className="flex xss:m-10 justify-center gap-2">
                            {/* <button className="border justify-center bg-slate-100 shadow-lg shadow-blue-500/50 w-44 rounded-lg border-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex py-2">
                                <a className="font-mono text-center p-1" href={Resume} download>
                                        Resume
                                </a>
                             </button> */}
                             <Button className="border justify-center bg-slate-100 shadow-lg shadow-blue-500/50 w-44 rounded-lg border-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex py-2">
                                <a className="font-mono text-center p-1" href={Resume} download>
                                        Resume
                                </a>
                             </Button>
                            <Button variant="secondary" size="lg" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <Store />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}


export default Hero;