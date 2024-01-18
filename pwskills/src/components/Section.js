import React from "react";

function Section(){
    return(
        <>
        <div className="md:flex px-16 pt-8 ">
        <div className="pt-24">
            <div className="text-4xl font-bold text-slate-800 text-center md:text-left">
                <h1 className="inline">Upscalling Made</h1>
                <span className="text-red-400">&lt;PRACTICAL|&gt;</span>
                <h1>With PW Skills</h1>
            </div>
            <div className="pt-4 text-lg text-slate-800 font-thin text-center md:w-3/4 md:text-left">
            <p>PW Skills is your one-stop-shop for upscaling. Get maximum value for time
            and resources you invest, with job-ready courses & high-technology,
            available at the lowest cost.</p>
            </div>
            <form className="pt-4 text-center md:text-left">
            <button className="bg-red-400 w-52 h-12  text-white rounded-md " type="submit">Explore Courses</button>
            </form>
            </div>  
            <div>
                <img src="https://pwskills.com/images/homePage/hero-bg.png" alt="hero" className="block "/>
            </div>
            </div>
        </>
    )
};

export default Section;