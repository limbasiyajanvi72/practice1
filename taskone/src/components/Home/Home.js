import React from "react";
import './home.css';
import demo from '../image/demo-image.jpg';


function Home(){
    return(
        <>
        <div className="bg-style">
        <div className="heading-style">Bring <span className="underline">clarity</span> to your team</div>
        <div className="heading-des">
            Site a modern knowledge base that drives action with structured docs,thoughtful<br/> collaboration and confident decision-making.
        </div>
        <div className="btn-input-style">
        <input type="text" placeholder="name@company.com" className="input-style"/>
        <button className="button-style">Start for free</button>
        </div>
        <div className="img-pos">
        <img src={demo} className="img-style"></img>
        </div>
        <div className="card-container">
        <div className="card-pos">
        <div className="card-style">
            <img className="round-img"/>
            <div>
                <h3 className="head">Georges made some chnages</h3>
                <p className="text-style">The abnormal guide to remote</p>
            </div>
        </div>    
        </div>
        <div className="card-pos">
        <div className="card-style-two">
        </div>    
        </div>
        <div className="card-pos">
        <div className="card-style-three">
        </div>    
        </div>
        </div>

        <div className="tagline-style">200,000+ teams have found focus with slite</div>
{/*logo section */}
        <div className="logo-section">
            <span>logo 1</span>
            <span>logo 2</span>
            <span>logo 3</span>
            <span>logo 4</span>
            <span>logo 5</span>
            <span>logo 6</span>
        </div>
{/*image section */}
        <div>
            <div className="logo-section">
            <h2>A home for all of your knowlwdge</h2>
            <br/>
            <p>Project,knowledge base,process=bring all your work to life in Docs.</p>
            </div>
        </div>
        </div>
        </>
    );
}

export default Home;
