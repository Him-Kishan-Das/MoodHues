import React from "react";
import './Player.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Sinaki from "../Home/assets/sinaki sinaki.jpg";


const Player = () =>{
    return(
        <>
            <div className="player">
                <div className="now-playing-song">
                    <div className="now-playing-song-image">
                        <img src={Sinaki} alt="" />
                    </div>
                    <div className="now-playing-song-details">
                        <h4 className="now-playing-song-title">
                            Sinaki Sinaki
                        </h4>
                        <p className="now-playing-song-artist">
                            Deeplina Deka, Sannidhya Bhuyan
                        </p>
                    </div>
                </div>
                <AudioPlayer
                    className="audio-player"
                    autoPlay
                    src="http://example.com/audio.mp3"
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
            </div>
        </>
    )
}

export default Player;