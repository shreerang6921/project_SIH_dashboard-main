import React from "react";
import "./styles/Medi.css";
import Medi from "./images/Medi.jpg";
import { FaPlayCircle } from "react-icons/fa";
import Play from "./Play";
import Calm from "./images/Calm.gif"


export default function Meditation() {
    return (
        <>
            <div id="Medi">
                <div className="M-head">Guided Meditation</div>
                <div className="medi-container">
                    {/* <div className="text-container"> */}
                        <div className="M-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus.
                            Congue nisi vitae suscipit tellus mauris. Erat velit scelerisque in dictum non consectetur a erat. Sit amet justo donec enim diam vulputate ut pharetra. Ut etiam sit amet nisl purus in mollis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
                            Ac turpis egestas sed tempus urna et. Cursus vitae congue mauris rhoncus. Eget aliquet nibh praesent tristique magna sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec.
                            Hendrerit dolor magna eget est. Consequat ac felis donec et odio pellentesque diam. Ut consequat semper viverra.
                    {/* </div> */}
                    
                        </div>
                    
                    <div className="M-image"><img src={Medi}></img></div>
                    
                    
            </div>
            <div className="medi-link">
                        <div className="play1"><a href="./Play"><FaPlayCircle></FaPlayCircle></a></div>
                        <div className="M-text">Start Meditating</div>
                        </div>
                    
        
        </div>
        </>
    )
}