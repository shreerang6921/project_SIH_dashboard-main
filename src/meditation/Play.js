import React from "react";
import "./styles/Play.css";
import Calm from "./images/Calm.gif";
import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";
export default function Play()
{
    return(
        <>
        
        <div className="MusicPlayer">
        <AudioPlayer tracks={tracks} />
        </div>
        </>
    )
}