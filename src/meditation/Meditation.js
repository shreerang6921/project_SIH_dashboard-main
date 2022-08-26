import React from "react";
import "./Medi.css";
import Medi from "../images/Medi.jpg";
import { FaPlayCircle } from "react-icons/fa";
import Play from "./Play";

import { Link } from "react-router-dom";


export default function Meditation() {
    return (
        <>
            <div id="Medi">
                <div className="M-head">Guided Meditation</div>
                <div className="medi-container">
                    {/* <div className="text-container"> */}
                        <div className="M-body"><p> Practicing mindfulness techniques before attention demanding tasks results in better focus, comprehension and awareness. We recommend you try these instructions for a fulfulling meditation seesion. </p><b/>
                        1. Prefer a calm environment and sit in a comfortable position. <b/>
                        2. Relax your muscles and eventually your entire body. <b/>
                        3. Focus on your breath. Notice how your breath flows.<b/>
                        4. When your attention wanders, as it will, bring your attention back to your breathing.<b/>
                        5. Notice any stray thoughts but don't dwell on them. Simply let the thoughts pass.<b/>
                        6. Feel how calm and gentle your breathing is, and how relaxed your body feels. <b/>
                        7. Now its time to gently reawaken your body and mind.<b/>
                    {/* </div> */}
                    
                        </div>
                    
                    <div className="M-image"><img src={Medi}></img></div>
                    
                    
            </div>
            <div className="medi-link">
                        <div className="play1"><Link to="/meditate"><FaPlayCircle></FaPlayCircle></Link></div>
                        <div className="M-text">Start Meditating</div>
                        </div>
                    
        
        </div>
        </>
    )
}